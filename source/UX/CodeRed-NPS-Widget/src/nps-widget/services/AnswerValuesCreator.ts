
export interface IAnswerValuesCreator {
  getValues(start: number, end: number): number[];
}

export default class AnswerValuesCreator implements IAnswerValuesCreator {
  getValues(start: number, end: number): number[] {
    const answerValues = new Array<number>();
    for (let i = start; i < end + 1; i++) {
      answerValues.push(i);
    }
    return answerValues;
  }
}
