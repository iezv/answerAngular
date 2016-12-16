import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { OnInit }        from '@angular/core';
import { AppComponent }   from './app.component';
import { HttpModule, Http, JsonpModule }    from  '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AnswerSeedData } from './shared/answers.data';
import { AnswerService } from './shared/answer.service';

import { QuestionsComponent }   from './components/questionary/questions.component';
import { QuestionsTypeHelloComponent }   from './components/questionary/questions/questionstypehello.component';
import { QuestionsTypeStarComponent }   from './components/questionary/questions/questionstypestar.component';
import { QuestionsTypeFieldComponent }   from './components/questionary/questions/questionstypefield.component';
import { QuestionsTypeRadioComponent }   from './components/questionary/questions/questionstyperadio.component';
import { QuestionsTypeFlagComponent }   from './components/questionary/questions/questionstypeflag.component';
import { QuestionsTypeStarComponent1 }   from './components/questionary/questions/questionstypestar1.component';
import { QuestionsTypeFieldComponent1 }   from './components/questionary/questions/questionstypefield1.component';
import { QuestionsTypeRadioComponent1 }   from './components/questionary/questions/questionstyperadio1.component';
import { QuestionsTypeFlagComponent1 }   from './components/questionary/questions/questionstypeflag1.component';
import { QuestionsTypeByeComponent }   from './components/questionary/questions/questionstypebye.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule,
                  InMemoryWebApiModule.forRoot(AnswerSeedData)],
  declarations: [ AppComponent, QuestionsComponent,
                  QuestionsTypeHelloComponent, QuestionsTypeStarComponent, QuestionsTypeFieldComponent,
                  QuestionsTypeRadioComponent,  QuestionsTypeFlagComponent, QuestionsTypeByeComponent,
                  QuestionsTypeStarComponent1, QuestionsTypeFieldComponent1, QuestionsTypeRadioComponent1,  
                  QuestionsTypeFlagComponent1],
  providers:   [ AnswerService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
