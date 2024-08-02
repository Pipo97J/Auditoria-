function togglePaymentFields() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const creditCardFields = document.getElementById("creditCardFields");
    const paypalFields = document.getElementById("paypalFields");

    if (paymentMethod === "tarjeta_credito") {
        creditCardFields.style.display = "block";
        paypalFields.style.display = "none";
    } else {
        creditCardFields.style.display = "none";
        paypalFields.style.display = "block";
    }
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const paymentMethod = document.getElementById("paymentMethod").value;
    let paymentInfo = "";

    if (paymentMethod === "tarjeta_credito") {
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        paymentInfo = `Número de Tarjeta: ${cardNumber}\nFecha de Expiración: ${expiryDate}\nCVV: ${cvv}`;
    } else {
        const paypalEmail = document.getElementById("paypalEmail").value;
        const paypalPassword = document.getElementById("paypalPassword").value;

        paymentInfo = `Email de PayPal: ${paypalEmail}\nContraseña: ${paypalPassword}`;
    }

    alert(`Información de Pago:\n${paymentInfo}`);
});
