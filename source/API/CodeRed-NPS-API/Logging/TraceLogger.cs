using System;

namespace CodeRed.NPS.API.Logging
{
    /// <inheritdoc />
    /// <summary>
    /// Windows Trace logger
    /// </summary>
    public class TraceLogger : ILogger
    {
        public TraceLogger()
        {
            System.Diagnostics.Trace.Listeners.Add(new System.Diagnostics.TextWriterTraceListener(Console.Out));
        }

        public void Error(string message)
        {
            System.Diagnostics.Trace.TraceError(message);
        }


        public void Information(string message)
        {
            System.Diagnostics.Trace.TraceInformation(message);
        }

        public void Warning(string message)
        {
            System.Diagnostics.Trace.TraceWarning(message);
        }

        public void Warning(string format, params object[] args)
        {
            System.Diagnostics.Trace.TraceWarning(format, args);
        }
    }
}