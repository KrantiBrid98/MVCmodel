export default class Button {
    // constructor() { }

    btn() {
        let button = document.createElement("button");
        $(button).addClass('button')  
        $("#mainContainer").append(button);
        return button;
    };
}