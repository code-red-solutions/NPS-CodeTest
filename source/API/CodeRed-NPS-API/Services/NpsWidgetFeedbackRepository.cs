using System;
using System.Threading.Tasks;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.Core.Entities;
using Microsoft.Azure.Documents.Client;

namespace CodeRed.NPS.API.Services
{
	public class NpsWidgetFeedbackRepository : IRepository
	{
		private readonly ILogger m_log;
	    private readonly IApplicationSettings _applicationSettings;

	    public NpsWidgetFeedbackRepository(ILogger log, IApplicationSettings applicationSettings)
	    {
	        m_log = log;
	        _applicationSettings = applicationSettings;
	    }

	    public async Task<string> SaveFeedbackAsync(IFeedbackSubmissionDetails feedbackSubmissionDetails)
	    {
	        m_log.Information("Saving the document");

	        var client = new DocumentClient(new Uri(_applicationSettings.EndPointUrl), _applicationSettings.PrimaryKey);

	        var resourceResponse = await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri("codered-nps-db-instance", "codered-nps-db-instance-feedback-collection"), feedbackSubmissionDetails);

            return resourceResponse.Resource.Id;
	    }
    }
}