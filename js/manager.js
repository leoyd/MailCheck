class Manager {
    constructor() {
        this.checkMail();
        this.scamPredictorChecker = new ScamPredictorChecker();
    }

    renderLabel() {
        fetch('resources/Script/badge.js')
            .then((response) => response.text())
            .then((template) => {
                let code = Mustache.render(template, {type: 'danger', type_label: 'Danger'});
                chrome.scripting.executeScript({
                    injection: code //Execute le code stocké dans la variable
                });
            });
    }

    checkMail() {
        let $this = this;
        let value = null;
        console.log(Cookies.get("checkMailActivation"));
        if (Cookies.get("checkMailActivation") == 1) {
            console.log('test');
            chrome.scripting.executeScript({
                code: `$('.go').html();`
            }, (results) => {
                if (typeof results[0] !== null) {
                    let extractedEmail = results[0].replace('<span aria-hidden="true">&gt;</span>', '');
                    extractedEmail = extractedEmail.replace('<span aria-hidden="true">&lt;</span>', '');
                    $this.renderLabel();
                }
            });
        }
    }
}