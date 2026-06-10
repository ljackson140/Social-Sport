namespace Social.Sport.Core.Entities
{
    public class Team : BaseEntity
    {
        public string TeamName { get; set; }
        public Guid TeamCaptain { get; set; }
        public string TeamDescription { get; set; }
        public int TeamMax { get; set; }
        public Guid? SportId { get; set; }
        public Guid? OwnerId { get; set; }
        public bool IsConfirmed { get; set; } = false;
        public int MaxMembers { get; set; }

        // Navigation properties
        public ICollection<User> Users { get; set; }
        public Sport Sport { get; set; }
        public User Owner { get; set; }
        public ICollection<Game> TeamAGames { get; set; }
        public ICollection<Game> TeamBGames { get; set; }
    }
}
