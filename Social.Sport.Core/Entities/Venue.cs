namespace Social.Sport.Core.Entities
{
    public class Venue : BaseEntity
    {
        public string Name { get; set; }
        public string? Coordinates { get; set; }
        public int Capacity { get; set; }
        public string? Amenities { get; set; }
        public AvailabilityStatus AvailabilityStatus { get; set; } = AvailabilityStatus.Available;

        // Navigation properties
        public ICollection<Game> Games { get; set; }
    }
}
