namespace CodeRed.NPS.API.Logging
{
    /// <inheritdoc />
    /// <summary>
    /// Azure Functions logger
    /// </summary>
    public class AzureFunctionLogger : ILogger
    {
        private static Microsoft.Azure.WebJobs.Host.TraceWriter _logger;

        public AzureFunctionLogger(Microsoft.Azure.WebJobs.Host.TraceWriter logger)
        {
            _logger = logger;
        }

        public void Error(string message)
        {
            _logger.Error(message);
        }

        public void Information(string message)
        {
            _logger.Info(message);
        }

        public void Warning(string message)
        {
            _logger.Warning(message);
        }
    }
}
