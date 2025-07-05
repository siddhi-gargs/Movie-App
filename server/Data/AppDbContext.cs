using System.Data.Entity.SqlServer;
using Microsoft.EntityFrameworkCore;
using server.models;

namespace server.Data;
public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
        
    }
    
    public DbSet<Actor> Actors { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<Movie_Actor> Movie_Actor { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Movie_Actor>().HasKey(k =>  new {k.movie_id, k.actor_id});
        
        modelBuilder.Entity<Movie_Actor>().HasOne(ma => ma.movie).WithMany(m => m.movieActors).HasForeignKey(m => m.movie_id);
        modelBuilder.Entity<Movie_Actor>().HasOne(ma => ma.actor).WithMany(m => m.MovieActors)
            .HasForeignKey(m => m.actor_id);

    }
    
}