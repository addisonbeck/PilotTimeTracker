using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PilotTimeTracker.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    firstName = table.Column<string>(nullable: true),
                    lastName = table.Column<string>(nullable: true),
                    managerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.id);
                    table.ForeignKey(
                        name: "FK_User_User_managerId",
                        column: x => x.managerId,
                        principalTable: "User",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RequestGroup",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    dateRequested = table.Column<DateTime>(nullable: false),
                    userId = table.Column<int>(nullable: false),
                    managerId = table.Column<int>(nullable: false),
                    status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestGroup", x => x.id);
                    table.ForeignKey(
                        name: "FK_RequestGroup_User_userId",
                        column: x => x.userId,
                        principalTable: "User",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Request",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    date = table.Column<DateTime>(nullable: false),
                    hours = table.Column<int>(nullable: false),
                    requestGroupId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Request", x => x.id);
                    table.ForeignKey(
                        name: "FK_Request_RequestGroup_requestGroupId",
                        column: x => x.requestGroupId,
                        principalTable: "RequestGroup",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Request_requestGroupId",
                table: "Request",
                column: "requestGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_RequestGroup_userId",
                table: "RequestGroup",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_User_managerId",
                table: "User",
                column: "managerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Request");

            migrationBuilder.DropTable(
                name: "RequestGroup");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
