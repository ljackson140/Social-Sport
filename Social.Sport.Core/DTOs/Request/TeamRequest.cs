namespace Social.Sport.Core.DTOs.Request
{
    public class TeamRequest
    {
        public string TeamName { get; set; }
        public Guid TeamCaptain {  get; set; }
        public string TeamDescription { get; set; }
        public int TeamMax { get; set; }
    }
}
