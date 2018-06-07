using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CodeRed.NPS.API.Functions;
using CodeRed.NPS.API.Service;
using Moq;
using NUnit.Framework;
using Should.Fluent;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.Core.Helpers;

namespace CodeRed.NPS.API.Tests
{
    [TestFixture]
    public class Tests
    {
        private const string ContentWellFormed = "{ \"UserId\": \"Paul\",\t\"Rating\": 1, \"CommentQuestion\": \"What can we do to improve our service?\", \"Comment\": \"Listen to your customers!\" }";
        private const string ContentMalformed = "{ \"UserId\": \"Paul\"\t\"Rating\": 1, \"CommentQuestion\": \"What can we do to improve our service?\", \"Comment\": \"Listen to your customers!\" }";

        private readonly Mock<IService> _mockService = new Mock<IService>();
        private readonly Mock<ILogger> _loggerMock = new Mock<ILogger>();

        [OneTimeSetUp]
        public void SetUp()
        {
            _mockService.Setup(m => m.DoWorkAsync()).Returns(Task.FromResult("Done"));
        }

        [Test]
        public async Task TestServiceWellformed()
        {
            var httpRequestMessage = CreateRequestHelper.CreateRequest(ContentWellFormed);
            var response = await NPSSubmission.Run(httpRequestMessage, _loggerMock.Object, _mockService.Object).ConfigureAwait(false);
            response.StatusCode.Should().Equal(HttpStatusCode.OK);
        }

        [Test]
        public async Task TestServiceMalformed()
        {
            var httpRequestMessage = CreateRequestHelper.CreateRequest(ContentMalformed);
            var response = await NPSSubmission.Run(httpRequestMessage, _loggerMock.Object, _mockService.Object).ConfigureAwait(false);
            response.StatusCode.Should().Equal(HttpStatusCode.BadRequest);
        }


    }



}
