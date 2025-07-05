namespace server.models;

public class Movie_Actor
{
    public Guid movie_id { get; set; }
    public Movie movie { get; set; }
    public Guid actor_id { get; set; }
    public Actor actor { get; set; }
}