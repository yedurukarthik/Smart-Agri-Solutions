document.addEventListener("DOMContentLoaded", function() {
    const cropsTableBody = document.getElementById("cropsTableBody");

    const cropsData = JSON.parse(localStorage.getItem("crops")) || [
        { name: "Rice", density: "2000", plants: "5000", variety: "IR-64", date: "2024-01-10", days: "45" }
    ];

    function renderCrops() {
        cropsTableBody.innerHTML = "";
        cropsData.forEach((crop, index) => {
            const row = `<tr>
                <td>${crop.name}</td>
                <td>${crop.density}</td>
                <td>${crop.plants}</td>
                <td>${crop.variety}</td>
                <td>${crop.date}</td>
                <td>${crop.days}</td>
                <td><button onclick="deleteCrop(${index})">Delete</button></td>
            </tr>`;
            cropsTableBody.innerHTML += row;
        });
        localStorage.setItem("crops", JSON.stringify(cropsData));
    }

    document.getElementById("addCropBtn").addEventListener("click", function() {
        const newCrop = { name: "New Crop", density: "0", plants: "0", variety: "Unknown", date: "2024-02-01", days: "0" };
        cropsData.push(newCrop);
        renderCrops();
    });

    window.deleteCrop = function(index) {
        cropsData.splice(index, 1);
        renderCrops();
    };

    renderCrops();
});
