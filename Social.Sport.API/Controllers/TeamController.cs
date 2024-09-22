using AutoMapper;
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
            var listOfAllTeams = _mapper.Map<List<TeamResponse>>(getAllTeams.Data);
            return Ok(new SuccessResult<List<TeamResponse>>(listOfAllTeams));
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync([FromBody] TeamRequest request, CancellationToken ct)
        {
            var team = _mapper.Map<Team>(request);
            var postTeam = await _teamService.AddAsync(team, ct);
            if (!postTeam.Success) return Error(postTeam, HttpStatusCode.BadRequest);
            var mapTeam = _mapper.Map<TeamResponse>(postTeam.Data);
            return Ok(new SuccessResult<TeamResponse>(mapTeam));

        }
    }
}
