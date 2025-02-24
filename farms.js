document.addEventListener("DOMContentLoaded", function () {
    const farmTable = document.getElementById("farmTable");
    const farmForm = document.getElementById("farmForm");
    const farmsData = JSON.parse(localStorage.getItem("farms")) || [];

    function renderFarms() {
        farmTable.innerHTML = "";
        farmsData.forEach((farm, index) => {
            const row = `<tr>
                <td>${farm.name}</td>
                <td>${farm.owner}</td>
                <td>${farm.location}</td>
                <td>${farm.area}</td>
                <td>${farm.syNo}</td>
                <td><a href='https://meebhoomi.ap.gov.in/' target='_blank'>Meebhoomi</a></td>
                <td><button onclick="deleteFarm(${index})">Delete</button></td>
            </tr>`;
            farmTable.innerHTML += row;
        });
    }

    function addFarm(event) {
        event.preventDefault();
        const newFarm = {
            name: document.getElementById("farmName").value,
            owner: document.getElementById("ownerName").value,
            location: document.getElementById("location").value,
            area: document.getElementById("area").value,
            syNo: document.getElementById("syNo").value,
        };
        farmsData.push(newFarm);
        localStorage.setItem("farms", JSON.stringify(farmsData));
        renderFarms();
        farmForm.reset();
    }

    window.deleteFarm = function (index) {
        farmsData.splice(index, 1);
        localStorage.setItem("farms", JSON.stringify(farmsData));
        renderFarms();
    };

    farmForm.addEventListener("submit", addFarm);
    renderFarms();
});
