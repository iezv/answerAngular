import { Component } from '@angular/core';

@Component({
	selector: 'questions',
	templateUrl: 'app/template/questions.component.html',
	styleUrls: ['app/style/questions.component.css']
})

export class QuestionsComponent {
	showHello = false;
	showQues1 = true;
	showQues2 = true;
	showQues3yes = true;
	showQues3no = true;
	showQues4 = true;
	showRes = true;
	showExit = true;
	
	answer: Answer;
	
	
	public showQuestion1(){
		this.showHello = true;
		this.showQues1 = false;
	}
	public showQuestion2(firstname: HTMLInputElement, 
		       lastname: HTMLInputElement, email:HTMLInputElement ){
		this.showQues1 = true;
		this.showQues2 = false;
		console.log(`Adding data firstname: ${firstname.value} and lastname: ${lastname.value} and email: ${email.value}`);
        this.answer = new Answer(firstname.value, lastname.value, email.value, null);
	}
	public showQuestion3(rad: string){
		this.showQues2 = true;
		this.showQues3yes = false;
		
	}
	public showQuestion4(){
		this.showQues3yes = true;
		this.showQues3no = true;
		this.showQues4 = false;
	}

	public result(){
		this.showRes = false;
		this.showQues4 = true;
	}

	public exit(){
		this.showRes = true;
		this.showExit = false;
	}

	
}

export class Answer {
	constructor(firstname:string, lastname:string, email: string, ansrers:string[]) {
	}
}


