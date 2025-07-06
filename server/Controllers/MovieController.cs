using System.Data.Entity;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.models;

namespace server.Controllers;

[ApiController]
[Route("movies")]
public class MovieController : Controller
{
    private readonly AppDbContext _context;

    public MovieController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var movies = _context.Movies.ToList();
        return Ok(movies);
    }

    [HttpPost]
    public IActionResult AddMovie([FromBody] Movie movie)
    {
        movie.Id = Guid.NewGuid();
        Console.WriteLine($"{movie.Id}: {movie.Title} {movie.Desc}");
        _context.Movies.Add(movie);
        _context.SaveChanges();
        return Ok("Movie is successfully added");
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> DeleteMovie(Guid id)
    {
        var movie = await _context.Movies.FindAsync(id);
        if (movie == null)
        {
            return NotFound(new
            {
                message =
                    "Movie not found"
            });
        }

        _context.Movies.Remove(movie);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Movie deleted successfully" });
    }
}