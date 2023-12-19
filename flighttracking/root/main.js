async function getFlightInfo() {
    const flightCode = document.getElementById('flightCode').value;
    const apiKey = 'ad0ed61e9093ff00fcfe3887902d6cd5'; // Replace with your AviationStack API key
    const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightCode}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const arrivalTime = data.data[0].arrival.estimated;
            document.getElementById('arrivalTime').innerText = `Estimated Arrival Time: ${arrivalTime}`;
        } else {
            document.getElementById('arrivalTime').innerText = 'Flight not found.';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}