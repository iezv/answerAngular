export interface IAnswers {
	allAnswers: boolean;
	answersSet: IAnswersSet[];
}

export interface IAnswersSet {
	id: number;
	idQuestion: number;
	idAnswers: number[];
	textField: string;
}

export class Answers implements IAnswers{
	public allAnswers: boolean;
	public answersSet: AnswersSet[];

	constructor(
		allAnswers: boolean,
	    answersSet: AnswersSet[]){
		this.allAnswers = allAnswers;
		this.answersSet = answersSet;
	}
}

export class AnswersSet implements IAnswersSet{
	public id: number;
	public idQuestion: number;
	public idAnswers: number[];
	public textField: string;

	constructor(id: number,
	            idQuestion: number,
	            idAnswers: number[],
	            textField: string){
		this.id = id;
	    this.idQuestion = idQuestion;
	    this.idAnswers = idAnswers;
	    this.textField = textField;
	}
}





