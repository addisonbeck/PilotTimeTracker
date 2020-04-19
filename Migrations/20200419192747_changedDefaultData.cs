using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class changedDefaultData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90111,
                columns: new[] { "firstName", "lastName", "managerId" },
                values: new object[] { "Baddison", "Aeck", 90650 });

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90593,
                column: "isManager",
                value: true);

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90650,
                column: "isManager",
                value: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90111,
                columns: new[] { "firstName", "lastName", "managerId" },
                values: new object[] { "Braylon", "Tucker", 90593 });

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90593,
                column: "isManager",
                value: false);

            migrationBuilder.UpdateData(
                table: "User",
                keyColumn: "id",
                keyValue: 90650,
                column: "isManager",
                value: false);
        }
    }
}
