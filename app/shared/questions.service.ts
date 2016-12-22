import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class QuestionnaryService {
	//public static PATH:string = 'app/shared/';
	public static PATH:string = 'https://panel-repatriation.rhcloud.com/surveyuser/';

	
	constructor(private http: Http) {
		console.log('QuestionnaryService initializes...');
	}

	getQuestionnary(){
		return this.http.get(QuestionnaryService.PATH + 'getSurvey/smk2')
		       .map(res => res.json());
		 
		 //return this.http.get(QuestionnaryService.PATH + 'questionnary.json')
		   //  .map((res: Response) => res.json());
	}
}