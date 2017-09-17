function autoPageReloader(time) {
    time = (typeof time !== 'undefined') ?  time : 3000;
    reloadTimeOut = setTimeout(function () {
        location.reload();
    }, time);
    window.onfocus = function () {
        clearTimeout(reloadTimeOut);
    };
    window.onblur = function() {
        reloadTimeOut = setTimeout(function () {
            location.reload();
        }, time);
    };
}
