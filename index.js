window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

function goToPageOne() {
  const indexContent = document.getElementById("indexContent");
  indexContent.parentElement.removeChild(indexContent);
  //content goes here
}
function goToPageTwo() {
  const indexContent = document.getElementById("indexContent");
  indexContent.parentElement.removeChild(indexContent);
  //content goes here
}
