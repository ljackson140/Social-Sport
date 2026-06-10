namespace Social.Sport.Core.Entities
{
    public class Game : BaseEntity
    {
        public Guid OrganizerId { get; set; }
        public Guid SportId { get; set; }
        public Guid VenueId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public GameStatus Status { get; set; } = GameStatus.Scheduled;
        public Guid? TeamAId { get; set; }
        public Guid? TeamBId { get; set; }
        public int ScoreTeamA { get; set; } = 0;
        public int ScoreTeamB { get; set; } = 0;
        public int MaxPlayers { get; set; }
        public SkillLevel? SkillLevelMin { get; set; }

        // Navigation properties
        public User Organizer { get; set; }
        public Sport Sport { get; set; }
        public Venue Venue { get; set; }
        public Team TeamA { get; set; }
        public Team TeamB { get; set; }
        public ICollection<GameParticipant> Participants { get; set; }
        public ICollection<GameScore> ScoreHistory { get; set; }
        public ICollection<Notification> Notifications { get; set; }
        public ICollection<Report> Reports { get; set; }
    }
}
