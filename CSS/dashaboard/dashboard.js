// ================================
// SIDEBAR TOGGLE
// ================================

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

menu.addEventListener("click", function () {

    sidebar.classList.toggle("hide-sidebar");

});

// ================================
// TABS
// ================================

const tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        // Remove active class
        tabs.forEach(function (item) {
            item.classList.remove("active-tab");
        });

        // Add active class to clicked tab
        tab.classList.add("active-tab");

        alert("You selected: " + tab.innerText);

    });

});

// ================================
// ADD CHART
// ================================

const addChartButton = document.querySelector(".add-chart");
const contentArea = document.querySelector(".content");

addChartButton.addEventListener("click", function () {

    const newChart = document.createElement("div");

    newChart.className = "chart-box new-chart";

    newChart.innerHTML = `
        <div class="chart-header">

            <div>
                <h3>New Chart</h3>
                <p>Newly added performance chart</p>
            </div>

            <button class="remove-chart">✕</button>

        </div>

        <div class="new-chart-content">
            <div class="simple-bar" style="height: 60%"></div>
            <div class="simple-bar" style="height: 85%"></div>
            <div class="simple-bar" style="height: 45%"></div>
            <div class="simple-bar" style="height: 70%"></div>
            <div class="simple-bar" style="height: 95%"></div>
        </div>
    `;

    contentArea.appendChild(newChart);


    // Remove chart functionality
    const removeButton = newChart.querySelector(".remove-chart");

    removeButton.addEventListener("click", function () {

        newChart.remove();

    });

});

// ================================
// PERIOD DROPDOWN
// ================================

const period = document.querySelector(".period");
const periodOptions = document.querySelectorAll(".period-options div");
const selectedPeriod = document.querySelector(".selected-period");

period.addEventListener("click", function () {

    period.classList.toggle("open");

});


periodOptions.forEach(function (option) {

    option.addEventListener("click", function (event) {

        event.stopPropagation();

        selectedPeriod.innerHTML =
            option.innerText + " <span>⌄</span>";

        period.classList.remove("open");

    });

});

// ================================
// SIDEBAR MENU
// ================================

const sidebarItems = document.querySelectorAll(
    ".side-item, .sub-item"
);

sidebarItems.forEach(function (item) {

    item.addEventListener("click", function () {

        sidebarItems.forEach(function (element) {
            element.classList.remove("selected-menu");
        });

        item.classList.add("selected-menu");

    });

});

// ================================
// SUMMARY CARDS
// ================================

const cards = document.querySelectorAll(".summary-card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const number = card.querySelector("h2").innerText;

        const description = card.querySelector("p").innerText;

        alert(description + " : " + number);

    });

});

// ================================
// HELP BUTTON
// ================================

const help = document.querySelector(".help");

help.addEventListener("click", function () {

    alert(
        "Help Center\n\n" +
        "Use the sidebar to navigate.\n" +
        "Use the tabs to switch reports.\n" +
        "Click Add Chart to add a chart."
    );

});

// ================================
// CHART MORE BUTTON
// ================================

const moreButtons = document.querySelectorAll(".more");

moreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Chart options:\n\nEdit chart\nRemove chart\nExport");

    });

});

// ================================
// CHANGE VALUES ON PAGE REFRESH
// ================================

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generate new values
let leads = randomNumber(80, 150);

let calledLeads = randomNumber(50, 100);

let applications = randomNumber(90, 160);

let sales = randomNumber(12000, 25000);


// Display values
document.getElementById("totalLeads").innerText = leads;

document.getElementById("calledLeads").innerText = calledLeads;

document.getElementById("applications").innerText = applications;

document.getElementById("totalSales").innerText =
    "$ " + sales.toLocaleString();

function randomPercentage() {

    let value = (Math.random() * 20).toFixed(1);

    return "+" + value + "%";

}


function randomNegativePercentage() {

    let value = (Math.random() * 20).toFixed(1);

    return "-" + value + "%";

}


document.getElementById("leadChange").innerText =
    randomPercentage();

document.getElementById("calledChange").innerText =
    randomNegativePercentage();

document.getElementById("salesChange").innerText =
    randomPercentage();

// ================================
// RANDOMIZE LEADS BAR CHART
// ================================

const badBars = document.querySelectorAll(".bad");
const totalBars = document.querySelectorAll(".total");

badBars.forEach(function (bar) {

    let height = randomNumber(20, 70);

    bar.style.height = height + "%";

});


totalBars.forEach(function (bar) {

    let height = randomNumber(10, 35);

    bar.style.height = height + "%";

});

// ================================
// RANDOMIZE BOTTOM CHART
// ================================

const blueBars = document.querySelectorAll(".blue-bar");

const greenBars = document.querySelectorAll(".green-bar");

const orangeBars = document.querySelectorAll(".orange-bar");


blueBars.forEach(function (bar) {

    bar.style.height = randomNumber(40, 100) + "%";

});


greenBars.forEach(function (bar) {

    bar.style.height = randomNumber(20, 80) + "%";

});


orangeBars.forEach(function (bar) {

    bar.style.height = randomNumber(10, 60) + "%";

});

// =====================================
// DYNAMIC COST DONUT CHART
// =====================================

function updateCostChart() {

    // Generate random costs
    let timeCost = randomNumber(30000, 60000);

    let applicationCost = randomNumber(40000, 70000);

    let saleCost = randomNumber(15000, 30000);


    // Calculate total
    let totalCost = timeCost + applicationCost + saleCost;


    // Calculate percentages
    let timePercent = Math.round((timeCost / totalCost) * 100);

    let applicationPercent =
        Math.round((applicationCost / totalCost) * 100);

    let salePercent =
        100 - timePercent - applicationPercent;


    // Display total
    document.getElementById("totalCost").innerText =
        "$" + totalCost.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


    // Display individual costs
    document.getElementById("timeCost").innerText =
        "$" + timeCost.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


    document.getElementById("applicationCost").innerText =
        "$" + applicationCost.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


    document.getElementById("saleCost").innerText =
        "$" + saleCost.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


    // Display percentages
    document.getElementById("timePercent").innerText =
        timePercent + "%";


    document.getElementById("applicationPercent").innerText =
        applicationPercent + "%";


    document.getElementById("salePercent").innerText =
        salePercent + "%";


    // Calculate angles for donut
    let timeAngle = timePercent * 3.6;

    let applicationAngle =
        (timePercent + applicationPercent) * 3.6;


    // Update donut
    document.getElementById("costDonut").style.background =
        `conic-gradient(
            #83a0f3 0deg ${timeAngle}deg,
            #a5db51 ${timeAngle}deg ${applicationAngle}deg,
            #ffae4d ${applicationAngle}deg 360deg
        )`;
}


// Run when page loads
updateCostChart();
