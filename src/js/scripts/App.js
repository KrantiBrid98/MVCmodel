import Model from './model';
import View from './view';
export default class APP {
    constructor() {
        let data
        this.model = new Model();
        this.view = new View();
        this.view.addEventListner("update", this.buttonControl.bind(this))
        this.init();
        this.questionNo = 0;
    }


    init() {
        this.model.loadData().then((d) => {
            this.data = d;
            this.setQuestion(this.data[this.questionNo])
        })
    }

    setQuestion(obj) {
        this.view.currentQuestion(obj);
    }

    buttonControl(e) {
        switch (e.target.innerHTML) {
            case "NEXT":
                this.questionNo = this.questionNo + 1
                this.setQuestion(this.data[this.questionNo])
                break;
            case "PREVIOUS":
                this.questionNo = this.questionNo - 1
                this.setQuestion(this.data[this.questionNo])
                this.view
                break;
            case "SUBMIT":
                this.finalScore = this.view.ansCount
                console.log("this.finalScore",this.view)
                this.view.displayScore(this.finalScore)
                this.view.ansCheck(this.data)
                break;
        }
    }


}

let shape = new APP();