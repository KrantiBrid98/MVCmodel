
import Button from '../com/button';

export default class View {
    constructor() {
        this.q = {};
        this.ansCount = 0;
        this.mainContainer = document.createElement('div');
        this.mainContainer.setAttribute("id", "mainContainer");
        $("#mainWrapper").append(this.mainContainer);
    }

    currentQuestion(quest) {
        if ($('mainContainer')) {
            $("#mainContainer").remove();
            this.mainContainer = document.createElement('div');
            this.mainContainer.setAttribute("id", "mainContainer");
            $("#mainWrapper").append(this.mainContainer);
        }
        this.quest = quest;
        this.questionContainer = document.createElement('div');
        $(this.questionContainer)
            .attr("id", `questionContainer_${quest.id}`)
            .addClass("questionContainer")
            .html(quest.question);
        $("#mainContainer").append(this.questionContainer);

        (quest.option).forEach((element, i) => {
            let optionContainer = document.createElement('div');
            $(optionContainer)
                .attr("id", `optionContainer${i}`)
                .addClass("optionContainer")
                .html(element);
            $("#mainContainer").append(optionContainer);

            let radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            $(radioBtn)
                .attr({
                    "id": `radiobtn_${i}`,
                    "name": "element",
                    "value": element,

                })
                .addClass("radioBtn")

            if (this.quest.selected == $(radioBtn)[0].value) {
                $(radioBtn).prop("checked", true);
            }
            $("#mainContainer").append(radioBtn);
            (radioBtn).addEventListener("click", (e) => {
                this.setAns(e);
            });
        });

        this.createButton();
    }

    setAns(e) {
        if (e.target.value != this.quest.selected) {
            console.log("e.target", e.target.id)
            $(e.target.id).prop("checked", false)
            this.quest.selected = e.target.value
        }
    }

    ansCheck(qdata) {
        qdata.forEach((elem, i) => {
            console.log(elem.ans == elem.selected, elem.ans, elem.selected);
            if (elem.ans == elem.selected) {
                this.ansCount++;
            }
        })
        // this.ansCountCal(this.ansCount);
        console.log(this.ansCount)
        this.ansCount1 = this.ansCount
    }

    ansCountCal () {  
        console.log(this,"this.ansCount")
        return this.ansCount;
    }

    displayScore(score) {
        $("#mainContainer").remove();
        this.scoreContainer = document.createElement('div');
        this.scoreContainer.setAttribute("id", "scoreContainer");
        $("#mainWrapper").append(this.scoreContainer);
        let scoreText = document.createElement('div');
        $(scoreText)
            .attr("id", `scoreText`)
            .html(`YOUR SCORE IS ${score}/4`);
        $("#scoreContainer").append(scoreText);
    }

    createButton() {
        if (this.quest.next === "true") {
            this.button = new Button();
            let next = this.button.btn();
            $(next).html("NEXT").css("left", "197px");
            (next).addEventListener("click", (e) => {
                this.event ? this.event(e) : null;
            });
        }
        if (this.quest.previous === "true") {
            this.button = new Button();
            let previous = this.button.btn();
            $(previous).html("PREVIOUS").css("left", "30px");
            (previous).addEventListener("click", (e) => {
                this.event ? this.event(e) : null;
            });
        }
        if (this.quest.submit === "true") {
            this.button = new Button();
            let submit = this.button.btn();
            $(submit).html("SUBMIT").css("left", "367px");
            (submit).addEventListener("click", (e) => {
                this.event ? this.event(e) : null;
            });
        }
    }

    buttonAction(e, action) {
        this.event ? this.event(this) : null;
        this.action = action
    }

    addEventListner(fu, event) {
        this.event = event
    }
}