const hideActiveContainer = () => {
  const containers = document.querySelectorAll('.container');
  containers.forEach((container) => {
    if (!(container.classList.contains("hidden-style"))) {
        container.classList.add("hidden-style");
    };
  });
};


const initSwitchLanguage = () => {
  const english_page = document.getElementById('english-page');
  const french_page = document.getElementById('french-page');
  const portuguese_page = document.getElementById('portuguese-page');
  const spanish_page = document.getElementById('spanish-page');

  const spanish_flag = document.getElementById('Español');
  const english_flag = document.getElementById('English');
  const portuguese_flag = document.getElementById('Português');
  const french_flag = document.getElementById('Français');

  if (spanish_flag) {
    spanish_flag.addEventListener('click', (e) => {
      console.log("spanish")
      hideActiveContainer();
      if (spanish_page.classList.contains("hidden-style")) {
            spanish_page.classList.remove("hidden-style");
      };
    });
  };

  if (english_flag) {
    english_flag.addEventListener('click', (e) => {
      console.log("english")
      hideActiveContainer();
      if (english_page.classList.contains("hidden-style")) {
            english_page.classList.remove("hidden-style");
      };
    });
  };

   if (french_flag) {
    french_flag.addEventListener('click', (e) => {
      console.log("french")
      hideActiveContainer();
      if (french_page.classList.contains("hidden-style")) {
            french_page.classList.remove("hidden-style");
      };
    });
  };

    if (portuguese_flag) {
    portuguese_flag.addEventListener('click', (e) => {
      console.log("portuguese")
      hideActiveContainer();
      if (portuguese_page.classList.contains("hidden-style")) {
            portuguese_page.classList.remove("hidden-style");
      };
    });
  };
};

export { initSwitchLanguage };
