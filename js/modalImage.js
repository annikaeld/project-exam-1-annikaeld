function setupModalImage() {
    var modalContainer = document.getElementById("modal-image-container");
    var img = document.querySelector("#content img");
    var modalImg = document.getElementById("modal-image");

    img.onclick = function () {
        modalContainer.style.display = "block";
        modalImg.src = this.src;
    }

    var closeElement = document.getElementsByClassName("close")[0];
    closeElement.onclick = function () {
        modalContainer.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal image, close it
    modalContainer.onclick = function (event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }
}

export { setupModalImage };