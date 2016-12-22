export interface IQuestionnary {
	 id: number;
	 title: string;
	 questions: IQuestion[];
	}

export interface IQuestion {
	 id: number;
	 title: string;
	 answers: IAnswer[];
}

export interface IAnswer {
	 id: number;
	 title: string;
	 nextQuestionIndex: number;
	 questionType: number;
}

export class Questionnary implements IQuestionnary {
	public id: number;
	public title: string;
	public questions: Question[];
        constructor(
          	id: number, title:string, 
          	questions: Question[]){
        	this.id = id; 
        	this.title = title;
        	this.questions = questions;
        }
  	}

export class Question implements IQuestion {
	public id: number;
	public title: string;
	public answers: Answer[];
	     constructor(
	     	id: number, title:string, 
	     	answers: Answer[]){
	     	this.id = id; 
        	this.title = title;
        	this.answers = answers;
	     }
}

export class Answer implements IAnswer {
	public id: number;
	public title: string;
	public nextQuestionIndex: number;
	public questionType: number;
	    constructor(
	    	id: number, title: string, 
	    	nextQuestionIndex: number, 
	    	questionType: number){
	    	this.id = id;
	    	this.nextQuestionIndex = nextQuestionIndex;
	    	this.title = title;
	    	this.questionType = questionType;
	    }
}
