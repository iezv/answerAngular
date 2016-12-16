import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnswerService{
	private apiUrl = 'api/answers';

	constructor(private http: Http){
		console.log('AnswerService initializes...');
	}

	addAnswers(answers: string[]): Promise<string[]> {
        console.log ('Add answers to server:');
     //   console.log(answers);
        return  this.post(answers);
    }

     private post(answers: string[]): Promise<string[]> {
        let body = JSON.stringify(answers);
            console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
            .toPromise()
            .then(res => answers)
            .catch(this.handleError)
    }

     private handleError(error: any): Promise<any> {
        console.log('ERROR', error);
        return Promise.reject(error.message || error);
    }


}


