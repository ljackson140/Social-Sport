using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Sport.Core.Entities;

namespace Social.Sport.Infrastructure.Configurations
{
    public class NotificationConfiguration : BaseConfiguration<Notification>
    {
        public override void Configure(EntityTypeBuilder<Notification> builder)
        {
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.Type).HasConversion<string>();
            builder.Property(x => x.GameId);
            builder.Property(x => x.Message).IsRequired().HasMaxLength(500);
            builder.Property(x => x.IsRead).IsRequired();

            builder.HasOne(x => x.User)
                .WithMany(x => x.Notifications)
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Game)
                .WithMany(x => x.Notifications)
                .HasForeignKey(x => x.GameId)
                .OnDelete(DeleteBehavior.SetNull);

            base.Configure(builder);
        }
    }
}
