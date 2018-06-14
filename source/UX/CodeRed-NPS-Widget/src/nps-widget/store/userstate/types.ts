import Actions = require('./actions');
import PageStateKeys = Actions.PageStateKeys;

export class UserState {

  constructor()
  constructor(pageState: PageStateKeys, rating: number, selectedAnswerRangeQuestion: string, answerRangeQuestionResponse: string)
  constructor(pageState: PageStateKeys, rating?: number, selectedAnswerRangeQuestion?: string, answerRangeQuestionResponse?: string)
  constructor(pageState?: PageStateKeys, rating?: number, selectedAnswerRangeQuestion?: string, answerRangeQuestionResponse?: string) {
    this.rating = rating;
    this.selectedAnswerRangeQuestion = selectedAnswerRangeQuestion;
    this.answerRangeQuestionResponse = answerRangeQuestionResponse;
    this.pageState = pageState;
  }

  rating: number;
  selectedAnswerRangeQuestion: string;
  answerRangeQuestionResponse: string;
  pageState: PageStateKeys;
}
