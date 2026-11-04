// SHOW ONLY THE SELECTED PAGE

function showPage(pageId, selectedButton) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    // Update the active navigation button
    let buttons = document.querySelectorAll("nav button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    if (selectedButton) {
        selectedButton.classList.add("active");
    } else {
        buttons.forEach(function(button) {
            if (button.getAttribute("onclick").includes(pageId)) {
                button.classList.add("active");
            }
        });
    }

    // Create charts when the impact page is opened
    if (pageId === "impact") {
        createCharts();
    }
}


// CREATE THE GRAPHS

let chartsCreated = false;

function createCharts() {

    if (chartsCreated) {
        return;
    }

    // BAR CHART
    let barCanvas = document.getElementById("barChart");

    new Chart(barCanvas, {
        type: "bar",

        data: {
            labels: ["2023", "2024", "2025"],

            datasets: [{
                label: "Waste Collected (Tons)",
                data: [80, 110, 140],

                backgroundColor: [
                    "#078b19",
                    "#35c52b",
                    "#006b2e"
                ],

                borderRadius: 5
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    // PIE CHART
    let pieCanvas = document.getElementById("pieChart");

    new Chart(pieCanvas, {
        type: "pie",

        data: {
            labels: ["Yes", "No"],

            datasets: [{
                data: [75, 25],

                backgroundColor: [
                    "#078b19",
                    "#ff9800"
                ]
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });

    chartsCreated = true;
}



