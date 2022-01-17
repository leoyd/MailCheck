document.addEventListener("DOMContentLoaded", function () {
    try {
        importScripts("node_modules/jquery/dist/jquery.min.js",
            "node_modules/js-cookie/dist/js.cookie.min.js",
            "node_modules/mustache/mustache.js",
            "js/ScamPredictorChecker.js",
            "js/manager.js",
            "js/check.js");
    } catch
        (e) {
        console.log(e);
    }
});