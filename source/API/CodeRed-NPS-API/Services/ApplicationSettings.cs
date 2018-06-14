using System.Configuration;

namespace CodeRed.NPS.API.Services
{
    public class ApplicationSettings : IApplicationSettings
    {
        public string EndPointUrl => ConfigurationManager.AppSettings["EndPointUrl"];
        public string PrimaryKey => ConfigurationManager.AppSettings["PrimaryKey"];
    }
}
