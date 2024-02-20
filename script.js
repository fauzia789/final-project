document.getElementById('read-btn').addEventListener('click', function() {
    document.querySelector('.popular').style.display = 'none';
    document.querySelector('.places').style.display = 'block'; 
});

document.getElementById('btn3').addEventListener('click', function() {
    document.querySelector('.places').style.display = 'none'; 
    document.querySelector('.popular').style.display = 'block'; 
    document.querySelector('.popular').style.display = 'flex';
});



function goToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("goToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Function to increase visitor count
function increaseVisitorCount() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.visitorCount) {
            localStorage.visitorCount = Number(localStorage.visitorCount)+1;
        } else {
            localStorage.visitorCount = 1;
        }
        document.getElementById("count").innerHTML = localStorage.visitorCount;
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

// Call the function to increase the count when the page loads
window.onload = function() {
    increaseVisitorCount();
};
