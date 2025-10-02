document.addEventListener("DOMContentLoaded", () => {
  // Объект для хранения текущего индекса каждой галереи
  const galleryIndices = {};

  // Функция для обновления сдвига конкретной галереи
  function updateGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    const items = gallery.children;
    const total = items.length;
    const visible = 4; // сколько видно одновременно
    const currentIndex = galleryIndices[galleryId] || 0;

    const shift = currentIndex * (282 + 20); // ширина фото + gap
    gallery.style.transform = `translateX(-${shift}px)`;

    // кнопки стрелок
    const leftBtn = gallery.parentElement.querySelector(".arrow-left");
    const rightBtn = gallery.parentElement.querySelector(".arrow-right");
    if (leftBtn) leftBtn.disabled = currentIndex === 0;
    if (rightBtn) rightBtn.disabled = currentIndex >= total - visible;
  }

  // Универсальная функция для всех галерей
  window.moveGallery = function (direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const items = gallery.children;
    const total = items.length;
    const visible = 4;

    if (!galleryIndices[galleryId]) galleryIndices[galleryId] = 0;

    galleryIndices[galleryId] += direction;
    if (galleryIndices[galleryId] < 0) galleryIndices[galleryId] = 0;
    if (galleryIndices[galleryId] > total - visible) galleryIndices[galleryId] = total - visible;

    updateGallery(galleryId);
  };

  // Инициализация всех галерей на странице
  ["museumsGallery", "exhibitionsGallery", "theatersGallery"].forEach(id => updateGallery(id));
});
