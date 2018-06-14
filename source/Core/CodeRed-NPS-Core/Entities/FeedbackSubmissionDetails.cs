using Newtonsoft.Json;

namespace CodeRed.NPS.Core.Entities
{
    public class FeedbackSubmissionDetails : IFeedbackSubmissionDetails
    {
        [JsonProperty(PropertyName = "rating")]
        public int Rating { get; set; }

        [JsonProperty(PropertyName = "selectedAnswerRangeQuestion")]
        public string SelectedAnswerRangeQuestion { get; set; }

        [JsonProperty(PropertyName = "answerRangeQuestionResponse")]
        public string AnswerRangeQuestionResponse { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}