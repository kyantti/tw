document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-container');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid' ],
        editable: true,
        dateClick: function(info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = 'red';
        }
    });

    calendar.render();
});