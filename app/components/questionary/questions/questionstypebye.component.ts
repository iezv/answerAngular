import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'questions-bye',
	templateUrl: 'app/components/questionary/questions/questionstypebye.component.html',
	styleUrls: ['app/components/questionary/questions.component.css'],  
 })

export class QuestionsTypeByeComponent {

    @Output() onStartEnd = new EventEmitter<any>();

	saveresult(){
       console.log('end questions!');
       let timeoutId1 = setTimeout(() => {  
		   this.onStartEnd.emit();
		}, 1700);
	}
	
}