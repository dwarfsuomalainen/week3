import "./styles.css";

let wiki_container = document.createElement("div");

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  let page_h = document.createElement("h1");
  page_h.innerHTML =
    "<h1>Hey, check out some wiki about five breeds of doggos :3 </h1>";
  document.body.appendChild(page_h);

  wiki_container.classList.add("container");
  document.body.appendChild(wiki_container);
  loadWiki();
}

async function loadWiki() {
  let url = [
    "https://en.wikipedia.org/api/rest_v1/page/summary/Chihuahua_%28dog%29?redirect=true",
    "https://en.wikipedia.org/api/rest_v1/page/summary/Borzoi?redirect=true",
    "https://en.wikipedia.org/api/rest_v1/page/summary/Papillon_dog?redirect=true",
    "https://en.wikipedia.org/api/rest_v1/page/summary/Saluki?redirect=true",
    "https://en.wikipedia.org/api/rest_v1/page/summary/vizsla?redirect=true"
  ];
  let urlPic = [
    "https://dog.ceo/api/breed/chihuahua/images/random",
    "https://dog.ceo/api/breed/borzoi/images/random",
    "https://dog.ceo/api/breed/papillon/images/random",
    "https://dog.ceo/api/breed/saluki/images/random",
    "https://dog.ceo/api/breed/vizsla/images/random"
  ];
  for (let i = 0; i < url.length; i++) {
    let response = await fetch(url[i]);

    let breed = await response.json();
    console.log(breed);
    let headerW = breed.title;
    let textW = breed.extract;

    let responsePic = await fetch(urlPic[i]);

    let imgDog = await responsePic.json();
    let imgSrc = imgDog.message;

    wikiItem(headerW, textW, imgSrc);
  }
}

function wikiItem(headerW, textW, imgSrc) {
  let wiki_item = document.createElement("div");
  wiki_item.classList.add("wiki-item");
  wiki_container.appendChild(wiki_item);
  let wiki_header = document.createElement("h1");
  wiki_header.classList.add("wiki-header");
  wiki_header.innerHTML = headerW;
  wiki_item.appendChild(wiki_header);
  let wiki_content = document.createElement("div");
  wiki_content.classList.add("wiki-content");
  wiki_item.appendChild(wiki_content);
  let wiki_text = document.createElement("p");
  wiki_text.classList.add("wiki-text");
  wiki_text.innerHTML = textW;
  wiki_content.appendChild(wiki_text);
  let img_container = document.createElement("div");
  img_container.classList.add("img-container");
  wiki_content.appendChild(img_container);
  let wiki_img = document.createElement("img");
  wiki_img.classList.add("wiki-img");
  wiki_img.src = imgSrc;
  img_container.appendChild(wiki_img);
}
