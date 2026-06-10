using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;


namespace Social.Sport.Infrastructure.Configurations
{
    public class TeamConfiguration : BaseConfiguration<Team>
    {
        public override void Configure(EntityTypeBuilder<Team> builder)
        {
            builder.Property(x => x.TeamName).IsRequired();
            builder.Property(x => x.TeamDescription).IsRequired();
            builder.Property(x => x.TeamCaptain).IsRequired();
            builder.Property(x => x.TeamMax).IsRequired();

            builder.HasMany(x => x.Users)
               .WithMany(x => x.Teams);

            builder.HasOne(x => x.Sport)
               .WithMany(x => x.Teams)
               .HasForeignKey(x => x.SportId)
               .OnDelete(DeleteBehavior.SetNull);

            
            builder.HasOne(x => x.Owner)
                .WithMany(x => x.OwnedTeams)
                .HasForeignKey(x => x.OwnerId)
                .OnDelete(DeleteBehavior.SetNull);

            base.Configure(builder);
        }
    }
}
