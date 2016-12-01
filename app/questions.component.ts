import { Component } from '@angular/core';

@Component({
	selector: 'questions',
	templateUrl: 'app/template/questions.component.html',
	styleUrls: ['app/style/questions.component.css']
})

export class QuestionsComponent {
	showHello = false;
	showQues1 = true;
	showQues1bad = true;
	showQues2 = true;
	showQues2bad = true;

	pushstar1_2 = false;
	pushstar1_3 = false;
	pushstar1_4 = false;
	pushstar1_5 = false;

	pushstar2_2 = false;
	pushstar2_3 = false;
	pushstar2_4 = false;
	pushstar2_5 = false;

	exit = true;
		
	public showQuestion1(){
		this.showQues1 = false;
	}

	public showQuestion1bad(){
		this.showQues1bad = false;
	}
	
    public showQuestion2(){
		this.showQues2 = false;
	}

    public showQuestion2bad(){
        this.showQues2bad = false;
	}
    
    public exitandsave(){
        this.exit = false;
	}
	
    public pushstar_1_2(){
     this.pushstar1_2 = true;
     this.showQuestion1bad();
    }

    public pushstar_1_3(){
     this.pushstar1_2 = true;
     this.pushstar1_3 = true;
     this.showQuestion1bad();
    }
    public pushstar_1_4(){
     this.pushstar1_2 = true;
     this.pushstar1_3 = true;
     this.pushstar1_4 = true;
     this.showQuestion2();
    }
    public pushstar_1_5(){
     this.pushstar1_2 = true;
     this.pushstar1_3 = true;
     this.pushstar1_4 = true;
     this.pushstar1_5 = true;
     this.showQuestion2();
    }

    public pushstar_2_2(){
     this.pushstar2_2 = true;
     this.showQuestion2bad();
    }

    public pushstar_2_3(){
     this.pushstar2_2 = true;
     this.pushstar2_3 = true;
     this.showQuestion2bad();
    }
    public pushstar_2_4(){
     this.pushstar2_2 = true;
     this.pushstar2_3 = true;
     this.pushstar2_4 = true;
     this.exitandsave();
    }
    public pushstar_2_5(){
     this.pushstar2_2 = true;
     this.pushstar2_3 = true;
     this.pushstar2_4 = true;
     this.pushstar2_5 = true;
     this.exitandsave();
    }
}


