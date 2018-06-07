using System.Net;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;

namespace CodeRed.NPS.Core.Helpers
{
    public static class CreateResponseHelper
    {
        public static HttpResponseMessage CreateReponse(HttpStatusCode statusCode, string content)
        {
            var contentToSend = JsonConvert.SerializeObject(content);
            var request = new HttpResponseMessage

            {
                StatusCode = statusCode,
                Content = new StringContent(contentToSend, Encoding.UTF8, "application/json")
            };

            return request;
        }

        public static HttpResponseMessage CreateErrorReponse(HttpStatusCode statusCode, string message)
        {
            var request = new HttpResponseMessage

            {
                StatusCode = statusCode,
                Content = new StringContent(message, Encoding.UTF8, "application/text")
            };

            return request;
        }

    }
}
