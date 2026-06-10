using Microsoft.EntityFrameworkCore;
using Social.Sport.Core.Entities;
using System.Reflection;

namespace Social.Sport.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<SportEntity> Sports { get; set; }
        public DbSet<Venue> Venues { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameParticipant> GameParticipants { get; set; }
        public DbSet<GameScore> GameScores { get; set; }
        public DbSet<UserRating> UserRatings { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<League> Leagues { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Report> Reports { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }
    }
}
