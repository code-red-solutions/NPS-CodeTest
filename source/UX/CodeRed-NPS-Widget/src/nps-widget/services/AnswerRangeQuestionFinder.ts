import Types = require('../store/settings/types');
import AnswerRange = Types.AnswerRange;
import * as _ from 'lodash';

export interface IAnswerRangeQuestionFinder {
  findAnswerRangeByRangeValue(answerRanges: AnswerRange[], rangeValue): AnswerRange;
}

export class AnswerRangeQuestionFinder implements IAnswerRangeQuestionFinder {
  findAnswerRangeByRangeValue(answerRanges: Types.AnswerRange[], rangeValue: number): Types.AnswerRange {
    // ReSharper disable once TsResolvedFromInaccessibleModule
    return _.find(answerRanges, (answerRange) => {
      return answerRange.start <= rangeValue && rangeValue <= answerRange.end;
    });
  }
}


