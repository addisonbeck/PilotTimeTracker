using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class email : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "User",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90111,
                column: "email",
                value: "bbaeck@pilotcat.com");

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90593,
                column: "email",
                value: "jmforsyth@pilotcat.com");

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90650,
                column: "email",
                value: "abbeck@pilotcat.com");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "User");
        }
    }
}
