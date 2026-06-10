namespace Social.Sport.Core.Entities
{
    public class GameScore : BaseEntity
    {
        public Guid GameId { get; set; }
        public DateTime Timestamp { get; set; }
        public int TeamAScore { get; set; }
        public int TeamBScore { get; set; }
        public string? Event { get; set; }

        // Navigation properties
        public Game Game { get; set; }
    }
}
