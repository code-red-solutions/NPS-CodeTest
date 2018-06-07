using System;
using Microsoft.Azure.WebJobs.Description;

namespace CodeRed.NPS.API.ContextResolver.Attributes
{
	[AttributeUsage(AttributeTargets.Parameter)]
	[Binding]
	public class ResolveAttribute : Attribute
	{
	}
}