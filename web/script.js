async function fetchSeats() {
  const res = await fetch('/status');
  const data = await res.json();
  const container = document.getElementById('seatContainer');
  container.innerHTML = "";

  Object.keys(data.seats).forEach(seatId => {
    const seat = data.seats[seatId];
    const card = document.createElement('div');

    let colorClass = "";
    if (seat.status === 'vacant') colorClass = 'vacant';
    else if (seat.status === 'occupied') colorClass = 'occupied';
    else if (seat.status === 'break') colorClass = 'break';
    else colorClass = 'unregistered';

    card.className = `seat-card ${colorClass}`;
    card.innerHTML = `
      Seat ${seatId.replace('seat', '')}<br>
      ${seat.user ? seat.user : ""}
    `;
    container.appendChild(card);
  });
}

fetchSeats();
setInterval(fetchSeats, 3000);
