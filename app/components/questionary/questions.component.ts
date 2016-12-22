import { Component, EventEmitter, ViewChild, OnInit, ElementRef, Input, Output} from '@angular/core';
import { QuestionnaryService } from './../../shared/questions.service';
import { IAnswers, Answers, AnswersSet, IAnswersSet  } from '../../shared/answers.model';
import { IQuestionnary, IQuestion, IAnswer, Questionnary, Question, Answer } from '../../shared/questionnary.model';
import { Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { QuestionComponent }   from './questions/question.component';
import { QuestionListComponent }   from './questions/question-list.component';


declare var jQuery: any;

@Component({
	selector: 'questions',
	templateUrl: 'app/components/questionary/questions.component.html',
	styleUrls: ['app/components/questionary/questions.component.css'],
	providers: [QuestionnaryService],
})

export class QuestionsComponent implements OnInit {
	answers = new Answers(false, new Array);
	questionnary: IQuestionnary;
	//questions: IQuestion[];
	
	constructor(private _elRef: ElementRef, 
		        private questionsservice: QuestionnaryService ){
		//this.questions = this.questionnary.questions;
		}
	
	ngOnInit():any{
		this.scrollList();
		this.questionsservice.getQuestionnary()
		.subscribe((questionnary:IQuestionnary) => {
		this.questionnary = questionnary; 
		return this.questionnary;	 
	   });
		console.log(this.questionnary);	

	}

	scrollList(){
		jQuery(this._elRef.nativeElement).find('div', 'button', 'p', 'a').on('click', function(){
			$("html, body").animate({scrollTop: $('html, body, div').get(0).scrollHeight}, 1000);
		});	
	}
}



