namespace server.models;

public class Actor
{
    public Guid Id { get; set; }
    public string actorName { get; set; }
    public List<Movie_Actor> MovieActors { get; set; } = new();
}