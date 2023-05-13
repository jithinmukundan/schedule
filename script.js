var date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

window.onload = function() {
    drawCalendar(currentMonth, currentYear);
}

function drawCalendar(month, year) {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    // Add month navigation
    var prevButton = document.createElement('button');
    prevButton.innerText = '<';
    prevButton.onclick = function() {
        if (month > 0) {
            drawCalendar(month - 1, year);
        } else {
            drawCalendar(11, year - 1);
        }
    };
    var nextButton = document.createElement('button');
    nextButton.innerText = '>';
    nextButton.onclick = function() {
        if (month < 11) {
            drawCalendar(month + 1, year);
        } else {
            drawCalendar(0, year + 1);
        }
    };
    var monthLabel = document.createElement('div');
    monthLabel.innerText = new Date(year, month).toLocaleString('default', { month: 'long' }) + ' ' + year;
    monthLabel.colSpan = 5;
    var navRow = document.createElement('div');
    navRow.appendChild(prevButton);
    navRow.appendChild(monthLabel);
    navRow.appendChild(nextButton);
    calendar.appendChild(navRow);

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
        cell.onclick = function() {
            alert('Selected date: ' + this.innerText + ' ' + new Date(year, month).toLocaleString('default', { month: 'long' }) + ', ' + year);
        };
        calendar.appendChild(cell);
    }
}
