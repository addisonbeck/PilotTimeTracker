using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class requestype : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "type",
                table: "RequestGroup",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "type",
                table: "RequestGroup");
        }
    }
}
