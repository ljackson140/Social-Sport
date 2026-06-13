using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Social.Sport.API.Helper;
using Social.Sport.API.Middlewares;
using Social.Sport.Core.DTOs.Request;
using Social.Sport.Core.DTOs.Response;
using Social.Sport.Core.Entities;
using Social.Sport.Core.Interfaces.Services;
using System.Net;

namespace Social.Sport.API.Controllers
{

    [Route("api/user")]
    [ApiController]
    [ServiceFilter(typeof(ValidationFilterAttribute))]
    public class UserController : BaseController
    {
        private readonly IAuthenticateTokenService _authenticateTokenService;
        private readonly ISignUpInfoService _signUpInfoService;
        private readonly ICurrentUserService _currentUserService;
        private readonly IUserService _userService;

        public UserController(
            IMapper mapper,
            IAuthenticateTokenService authenticateTokenService,
            ISignUpInfoService signupInfo,
            ICurrentUserService currentUserService,
            IUserService userService) : base(mapper)
        {
            _authenticateTokenService = authenticateTokenService;
            _signUpInfoService = signupInfo;
            _currentUserService = currentUserService;
            _userService = userService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUpAsync([FromBody] UserRequest request, CancellationToken ct)
        {
            var user = _mapper.Map<User>(request);
            var postUser = await _signUpInfoService.SignUpAsync(user, ct);
            if (!postUser.Success) return Error(postUser, HttpStatusCode.BadRequest);

            var response = new
            {
                user = _mapper.Map<UserResponse>(postUser.Data)
            };
            return Ok(new SuccessResult<dynamic>(response));
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request, CancellationToken ct)
        {
            var authResult = await _authenticateTokenService.LoginAsync(request.Email, request.Password, ct);
            if (!authResult.Success) return Error(authResult, HttpStatusCode.Unauthorized);

            var response = _mapper.Map<AuthResponse>(authResult.Data);
            return Ok(new SuccessResult<AuthResponse>(response));
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> MeAsync(CancellationToken ct)
        {
            var userId = _currentUserService.GetCurrentUserId();
            if (userId == Guid.Empty)
            {
                return Error("No authenticated user.", HttpStatusCode.Unauthorized);
            }

            var result = await _userService.GetByIdAsync(userId, ct);
            if (!result.Success) return Error(result, HttpStatusCode.NotFound);

            var response = _mapper.Map<UserResponse>(result.Data);
            return Ok(new SuccessResult<UserResponse>(response));
        }

        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            if (_currentUserService.IsAuthenticated != true)
            {
                return Error("No authenticated user.", HttpStatusCode.Unauthorized);
            }

            return Ok(new SuccessResult<LogoutResponse>(new LogoutResponse()));
        }
    }
}
