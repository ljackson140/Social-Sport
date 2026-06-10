using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class TournamentConfiguration : BaseConfiguration<Tournament>
    {
        public override void Configure(EntityTypeBuilder<Tournament> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.SportId).IsRequired();
            builder.Property(x => x.OrganizerId).IsRequired();
            builder.Property(x => x.BracketType).HasConversion<string>();
            builder.Property(x => x.Status).HasConversion<string>();
            builder.Property(x => x.WinnerId);
            builder.Property(x => x.StartDate).IsRequired();
            builder.Property(x => x.EndDate);

            builder.HasOne(x => x.Sport)
                .WithMany(x => x.Tournaments)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Organizer)
                .WithMany()
                .HasForeignKey(x => x.OrganizerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Winner)
                .WithMany()
                .HasForeignKey(x => x.WinnerId)
                .OnDelete(DeleteBehavior.SetNull);

            base.Configure(builder);
        }
    }
}
