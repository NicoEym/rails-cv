const initSwitchLanguage = () => {
  const english_page = document.getElementById('english-page');
  const french_page = document.getElementById('french-page');
  const portuguese_page = document.getElementById('portuguese-page');
  const spanish_page = document.getElementById('spanish-page');


  const spanish_flag = document.getElementById('spanish-flag');
  const english_flag = document.getElementById('english-flag');
  const portuguese_flag = document.getElementById('portuguese-flag');
  const french_flag = document.getElementById('french-flag');

  if (button) {
    button.addEventListener('click', (e) => {
      console.log("toto")
        if (container.classList.contains("hidden-style")) {
          container.classList.remove("hidden-style");
          footer.classList.remove("hidden-style");

        }
      container.scrollIntoView({behavior: "smooth", block: "start"});;
      //  banner.classList.add("hidden-style");

    });

  }
};

export { initSwitchLanguage };
