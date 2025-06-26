// humberger mrnu
const navOpenBtn = document.getElementById("open-menu-btn");
const navCloseBtn = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-items");    

navOpenBtn.addEventListener("click", () => {
      navMenu.classList.remove("hidden");
      navCloseBtn.classList.remove("close-menu");
      navOpenBtn.classList.add("close-menu");
    });

    navCloseBtn.addEventListener("click", () => {
      navMenu.classList.add("hidden");
      navCloseBtn.classList.add("close-menu");
      navOpenBtn.classList.remove("close-menu");
    });
//hero section typing
var typed = new Typed('.typing', {
      strings: ['Web Developer.', 'Wordpress Designer.', 'Web Designer.' , 'Wordpress Developer.'],
      typeSpeed: 80,
      backSpeed: 80,
     });
//about section typing
var typed = new Typed('.typing2', {
      strings: ['Wordpress Developer.', 'Web Developer.', 'Wordpress Designer.' , 'Web Designer.'],
      typeSpeed: 80,
      backSpeed: 80,
     }); 
const aboutOpenBtn = document.querySelector(".about-btn");
const aboutCloseBtn = document.querySelector(".about-close-btn");
const aboutPopup = document.querySelector(".about-popup");    

aboutOpenBtn.addEventListener("click", () => {
      aboutPopup.classList.remove("invisible");
      document.body.classList.add("noscroll");
    });

    aboutCloseBtn.addEventListener("click", () => {
      aboutPopup.classList.add("invisible");
      document.body.classList.remove("noscroll");
    });

//section active scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-menu a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}
//portfolio section popup
const openButtons = document.querySelectorAll(".open");
const closeButtons = document.querySelectorAll(".close");

// All open buttons
openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popupId = btn.getAttribute("data-target");
    const popup = document.querySelector(`#${popupId}`);
    popup.classList.remove("invisible");
    document.body.classList.add("noscroll");
  });
});

// All close buttons
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".popup");
    popup.classList.add("invisible");
    document.body.classList.remove("noscroll");
  });
});

//portfolio tabs control
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.item');
const extraItems = document.querySelectorAll('.one_grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Active tab styling
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.getAttribute('data-category');

    items.forEach(item => {
      // Show all or filter by class
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    //fix some issu
    if (category !== 'all') {
      extraItems.forEach(extra => {
        extra.style.display = 'none';
      });
    } else {
      extraItems.forEach(extra => {
        extra.style.display = 'block';
      });
    }
  });
});

// color change
const buttons = document.querySelectorAll('.change-color-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Remove class from all buttons
    buttons.forEach(btn => btn.classList.remove('bad'));

    // 2. Add  class to clicked button
    button.classList.add('bad');

    // 3. change color
    const newColor = button.getAttribute('data-color');
    document.documentElement.style.setProperty('--color-theme', newColor);
  });
});
// change color popup button
  const toggleBtn = document.getElementById('toggleBtn');
  const targetBox = document.getElementById('slideContent');

   toggleBtn.addEventListener('click', () => {
    targetBox.classList.toggle('hidden');
  });