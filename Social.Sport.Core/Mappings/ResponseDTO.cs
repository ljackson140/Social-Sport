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
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.TeamMax, opt => opt.MapFrom(src => src.TeamMax))
                .ForMember(dest => dest.TeamCaptain, opt => opt.MapFrom(src => src.TeamCaptain))
                .ForMember(dest => dest.TeamName, opt => opt.MapFrom(src => src.TeamName))
                .ForMember(dest => dest.TeamDescription, opt => opt.MapFrom(src => src.TeamDescription))
                .ForMember(dest => dest.CreatedBy, opt => opt.MapFrom(src => src.CreatedBy))
                .ForMember(dest => dest.CreatedDate, opt => opt.MapFrom(src => src.CreatedBy))
                .ForMember(dest => dest.Users, opt => opt.MapFrom(src => src.Users));
            ;
            ;
            ;
        }
    }
}
