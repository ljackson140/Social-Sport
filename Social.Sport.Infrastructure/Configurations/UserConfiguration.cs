using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class UserConfiguration : BaseConfiguration<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.FirstName).IsRequired();
            builder.Property(x => x.LastName).IsRequired();
            builder.Property(x => x.Username).IsRequired();
            builder.Property(x => x.Email).IsRequired().HasMaxLength(50);
            builder.Property(x => x.ProfilePic);
            builder.Property(x => x.Password).IsRequired();
            builder.Property(x => x.salt).IsRequired(false);
            builder.Property(x => x.Role);
            builder.Property(x => x.DOB).IsRequired();
            builder.Property(x => x.phoneNumber).HasMaxLength(20);
            builder.Property(x => x.TeamId);
            builder.Property(x => x.isActive).HasConversion<string>();
            builder.Property(x => x.IsVerified).IsRequired();
            builder.Property(x => x.SportsPreference).HasMaxLength(500);

            builder.HasMany(x => x.Teams)
                .WithMany(x => x.Users);

            builder.HasMany(x => x.GameParticipations)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.RatingsGiven)
                .WithOne(x => x.Rater)
                .HasForeignKey(x => x.RaterId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.RatingsReceived)
                .WithOne(x => x.RatedUser)
                .HasForeignKey(x => x.RatedUserId)
                .OnDelete(DeleteBehavior.Restrict);

            base.Configure(builder);
        }
    }
}
