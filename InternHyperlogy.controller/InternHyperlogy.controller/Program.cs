using InternHyperlogy.business.Services;
using InternHyperlogy.DAL.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Đăng kí các Service
builder.Services.AddScoped<IPropertyService, PropertyService>();
builder.Services.AddScoped<IStaffService, StaffService>();

//Đăng kí các Respository
builder.Services.AddScoped<IPropertyRepository, PropertyRepository>();
builder.Services.AddScoped<IStaffRepository, StaffRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
