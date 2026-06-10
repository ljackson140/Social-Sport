namespace Social.Sport.Core.Entities
{
    public  class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[]? ProfilePic { get; set; }
        public string Password { get; set; }
        public string? salt { get; set; }
        public UserRole Role { get; set; }
        public DateTime DOB { get; set; }
        public string? phoneNumber { get; set; }
        public int? TeamId { get; set; }
        public SkillLevel? skillLevel { get; set; }
        public UserStatus isActive { get; set; }

        public bool IsVerified { get; set; } = false;
        public string? SportsPreference { get; set; }

        // Navigation properties
        public ICollection<Team> Teams { get; set; }
        public ICollection<Team> OwnedTeams { get; set; }
        public ICollection<Game> OrganizedGames { get; set; }
        public ICollection<GameParticipant> GameParticipations { get; set; }
        public ICollection<UserRating> RatingsGiven { get; set; }
        public ICollection<UserRating> RatingsReceived { get; set; }
        public ICollection<Notification> Notifications { get; set; }
        public ICollection<Report> ReportsCreated { get; set; }
    }
}
