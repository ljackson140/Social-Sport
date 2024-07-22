using AutoMapper;
using Social.Sport.Core.DTOs.Response;
using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Mappings
{
    public class ResponseDTO:Profile
    {
        public ResponseDTO()
        {
            CreateMap<Team, TeamResponse>();
           
        }
    }
}
