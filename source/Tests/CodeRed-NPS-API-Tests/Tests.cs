using System.Net.Http;
using System.Threading.Tasks;
using CodeRed.NPS.API.Functions;
using CodeRed.NPS.API.Service;
using Moq;
using NUnit.Framework;
using Should.Fluent;

namespace CodeRed.NPS.API.Tests
{
    [TestFixture]
    public class Tests
    {
        private readonly Mock<IService> _mockService = new Mock<IService>();

        [OneTimeSetUp]
        public void SetUp()
        {
            _mockService.Setup(m => m.DoWorkAsync()).Returns(Task.FromResult("Done"));
        }

        [Test]
        public void TestService()
        {
            var httpRequestMessage = new HttpRequestMessage();

            var response = SampleFunction.Run(httpRequestMessage, _mockService.Object);

            response.Result.Should().Equal("Done");

        }
    }
}
