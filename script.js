function capture() {
  const quoteArea = document.getElementById("quote-area");
  html2canvas(quoteArea).then(canvas => {
    // إنشاء رابط للتنزيل
    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
