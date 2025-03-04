var builder = WebApplication.CreateBuilder(args);

var startup = new Startup();
startup.ConfigureServices(builder.Services, builder.Configuration);
startup.ConfigureLogging(builder.Logging);

var app = builder.Build();
startup.Configure(app, app.Environment);
startup.OnStartupAsync(app);

app.Run();
