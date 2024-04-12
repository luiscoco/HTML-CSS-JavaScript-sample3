
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('loadData').addEventListener('click', function() {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '<p>Loading data...</p>';

    // Fetching data from the backend
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = `<p>${data.info}</p>`;
        })
        .catch(error => {
            container.innerHTML = `<p>Error loading data: ${error}</p>`;
        });
});
