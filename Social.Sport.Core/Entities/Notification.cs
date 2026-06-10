namespace Social.Sport.Core.Entities
{
    public class Notification : BaseEntity
    {
        public Guid UserId { get; set; }
        public NotificationType Type { get; set; }
        public Guid? GameId { get; set; }
        public string Message { get; set; }
        public bool IsRead { get; set; } = false;

        // Navigation properties
        public User User { get; set; }
        public Game Game { get; set; }
    }
}
