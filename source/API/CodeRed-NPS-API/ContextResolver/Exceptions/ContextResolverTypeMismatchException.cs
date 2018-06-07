using System;
using CodeRed.NPS.API.ContextResolver.Interfaces;

namespace CodeRed.NPS.API.ContextResolver.Exceptions
{
	public class ContextResolverTypeMismatchException : Exception
	{
		public ContextResolverTypeMismatchException(string typeName)
			: base($"Context resolver {typeName} was not of type {typeof(IContextResolver)}.")
		{
		}
	}
}