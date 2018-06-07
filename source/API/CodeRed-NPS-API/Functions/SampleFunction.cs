using System.Net.Http;
using System.Threading.Tasks;
using CodeRed.NPS.API.ContextResolver.Attributes;
using CodeRed.NPS.API.Resolver;
using CodeRed.NPS.API.Service;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

namespace CodeRed.NPS.API.Functions
{
	[ContextResolver(typeof(SampleResolver))]
	public class SampleFunction
	{
		[FunctionName("SampleFunction")]
		public static async Task<string> Run(
			[HttpTrigger(AuthorizationLevel.Anonymous, "GET")] HttpRequestMessage req,
			[Resolve] IService service)
		{
			return await service.DoWorkAsync();
		}
	}
}