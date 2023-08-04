let pageTwo = document.getElementById("page-two");
let pageThree = document.getElementById("page-three");
let pageFour = document.getElementById("page-four");
let pageFive = document.getElementById("page-five");
let pageSix = document.getElementById("page-six");
let pageSeven = document.getElementById("page-seven");

function changePageTwo() {
  let titlePage = document.getElementById("title-page");
  let heartItem = document.getElementById("heart-item");

  titlePage.style.display = "none";
  heartItem.style.display = "none";
  pageTwo.style.display = "block";
}

function changePageThree() {
  pageThree.style.display = "block";
  pageTwo.style.display = "none";
}

function changePageFour() {
  pageFour.style.display = "block";
  pageThree.style.display = "none";
}

function changePageFive() {
  pageFive.style.display = "block";
  pageFour.style.display = "none";
}

function changePageSix() {
  pageSix.style.display = "block";
  pageFive.style.display = "none";
}
function changeSevenPage() {
  pageSeven.style.display = "block";
  pageSix.style.display = "none";
}

async function handleSubmit() {
  const url = "https://serverweb-production.up.railway.app/api/note";
  const data = {
    content: String(document.getElementById("text").value),
  };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  changeSevenPage();
}

function failChoice() {
  alert(
    "Anh viết cái này cho vui thôi chứ ấn không được đâu nha ! HIHI Ấn nút bên cạnh đuy 😘"
  );
}
