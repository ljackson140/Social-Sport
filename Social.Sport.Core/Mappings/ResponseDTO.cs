using AutoMapper;
using Social.Sport.Core.DTOs.Response;
using Social.Sport.Core.Entities;
using Social.Sport.Core.Entities.NotMapped;

namespace Social.Sport.Core.Mappings
{
    public class ResponseDTO:Profile
    {
        public ResponseDTO()
        {
            CreateMap<UserAuthenticationTicket, AuthResponse>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.User.Id))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.User.Email))
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.User.Username))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.User.Role.ToString()))
                .ForMember(dest => dest.AccessToken, opt => opt.MapFrom(src => src.AccessToken))
                .ForMember(dest => dest.TokenExpiresAt, opt => opt.MapFrom(src => src.ExpiresAt));

            CreateMap<Team, TeamResponse>()
                .ForMember(dest => dest.TeamMax, opt => opt.MapFrom(src => src.TeamMax))
                .ForMember(dest => dest.TeamCaptain, opt => opt.MapFrom(src => src.TeamCaptain))
                .ForMember(dest => dest.TeamName, opt => opt.MapFrom(src => src.TeamName))
                .ForMember(dest => dest.TeamDescription, opt => opt.MapFrom(src => src.TeamDescription));

            CreateMap<User, UserResponse>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.phoneNumber))
                .ForMember(dest => dest.DOB, opt => opt.MapFrom(src => src.DOB))
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role));
        }
    }
}
