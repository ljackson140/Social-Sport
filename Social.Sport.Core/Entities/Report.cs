namespace Social.Sport.Core.Entities
{
    public class Report : BaseEntity
    {
        public Guid ReporterId { get; set; }
        public Guid? ReportedUserId { get; set; }
        public Guid? GameId { get; set; }
        public string Reason { get; set; }
        public ReportStatus Status { get; set; } = ReportStatus.Pending;

        // Navigation properties
        public User Reporter { get; set; }
        public User ReportedUser { get; set; }
        public Game Game { get; set; }
    }
}
