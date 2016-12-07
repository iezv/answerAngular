import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { OnInit }        from '@angular/core';
import { NavigationEnd } from "@angular/router";
import { AppComponent }   from './app.component';
import { QuestionsComponent } from './questions.component';
import { Angular2AutoScroll } from 'angular2-auto-scroll/lib/angular2-auto-scroll.directive';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,

                                   ],
  declarations: [ AppComponent,
                  QuestionsComponent,
                 
                                   ],
  bootstrap:    [ AppComponent, 
                                   ]
})
export class AppModule { }
