document.addEventListener('DOMContentLoaded', () => {
    fetchFoodData();
});

async function fetchFoodData() {
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/1EpWw_P5drSllN_AqHMup2fp6fJrx0G22iw2Jz4lKw0o/gviz/tq?tqx=out:json');
        const dataText = await response.text();
        const dataJson = JSON.parse(dataText.substring(47).slice(0, -2));
        displayFoodData(dataJson.table.rows);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

function displayFoodData(rows) {
    const foodList = document.getElementById('food-list');
    rows.forEach((row, index) => {
        if (index === 0) return; 

        const name = row.c[0]?.v;
        const type = row.c[1]?.v;
        const location = row.c[2]?.v;

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${name}</td><td>${type}</td><td>${location}</td>`;
        foodList.appendChild(tableRow);
    });
}

