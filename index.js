document.getElementById('close').addEventListener("click", closemenu);

function closemenu() {
    document.getElementById("burgermenu").style.display = 'none';
    document.getElementById("navbar").style.display = 'flex';
}


document.getElementById('burger').addEventListener("click", openmenu);

function openmenu() {
    document.getElementById("burgermenu").style.display = 'block';
    document.getElementById("navbar").style.display = 'none';
}