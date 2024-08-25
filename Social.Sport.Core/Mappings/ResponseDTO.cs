using AutoMapper;
using Social.Sport.Core.DTOs.Response;
using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Mappings
{
    public class ResponseDTO:Profile
    {
        public ResponseDTO()
        {
            CreateMap<Team, TeamResponse>()
                .ForMember(dest => dest.TeamMax, opt => opt.MapFrom(src => src.TeamMax))
                .ForMember(dest => dest.TeamCaptain, opt => opt.MapFrom(src => src.TeamCaptain))
                .ForMember(dest => dest.TeamName, opt => opt.MapFrom(src => src.TeamName))
                .ForMember(dest => dest.TeamDescription, opt => opt.MapFrom(src => src.TeamDescription));
        }
    }
}
