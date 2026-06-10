using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class GameParticipantConfiguration : BaseConfiguration<GameParticipant>
    {
        public override void Configure(EntityTypeBuilder<GameParticipant> builder)
        {
            builder.Property(x => x.GameId).IsRequired();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.Team).IsRequired();
            builder.Property(x => x.Status).HasConversion<string>();
            builder.Property(x => x.JoinDate).IsRequired();
            builder.Property(x => x.RatingGiven);

            builder.HasKey(x => new { x.GameId, x.UserId });

            builder.HasOne(x => x.Game)
                .WithMany(x => x.Participants)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.User)
                .WithMany(x => x.GameParticipations)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            base.Configure(builder);
        }
    }
}
