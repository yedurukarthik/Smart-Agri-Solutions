document.addEventListener("DOMContentLoaded", function () {
    const farmForm = document.getElementById("farmForm");
    const farmTableBody = document.getElementById("farmTableBody");

    // Load existing farms from localStorage
    function loadFarms() {
        const farms = JSON.parse(localStorage.getItem("farms")) || [];
        farmTableBody.innerHTML = ""; // Clear table
        farms.forEach((farm, index) => addFarmToTable(farm, index));
    }

    // Add farm to the table
    function addFarmToTable(farm, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${farm.name}</td>
            <td>${farm.owner}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="https://meebhoomi.ap.gov.in/" target="_blank">View</a></td>
            <td><button onclick="deleteFarm(${index})">❌ Delete</button></td>
        `;
        farmTableBody.appendChild(row);
    }

    // Save farm details
    farmForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const farmData = {
            name: document.getElementById("farmName").value,
            owner: document.getElementById("ownerName").value,
            location: document.getElementById("location").value,
            area: document.getElementById("area").value,
            syNo: document.getElementById("syNo").value
        };

        let farms = JSON.parse(localStorage.getItem("farms")) || [];
        farms.push(farmData);
        localStorage.setItem("farms", JSON.stringify(farms));

        loadFarms(); // Refresh table
        farmForm.reset(); // Clear input fields
    });

    // Delete farm
    window.deleteFarm = function (index) {
        let farms = JSON.parse(localStorage.getItem("farms")) || [];
        farms.splice(index, 1);
        localStorage.setItem("farms", JSON.stringify(farms));
        loadFarms();
    };

    loadFarms(); // Load farms on page load
});
