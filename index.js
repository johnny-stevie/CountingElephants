window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

function goToPageOne() {
  console.log("adding");
  alert("We are going to page 1");
  const indexContent = document.getElementById("indexContent");
  indexContent.parentElement.removeChild(indexContent);
}
