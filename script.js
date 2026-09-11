document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '5491162519473'; // REEMPLAZAR con tu número (ej: 54911xxxxxxx)
  const waText = encodeURIComponent('Hola, quiero reservar la sesión piloto de Caminatas de acompañamiento.');
  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`;
  document.getElementById('cta-wa').href = waLink;
  document.getElementById('cta-wa-2').href = waLink;
  document.getElementById('footer-year').textContent = `${new Date().getFullYear()} Caminatas de acompañamiento y bienestar — Zona: Ezeiza, Esteban Echeverría y sudoeste GBA`;
});
