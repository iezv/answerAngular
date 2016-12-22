import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IAnswers } from './answers.model';
import { IQuestionnary } from './questionnary.model';

@Injectable()
export class AnswerService{
	private apiUrl_quest = 'https://panel-repatriation.rhcloud.com/surveyuser/';
    
    private apiUrl_answer = 'api/sendExecutedSurvey';

	constructor(private http: Http){
		console.log('AnswerService initializes...');
	}

	addAnswers(answers: IAnswers): Promise<IAnswers> {
        console.log ('Add answers to server:');
     //   console.log(answers);
        return  this.post(answers);
    }

    getQuestionnary(): Promise<IQuestionnary>{
        return this.http.get(this.apiUrl_quest+'getSurvey/smk2')
            .toPromise()
           //.then(res => res.json())
            .then(res => res.json().data)
            .catch(this.handleError);
    }

     private post(answers: IAnswers): Promise<IAnswers> {
        let body = JSON.stringify(answers);
            console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl_answer, body, options)
            .toPromise()
            .then(res => answers)
            .catch(this.handleError)
    }

     private handleError(error: any): Promise<any> {
        console.log('ERROR', error);
        return Promise.reject(error.message || error);
    }


}


