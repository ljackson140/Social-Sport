using Microsoft.EntityFrameworkCore;
using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Interfaces.Data
{
    public interface IAppDbContext
    {
        DbSet<User> Users { get; }
        DbSet<Team> Teams { get; }
        DbSet<SportEntity> Sports { get; }
        DbSet<Venue> Venues { get; }
        DbSet<Game> Games { get; }
        DbSet<GameParticipant> GameParticipants { get; }
        DbSet<GameScore> GameScores { get; }
        DbSet<UserRating> UserRatings { get; }
        DbSet<Tournament> Tournaments { get; }
        DbSet<League> Leagues { get; }
        DbSet<Notification> Notifications { get; }
        DbSet<Report> Reports { get; }
    }
}
