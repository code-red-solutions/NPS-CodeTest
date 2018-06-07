namespace CodeRed.NPS.API.Logging
{
    /// <summary>
    /// Generic logging interface for portability 
    /// </summary>
    public interface ILogger
    {
        void Error(string message);
        void Information(string message);
        void Warning(string message);
    }
}