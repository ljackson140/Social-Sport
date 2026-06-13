namespace Social.Sport.Core.DTOs.Response
{
    public class AuthResponse
    {
        public string AccessToken { get; set; }
        public DateTime TokenExpiresAt { get; set; }
        public UserResponse User { get; set; }
    }
}
