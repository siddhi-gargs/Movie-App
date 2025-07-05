namespace server.models;

public class Movie
{
    public Guid Id { get; set; } 
    public string Title { get; set; }
    public string Producer { get; set; }
    public string Desc { get; set; }
    public List<Movie_Actor>  movieActors { get; set; } = new ();
}