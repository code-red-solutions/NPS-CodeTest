using System.Threading.Tasks;

namespace CodeRed.NPS.API.Service
{
	public interface IService
	{
		Task<string> DoWorkAsync();
	}
}