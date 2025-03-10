using System.Threading.Tasks;
using Microsoft.Extensions.Options;

public class Startup
{
    public void ConfigureServices(IServiceCollection services, IConfigurationManager config)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddHttpClient<IApiClientService, ApiClientService>();
        
        services.AddScoped<ApiClientService>();
        services.AddScoped<ApiClientConfigService>();

        services.AddControllers();
        services.AddMvc();

        services.Configure<SourceUrlsOptions>(config.GetSection(SourceUrlsOptions.SourceUrls));
    }

    public void ConfigureLogging(ILoggingBuilder logging)
    {
        logging.ClearProviders();
        logging.AddConsole();
    }

    public void Configure(WebApplication app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Home/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.MapControllers();
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
    }

    public async void OnStartupAsync(WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var apiService = scope.ServiceProvider.GetRequiredService<ApiClientService>();
            var configService = scope.ServiceProvider.GetRequiredService<ApiClientConfigService>();
            
            var sourceUrls = configService.getSourceUrls();
            var data = await apiService.HttpGetAsync(sourceUrls["Collision"]);
        }
    }
}