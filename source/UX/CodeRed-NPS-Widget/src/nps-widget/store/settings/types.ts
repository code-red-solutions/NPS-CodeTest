
export class AnswerRange {

  constructor()
  constructor(start: number, end: number, question: string)
  constructor(start?: number, end?: number, question?: string) {
    this.question = question;
    this.end = end;
    this.start = start;
  }

  question: string;
  end: number;
  start: number;

}

export class MiscSettings {

  constructor()
  constructor(widgetName: string, introductionStatement: string, mainQuestion: string, timeOutOnAnswer: number)
  constructor(widgetName?: string, introductionStatement?: string, mainQuestion?: string, timeOutOnAnswer?: number) {
    this.widgetName = widgetName;
    this.timeOutOnAnswer = timeOutOnAnswer;
    this.mainQuestion = mainQuestion;
    this.introductionStatement = introductionStatement;
  }

  widgetName: string;
  timeOutOnAnswer: number;
  mainQuestion: string;
  introductionStatement: string;

}

export class Settings {

  constructor(answerRanges: AnswerRange[], answerValues: number[], miscSettings: MiscSettings) {
    this.miscSettings = miscSettings;
    this.answerValues = answerValues;
    this.answerRanges = answerRanges;
  }

  answerValues: number[];
  answerRanges: AnswerRange[];
  miscSettings: MiscSettings;

}
