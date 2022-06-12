import "./styles.css";

let imgSrc =
  "https://scontent.fqlf1-2.fna.fbcdn.net/v/t1.18169-9/1236179_401999183232989_982212190_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ATdNTO2_QMUAX8LAhXU&_nc_ht=scontent.fqlf1-2.fna&oh=00_AT90puE-ZA4tw5SLBczycNOE8Wly6J6a9QX8QTAdRRp09Q&oe=62CA77B7";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML =
    "<h1>Hello! Here is some wiki about dog's breeds</h1>";

  loadWiki();
}

async function loadWiki() {
  let url =
    "https://en.wikipedia.org/api/rest_v1/page/summary/Bracco_Italiano?redirect=true";
  let response = await fetch(url);

  let breed = await response.json();
  console.log(breed);
  let headerW = breed.title;
  let textW = breed.extract;
  wikiItem(headerW, textW, imgSrc);
}

function wikiItem(headerW, textW, imgSrc) {
  let wiki_item = document.createElement("div");
  wiki_item.classList.add("wiki-item");
  document.body.appendChild(wiki_item);
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
  wiki_content.appendChild(wiki_img);
}
