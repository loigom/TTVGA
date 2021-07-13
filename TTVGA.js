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
