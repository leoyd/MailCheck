class ScamPredictorChecker
{
    constructor() {
        let url = 'https://api.scampredictor.com/email/';
        let token = '';
    }

    analyseMail(mail)
    {
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('x-api-key', this.token);
            }
        });
        var response = '';
        let url = this.url + mail;
        let request = $.ajax({
            type: "GET",
            url: url,
            async: false,
        });

        request.done(function(data) {
                return data;
        })

        request.fail(function(jqXHR, textStatus ) {
            return false;
        })

    }
}