import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IQuestionnary, IQuestion, IAnswer, Questionnary, Question, Answer } from '../../../shared/questionnary.model';

@Component({
	selector: 'question',
	templateUrl: 'app/components/questionary/questions/question.component.html',
	styleUrls: ['app/components/questionary/questions.component.css'],  
 })

export class QuestionComponent {
	question: Question;
	answers: Answer[];

	constructor(){
		this.question = new Question(1, 'Title1', [new Answer(1,'title1', 3, 2), new Answer(2,'title2', 4, 2)]);
	    this.answers = this.question.answers;
	}

   saveresult(){
       	}
	
}