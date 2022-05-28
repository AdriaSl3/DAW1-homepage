const dracButton = document.getElementById('drac');
const dunButton = document.getElementById('dun');
const magButton = document.getElementById('mag');
const scrollButton = document.getElementById('scroll');
const fantButton = document.getElementById('fant');
const body = document.body;


dracButton.onclick = () => {
    if (body.classList.contains('dun')) {
        body.classList.replace('dun','drac');
    }
    if (body.classList.contains('mag')) {
        body.classList.replace('mag','drac');
    }
    if (body.classList.contains('scroll')) {
        body.classList.replace('scroll','drac');
    }
    if (body.classList.contains('fant')) {
        body.classList.replace('fant','drac');
    }
};
dunButton.onclick = () => {
    if (body.classList.contains('drac')) {
        body.classList.replace('drac','dun');
    }
    if (body.classList.contains('mag')) {
        body.classList.replace('mag','dun');
    }
    if (body.classList.contains('scroll')) {
        body.classList.replace('scroll','dun');
    }
    if (body.classList.contains('fant')) {
        body.classList.replace('fant','dun');
    }
};
magButton.onclick = () => {
    if (body.classList.contains('drac')) {
        body.classList.replace('drac','mag');
    }
    if (body.classList.contains('dun')) {
        body.classList.replace('dun','mag');
    }
    if (body.classList.contains('scroll')) {
        body.classList.replace('scroll','mag');
    }
    if (body.classList.contains('fant')) {
        body.classList.replace('fant','mag');
    }
};  
scrollButton.onclick = () => {
    if (body.classList.contains('drac')) {
        body.classList.replace('drac','scroll');
    }
    if (body.classList.contains('dun')) {
        body.classList.replace('dun','scroll');
    }
    if (body.classList.contains('mag')) {
        body.classList.replace('mag','scroll');
    }
    if (body.classList.contains('fant')) {
        body.classList.replace('fant','scroll');
    }
};
fantButton.onclick = () => {
    if (body.classList.contains('drac')) {
        body.classList.replace('drac','fant');
    }
    if (body.classList.contains('dun')) {
        body.classList.replace('dun','fant');
    }
    if (body.classList.contains('mag')) {
        body.classList.replace('mag','fant');
    }
    if (body.classList.contains('scroll')) {
        body.classList.replace('scroll','fant');
    }
};