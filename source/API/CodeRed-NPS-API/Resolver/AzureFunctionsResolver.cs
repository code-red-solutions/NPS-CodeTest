using CodeRed.NPS.API.ContextResolver.Interfaces;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.API.Services;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Azure.WebJobs.Host.Bindings;
using Microsoft.Practices.Unity;

namespace CodeRed.NPS.API.Resolver
{
	public class AzureFunctionsResolver : IContextResolver
	{
		private readonly IUnityContainer _container;

		public AzureFunctionsResolver()
		{
			_container = new UnityContainer();

			_container.RegisterType<IRepository, NpsWidgetFeedbackRepository>();
		    _container.RegisterType<ILogger, AzureFunctionLogger>();
		    _container.RegisterType<IApplicationSettings, ApplicationSettings>();

		}

		public T Resolve<T>(FunctionBindingContext context)
		{
			return _container.Resolve<T>(new DependencyOverride<TraceWriter>(context.Trace));
		}
	}
}