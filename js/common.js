function checkExplorer() {
    var h5tag = document.getElementsByTagName("header");
    if (h5tag.length == 0) {
        var h5tags = "header,nav,article,section,aside,figure,figcaption,footer",
            h5tagGr = h5tags.split(",");
        for (h5t = 0; h5t < h5tagGr.length; h5t ++) {
            document.createElement(h5tagGr[h5t]);
        }
    } else {
        console.log("is supported");
    }
} 
checkExplorer();

var gete = {
    id: function (id) {
        return document.getElementById(id);
    },
    cs: function (cls) {
        var sib = document.getElementsByTagName("*"),
            hiscls = [];
        for (var sic = 0; sic < sib.length; sic ++) {
            if (sib[sic].className == cls) {
                hiscls.push(sib[sic]);
            }
        }
        return hiscls;
    },
    ts: function (tag) {
        return document.getElementsByTagName(tag);
    }
}
