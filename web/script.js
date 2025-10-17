const seatId = "seat1"; // or "seat2" depending on page

async function fetchSeats() {
  const res = await fetch('/status');
  const data = await res.json();
  const container = document.getElementById('seatContainer');
  container.innerHTML = "";

  Object.keys(data).forEach(seatId => {
    const seat = data[seatId];
    const card = document.createElement('div');
    let colorClass = "";

    if (seat.status === 'vacant') colorClass = 'vacant';
    else if (seat.status === 'occupied') colorClass = 'occupied';
    else if (seat.status === 'break') colorClass = 'break';
    else colorClass = 'unregistered';

    card.className = `seat-card ${colorClass}`;
    card.innerHTML = `Seat ${seatId.replace('seat', '')}<br>${seat.user ? seat.user : ""}`;
    container.appendChild(card);
  });
}

async function updateStatus() {
  const res = await fetch('/status');
  const data = await res.json();
  const seat = data[seatId];
  document.getElementById('seatStatus').innerText = seat.status;

  if (seat.status === 'vacant') {
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('controlBox').style.display = 'none';
  } else {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('controlBox').style.display = 'block';
  }
}

async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seatId, username, password })
  });
  const data = await res.json();
  document.getElementById("message").innerText = data.message;
  updateStatus();
}

async function logout() {
  const res = await fetch("/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seatId })
  });
  const data = await res.json();
  document.getElementById("message").innerText = data.message;
  updateStatus();
}

async function setBreak(minutes) {
  const res = await fetch("/break", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seatId, minutes })
  });
  const data = await res.json();
  document.getElementById("message").innerText = data.message;
  updateStatus();
}

fetchSeats();
updateStatus();
setInterval(fetchSeats, 3000);
setInterval(updateStatus, 3000);
