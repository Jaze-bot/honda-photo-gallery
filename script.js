console.log("JavaScript is running!"); // Check if JS is loaded

function upDate(previewPic) {
  const img = previewPic.querySelector('img');
  console.log("Mouse over:", img.dataset.debug); // Check which image is hovered
  console.log("Alt:", img.alt);
  console.log("Src:", img.src);

  document.querySelector('#image').innerHTML = img.alt;
  document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
}

function unDo() {
  console.log("Mouse out"); // Check if mouseout event is triggered
  document.querySelector('#image').style.backgroundImage = "url('')";
  document.querySelector('#image').innerHTML = "Hover over a Honda image below to display here.";
}

function displayImage(previewPic) {
  const img = previewPic.querySelector('img');
  console.log("Image clicked:", img.dataset.debug); // Check which image is clicked
  console.log("Alt:", img.alt);
  console.log("Src:", img.src);

  document.querySelector('#image').innerHTML = img.alt;
  document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
}
