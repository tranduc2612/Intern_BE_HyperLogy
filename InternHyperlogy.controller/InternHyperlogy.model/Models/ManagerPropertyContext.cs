using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace InternHyperlogy.model.Models;

public partial class ManagerPropertyContext : DbContext
{
    public ManagerPropertyContext()
    {
    }

    public ManagerPropertyContext(DbContextOptions<ManagerPropertyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Property> Properties { get; set; }

    public virtual DbSet<Staff> Staff { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=MSI\\SQLEXPRESS;Initial Catalog=ManagerProperty;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Property>(entity =>
        {
            entity.HasKey(e => e.IdProperty).HasName("PK__Property__0D2D7EC54EC2156E");

            entity.ToTable("Property");

            entity.Property(e => e.IdProperty)
                .HasMaxLength(10)
                .HasColumnName("Id_Property");
            entity.Property(e => e.IdStaff)
                .HasMaxLength(10)
                .HasColumnName("Id_Staff");
            entity.Property(e => e.NameProperty)
                .HasMaxLength(40)
                .HasColumnName("Name_Property");
            entity.Property(e => e.TimeCreate)
                .HasColumnType("datetime")
                .HasColumnName("Time_Create");
            entity.Property(e => e.TimeUpdate)
                .HasColumnType("datetime")
                .HasColumnName("Time_Update");
        });

        modelBuilder.Entity<Staff>(entity =>
        {
            entity.HasKey(e => e.IdStaff).HasName("PK__Staff__3FD88B748C71086A");

            entity.Property(e => e.IdStaff)
                .HasMaxLength(10)
                .HasColumnName("Id_Staff");
            entity.Property(e => e.CitizenIdentification)
                .HasMaxLength(13)
                .HasColumnName("Citizen_Identification");
            entity.Property(e => e.Email).HasMaxLength(30);
            entity.Property(e => e.FullName)
                .HasMaxLength(30)
                .HasColumnName("Full_Name");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(30)
                .HasColumnName("Phone_Number");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
