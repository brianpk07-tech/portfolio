//-------------------------------
function toggleDiv(id, btn) {
//-------------------------------
    // hide all sections
    document.getElementById("acc").style.display = "none";
    document.getElementById("lan").style.display = "none";
    document.getElementById("sof").style.display = "none";
    document.getElementById("com").style.display = "none";
    document.getElementById("int").style.display = "none";
    document.getElementById("cnt").style.display = "none";

    // Show selected section
    document.getElementById(id).style.display = "block";

    // Remove active class from all buttons
    document.querySelectorAll(".about-nav-container button")
        .forEach(button => button.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");
}

//-------------------------------
document.addEventListener("DOMContentLoaded", () => {
//-------------------------------
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll('.gallery-wrapper img');
    const controlsContainer = gallery.querySelector('.gallery-nav');
    const titleDisplay = gallery.querySelector('.image-title');
    const title = gallery.querySelector('.image-title');
    const totalImages = images.length;
    let currentIndex = 0;

    titleDisplay.textContent = images[currentIndex].title || '';

    if (totalImages <= 1) return;

	// Injects everything as raw text tags—eliminating browser button engine bugs
	controlsContainer.innerHTML = `
	  <div class="nav-frame">
	    <span class="nav-btn prev-btn" role="button" aria-label="Previous image">&lt;</span>
	    <span class="nav-counter">1 / ${totalImages}</span>
	    <span class="nav-btn next-btn" role="button" aria-label="Next image">&gt;</span>
	  </div>
	`;

    const prevBtn = controlsContainer.querySelector('.prev-btn');
    const nextBtn = controlsContainer.querySelector('.next-btn');
    const counterDisplay = controlsContainer.querySelector('.nav-counter');

    function updateGallery(newIndex) {
      images[currentIndex].classList.remove('active');
      currentIndex = newIndex;
      images[currentIndex].classList.add('active');
      counterDisplay.textContent = `${currentIndex + 1} / ${totalImages}`;
      titleDisplay.textContent = images[currentIndex].title || '';
    }

    prevBtn.addEventListener('click', () => {
      const index = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      updateGallery(index);
    });

    nextBtn.addEventListener('click', () => {
      const index = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
      updateGallery(index);
    });
  });
});

//-------------------------------
function setLanguage(lang) {
//-------------------------------
    const select = document.querySelector('.goog-te-combo');

    if (!select) return;

    select.value = lang;

    select.dispatchEvent(new Event('change', {
        bubbles: true
    }));
}

//-------------------------------
function setupLanguageSwitcher() {
//-------------------------------
    const buttons = document.querySelectorAll("#lang-switcher button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            // switch Google language
            setLanguage(lang);

            // update UI state
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

setTimeout(setupLanguageSwitcher, 1200);