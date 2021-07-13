A simple script to autoclick the channel points gift button that occasionally shows up.

[Firefox extension.](https://addons.mozilla.org/en-US/firefox/addon/twitch-tv-gift-autoclicker/)

Tampermonkey:

```
// ==UserScript==
// @name         TTVGA
// @namespace    std KEKW
// @version      5
// @description  Clicks the gift button thingy.
// @author       github.com/loigom
// @match        *://www.twitch.tv/*
// ==/UserScript==

let giftBtnCollection, i;

function main() {
    giftBtnCollection = document.getElementsByTagName("button");
    for (i = 0; i < giftBtnCollection.length; i++) {
        if (giftBtnCollection[i].getAttribute("aria-label") === "Claim Bonus") {
            giftBtnCollection[i].click();
        }
    }
}

setInterval(main, 1500);
console.log("TTVGA ready");
```