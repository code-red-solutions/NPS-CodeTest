
export class UserState {

  constructor()
  constructor(rating: number, selectedAnswerRangeQuestion: string, answerRangeQuestionResponse: string)
  constructor(rating?: number, selectedAnswerRangeQuestion?: string, answerRangeQuestionResponse?: string) {
    this.rating = rating;
    this.selectedAnswerRangeQuestion = selectedAnswerRangeQuestion;
    this.answerRangeQuestionResponse = answerRangeQuestionResponse;
  }

  rating: number;
  selectedAnswerRangeQuestion: string;
  answerRangeQuestionResponse: string;

}
