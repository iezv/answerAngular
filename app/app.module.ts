import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { OnInit }        from '@angular/core';
import { AppComponent }   from './app.component';
import { HttpModule, Http, JsonpModule }    from  '@angular/http';
import { AnswerSeedData } from './shared/answers.data';
import { AnswerService } from './shared/answer.service';
import { QuestionnaryService } from './shared/questions.service';

import { QuestionsComponent }   from './components/questionary/questions.component';
import { QuestionListComponent }   from './components/questionary/questions/question-list.component';
import { QuestionComponent }   from './components/questionary/questions/question.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule,
                                    ],
  declarations: [ AppComponent, QuestionsComponent, QuestionListComponent, 
                  QuestionComponent ],
  providers:    [ AnswerService, QuestionnaryService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
