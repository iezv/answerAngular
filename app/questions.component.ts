import { Component } from '@angular/core';
import { Angular2AutoScroll } from '../directives/angular2-auto-scroll.directive';

@Component({
	selector: 'questions',
	templateUrl: 'app/template/questions.component.html',
	styleUrls: ['app/style/questions.component.css'],


})

export class QuestionsComponent {
	showHello = false;
	showQues1 = true;
	showQues1bad = true;
	showQues2 = true;
	showQues2bad = true;
	exit = true;
		
	pushstar1_2 = false;
	pushstar1_3 = false;
	pushstar1_4 = false;
	pushstar1_5 = false;

	pushstar2_2 = false;
	pushstar2_3 = false;
	pushstar2_4 = false;
	pushstar2_5 = false;

	answers = new Answers();

	constructor(){
	}


	public showQuestion1(){
		this.showQues1 = false;
	}

	public showQuestion1bad(){
		this.showQues1bad = false;
	}
	
	public showQuestion2(bad1:  HTMLInputElement){
		this.showQues2 = false;
		if (bad1!=null){
			this.answers.answer1bad = bad1.value;
		}
	}

	public showQuestion2bad(){
		this.showQues2bad = false;
	}

	public exitandsave(bad2:  HTMLInputElement){
		this.exit = false;
		if (bad2!=null){
			this.answers.answer2bad = bad2.value;
		}
		console.log(this.answers);//JSON

	}
	public exitbay(){
		this.exit = true;
		this.showHello = true;
		this.showQues1 = true;
		this.showQues1bad = true;
		this.showQues2 = true;
		this.showQues2bad = true;
		this.exit = true;
	}
	
	public pushstar_1_1(){
		this.answers.answer1=1;
		this.showQuestion1bad();
		
	}

	public pushstar_1_2(){
		this.pushstar1_2 = true;
		this.answers.answer1=2;
		this.showQuestion1bad();
	}

	public pushstar_1_3(){
		this.pushstar1_2 = true;
		this.pushstar1_3 = true;
		this.answers.answer1=3;
		this.showQuestion2(null);
	}
	public pushstar_1_4(){
		this.pushstar1_2 = true;
		this.pushstar1_3 = true;
		this.pushstar1_4 = true;
		this.answers.answer1=4;
		this.answers.answer1bad="No comment";
		this.showQuestion2(null);
	}
	public pushstar_1_5(){
		this.pushstar1_2 = true;
		this.pushstar1_3 = true;
		this.pushstar1_4 = true;
		this.pushstar1_5 = true;
		this.answers.answer1=5;
		this.answers.answer1bad="No comment";
		this.showQuestion2(null);
	}

	public pushstar_2_1(){
		this.answers.answer2=1;
		this.showQuestion2bad();
	}

	public pushstar_2_2(){
		this.answers.answer2=2;
		this.pushstar2_2 = true;
		this.showQuestion2bad();
	}

	public pushstar_2_3(){
		this.answers.answer2=3;	
		this.pushstar2_2 = true;
		this.pushstar2_3 = true;
		this.exitandsave(null);
	}
	public pushstar_2_4(){
		this.answers.answer2=4;
		this.answers.answer2bad="No comment";	
		this.pushstar2_2 = true;
		this.pushstar2_3 = true;
		this.pushstar2_4 = true;
		this.exitandsave(null);
	}
	public pushstar_2_5(){
		this.answers.answer2=5;
		this.answers.answer2bad="No comment";
		this.pushstar2_2 = true;
		this.pushstar2_3 = true;
		this.pushstar2_4 = true;
		this.pushstar2_5 = true;
		this.exitandsave(null);
	}

	public sleep(millis) {
		var t = (new Date()).getTime();
		var i = 0;
		while (((new Date()).getTime() - t) < millis) {
			i++;
		}
	}
}

export class Answers {
	public answer1: number;
	public answer1bad: string;
	public answer2: number;
	public answer2bad: string;
	constructor() {
	}
}




