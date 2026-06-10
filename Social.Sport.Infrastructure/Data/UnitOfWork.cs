using Social.Sport.Core.Entities;
using Social.Sport.Core.Interfaces.Data;

namespace Social.Sport.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private AppDbContext Context { get; set; }

        public IRepository<User> Users
        {
            get => new Repository<User>(Context);
        }

        public IRepository<Team> Teams
        {
            get => new Repository<Team>(Context);
        }

        public IRepository<Core.Entities.Sport> Sports
        {
            get => new Repository<Core.Entities.Sport>(Context);
        }

        public IRepository<Venue> Venue
        {
            get => new Repository<Venue>(Context);
        }

        public IRepository<Game> Games
        {
            get => new Repository<Game>(Context);
        }

        public IRepository<GameParticipant> GameParticipants
        {
            get => new Repository<GameParticipant>(Context);
        }

        public IRepository<GameScore> GameScores
        {
            get => new Repository<GameScore>(Context);
        }

        public IRepository<UserRating> UserRatings
        {
            get => new Repository<UserRating>(Context);
        }

        public IRepository<Tournament> Tournaments
        {
            get => new Repository<Tournament>(Context);
        }

        public IRepository<League> Leagues
        {
            get => new Repository<League>(Context);
        }

        public IRepository<Notification> Notifications
        {
            get => new Repository<Notification>(Context);
        }

        public IRepository<Report> Reports
        {
            get => new Repository<Report>(Context);
        }

        public UnitOfWork(AppDbContext context) 
        { 
            Context = context;
        }

        public Task<int> SaveChanges()
        {
            return Context.SaveChangesAsync();
        }
        public Task CancelAsync()
        {
            throw new NotImplementedException();
        }
    }
}
