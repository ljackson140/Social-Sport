using Microsoft.AspNetCore.Http;
using Social.Sport.Core.Interfaces.Services;
using System.Security.Claims;

namespace Social.Sport.Core.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public bool? IsAuthenticated => _httpContextAccessor?.HttpContext?.User?.Identity?.IsAuthenticated;

        public string UserName => _httpContextAccessor?.HttpContext?.User?.FindFirst(ClaimTypes.Name)?.Value;

        public string[]? Roles => _httpContextAccessor?.HttpContext?.User?.FindAll(ClaimTypes.Role)
            .Select(c => c.Value)
            .ToArray();

        public Guid GetCurrentUserId()
        {
            var userIdClaim = _httpContextAccessor?.HttpContext?.User
                ?.FindFirst("userId")?.Value;

            return Guid.TryParse(userIdClaim, out var userId) ? userId : Guid.Empty;
        }
    }
}
