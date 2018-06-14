using System;
using System.Configuration;
using System.Threading.Tasks;
using CodeRed.NPS.Core.Entities;
using Microsoft.Azure.WebJobs.Host;
using CodeRed.NPS.API.Services;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;

namespace CodeRed.NPS.API.Services
{
	public class NpsWidgetFeedbackRepository : IRepository
	{
		private readonly TraceWriter m_log;
	    private readonly IApplicationSettings _applicationSettings;

	    public NpsWidgetFeedbackRepository(TraceWriter log, IApplicationSettings applicationSettings)
	    {
	        m_log = log;
	        _applicationSettings = applicationSettings;
	    }

	    public async Task<string> SaveFeedbackAsync(IFeedbackSubmissionDetails feedbackSubmissionDetails)
	    {
	        m_log.Info("Saving the document");

	        var client = new DocumentClient(new Uri(_applicationSettings.EndPointUrl), _applicationSettings.PrimaryKey);

	        var resourceResponse = await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri("codered-nps-db-instance", "codered-nps-db-instance-feedback-collection"), feedbackSubmissionDetails);

            return resourceResponse.Resource.Id;
	    }
    }
}