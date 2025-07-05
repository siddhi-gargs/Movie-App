For starting docker container 

# docker run 
  -e "ACCEPT_EULA=Y" 
  -e "SA_PASSWORD=Modified@1234" 
  -p 1433:1433 
  --name sqlserver 
  -v sql_data:/var/opt/mssql 
  -d mcr.microsoft.com/mssql/server

# check for docker ps

  -  sqlcmd -S localhost -U sa -P Modified@1234
     - for querying sqlcmd
     
Some common Packages
  - dotnet add package Microsoft.EntityFrameworkCore.SqlServer
  - dotnet add package Microsoft.EntityFrameworkCore.Tools
  - dotnet ef migrations add InitialCreate
  - dotnet ef database update

How to create React project 
  - Install node
  - npm create vite@latest client -- --template react
  