const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");


function generateQr() {

    if (qrText.value.trim() === "") {
        alert("Please enter text to generate QR code");
        return;
    }
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value.trim();
    qrText.value="";
    imgBox.classList.add("show-img");

}

btn.addEventListener("click", generateQr);