document.getElementById('contact-button').addEventListener('click', function () {
    console.log('Button clicked'); // Debugging
    document.getElementById('modal-overlay').style.display = 'flex';
    document.getElementById('modal-overlay').style.justifyContent = 'center';
    document.getElementById('modal-overlay').style.alignItems = 'center';
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target.id === 'modal-overlay') {
        console.log('Overlay clicked'); // Debugging
        document.getElementById('modal-overlay').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
    }
});