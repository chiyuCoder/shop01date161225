var bn = gete.id("banner"),
    bnImg = gete.id("bn_img"),
    bnPrv = gete.id("bn_prv"),
    bnNxt = gete.id("bn_nxt"),
    bnlis = bnImg.getElementsByTagName("li"),
    othercls = ["", "atx", "ary", "asxy", "asxy2"],
    nextOrder = 0;

function changePos() {
    var clsKind = Math.floor(Math.random() * othercls.length),
        clsk = othercls[clsKind];
    for (var chx = 0; chx < bnlis.length; chx ++) {
        if (bnlis[chx].className == "next") {
            bnlis[chx].className = "show " + clsk;
        } else {
            bnlis[chx].className = "hide " + clsk;
        }
    }
}

function changeCls(nxt) {
    for (var cx = 0; cx < bnlis.length; cx ++) {
        bnlis[cx].className = "";
    }
    bnlis[nxt].className = "next";
    setTimeout("changePos()", 10);
}

bnPrv.onclick = function () {
    nextOrder ++;
    var nxtli = Math.abs(nextOrder % bnlis.length);
    changeCls(nxtli);    
}

bnNxt.onclick = function () {
    nextOrder --;
    var nxtli = Math.abs(nextOrder % bnlis.length);
    changeCls(nxtli);
}