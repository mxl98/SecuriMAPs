
using Microsoft.Extensions.Options;

public class ApiClientConfigService(IOptions<SourceUrlsOptions> options) : IApiClientConfigService
{
    private readonly SourceUrlsOptions _options = options.Value;
    public Dictionary<string, string> getSourceUrls()
    {
        return new Dictionary<string, string>{
            {"Collision", _options.CollisionUrl},
        };
    }
}