
function init(keyHandler) {
    var ISWEB = true
    if (navigator.userAgent.substring(0, 4) == "OIPF" || navigator.appName == "AltiBrowser" || navigator.vendor.substring(0, 8) == "Alticast") {
        ISWEB = false;
    }
    if (!ISWEB) {
        var appMgrObj = oipfObjectFactory.createApplicationManagerObject();
        var selfApp = appMgrObj.getOwnerApplication(window.document);
        selfApp.onKeyDown = keyHandler;
        selfApp.activateInput(true);
    }
}