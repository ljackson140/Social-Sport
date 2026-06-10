namespace Social.Sport.Core.Entities
{
    public class UserRating : BaseEntity
    {
        public Guid RaterId { get; set; }
        public Guid RatedUserId { get; set; }
        public Guid GameId { get; set; }
        public decimal SkillRating { get; set; } // 1-5
        public decimal SportsmanshipRating { get; set; } // 1-5
        public string? Comment { get; set; }

        // Navigation properties
        public User Rater { get; set; }
        public User RatedUser { get; set; }
        public Game Game { get; set; }
    }
}
