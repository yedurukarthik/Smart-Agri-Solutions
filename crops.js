document.addEventListener("DOMContentLoaded", function () {
    const cropForm = document.getElementById("cropForm");
    const cropTableBody = document.getElementById("cropTableBody");

    function loadCrops() {
        const crops = JSON.parse(localStorage.getItem("crops")) || [];
        cropTableBody.innerHTML = "";
        crops.forEach((crop, index) => addCropToTable(crop, index));
    }

    function addCropToTable(crop, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${crop.name}</td>
            <td>${crop.density}</td>
            <td>${crop.plants}</td>
            <td>${crop.variety}</td>
            <td>${crop.date}</td>
            <td>${crop.days}</td>
            <td><button onclick="deleteCrop(${index})">❌ Delete</button></td>
        `;
        cropTableBody.appendChild(row);
    }

    cropForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const cropData = {
            name: document.getElementById("cropName").value,
            density: document.getElementById("density").value,
            plants: document.getElementById("plants").value,
            variety: document.getElementById("variety").value,
            date: document.getElementById("plantedDate").value,
            days: document.getElementById("days").value
        };

        let crops = JSON.parse(localStorage.getItem("crops")) || [];
        crops.push(cropData);
        localStorage.setItem("crops", JSON.stringify(crops));

        loadCrops();
        cropForm.reset();
    });

    window.deleteCrop = function (index) {
        let crops = JSON.parse(localStorage.getItem("crops")) || [];
        crops.splice(index, 1);
        localStorage.setItem("crops", JSON.stringify(crops));
        loadCrops();
    };

    loadCrops();
});
