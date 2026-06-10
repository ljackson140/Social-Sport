using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class LeagueConfiguration : BaseConfiguration<League>
    {
        public override void Configure(EntityTypeBuilder<League> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.SportId).IsRequired();
            builder.Property(x => x.OrganizerId).IsRequired();
            builder.Property(x => x.Season).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Status).HasConversion<string>();
            builder.Property(x => x.StartDate).IsRequired();
            builder.Property(x => x.EndDate);

            builder.HasOne(x => x.Sport)
                .WithMany(x => x.Leagues)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Organizer)
                .WithMany()
                .HasForeignKey(x => x.OrganizerId)
                .OnDelete(DeleteBehavior.Restrict);

            base.Configure(builder);
        }
    }
}
