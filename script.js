for (let i = 0; i < 64; i++) {
    for (let j = 0; j < 64; j++) {
        div = document.createElement('div');
        container = document.querySelector('#container');
        container.appendChild(div);
    }
}

divs = document.querySelectorAll('#container>div');

divs.forEach((div) => {
    div.addEventListener('mouseover', () => div.classList.add('colored'));
});
