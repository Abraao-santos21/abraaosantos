var titulo = document.querySelector('#title1');
titulo.innerText = 'Welcome to my website!';

const input = document.querySelector('#sendValue');

input.addEventListener('click', function(e) {
    e.preventDefault();
    const message = document.querySelector('#name');
    const value = message.value;
    console.log(value);

    const text = document.querySelector('#message');
    text.textContent ='Hey there, ' + value + '. Welcome!!';

});

