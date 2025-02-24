document.addEventListener("DOMContentLoaded", function() {
    const farmsTableBody = document.getElementById("farmsTableBody");

    const farmsData = JSON.parse(localStorage.getItem("farms")) || [
        { name: "Farm-1", owner: "Pavan", location: "Devathapuram", area: "13.5 Acr", syNo: "120", link: "https://meebhoomi.ap.gov.in/" }
    ];

    function renderFarms() {
        farmsTableBody.innerHTML = "";
        farmsData.forEach((farm, index) => {
            const row = `<tr>
                <td>${farm.name}</td>
                <td>${farm.owner}</td>
                <td>${farm.location}</td>
                <td>${farm.area}</td>
                <td>${farm.syNo}</td>
                <td><a href="${farm.link}" target="_blank">Meebhoomi</a></td>
                <td><button onclick="deleteFarm(${index})">Delete</button></td>
            </tr>`;
            farmsTableBody.innerHTML += row;
        });
        localStorage.setItem("farms", JSON.stringify(farmsData));
    }

    document.getElementById("addFarmBtn").addEventListener("click", function() {
        const newFarm = { name: "New Farm", owner: "Owner", location: "Location", area: "0 Acr", syNo: "000", link: "https://meebhoomi.ap.gov.in/" };
        farmsData.push(newFarm);
        renderFarms();
    });

    window.deleteFarm = function(index) {
        farmsData.splice(index, 1);
        renderFarms();
    };

    renderFarms();
});
