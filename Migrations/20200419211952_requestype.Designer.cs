﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace PilotTimeTracker.Migrations
{
    [DbContext(typeof(PtoContext))]
    [Migration("20200419211952_requestype")]
    partial class requestype
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("Request", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("date")
                        .HasColumnType("TEXT");

                    b.Property<int>("hours")
                        .HasColumnType("INTEGER");

                    b.Property<string>("requestGroupId")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.HasIndex("requestGroupId");

                    b.ToTable("Request");
                });

            modelBuilder.Entity("RequestGroup", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("dateRequested")
                        .HasColumnType("TEXT");

                    b.Property<int>("managerId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("status")
                        .HasColumnType("INTEGER");

                    b.Property<int>("type")
                        .HasColumnType("INTEGER");

                    b.Property<int>("userId")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("userId");

                    b.ToTable("RequestGroup");
                });

            modelBuilder.Entity("User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("email")
                        .HasColumnType("TEXT");

                    b.Property<string>("firstName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("isManager")
                        .HasColumnType("INTEGER");

                    b.Property<string>("lastName")
                        .HasColumnType("TEXT");

                    b.Property<int>("managerId")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("managerId");

                    b.ToTable("User");

                    b.HasData(
                        new
                        {
                            id = 90593,
                            email = "jmforsyth@pilotcat.com",
                            firstName = "Joel",
                            isManager = true,
                            lastName = "Forsyth",
                            managerId = 90593
                        },
                        new
                        {
                            id = 90650,
                            email = "abbeck@pilotcat.com",
                            firstName = "Addison",
                            isManager = true,
                            lastName = "Beck",
                            managerId = 90593
                        },
                        new
                        {
                            id = 90111,
                            email = "bbaeck@pilotcat.com",
                            firstName = "Baddison",
                            isManager = false,
                            lastName = "Aeck",
                            managerId = 90650
                        });
                });

            modelBuilder.Entity("Request", b =>
                {
                    b.HasOne("RequestGroup", "requestGroup")
                        .WithMany("requests")
                        .HasForeignKey("requestGroupId");
                });

            modelBuilder.Entity("RequestGroup", b =>
                {
                    b.HasOne("User", "user")
                        .WithMany("requestGroups")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("User", b =>
                {
                    b.HasOne("User", "manager")
                        .WithMany()
                        .HasForeignKey("managerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
