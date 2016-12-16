import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AnswerSeedData implements InMemoryDbService {
   createDb(){
   	let answers = [];
   	return { answers };
   }

	}