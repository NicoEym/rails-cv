const initSwitchLanguage = () => {
  const english_page = document.getElementById('english-page');
  const french_page = document.getElementById('french-page');
  const portuguese_page = document.getElementById('portuguese-page');
  const spanish_page = document.getElementById('spanish-page');

  const spanish_flag = document.getElementById('spanish-flag');
  const english_flag = document.getElementById('english-flag');
  const portuguese_flag = document.getElementById('portuguese-flag');
  const french_flag = document.getElementById('french-flag');

  if (spanish_flag) {
    spanish_flag.addEventListener('click', (e) => {
      console.log("spanish")
        if (spanish_page.classList.contains("hidden-style")) {
            spanish_page.classList.remove("hidden-style");


    });
  }

  if (english_flag) {
    english_flag.addEventListener('click', (e) => {
      console.log("spanish")
        if (english_page.classList.contains("hidden-style")) {
            english_page.classList.remove("hidden-style");
    });

  }

   if (french_flag) {
    french_flag.addEventListener('click', (e) => {
      console.log("spanish")
        if (french_page.classList.contains("hidden-style")) {
            french_page.classList.remove("hidden-style");
    });

  }

    if (portuguese_flag) {
    portuguese_flag.addEventListener('click', (e) => {
      console.log("spanish")
        if (portuguese_page.classList.contains("hidden-style")) {
            portuguese_page.classList.remove("hidden-style");
    });

  }

};

export { initSwitchLanguage };
