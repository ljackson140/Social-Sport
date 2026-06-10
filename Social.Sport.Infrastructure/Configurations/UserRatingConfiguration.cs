using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class UserRatingConfiguration : BaseConfiguration<UserRating>
    {
        public override void Configure(EntityTypeBuilder<UserRating> builder)
        {
            builder.Property(x => x.RaterId).IsRequired();
            builder.Property(x => x.RatedUserId).IsRequired();
            builder.Property(x => x.GameId).IsRequired();
            builder.Property(x => x.SkillRating).IsRequired();
            builder.Property(x => x.SportsmanshipRating).IsRequired();
            builder.Property(x => x.Comment).HasMaxLength(500);

            builder.HasOne(x => x.Rater)
                .WithMany(x => x.RatingsGiven)
                .HasForeignKey(x => x.RaterId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.RatedUser)
                .WithMany(x => x.RatingsReceived)
                .HasForeignKey(x => x.RatedUserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Game)
                .WithMany()
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.Restrict);

            base.Configure(builder);
        }
    }
}
