using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

public class PtoContext : DbContext
{
    public DbSet<Request> Request { get; set; }
    public DbSet<RequestGroup> RequestGroup { get; set; }
    public DbSet<User> User { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=PilotTimeTracker.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<RequestGroup>()
            .HasOne(p => p.user)
            .WithMany(b => b.requestGroups);

        modelBuilder.Entity<Request>()
            .HasOne(p => p.requestGroup)
            .WithMany(b => b.requests);
        
        modelBuilder.Entity<User>().HasData(new User {id = 90593, firstName = "Joel", lastName = "Forsyth", managerId = 90593});
        modelBuilder.Entity<User>().HasData(new User {id = 90650, firstName = "Addison", lastName = "Beck", managerId = 90593});
        modelBuilder.Entity<User>().HasData(new User {id = 90111, firstName = "Braylon", lastName = "Tucker", managerId = 90593});
    }
}