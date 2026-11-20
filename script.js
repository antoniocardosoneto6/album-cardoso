const carousel = document.querySelector(".carousel");
const photoViewer = document.querySelector(".photo-viewer");
const viewerImage = document.querySelector(".photo-viewer-image");
const galleryImages = document.querySelectorAll(".image img");

function openPhoto(image) {
    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
    carousel.classList.add("paused");
    photoViewer.showModal();
}

function closePhoto() {
    if (!photoViewer.open) return;

    photoViewer.close();
    carousel.classList.remove("paused");
    viewerImage.src = "";
    viewerImage.alt = "";
}

galleryImages.forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Ampliar fotografia");

    image.addEventListener("click", () => openPhoto(image));
    image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPhoto(image);
        }
    });
});

viewerImage.addEventListener("click", closePhoto);

photoViewer.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePhoto();
});
