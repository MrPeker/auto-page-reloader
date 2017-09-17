function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function autoPageReloader(time) {
    var scrollTop = getCookie('scrollTop');
    if(scrollTop) {
        window.scrollTop = scrollTop;
    }
    time = (typeof time !== 'undefined') ?  time : 3000;
    reloadTimeOut = setTimeout(function () {
        var doc = document.documentElement;
        var scrollTopValue = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        deleteCookie('scrollTop');
        setCookie('scrollTop', scrollTopValue);
        location.reload();
    }, time);
    window.onfocus = function () {
        clearTimeout(reloadTimeOut);
    };
    window.onblur = function() {
        reloadTimeOut = setTimeout(function () {
            var doc = document.documentElement;
            var scrollTopValue = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            deleteCookie('scrollTop');
            setCookie('scrollTop', scrollTopValue);
            location.reload();
        }, time);
    };
}