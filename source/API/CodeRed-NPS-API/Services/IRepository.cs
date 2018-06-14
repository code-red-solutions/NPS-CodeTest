using System.Threading.Tasks;
using CodeRed.NPS.Core.Entities;

namespace CodeRed.NPS.API.Services
{
	public interface IRepository
	{
		Task<string> SaveFeedbackAsync(IFeedbackSubmissionDetails feedbackSubmissionDetails);
	}
}