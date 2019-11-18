var chatButtonsCollection;
var giftBtnCollection;

function main() {
    chatButtonsCollection = document.getElementsByClassName("chat-input__buttons-container tw-flex tw-justify-content-between tw-mg-t-1")
    if (chatButtonsCollection.length > 0) {
        giftBtnCollection = chatButtonsCollection[0].getElementsByClassName("tw-button tw-button--success tw-interactive");
        if (giftBtnCollection.length > 0) {
            giftBtnCollection[0].click();
            console.log("TTVGA clicked!");
        }
    }
}

setInterval(main, 1500);
console.log("TTVGA ready");
