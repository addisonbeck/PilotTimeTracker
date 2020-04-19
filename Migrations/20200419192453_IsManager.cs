using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class IsManager : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isManager",
                table: "User",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isManager",
                table: "User");
        }
    }
}
