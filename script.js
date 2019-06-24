let id;
let p = document.querySelector('p');
let copyButton = document.querySelector('button');
let amountInput = document.querySelector('input');


function generateRandomString(length = 20) {
    length = Number(amountInput.value);
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    id = text;
    p.textContent = text;
}


amountInput.addEventListener("input", e => generateRandomString());
generateRandomString();


copyButton.addEventListener("click", e => {
    navigator.clipboard.writeText(id)
        .then(() => {
            copyButton.textContent = 'Copied!';
        })
        .catch(err => {
            copyButton.textContent = 'Error';
        })
        .finally(() => {
            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 3000);
        });
});


