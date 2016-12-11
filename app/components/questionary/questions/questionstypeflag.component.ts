import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'questions-flag',
	templateUrl: 'app/components/questionary/questions/questionstypeflag.component.html',  
	styleUrls: ['app/components/questionary/questions.component.css'],
})

export class QuestionsTypeFlagComponent {
	@Input() question: string;
	@Input() varanswers: string[];
	@Output() onStart = new EventEmitter<any>();
	answer='';

	answerballoon=true;
	tick = true;
	writer = true;

	construrtor(){
	}

	addAnswers(answer: string){
		this.answer=this.answer + ', '+answer;
	}
    
    saveanswer(){
    let timeoutId1 = setTimeout(() => {  
      this.tick=false;
    }, 1000);
    let timeoutId2 = setTimeout(() => {  
      this.writer=false;
    }, 1500);
    let timeoutId3 = setTimeout(() => {  
      this.writer=true;
    }, 2500);
    let timeoutId4 = setTimeout(() => {  
      this.onStart.emit(this.answer);
    }, 3000);

  }
   

}