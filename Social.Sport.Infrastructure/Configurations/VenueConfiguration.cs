using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class VenueConfiguration : BaseConfiguration<Venue>
    {
        public override void Configure(EntityTypeBuilder<Venue> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);
            builder.Property(x => x.Coordinates).HasMaxLength(255);
            builder.Property(x => x.Capacity).IsRequired();
            builder.Property(x => x.Amenities).HasMaxLength(500);
            builder.Property(x => x.AvailabilityStatus).HasConversion<string>();

            builder.HasMany(x => x.Games)
                .WithOne(x => x.Venue)
                .HasForeignKey(x => x.VenueId)
                .OnDelete(DeleteBehavior.Restrict);

            base.Configure(builder);
        }
    }
}
