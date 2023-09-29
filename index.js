html2canvas(document.querySelector("#capture")).then(canvas => {
    document.querySelector(".left").appendChild(canvas);
});