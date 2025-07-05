using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.models;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ActorMovieController : Controller
{
    private readonly AppDbContext _context;

    public ActorMovieController(AppDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> AddActorMovie(Guid actorId, Guid movieId)
    {
        var movie = await _context.Movies.FindAsync(movieId);
        var actor = await _context.Actors.FindAsync(actorId);

        if (movie == null || actor == null)
        {
            return NotFound("Movie || actor not found");
        }

        var actorMovie = new Movie_Actor()
        {
            movie_id = movie.Id,
            actor_id = actor.Id,
        };
        
        _context.Movie_Actor.Add(actorMovie);
        await _context.SaveChangesAsync();
        
        return Ok("Relationship Maintained Automatically done");
    }
}