using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class AddedUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "id", "firstName", "lastName", "managerId" },
                values: new object[] { 90593, "Joel", "Forsyth", 90593 });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "id", "firstName", "lastName", "managerId" },
                values: new object[] { 90650, "Addison", "Beck", 90593 });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "id", "firstName", "lastName", "managerId" },
                values: new object[] { 90111, "Braylon", "Tucker", 90593 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "id",
                keyValue: 90111);

            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "id",
                keyValue: 90650);

            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "id",
                keyValue: 90593);
        }
    }
}
