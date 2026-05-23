using AutoMapper;
using Social.Sport.Core.DTOs.Request;
using Social.Sport.Core.Entities;

namespace Social.Sport.Core.Mappings
{
    public class RequestDTO:Profile
    {
        public RequestDTO() 
        { 
            CreateMap<TeamRequest, Team>()
                .ForMember(dest => dest.TeamMax, opt => opt.MapFrom(src => src.TeamMax))
                .ForMember(dest => dest.TeamCaptain, opt => opt.MapFrom(src => src.TeamCaptain))
                .ForMember(dest => dest.TeamName, opt => opt.MapFrom(src => src.TeamName))
                .ForMember(dest => dest.TeamDescription, opt => opt.MapFrom(src => src.TeamDescription));

            CreateMap<UserRequest, User>()
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.phoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
                .ForMember(dest => dest.DOB, opt => opt.MapFrom(src => src.DOB));

        }
    }
}
