using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class ReportConfiguration : BaseConfiguration<Report>
    {
        public override void Configure(EntityTypeBuilder<Report> builder)
        {
            builder.Property(x => x.ReporterId).IsRequired();
            builder.Property(x => x.ReportedUserId);
            builder.Property(x => x.GameId);
            builder.Property(x => x.Reason).IsRequired().HasMaxLength(500);
            builder.Property(x => x.Status).HasConversion<string>();

            builder.HasOne(x => x.Reporter)
                .WithMany(x => x.ReportsCreated)
                .HasForeignKey(x => x.ReporterId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.ReportedUser)
                .WithMany()
                .HasForeignKey(x => x.ReportedUserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.Game)
                .WithMany(x => x.Reports)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.SetNull);

            base.Configure(builder);
        }
    }
}
