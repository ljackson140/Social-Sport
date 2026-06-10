namespace Social.Sport.Core
{
    public enum UserStatus
    {
        None = 0,
        Active = 1,
        Inactive = 2,
    }

    public enum UserRole
    {
        player = 0,
        organizer = 1,
        Admin = 2
    }

    public enum SkillLevel
    {
        beginner = 0,
        intermediate = 1,
        advanced = 2
    }

    public enum GameStatus
    {
        Scheduled = 0,
        Live = 1,
        Finished = 2,
        Cancelled = 3
    }

    public enum GameParticipantStatus
    {
        Pending = 0,
        Accepted = 1,
        Rejected = 2,
        Attended = 3
    }

    public enum BracketType
    {
        SingleElimination = 0,
        RoundRobin = 1,
        DoubleElimination = 2
    }

    public enum TournamentStatus
    {
        Planning = 0,
        Registration = 1,
        InProgress = 2,
        Completed = 3,
        Cancelled = 4
    }

    public enum LeagueStatus
    {
        Planning = 0,
        Active = 1,
        Paused = 2,
        Completed = 3,
        Cancelled = 4
    }

    public enum NotificationType
    {
        GameStarting = 0,
        PlayerJoined = 1,
        ScoreUpdate = 2,
        GameCancelled = 3,
        InvitationReceived = 4,
        RatingReceived = 5
    }

    public enum ReportStatus
    {
        Pending = 0,
        UnderReview = 1,
        Resolved = 2,
        Dismissed = 3
    }

    public enum AvailabilityStatus
    {
        Available = 0,
        Booked = 1,
        Closed = 2,
        Maintenance = 3
    }
}
