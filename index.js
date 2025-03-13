/* This is to test how different background images look and decide which looks best. */
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "3257629.jpg", "3287318.jpg", "3297506.jpg", "3302177.jpg", "3303323.jpg",
    "3473005.jpg", "5188711.jpg", "5442673.jpg", "5654813.jpg", "7657142.jpg", "7672043.jpg"
  ];

  let currentIndex = 0;

  document.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('images/${images[currentIndex]}')`;
  });

  document.body.style.backgroundImage = `url('images/${images[0]}')`;
});
