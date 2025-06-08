const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const textInput = document.getElementById("text-input");
const canvas = document.getElementById("qr-canvas");
const message = document.getElementById("success-message");
const logo = document.querySelector(".logo");
const footer = document.querySelector("footer");

generateBtn.addEventListener("click", function () {
  const text = textInput.value.trim();

  if (text === "") {
    alert("👀 ¡Hey! No me dejes el campo en blanco, que no soy adivino.");
    return;
  }

  // Ocultar logo y footer al generar el QR
  logo.style.display = "none";
  footer.style.display = "none";

  QRCode.toCanvas(canvas, text, {
    width: 220,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#FFFFFF"
    }
  }, function (error) {
    if (error) {
      console.error(error);
      alert("😵 ¡Rayos! Algo salió mal generando el QR...");
    } else {
      console.log("🎉 QR listo para conquistar el universo.");
      downloadBtn.disabled = false;
      message.style.display = "block";
    }
  });
});

downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = "qr.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
