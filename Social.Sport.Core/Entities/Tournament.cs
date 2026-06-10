namespace Social.Sport.Core.Entities
{
    public class Tournament : BaseEntity
    {
        public string Name { get; set; }
        public Guid SportId { get; set; }
        public Guid OrganizerId { get; set; }
        public BracketType BracketType { get; set; }
        public TournamentStatus Status { get; set; } = TournamentStatus.Planning;
        public Guid? WinnerId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        // Navigation properties
        public Sport Sport { get; set; }
        public User Organizer { get; set; }
        public Team Winner { get; set; }
    }
}
