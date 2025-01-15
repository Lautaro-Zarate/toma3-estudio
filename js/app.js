function enviarWpp(){
    const numeroWhatsapp = 5491162092628;
    const mensaje = "Hola, me interesaría saber los precios";
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank")
}
