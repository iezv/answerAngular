import { Component, EventEmitter, Input, Output} from '@angular/core';
import { QuestionsComponent }   from '../questions.component'; 

@Component({
	selector: 'questions-star',
	templateUrl: 'app/components/questionary/questions/questionstypestar.component.html',  
	styleUrls: ['app/components/questionary/questions.component.css'],
})

export class QuestionsTypeStarComponent {
  @Input() question: string;
  @Output() onStart = new EventEmitter<any>();
  answerballoon=true;
  tick = true;
  writer = true;
 
  pushstar2 = false;
  pushstar3 = false;
  pushstar4 = false;
  pushstar5 = false;

  construrtor(){
  }

  pushstar(raiting: number){
    if (raiting==2){
      this.pushstar2 = true;
    }
    else if (raiting==3){
      this.pushstar2 = true;
      this.pushstar3 = true;
    }
    else if (raiting==4){
      this.pushstar2 = true;
      this.pushstar3 = true;
      this.pushstar4 = true;
    }
    else if (raiting==5){
      this.pushstar2 = true;
      this.pushstar3 = true;
      this.pushstar4 = true;
      this.pushstar5 = true;
    }
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
      this.onStart.emit(raiting);
    }, 3000);

  }

}