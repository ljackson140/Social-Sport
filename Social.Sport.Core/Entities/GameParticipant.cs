namespace Social.Sport.Core.Entities
{
    public class GameParticipant : BaseEntity
    {
        public Guid GameId { get; set; }
        public Guid UserId { get; set; }
        public char Team { get; set; } // 'A', 'B', or 'N' (None)
        public GameParticipantStatus Status { get; set; } = GameParticipantStatus.Pending;
        public DateTime JoinDate { get; set; }
        public decimal? RatingGiven { get; set; }

        // Navigation properties
        public Game Game { get; set; }
        public User User { get; set; }
    }
}
