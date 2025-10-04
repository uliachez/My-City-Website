  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;

    if (item.classList.contains("active")) {
      content.style.maxHeight = null;
      item.classList.remove("active");
    } else {

      content.style.maxHeight = content.scrollHeight + "px";
      item.classList.add("active");
    }
  });
});
