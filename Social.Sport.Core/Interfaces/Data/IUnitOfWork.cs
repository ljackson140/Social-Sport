using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Interfaces.Data
{
    public interface IUnitOfWork
    {
        IRepository<User> Users { get; }
        IRepository<Team> Teams { get; }
        IRepository<SportEntity> Sports { get; }
        IRepository<Venue> Venue { get; }
        IRepository<Game> Games { get; }
        IRepository<GameParticipant> GameParticipants { get; }
        IRepository<GameScore> GameScores { get; }
        IRepository<UserRating> UserRatings { get; }
        IRepository<Tournament> Tournaments { get; }
        IRepository<League> Leagues { get; }
        IRepository<Notification> Notifications { get; }
        IRepository<Report> Reports { get; }

        Task<int> SaveChanges();
        Task CancelAsync();
    }
}
