import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Angular2AutoScroll } from 'angular2-auto-scroll/lib/angular2-auto-scroll.directive';


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

	showAnswer1 = true;
	showAnswer1bad = true;
	showAnswer2 = true;
	showAnswer2bad = true;
	
	pushstar1_2 = false;
	pushstar1_3 = false;
	pushstar1_4 = false;
	pushstar1_5 = false;

	pushstar2_2 = false;
	pushstar2_3 = false;
	pushstar2_4 = false;
	pushstar2_5 = false;

	writerhello = true;
	writer1 = true;
	writer1bad = true;
	writer2 = true;
	writer2bad = true;

	tick1 = true;
	tick2 = true;
	tick1bad = true;
	tick2bad = true;

	answers = new Answers();

	constructor() {
			
	}


	public showQuestion1(){
		let timeoutId1 = setTimeout(() => {  
			this.writerhello=false;
		}, 500);
        let timeoutId2 = setTimeout(() => {  
			this.showQues1=false;
		}, 2000);
		 let timeoutId3 = setTimeout(() => {  
			this.writerhello=true;
		}, 2000);
		 let timeoutId4 = setTimeout(() => {  
			this.showAnswer1=false;
		}, 3000);
	}

	public showQuestion1bad(){
        let timeoutId1 = setTimeout(() => {  
			this.tick1=false;
		}, 2000);
        let timeoutId2 = setTimeout(() => {  
			this.writer1=false;
		}, 3000);
        let timeoutId3 = setTimeout(() => {  
			this.writer1=true;
		}, 5000);
        let timeoutId4 = setTimeout(() => {  
			this.showQues1bad = false;
		}, 5000);
         let timeoutId5 = setTimeout(() => {  
			this.showAnswer1bad=false;
		}, 6000);

	}
	
	public showQuestion2(bad1:  HTMLInputElement){
		if(bad1==null){
			 let timeoutId1 = setTimeout(() => {  
			this.tick1=false;
		}, 2000);
		}
        let timeoutId1 = setTimeout(() => {  
			this.tick1bad=false;
		}, 2000);
        let timeoutId2 = setTimeout(() => {  
			this.writer1bad=false;
		}, 3000);
		let timeoutId3 = setTimeout(() => {  
			this.writer1bad=true;
		}, 5000);
		let timeoutId4 = setTimeout(() => {  
			this.showQues2 = false;
		}, 5000);
         let timeoutId5 = setTimeout(() => {  
			this.showAnswer2=false;
		}, 6000);

		if (bad1!=null){
			this.answers.answer1bad = bad1.value;
		}
	}


	public showQuestion2bad(){
        let timeoutId1 = setTimeout(() => {  
			this.tick2=false;
		}, 2000);
        let timeoutId2 = setTimeout(() => {  
			this.writer2=false;
		}, 3000);
        let timeoutId3 = setTimeout(() => {  
			this.writer2=true;
		}, 5000);
        let timeoutId4 = setTimeout(() => {  
			this.showQues2bad = false;
		}, 5000);
         let timeoutId5 = setTimeout(() => {  
			this.showAnswer2bad=false;
		}, 6000);
	}

	public exitandsave(bad2:  HTMLInputElement){
	 if(bad2==null){
		let timeoutId1 = setTimeout(() => {  
			this.tick2=false;
		}, 2000);}
	 
        let timeoutId1 = setTimeout(() => {  
			this.tick2bad=false;
		}, 2000);
        let timeoutId2 = setTimeout(() => {  
			this.writer2bad=false;
		}, 3000);
		let timeoutId3 = setTimeout(() => {  
			this.writer2bad=true;
		}, 5000);
		let timeoutId4 = setTimeout(() => {  
			this.exit = false;
		}, 5000);
         
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
		this.showAnswer1 = true;
		this.showAnswer2 = true;
		this.showAnswer1bad = true;
		this.showAnswer2bad = true;
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
}

export class Answers {
	public answer1: number;
	public answer1bad: string;
	public answer2: number;
	public answer2bad: string;
	constructor() {
	}
}




