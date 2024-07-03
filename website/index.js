const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://l6cysv6ovpbgmgm7h6zrbwxehi0xmqny.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();