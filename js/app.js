function enviarWpp(){
    const numeroWhatsapp = 5491162092628;
    const mensaje = "Hola, me gustaría consultar la disponibilidad para una sesión fotográfica. Aquí están los detalles de mi evento:"
    "📅 Fecha del evento: ..."
    "📍 Lugar: ..."
    "📖 Tipo de sesión/evento: [Ej.: Boda, cumpleaños, sesión personal, etc.]";
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank")
}
