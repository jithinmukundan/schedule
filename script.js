window.onload = function() {
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    var firstDay = new Date(year, month, 1).getDay();

    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var calendar = document.getElementById('calendar');

    // Add blank days
    for (var i = 0; i < firstDay; i++) {
        var cell = document.createElement('div');
        cell.classList.add('date');
        calendar.appendChild(cell);
    }

    // Add actual days
    for (var i = 1; i <= daysInMonth; i++) {
        var cell = document.createElement('div');
        cell.classList.add('date');
        cell.innerText = i;
        calendar.appendChild(cell);
    }
}
