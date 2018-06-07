using System.Net.Http;
using System.Text;

namespace CodeRed.NPS.Core.Helpers
{
    public static class CreateRequestHelper
    {
        public static HttpRequestMessage CreateRequest(string json)
        {
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                Content = new StringContent(json, Encoding.UTF8, "application/json")
            };

            return request;
        }
    }
}
