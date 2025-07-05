# Here will be steps one by one what I am doing

Directory Structure

| - Controllers
| - Data / For Dbcontext 
| - DTO
| - Models

- Create the models 
  - movie
  - actor
  - movie_actor

- Set DbContext
  - All the tables Do the Dbset
  - OverWrite OnModelCreating For maintaining relationship between tables

- Database Connection
  - connection string
  - Run docker
  - Register DbContect in program.cs

- Allow Cross Origin Request in your program.cs
- [Apicontroller] for configuring that it is a controller
- map builders and app to mapController


  