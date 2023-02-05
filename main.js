let adviceId = document.querySelector(".advice-id");

let adviceText = document.querySelector(".advice-text");

let adviceContainer = document.querySelector(".advice-container");

let generateBtn = document.querySelector(".generate");

generateBtn.onclick = function () {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then((quotes) => {
      let random = Math.floor(Math.random() * quotes.length);

      adviceText.innerHTML = "";
      adviceText.appendChild(document.createTextNode(quotes[random].text));

      adviceId.innerHTML = "";
      adviceId.appendChild(document.createTextNode(`Advice #${random}`));
    });
};
