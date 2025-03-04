public interface IApiClientService
{
    Task<string> HttpGetAsync(string url);
}