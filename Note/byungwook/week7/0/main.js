
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let input = document.querySelector('input');
    let text = input.value;
    getData(text);
});

function getData(name) {
    const xhr = new XMLHttpRequest();

    let url = `https://api.github.com/users/${name}`;
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            let content = document.querySelector('#content');
            content.innerHTML = xhr.responseText;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}




// let name = "j1mmyson";
// getData(name);
