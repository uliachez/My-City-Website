// Пример динамики: кнопка меняет фон сайта (по желанию можно добавить на всех страницах)
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  if (main) {
    main.addEventListener("click", () => {
      document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightyellow"
          ? "white"
          : "lightyellow";
    });
  }
});
