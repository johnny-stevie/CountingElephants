window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

function goToPageOne() {
  hideContent();
  //content goes here
  document.getElementById("page1-content").style.display = "block";
}

function goToPageTwo() {
  //content goes here
  hideContent();
  document.getElementById("page2-content").style.display = "block";
}

function goToHomePage() {
  hideContent();
  document.getElementById("indexContent").style.display = "block";
}

function hideContent() {
  const indexContent = document.getElementById("indexContent");
  const pageOne = document.getElementById("page1-content");
  const pageTwo = document.getElementById("page2-content");
  if (indexContent !== null) {
    indexContent.style.display = "none";
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
  }
}
