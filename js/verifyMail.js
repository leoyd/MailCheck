function verifyMail(mail) {
    var response = '';
    var url = 'https://www.signal-arnaques.com/?q=' + mail + '#search-container';
    console.log(url);
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (text) {
            response = text;
        }
    });
    console.log(response);
}