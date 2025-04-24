function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    // Hide all tabs
    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    // Reset all buttons
    buttons.forEach(btn => {
        btn.style.backgroundColor = "#800000";
        btn.style.color = "#d4af37";
    });

    // Show selected tab
    const selected = document.getElementById(tabName);
    if (selected) {
        selected.style.display = "block";
    }

    // Highlight active button
    const activeBtn = document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`);
    if (activeBtn) {
        activeBtn.style.backgroundColor = "#d4af37";
        activeBtn.style.color = "#800000";
    }
}

