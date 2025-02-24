document.addEventListener("DOMContentLoaded", function () {
    const resourceForm = document.getElementById("resourceForm");
    const resourceTableBody = document.getElementById("resourceTableBody");

    function loadResources() {
        const resources = JSON.parse(localStorage.getItem("resources")) || [];
        resourceTableBody.innerHTML = "";
        resources.forEach((resource, index) => addResourceToTable(resource, index));
    }

    function addResourceToTable(resource, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${resource.name}</td>
            <td>${resource.location}</td>
            <td>${resource.skill}</td>
            <td>${resource.type}</td>
            <td>${resource.contact}</td>
            <td>${resource.rating}</td>
            <td><button onclick="deleteResource(${index})">❌ Delete</button></td>
        `;
        resourceTableBody.appendChild(row);
    }

    resourceForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const resourceData = {
            name: document.getElementById("resourceName").value,
            location: document.getElementById("resourceLocation").value,
            skill: document.getElementById("skill").value,
            type: document.getElementById("type").value,
            contact: document.getElementById("contact").value,
            rating: document.getElementById("rating").value
        };

        let resources = JSON.parse(localStorage.getItem("resources")) || [];
        resources.push(resourceData);
        localStorage.setItem("resources", JSON.stringify(resources));

        loadResources();
        resourceForm.reset();
    });

    window.deleteResource = function (index) {
        let resources = JSON.parse(localStorage.getItem("resources")) || [];
        resources.splice(index, 1);
        localStorage.setItem("resources", JSON.stringify(resources));
        loadResources();
    };

    loadResources();
});
