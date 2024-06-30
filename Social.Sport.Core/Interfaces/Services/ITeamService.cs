

using Social.Sport.API.Helper;
using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Interfaces.Services
{
    public interface ITeamService
    {
        Task<Result<Team>> AddAsync(Team team, CancellationToken cancellationToken);
        Task<Result<Team>> UpdateAsync(Team team, Guid teamId, CancellationToken cancellationToken);
        Task<Result<IList<Team>>> GetAllAsync(CancellationToken cancellationToken);
        Task<Result<Team>> DeleteAsync(Guid teamId, CancellationToken cancellationToken);
    }
}
