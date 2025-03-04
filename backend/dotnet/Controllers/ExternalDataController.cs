using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Represents the controller fetching data.
/// </summary>
/// <param name="apiClientService">The injected ApiClientService</param>
[ApiController]
[Route("[controller]")]
public class ExternalDataController(IApiClientService apiClientService) : ControllerBase
{
    private readonly IApiClientService _apiClientService = apiClientService;

    /// <summary>
    /// Calls the service to get data from a specific URL
    /// </summary>
    /// <param name="url"></param>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> GetAtUrl(string url)
    {
        var data = await _apiClientService.HttpGetAsync(url);
        return Ok(data);
    }
}