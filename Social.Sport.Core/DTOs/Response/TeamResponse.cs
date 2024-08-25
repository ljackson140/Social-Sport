using Social.Sport.Core.Entities;

namespace Social.Sport.Core.DTOs.Response
{
    public class TeamResponse 
    {
        public string TeamName { get; set; }
        public Guid TeamCaptain { get; set; }  
        public string TeamDescription { get; set; }
        public int TeamMax { get; set; }
        public ICollection<User> Users { get; set; }

    }
}
