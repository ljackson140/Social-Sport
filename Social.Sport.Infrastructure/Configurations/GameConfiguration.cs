using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class GameConfiguration : BaseConfiguration<Game>
    {
        public override void Configure(EntityTypeBuilder<Game> builder)
        {
            builder.Property(x => x.OrganizerId).IsRequired();
            builder.Property(x => x.SportId).IsRequired();
            builder.Property(x => x.VenueId).IsRequired();
            builder.Property(x => x.StartTime).IsRequired();
            builder.Property(x => x.EndTime);
            builder.Property(x => x.Status).HasConversion<string>();
            builder.Property(x => x.TeamAId);
            builder.Property(x => x.TeamBId);
            builder.Property(x => x.ScoreTeamA).IsRequired();
            builder.Property(x => x.ScoreTeamB).IsRequired();
            builder.Property(x => x.MaxPlayers).IsRequired();
            builder.Property(x => x.SkillLevelMin).HasConversion<string>();

            builder.HasOne(x => x.Organizer)
                .WithMany(x => x.OrganizedGames)
                .HasForeignKey(x => x.OrganizerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Sport)
                .WithMany(x => x.Games)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Venue)
                .WithMany(x => x.Games)
                .HasForeignKey(x => x.VenueId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.TeamA)
                .WithMany(x => x.TeamAGames)
                .HasForeignKey(x => x.TeamAId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.TeamB)
                .WithMany(x => x.TeamBGames)
                .HasForeignKey(x => x.TeamBId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(x => x.Participants)
                .WithOne(x => x.Game)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.ScoreHistory)
                .WithOne(x => x.Game)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x => x.Notifications)
                .WithOne(x => x.Game)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(x => x.Reports)
                .WithOne(x => x.Game)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.SetNull);

            base.Configure(builder);
        }
    }
}
