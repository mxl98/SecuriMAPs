/// <summary>
/// Represents the service for making calls to external APIs.
/// </summary>
/// <param name="httpClient">The HTTP client</param>
public class ApiClientService(HttpClient httpClient, ILogger<ApiClientService> logger) : IApiClientService
{
    private readonly HttpClient _httpClient = httpClient;
    private readonly ILogger<ApiClientService> _logger = logger;

    /// <summary>
    /// Sends an HTTP GET request to the speficied url asynchronously.
    /// </summary>
    /// <param name="url">The URL to send the GET request to.</param>
    /// <returns>The data as a string Task object.</returns>
    public async Task<string> HttpGetAsync(string url)
    {
        try 
        {
            _logger.LogInformation($"Fetching: {url}");
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var data = await response.Content.ReadAsStringAsync();
            return data;
        }
        catch (Exception e)
        {
            _logger.LogError($"Error while fetching {url}: {e.Message}");
        }
        return string.Empty;
    }
}