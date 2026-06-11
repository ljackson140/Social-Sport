
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Social.Sport.API.Helper;
using Social.Sport.Core.Entities.NotMapped;
using Social.Sport.Core.Interfaces.Data;
using Social.Sport.Core.Interfaces.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Social.Sport.Core.Services
{
    public class AuthenticateTokenService : BaseService, IAuthenticateTokenService
    {
        private readonly IConfiguration _configuration;
        private const int TokenExpirationHours = 1;

        public AuthenticateTokenService(IConfiguration configuration, IUnitOfWork unitOfWork, ILogger<BaseService> logger) : base(unitOfWork, logger) 
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public async Task<Result<UserAuthenticationTicket>> AuthenticateAsync(string email, string password, CancellationToken cancellationToken)
        {
            return await LoginAsync(email, password, cancellationToken);
        }

        public async Task<Result<UserAuthenticationTicket>> LoginAsync(string email, string password, CancellationToken cancellationToken)
        {
            // Validate inputs
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
            {
                return new ErrorResult<UserAuthenticationTicket>("Email and password are required.");
            }

            var secretkey = _configuration[Constants.ConstantConfig.AuthenticateTokenMessages.SecretKey];

            if (string.IsNullOrWhiteSpace(secretkey))
            {
                _logger.LogError("JWT secret key is not configured");
                return new ErrorResult<UserAuthenticationTicket>("Authentication service is misconfigured.");
            }

            // Find user by email
            var user = await _unitOfWork.Users.Get()
                .FirstOrDefaultAsync(x => x.Email == email, cancellationToken);

            if (user == null)
            {
                return new ErrorResult<UserAuthenticationTicket>("Invalid email or password.");
            }

            // Verify password using BCrypt
            if (!BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return new ErrorResult<UserAuthenticationTicket>("Invalid email or password.");
            }

            // Check if user is active
            if (user.isActive != UserStatus.Active)
            {
                return new ErrorResult<UserAuthenticationTicket>("User account is not active.");
            }

            try
            {
                // Generate JWT token
                var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretkey));
                var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var expiresAt = DateTime.UtcNow.AddHours(TokenExpirationHours);

                var claimsForToken = new List<Claim>
                {
                    new Claim(Constants.ConstantConfig.AuthenticateTokenMessages.userId, user.Id.ToString()),
                    new Claim(Constants.ConstantConfig.AuthenticateTokenMessages.userName, user.FirstName),
                    new Claim(Constants.ConstantConfig.AuthenticateTokenMessages.userFamilyName, user.LastName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, user.Role.ToString())
                };

                var jwtSecurityToken = new JwtSecurityToken(
                    _configuration[Constants.ConstantConfig.AuthenticateTokenMessages.Issuer],
                    _configuration[Constants.ConstantConfig.AuthenticateTokenMessages.Audience],
                    claimsForToken,
                    DateTime.UtcNow,
                    expiresAt,
                    signingCredentials);

                var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

                var response = new UserAuthenticationTicket 
                { 
                    AccessToken = token, 
                    User = user,
                    ExpiresAt = expiresAt
                };

                return new SuccessResult<UserAuthenticationTicket>(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating JWT token");
                return new ErrorResult<UserAuthenticationTicket>("An error occurred during authentication.");
            }
        }
    }
}
