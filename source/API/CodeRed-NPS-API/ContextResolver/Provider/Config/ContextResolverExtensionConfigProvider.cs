using CodeRed.NPS.API.ContextResolver.Attributes;
using CodeRed.NPS.API.ContextResolver.Provider.Binding;
using Microsoft.Azure.WebJobs.Host.Config;

namespace CodeRed.NPS.API.ContextResolver.Provider.Config
{
	public class ContextResolverExtensionConfigProvider : IExtensionConfigProvider
	{
		private readonly ContextResolverBindingProdvider m_bindingProdvider;

		public ContextResolverExtensionConfigProvider()
		{
			m_bindingProdvider = new ContextResolverBindingProdvider();
		}

		public void Initialize(ExtensionConfigContext context)
		{
			context.AddBindingRule<ResolveAttribute>().Bind(m_bindingProdvider);
		}
	}
}