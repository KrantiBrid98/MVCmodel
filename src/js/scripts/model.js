
export default class Model {
    constructor() {

        this.data = {};
    }

    loadData() {
        let promise = new Promise((resolve) => {
            $.getJSON("config/data.json", function(_data) {
            }).done((_data) => {
                resolve(_data);
            })
        })
        promise.then((res) => {
            this.data = res;
        })
        return promise;

    }

}
