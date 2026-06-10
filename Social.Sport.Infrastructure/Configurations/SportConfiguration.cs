using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Social.Sport.Infrastructure.Configurations
{
    public class SportConfiguration : BaseConfiguration<SportEntity>
    {
        public override void Configure(EntityTypeBuilder<SportEntity> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Icon).HasMaxLength(255);
            builder.Property(x => x.Description).HasMaxLength(500);
            builder.Property(x => x.MaxPlayersPerTeam).IsRequired();

            builder.HasMany(x => x.Teams)
                .WithOne(x => x.Sport)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(x => x.Games)
                .WithOne(x => x.Sport)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Tournaments)
                .WithOne(x => x.Sport)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(x => x.Leagues)
                .WithOne(x => x.Sport)
                .HasForeignKey(x => x.SportId)
                .OnDelete(DeleteBehavior.Restrict);

            base.Configure(builder);
        }
    }
}
