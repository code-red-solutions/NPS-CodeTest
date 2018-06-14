namespace CodeRed.NPS.Core.Entities
{
    public interface IFeedbackSubmissionDetails
    {
        string AnswerRangeQuestionResponse { get; set; }
        int Rating { get; set; }
        string SelectedAnswerRangeQuestion { get; set; }

        string ToString();
    }
}