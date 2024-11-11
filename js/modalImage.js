function setupModalImage() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var contentId = document.getElementById("content");
    console.log("Content:", contentId);
    var img = document.querySelector("#content img");
    console.log("Image:", img);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("modal-caption");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal image, close it
    modal.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

export { setupModalImage };