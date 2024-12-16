function toggleContent(header) {
    var content = header.nextElementSibling;
    header.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
      header.querySelector(".toggle-image").src = "assets/images/icon-plus.svg"; 
    } else {
      content.style.display = "block";
      header.querySelector(".toggle-image").src = "assets/images/icon-minus.svg"; 
    }
  }
  