namespace Social.Sport.Core.Entities
{
    public class League : BaseEntity
    {
        public string Name { get; set; }
        public Guid SportId { get; set; }
        public Guid OrganizerId { get; set; }
        public string Season { get; set; }
        public LeagueStatus Status { get; set; } = LeagueStatus.Planning;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        // Navigation properties
        public Sport Sport { get; set; }
        public User Organizer { get; set; }
    }
}
