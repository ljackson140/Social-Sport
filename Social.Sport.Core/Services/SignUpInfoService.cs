using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Social.Sport.API.Helper;
using Social.Sport.Core.Entities;
using Social.Sport.Core.Interfaces.Data;
using Social.Sport.Core.Interfaces.Services;
using static Social.Sport.Core.Constants.ConstantConfig;

namespace Social.Sport.Core.Services
{
    public class SignUpInfoService : BaseService, ISignUpInfoService
    {
        public SignUpInfoService(IUnitOfWork unitOfWork, ILogger<BaseService> logger) : base(unitOfWork, logger)
        {
        }

        public async Task<Result<User>> SignUpAsync(User user, CancellationToken cancellationToken)
        {
            // Validate input
            if (string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password))
            {
                return new ErrorResult<User>("Email and password are required.");
            }

            // Check if user already exists
            var userExist = await _unitOfWork.Users.Get()
                .FirstOrDefaultAsync(x => x.Email == user.Email, cancellationToken);

            if (userExist != null)
            {
                return new ErrorResult<User>(ValidationMessages.MessageAccountExist);
            }

            try
            {
                // Hash password securely
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                user.IsVerified = false;
                user.isActive = UserStatus.Active;
                user.CreatedDate = DateTime.UtcNow;
                user.UpdatedDate = DateTime.UtcNow;

                 _unitOfWork.Users.AddAsync(user, cancellationToken);
                await _unitOfWork.SaveChanges();

                return new SuccessResult<User>(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during user signup");
                return new ErrorResult<User>("An error occurred during signup. Please try again.");
            }
        }

        public async Task<Result<User>> UnitUserAsync(Guid userId, CancellationToken cancellationToken)
        {
            var users = await _unitOfWork.Users.Get().ToListAsync(cancellationToken);
            var user = users.FirstOrDefault(x => x.Id == userId);

            if (user == null)
            {
                return new ErrorResult<User>("User not found.");
            }

            return new SuccessResult<User>(user);
        }
    }
}

