namespace Social.Sport.Core.Entities
{
    public class Sport : BaseEntity
    {
        public string Name { get; set; }
        public string? Icon { get; set; }
        public string? Description { get; set; }
        public int MaxPlayersPerTeam { get; set; }

        // Navigation properties
        public ICollection<Team> Teams { get; set; }
        public ICollection<Game> Games { get; set; }
        public ICollection<Tournament> Tournaments { get; set; }
        public ICollection<League> Leagues { get; set; }
    }
}
