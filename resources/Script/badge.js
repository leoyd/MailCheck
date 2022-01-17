var search_in = document.body.innerHTML;
var string_context = search_in.toString();
var array_mails = $('.go');
$.each(array_mails, function () {
    this.insertAdjacentHTML('afterend', ' <span class="badging badging--{{ type }} badging--smaller">{{ type_label }}</span>');
});