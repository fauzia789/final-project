document.getElementById('read-btn').addEventListener('click', function() {
    document.querySelector('.popular').style.display = 'none';
    document.querySelector('.places').style.display = 'block'; 
});

document.getElementById('btn3').addEventListener('click', function() {
    document.querySelector('.places').style.display = 'none'; 
    document.querySelector('.popular').style.display = 'block'; 
    document.querySelector('.popular').style.display = 'flex';
});



