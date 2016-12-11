import { Component, EventEmitter, Input, Output} from '@angular/core';
import { QuestionsComponent }   from '../questions.component'; 

@Component({
	selector: 'questions-hello',
	templateUrl: 'app/components/questionary/questions/questionstypehello.component.html',
	styleUrls: ['app/components/questionary/questions.component.css'],  
 })

export class QuestionsTypeHelloComponent {
    writer = true;
    @Output() onStart = new EventEmitter<any>();

	startquestion(){
		console.log('start questions!');
		let timeoutId1 = setTimeout(() => {  
		   this.writer=false;
		}, 500);
		let timeoutId2 = setTimeout(() => {  
		   this.writer=true;
		}, 1500);
		let timeoutId3 = setTimeout(() => {  
		   this.onStart.emit();
		}, 1700);
	}
}