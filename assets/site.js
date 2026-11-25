const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    const menuText = menuButton.querySelector(".sr-only");
    if (menuText) menuText.textContent = isOpen ? "Open menu" : "Close menu";
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      const menuText = menuButton.querySelector(".sr-only");
      if (menuText) menuText.textContent = "Open menu";
      primaryNav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-faq-pagination]").forEach((faq) => {
  const pages = Array.from(faq.querySelectorAll("[data-faq-page]"));
  const previous = faq.querySelector("[data-faq-previous]");
  const next = faq.querySelector("[data-faq-next]");
  const status = faq.querySelector("[data-faq-status]");
  const controls = faq.querySelector(".home-faq-pagination");
  if (
    pages.length < 2 ||
    !(previous instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    !(status instanceof HTMLElement) ||
    !(controls instanceof HTMLElement)
  ) return;

  const totalQuestions = pages.reduce(
    (total, page) => total + page.querySelectorAll(".home-faq-item").length,
    0,
  );
  let currentPage = 0;
  const showPage = (pageIndex) => {
    currentPage = pageIndex;
    pages.forEach((page, index) => {
      page.hidden = index !== currentPage;
      if (page.hidden) page.querySelectorAll("details[open]").forEach((item) => { item.open = false; });
    });
    const firstQuestion = pages
      .slice(0, currentPage)
      .reduce((total, page) => total + page.querySelectorAll(".home-faq-item").length, 0) + 1;
    const lastQuestion = firstQuestion + pages[currentPage].querySelectorAll(".home-faq-item").length - 1;
    status.textContent = `Showing ${firstQuestion}–${lastQuestion} of ${totalQuestions} questions`;
    previous.disabled = currentPage === 0;
    next.disabled = currentPage === pages.length - 1;
  };

  controls.hidden = false;
  showPage(currentPage);
  previous.addEventListener("click", () => showPage(Math.max(0, currentPage - 1)));
  next.addEventListener("click", () => showPage(Math.min(pages.length - 1, currentPage + 1)));
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelectorAll("[data-enquiry-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  if (!(form instanceof HTMLFormElement) || !(status instanceof HTMLElement)) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const accessKey = form.querySelector('input[name="access_key"]');
    if (
      !(accessKey instanceof HTMLInputElement) ||
      !accessKey.value.trim() ||
      accessKey.value === "ADD_REAL_WEB3FORMS_ACCESS_KEY"
    ) {
      status.hidden = false;
      status.textContent =
        "Online enquiries are not set up yet. Please call Darwin Cable Works on 0415 244 056 to discuss your project.";
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton instanceof HTMLButtonElement) submitButton.disabled = true;
    status.hidden = false;
    status.textContent = "Sending your enquiry…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "The form provider did not accept the enquiry.");
      }

      form.reset();
      status.textContent = "Thanks — your enquiry has been sent to Darwin Cable Works. We’ll be in touch soon.";
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      status.textContent = "We couldn’t send your enquiry just now. Your details have not been confirmed as delivered. Please try again later.";
    } finally {
      if (submitButton instanceof HTMLButtonElement) submitButton.disabled = false;
    }
  });
});
