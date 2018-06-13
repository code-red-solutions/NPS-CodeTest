using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CodeRed.NPS.API.ContextResolver.Attributes;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.API.Resolver;
using CodeRed.NPS.API.Service;
using CodeRed.NPS.Core.Entities;
using CodeRed.NPS.Core.Helpers;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Newtonsoft.Json;

namespace CodeRed.NPS.API.Functions
{
	[ContextResolver(typeof(AzureFunctionsResolver))]
	public class NPSSubmission
	{
		[FunctionName("NPSSubmission")]
		public static async Task<HttpResponseMessage> Run(
			[HttpTrigger(AuthorizationLevel.Anonymous, "POST")] HttpRequestMessage req,
            [Resolve] ILogger log,
			[Resolve] IService service)
		{

		    try
		    {
		        SubmissionDetails data;

		        try
                {
                    var content = await req.Content.ReadAsStringAsync();
		            data = JsonConvert.DeserializeObject<SubmissionDetails>(content);
		        }
		        catch (JsonReaderException ex)
		        {
		            log.Error($"{ex.GetType()} occured trying to deserialize the content: {ex.Message}");
		            return CreateResponseHelper.CreateErrorReponse(HttpStatusCode.BadRequest,
		                "Please check the validity of your submission and try again");
                }

		        var user = data.UserId ?? "None supplied";

                log.Information("Got the following submission....");
                log.Information($"UserId: {user}");
                log.Information($"Rating: {data.Rating}");
                log.Information($"Comment Question: '{data.CommentQuestion}'");
                log.Information($"Comment: '{data.Comment}'");

                var t = await service.DoWorkAsync();

		        return CreateResponseHelper.CreateReponse(HttpStatusCode.OK, t);

		    }
		    catch (Exception ex)
		    {
		        log.Error($"{ex.GetType()} occured trying to process the submission: {ex.Message}");
		        return CreateResponseHelper.CreateErrorReponse(HttpStatusCode.InternalServerError,
                    "An internal error has occured");
		    }

        }
	}
}