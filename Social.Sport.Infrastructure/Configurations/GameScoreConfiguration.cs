using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class GameScoreConfiguration : BaseConfiguration<GameScore>
    {
        public override void Configure(EntityTypeBuilder<GameScore> builder)
        {
            builder.Property(x => x.GameId).IsRequired();
            builder.Property(x => x.Timestamp).IsRequired();
            builder.Property(x => x.TeamAScore).IsRequired();
            builder.Property(x => x.TeamBScore).IsRequired();
            builder.Property(x => x.Event).HasMaxLength(100);

            builder.HasOne(x => x.Game)
                .WithMany(x => x.ScoreHistory)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.Cascade);

            base.Configure(builder);
        }
    }
}
