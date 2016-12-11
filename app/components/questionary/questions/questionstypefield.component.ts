import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'questions-field',
	templateUrl: 'app/components/questionary/questions/questionstypefield.component.html',  
	styleUrls: ['app/components/questionary/questions.component.css'],
})

export class QuestionsTypeFieldComponent {
	@Input() question: string;
	@Output() onStart = new EventEmitter<any>();
	answerballoon=true;
	tick = true;
	writer = true;

	construrtor(){
	}

	saveanswer(answer: string){
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
      this.onStart.emit(answer);
    }, 3000);

  }
	

}