
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
            let div = document.createElement('div');
            div.innerHTML = `<h1>${data.name}</h1>
                            <img src="${data.avatar_url}">
                            <p>${data.bio}</p>
                            <p>${data.blog}</p>
                            <p>${data.location}</p>
                            <p>${data.email}</p>
                            <p>${data.public_repos}</p>
                            <p>${data.followers}</p>
                            <p>${data.following}</p>`;
            document.body.appendChild(div);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}




// let name = "j1mmyson";
// getData(name);
