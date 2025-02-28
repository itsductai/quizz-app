﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using quizz_api.Models;

#nullable disable

namespace quizz_api.Migrations
{
    [DbContext(typeof(QuizDBContext))]
    partial class QuizDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("quizz_api.Models.Participant", b =>
                {
                    b.Property<int>("PID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PID"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Score")
                        .HasColumnType("int");

                    b.Property<int>("TimeTaken")
                        .HasColumnType("int");

                    b.HasKey("PID");

                    b.ToTable("Participants");
                });

            modelBuilder.Entity("quizz_api.Models.Question", b =>
                {
                    b.Property<int>("QID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QID"));

                    b.Property<string>("Answer")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option1")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option2")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option3")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Option4")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("QuestionText")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)");

                    b.HasKey("QID");

                    b.ToTable("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
