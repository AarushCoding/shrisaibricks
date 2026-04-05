const track = document.querySelector('.carousel-track');

// 1. Define your images here. 
// Just add the filename to this list when you add a new photo to the folder.
const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png'
];

// 2. Dynamically generate the HTML for each image
images.forEach(fileName => {
    const img = document.createElement('img');
    img.src = `./carousel_images/${fileName}`;
    img.alt = "Shri Sai Bricks Product";
    track.appendChild(img);
});

// 3. Carousel Logic
let index = 0;
const slides = images.length; // Uses the length of your array

function moveSlide() {
    index++;
    
    // If we reach the end, reset to the first image
    if (index >= slides) {
        index = 0;
    }
    
    // Move the track
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Move every 3 seconds
setInterval(moveSlide, 3000);
