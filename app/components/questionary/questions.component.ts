import { Component, EventEmitter, ViewChild } from '@angular/core';
import { QuestionsTypeStarComponent }   from './questions/questionstypestar.component';
import { QuestionsTypeFieldComponent }   from './questions/questionstypefield.component';
import { QuestionsTypeFlagComponent }   from './questions/questionstypeflag.component';
import { QuestionsTypeRadioComponent }   from './questions/questionstyperadio.component';
import { QuestionsTypeStarComponent1 }   from './questions/questionstypestar1.component';
import { QuestionsTypeFieldComponent1 }   from './questions/questionstypefield1.component';
import { QuestionsTypeFlagComponent1 }   from './questions/questionstypeflag1.component';
import { QuestionsTypeRadioComponent1 }   from './questions/questionstyperadio1.component';


@Component({
	selector: 'questions',
	templateUrl: 'app/components/questionary/questions.component.html',
	styleUrls: ['app/components/questionary/questions.component.css'],
	
})


export class QuestionsComponent {

	answers: string[];

	questionfield1: string;
	questionfield2: string;
	questionstar1: string;
	questionstar2: string;
	questionflag1: string;
	questionflag2: string;
	questionradio1: string;
	questionradio2: string;

	varanswerflag1:string[];
	varanswerflag2:string[];
	varanswerradio1:string[];
	varanswerradio2:string[];

	visualhello = false;
	visualques1 = true;
	visualques2 = true;
	visualques3 = true;
	visualques4 = true;
	visualques5 = true;
	visualques6 = true;
	visualques7 = true;
	visualques8 = true;
	visualbye = true;
	
	constructor(){
		this.answers = [];
		this.questionfield1 = 'questionfield1';
		this.questionfield2 = 'questionfield2';
		this.questionstar1 = 'questionstar1';
		this.questionstar2 = 'questionstar2';
		this.questionflag1 = 'questionflag1';
		this.questionflag2 = 'questionflag2';
		this.questionradio1 = 'questionradio1';
		this.questionradio2 = 'questionradio2';	

		this.varanswerflag1 = ['answer1', 'answer2','ansrer3'];
		this.varanswerflag2 = ['answer1', 'answer2'];
		this.varanswerradio1 = ['answer1', 'answer2','ansrer3'];
		this.varanswerradio2 = ['answer1', 'answer2'];
	}

	@ViewChild(QuestionsTypeStarComponent)
	private starQuestion1: QuestionsTypeStarComponent;

	/* Question1 - star */
	startquestion1(): void{
		console.log('Start question1');
		this.visualques1 = false;
		let timeoutId1 = setTimeout(() => {  
			this.starQuestion1.answerballoon = false;
		}, 1000);
		
	}

	/* Question2 - field (bad) or flag (good) */
	@ViewChild(QuestionsTypeFieldComponent)
	private fieldQuestion1: QuestionsTypeFieldComponent;

	@ViewChild(QuestionsTypeFlagComponent)
	private flagQuestion1: QuestionsTypeFlagComponent;

	startquestion2(answer: number): void{
		console.log('Start question2');
		this.answers.push(this.starQuestion1.question+': '+answer);
		//console.log(this.answers);
		if(answer<3){
			let timeoutId1 = setTimeout(() => {  
				this.visualques2 = false;
			}, 1000);
			let timeoutId2 = setTimeout(() => {  
				this.fieldQuestion1.answerballoon = false;
			}, 2000);
		}
		else{
			let timeoutId1 = setTimeout(() => {  
				this.visualques3 = false;
			}, 1000);
			let timeoutId2 = setTimeout(() => {  
				this.flagQuestion1.answerballoon = false;
			}, 2000);
		}
	}

	/* Question3 - field (bad) */
	startquestion3(answer: string){
		console.log('Start question3');
		this.answers.push(this.fieldQuestion1.question+': '+answer);
		let timeoutId1 = setTimeout(() => {  
			this.visualques3 = false;
		}, 1000);
		let timeoutId2 = setTimeout(() => {  
			this.flagQuestion1.answerballoon = false;
		}, 2000);
	}

	/* Question4 - flag */
	@ViewChild(QuestionsTypeRadioComponent)
	private radioQuestion1: QuestionsTypeRadioComponent;

	startquestion4(answer: string){
		console.log('Start question4');
		this.answers.push(this.flagQuestion1.question+': '+answer);
		this.visualques4 = false;
		let timeoutId1 = setTimeout(() => {  
			this.radioQuestion1.answerballoon = false;
		}, 1000);
	}
	/* Question5 - star */
	@ViewChild(QuestionsTypeStarComponent1)
	private starQuestion2: QuestionsTypeStarComponent1;

	startquestion5(answer: string){
		console.log('Start question5');
		this.answers.push(this.radioQuestion1.question+': '+answer);
		this.visualques5 = false;
		let timeoutId1 = setTimeout(() => {  
			this.starQuestion2.answerballoon = false;
		}, 1000);
	}

	/* Question6 - field (bad) or flag (good) */
	@ViewChild(QuestionsTypeFieldComponent1)
	private fieldQuestion2: QuestionsTypeFieldComponent1;

	@ViewChild(QuestionsTypeFlagComponent1)
	private flagQuestion2: QuestionsTypeFlagComponent1;

	startquestion6(answer: number): void{
		console.log('Start question6');
		this.answers.push(this.starQuestion2.question+': '+answer);
		//console.log(this.answers);
		if(answer<3){
			let timeoutId1 = setTimeout(() => {  
				this.visualques6 = false;
			}, 1000);
			let timeoutId2 = setTimeout(() => {  
				this.fieldQuestion2.answerballoon = false;
			}, 2000);
		}
		else{
			let timeoutId1 = setTimeout(() => {  
				this.visualques7 = false;
			}, 1000);
			let timeoutId2 = setTimeout(() => {  
				this.flagQuestion2.answerballoon = false;
			}, 2000);
		}
	}
   
    /* Question7 - field (bad) */
	startquestion7(answer: string){
		console.log('Start question7');
		this.answers.push(this.fieldQuestion2.question+': '+answer);
		let timeoutId1 = setTimeout(() => {  
			this.visualques7 = false;
		}, 1000);
		let timeoutId2 = setTimeout(() => {  
			this.flagQuestion2.answerballoon = false;
		}, 2000);
	}

    /* Question8 - flag */
	@ViewChild(QuestionsTypeRadioComponent1)
	private radioQuestion2: QuestionsTypeRadioComponent1;

	startquestion8(answer: string){
		console.log('Start question8');
		this.answers.push(this.flagQuestion2.question+': '+answer);
		this.visualques8 = false;
		let timeoutId1 = setTimeout(() => {  
			this.radioQuestion2.answerballoon = false;
		}, 1000);
	}

    startend(answer: string){
		console.log('End questions');
		this.answers.push(this.radioQuestion2.question+': '+answer);
        console.log(this.answers);
		this.visualbye = false;
	}

	end(){
	this.visualhello = true;
    this.visualques1 = true;
	this.visualques2 = true;
	this.visualques3 = true;
	this.visualques4 = true;
	this.visualques5 = true;
	this.visualques6 = true;
	this.visualques7 = true;
	this.visualques8 = true;
	this.visualbye = true;
	}

	
}




