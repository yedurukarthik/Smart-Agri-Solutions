document.addEventListener("DOMContentLoaded", function() {
    const resourcesTableBody = document.getElementById("resourcesTableBody");

    const resourcesData = JSON.parse(localStorage.getItem("resources")) || [
        { name: "John", location: "Hyderabad", skill: "Plowing", type: "Labor", contact: "9876543210", rating: "5" }
    ];

    function renderResources() {
        resourcesTableBody.innerHTML = "";
        resourcesData.forEach((resource, index) => {
            const row = `<tr>
                <td>${resource.name}</td>
                <td>${resource.location}</td>
                <td>${resource.skill}</td>
                <td>${resource.type}</td>
                <td>${resource.contact}</td>
                <td>${resource.rating}</td>
                <td><button onclick="deleteResource(${index})">Delete</button></td>
            </tr>`;
            resourcesTableBody.innerHTML += row;
        });
        localStorage.setItem("resources", JSON.stringify(resourcesData));
    }

    document.getElementById("addResourceBtn").addEventListener("click", function() {
        const newResource = { name: "New Worker", location: "Unknown", skill: "Unknown", type: "Unknown", contact: "0000000000", rating: "0" };
        resourcesData.push(newResource);
        renderResources();
    });

    window.deleteResource = function(index) {
        resourcesData.splice(index, 1);
        renderResources();
    };

    renderResources();
});
