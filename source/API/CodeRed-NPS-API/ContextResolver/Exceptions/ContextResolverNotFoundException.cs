using System;

namespace CodeRed.NPS.API.ContextResolver.Exceptions
{
	internal class ContextResolverNotFoundException : Exception
	{
		public ContextResolverNotFoundException(string parameterName)
			: base($"Couldn't find context resolver for {parameterName}")
		{
		}
	}
}