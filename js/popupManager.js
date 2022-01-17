let checkMailActivation = Cookies.get("checkMailActivation");
let MailCheckSwitchElement = $('#MailCheckSwitch');
initMailCheckSwitch();
listenCheckMailActivation();

function initMailCheckSwitch()
{
    if (checkMailActivation == null) {
        Cookies.set("checkMailActivation", 1);
        chrome.action.setIcon({path: "resources/iconXS.png"})
    }

    if (checkMailActivation == 1) {
        chrome.action.setIcon({path: "/resources/iconXS.png"});
        MailCheckSwitchElement.attr("checked","checked");
    } else {
        MailCheckSwitchElement.removeAttr("checked");
        chrome.action.setIcon({path: "/resources/iconXS-alt.png"});
    }
}

function listenCheckMailActivation()
{
    $('#MailCheckSwitch').change(function () {
        if ($('#MailCheckSwitch').is(':checked')) {
            chrome.action.setIcon({path: "/resources/iconXS.png"});
            Cookies.set("checkMailActivation", 1);
        } else {
            Cookies.set("checkMailActivation", 0);
            chrome.action.setIcon({path: "/resources/iconXS-alt.png"});
        }
    });
}

