using Microsoft.AspNetCore.Http;
using Social.Sport.Core.Interfaces.Services;
using System.Security.Claims;
using static Social.Sport.Core.Constants.ConstantConfig;

namespace Social.Sport.Core.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        private ClaimsPrincipal? User => _httpContextAccessor?.HttpContext?.User;

        public bool? IsAuthenticated => User?.Identity?.IsAuthenticated;

        public string UserName =>
            User?.FindFirst(AuthenticateTokenMessages.userName)?.Value
            ?? User?.FindFirst(ClaimTypes.GivenName)?.Value;

        public string[]? Roles => User?.FindAll(ClaimTypes.Role)
            .Select(c => c.Value)
            .ToArray();

        public Guid GetCurrentUserId()
        {
            
            var userIdClaim =
                User?.FindFirst(AuthenticateTokenMessages.userId)?.Value
                ?? User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            return Guid.TryParse(userIdClaim, out var userId) ? userId : Guid.Empty;
        }
    }
}
