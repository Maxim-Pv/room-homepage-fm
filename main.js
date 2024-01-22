const backgroundMenu = document.querySelector('.section-menu')
const arrows = document.querySelectorAll('.arrow')
const content = document.querySelectorAll('.section-shop__content')
const mainContent = document.querySelector('.main-content')
const overlay = document.querySelector('.overlay')
let value = 0

function show(index) {
    backgroundMenu.classList.remove('background-0', 'background-1', 'background-2');
    backgroundMenu.classList.add(`background-${index}`);

    content[value].classList.remove('active');
    content[index].classList.add('active');
    value = index;
}

arrows.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
        let index
        if (event.currentTarget.classList.contains('prev')) {
            index = value - 1;
            if (index < 0) {
                index = 2;
            }
        } else if (event.currentTarget.classList.contains('next')) {
            index = value + 1;
            if (index > 2) {
                index = 0;
            }
        }
        show(index)
    })
})


document.addEventListener('keydown', (event) => {
    const code = event.code;
    switch (code) {
        case 'ArrowLeft':
            navigate('prev');
            break;
        case 'ArrowRight':
            navigate('next');
            break;
    }
})

function navigate(direction) {
    let index;
    if (direction === 'prev') {
        index = value - 1;
        if (index < 0) {
            index = 2;
        }
    } else if (direction === 'next') {
        index = value + 1;
        if (index > 2) {
            index = 0;
        }
    }
    show(index);
}

show(value)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        mainContent.classList.toggle('open');
        if (mainContent.classList.contains('open')) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    })
})

overlay.addEventListener('click', () => {
    mainContent.classList.remove('open');
    overlay.style.display = 'none';
})