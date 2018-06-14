using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CodeRed.NPS.API.ContextResolver.Attributes;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.API.Resolver;
using CodeRed.NPS.API.Services;
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
			[HttpTrigger(AuthorizationLevel.Anonymous, "POST", "OPTIONS")] HttpRequestMessage req,
            [Resolve] ILogger log,
			[Resolve] IRepository repository)
		{

		    try
		    {
		        var feedbackId = string.Empty;

		        if (req.Method == HttpMethod.Post)
		        {
		            FeedbackSubmissionDetails data;
		            try
		            {
		                var content = await req.Content.ReadAsStringAsync();
		                data = JsonConvert.DeserializeObject<FeedbackSubmissionDetails>(content);
		            }
		            catch (JsonReaderException ex)
		            {
		                log.Error($"{ex.GetType()} occured trying to deserialize the content: {ex.Message}");
		                return CreateResponseHelper.CreateErrorReponse(HttpStatusCode.BadRequest,
		                    "Please check the validity of your submission and try again");
		            }

		            log.Information("Got the following submission....");
		            log.Information($"Rating: {data.Rating}");
		            log.Information($"Comment Question: '{data.SelectedAnswerRangeQuestion}'");
		            log.Information($"Comment: '{data.AnswerRangeQuestionResponse}'");

		            feedbackId = await repository.SaveFeedbackAsync(data);

		        }

                var response = CreateResponseHelper.CreateReponse(HttpStatusCode.OK, !string.IsNullOrEmpty(feedbackId) ? $"Saved the document with an id of '{feedbackId}'" : "");

                if (req.Headers.Contains("Origin"))
		        {
		            var origin = req.Headers.GetValues("Origin").FirstOrDefault();
                    response.Headers.Add("Access-Control-Allow-Credentials", "true");
		            response.Headers.Add("Access-Control-Allow-Origin", origin);
		            response.Headers.Add("Access-Control-Allow-Methods", "GET, OPTIONS");
                    response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
		        }

		        return response;

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