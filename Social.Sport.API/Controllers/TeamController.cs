using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Social.Sport.API.Middlewares;
using Social.Sport.Core.Interfaces.Services;
using System.Net;

namespace Social.Sport.API.Controllers
{

    [Route("api/team")]
    [ApiController]
    [ServiceFilter(typeof(ValidationFilterAttribute))]
    public class TeamController : BaseController
    {
        private readonly ITeamService _teamService;
        public TeamController(IMapper mapper, ITeamService teamService) : base(mapper)
        {
            _teamService = teamService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken ct)
        {
            var getAllTeams = await _teamService.GetAllAsync(ct);
            if (!getAllTeams.Success) return Error(getAllTeams, HttpStatusCode.BadRequest);
            return Ok(getAllTeams);
        }

        //[HttpPost]
        //public async Task<IActionResult> AddAsync([FromBody] teamRequestDTO data, CancellationToken ct)
        //{

        //}
    }
}
