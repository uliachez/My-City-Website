window.onload = function() {
  const galleryIndices = {};

  function updateGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const items = gallery.querySelectorAll(".gallery-item");
    if (!items.length) return;

    const currentIndex = galleryIndices[galleryId] || 0;

    let gap = parseInt(getComputedStyle(gallery).gap);
    if (isNaN(gap)) gap = 0;

    const itemWidth = items[0].offsetWidth + gap;
    const shift = currentIndex * itemWidth;

    gallery.style.transform = `translateX(-${shift}px)`;

    const leftBtn = gallery.parentElement.querySelector(".arrow-left");
    const rightBtn = gallery.parentElement.querySelector(".arrow-right");
    const visibleCount = Math.floor(gallery.parentElement.offsetWidth / itemWidth);

    if (leftBtn) leftBtn.disabled = currentIndex <= 0;
    if (rightBtn) rightBtn.disabled = currentIndex >= items.length - visibleCount;
  }

  function moveGallery(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const items = gallery.querySelectorAll(".gallery-item");
    if (!galleryIndices[galleryId]) galleryIndices[galleryId] = 0;

    let gap = parseInt(getComputedStyle(gallery).gap);
    if (isNaN(gap)) gap = 0;
    const itemWidth = items[0].offsetWidth + gap;

    const visibleCount = Math.floor(gallery.parentElement.offsetWidth / itemWidth);

    galleryIndices[galleryId] += direction;

    if (galleryIndices[galleryId] < 0) galleryIndices[galleryId] = 0;
    if (galleryIndices[galleryId] > items.length - visibleCount) {
      galleryIndices[galleryId] = items.length - visibleCount;
    }

    updateGallery(galleryId);
  }

  window.moveGallery = moveGallery;

  ["museumsGallery", "exhibitionsGallery", "theatersGallery"].forEach(id => updateGallery(id));

  window.addEventListener("resize", () => {
    ["museumsGallery", "exhibitionsGallery", "theatersGallery"].forEach(id => updateGallery(id));
  });
};
