document.addEventListener('keydown', function (event) {
    const keyCode = event.keyCode;

    if (keyCode >= 48 && keyCode <= 58) {
        const buttonIndex = keyCode - 49;

        let button
        if (keyCode == 48) {
            button = document.getElementById('button10');
            flipButton(button, getFlippedText(10));
        } else {
            button = document.getElementById('button' + (buttonIndex + 1));
            flipButton(button, getFlippedText(buttonIndex + 1));
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 10; i++) {
        const button = document.getElementById('button' + i);
        if (button) {
            button.addEventListener('click', function clickHandler() {
                flipButton(button, getFlippedText(i));
                button.removeEventListener('click', clickHandler);
            });
        }
    }
});

function flipButton(button, flippedText) {
    button.classList.toggle('flipped');
    button.style.transform = 'rotateY(180deg)';
    const span = document.createElement('span');
    span.innerText = flippedText;
    span.style.transform = 'rotateY(180deg)';
    button.innerHTML = '';
    button.appendChild(span);
}

function getFlippedText(buttonNumber) {
    const namesArray = [
        'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon',
        'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Pikachu'
    ];
    const index = Math.min(Math.max(buttonNumber - 1, 0), namesArray.length - 1);

    return namesArray[index];
}