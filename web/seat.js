const urlParams = new URLSearchParams(window.location.search);
const seatId = urlParams.get("id") || "seat1";

document.getElementById("seatTitle").innerText = `Seat ${seatId.replace("seat", "")} - Login`;

async function updateStatus() {
  const res = await fetch('/status');
  const data = await res.json();
  const seat = data.seats
