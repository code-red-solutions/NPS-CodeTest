import Types = require('../store/settings/types');
import AnswerRange = Types.AnswerRange;

export interface IAnswerValueValidator {
  areRangesValid(answerRanges: AnswerRange[]): boolean;
}

export default class AnswerValuesCreator implements IAnswerValueValidator {
  areRangesValid(answerRanges: AnswerRange[]): boolean {
     throw new Error("Not implemented");
  }
}
