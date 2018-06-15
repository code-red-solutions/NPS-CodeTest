using System.Net;
using System.Threading.Tasks;
using CodeRed.NPS.API.Functions;
using CodeRed.NPS.API.Services;
using Moq;
using NUnit.Framework;
using Should.Fluent;
using CodeRed.NPS.API.Logging;
using CodeRed.NPS.Core.Entities;
using CodeRed.NPS.Core.Helpers;

namespace CodeRed.NPS.API.Tests
{
    [TestFixture]
    public class Tests
    {
        private const string ContentWellFormed = "{ \"UserId\": \"Paul\",\t\"Rating\": 1, \"CommentQuestion\": \"What can we do to improve our service?\", \"Comment\": \"Listen to your customers!\" }";
        private const string ContentMalformed = "{ \"UserId\": \"Paul\"\t\"Rating\": 1, \"CommentQuestion\": \"What can we do to improve our service?\", \"Comment\": \"Listen to your customers!\" }";

        private readonly Mock<IRepository> _repositoryMock = new Mock<IRepository>();
        private readonly Mock<ILogger> _loggerMock = new Mock<ILogger>();
        // private readonly Mock<IFeedbackSubmissionDetails> _feedbackSumbissionMock = new Mock<IFeedbackSubmissionDetails>();

        [OneTimeSetUp]
        public void SetUp()
        {
            _repositoryMock.Setup(m => m.SaveFeedbackAsync(It.IsAny<IFeedbackSubmissionDetails>())).Returns(Task.FromResult("Done"));
        }

        [Test]
        public async Task TestServiceWellformed()
        {
            var httpRequestMessage = CreateRequestHelper.CreateRequest(ContentWellFormed);
            var response = await NPSSubmission.Run(httpRequestMessage, _loggerMock.Object, _repositoryMock.Object).ConfigureAwait(false);
            response.StatusCode.Should().Equal(HttpStatusCode.OK);
        }

        [Test]
        public async Task TestServiceMalformed()
        {
            var httpRequestMessage = CreateRequestHelper.CreateRequest(ContentMalformed);
            var response = await NPSSubmission.Run(httpRequestMessage, _loggerMock.Object, _repositoryMock.Object).ConfigureAwait(false);
            response.StatusCode.Should().Equal(HttpStatusCode.BadRequest);
        }


    }



}
