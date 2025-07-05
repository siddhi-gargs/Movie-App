using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class optimizeMovieEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Genre",
                table: "Movies",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Discription",
                table: "Movies",
                newName: "Desc");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Movies",
                newName: "Genre");

            migrationBuilder.RenameColumn(
                name: "Desc",
                table: "Movies",
                newName: "Discription");
        }
    }
}
