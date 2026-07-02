const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close Lightbox
document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
document.getElementById("next").addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
document.getElementById("prev").addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;
});

function filterImages(category){

    const images=document.querySelectorAll(".gallery img");

    images.forEach(img=>{

        if(category==="all"){
            img.style.display="block";
        }

        else if(img.classList.contains(category)){
            img.style.display="block";
        }

        else{
            img.style.display="none";
        }

    });

}

function filterImages(category) {

    document.querySelector(".categories").style.display = "none";

    document.getElementById("backBtn").style.display = "block";

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

    });
}

function showCategories() {

    document.querySelector(".categories").style.display = "grid";

    document.querySelectorAll(".gallery img").forEach(img => {
        img.style.display = "none";
    });

    document.getElementById("backBtn").style.display = "none";
}