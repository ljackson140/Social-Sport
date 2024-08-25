

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Social.Sport.API.Helper;
using Social.Sport.Core.Entities;
using Social.Sport.Core.Interfaces.Data;
using Social.Sport.Core.Interfaces.Services;

namespace Social.Sport.Core.Services
{
    public class TeamService : BaseService, ITeamService
    {
        public TeamService(IUnitOfWork unitOfWork, ILogger<BaseService> logger) : base(unitOfWork, logger)
        {
        }

        public async Task<Result<Team>> AddAsync(Team team, CancellationToken cancellationToken)
        {
            if (team == null) throw new ArgumentNullException(nameof(Team));

            _unitOfWork.Teams.AddAsync(team, cancellationToken);
            await _unitOfWork.SaveChanges();
            return new SuccessResult<Team>(team);
        }

        public async Task<Result<Team>> UpdateAsync(Team updateTeam, Guid teamId, CancellationToken cancellationToken)
        {
            var existingTeam = await _unitOfWork.Teams.Get().FirstOrDefaultAsync(x => x.Id == teamId, cancellationToken);

            if (existingTeam is null)
            {
                return new ErrorResult<Team>("shit is null dawg");
            }
            existingTeam!.TeamName = updateTeam.TeamName;
            existingTeam.TeamDescription = updateTeam.TeamDescription;
            existingTeam.TeamCaptain = updateTeam.TeamCaptain;
            existingTeam.UpdatedDate = DateTime.UtcNow;
            await _unitOfWork.SaveChanges();
            return new SuccessResult<Team>(existingTeam);
        }

        public async Task<Result<Team>> DeleteAsync(Guid teamId, CancellationToken cancellationToken)
        {
            var deleteTeam = await _unitOfWork.Teams.Get().FirstOrDefaultAsync(x => x.Id == teamId);
            if (deleteTeam == null) return new ErrorResult<Team>("Team couldnt be deleted");
            _unitOfWork.Teams.Remove(deleteTeam);
            await _unitOfWork.SaveChanges();
            return new SuccessResult<Team>(deleteTeam);

        }

        public async Task<Result<IList<Team>>> GetAllAsync(CancellationToken cancellationToken)
        {
            var teams = await _unitOfWork.Teams.Get().ToListAsync(cancellationToken);
            return new SuccessResult<IList<Team>>(teams);
        }
    }
}
