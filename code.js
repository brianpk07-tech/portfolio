//-------------------------------
function toggleDiv(id) {
//-------------------------------
    document.getElementById("acc").style.display = "none";
    document.getElementById("lan").style.display = "none";
    document.getElementById("sof").style.display = "none";
    document.getElementById("com").style.display = "none";
    document.getElementById("cnt").style.display = "none";

    document.getElementById(id).style.display = "block";
}


/*
//-------------------------------
document.addEventListener("DOMContentLoaded", () => {
//-------------------------------
  // Select all the gallery containers on the page
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll('.gallery-wrapper img');
    const dots = gallery.querySelectorAll('.gallery-nav .dot');

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        // 1. Get the targeted index from the clicked dot
        const targetIndex = parseInt(dot.getAttribute('data-index'));

        // 2. Remove 'active' class from all images in this gallery and show the target
        images.forEach((img, imgIndex) => {
          if (imgIndex === targetIndex) {
            img.classList.add('active');
          } else {
            img.classList.remove('active');
          }
        });

        // 3. Remove 'active' class from all dots in this gallery and highlight the clicked one
        dots.forEach((d, dotIndex) => {
          if (dotIndex === targetIndex) {
            d.classList.add('active');
          } else {
            d.classList.remove('active');
          }
        });
      });
    });
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll('.gallery-wrapper img');
    const controlsContainer = gallery.querySelector('.gallery-nav');
    const totalImages = images.length;
    let currentIndex = 0;

    // If there's only 1 image, don't build navigation controls
    if (totalImages <= 1) return;

    // 1. Generate the HTML structure inside the controls container dynamically
    controlsContainer.innerHTML = `
      <button class="nav-btn prev-btn" aria-label="Previous image">&lt;</button>
      <span class="nav-counter">1 / ${totalImages}</span>
      <button class="nav-btn next-btn" aria-label="Next image">&gt;</button>
    `;

    const prevBtn = controlsContainer.querySelector('.prev-btn');
    const nextBtn = controlsContainer.querySelector('.next-btn');
    const counterDisplay = controlsContainer.querySelector('.nav-counter');

    // 2. Core function to update visible image and index text
    function updateGallery(newIndex) {
      // Clean up previous classes
      images[currentIndex].classList.remove('active');
      
      // Sync tracking index
      currentIndex = newIndex;
      
      // Apply active class to new image and refresh counter text
      images[currentIndex].classList.add('active');
      counterDisplay.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    // 3. Button Click Listeners (With loop-around safety logic)
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
*/

document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll('.gallery-wrapper img');
    const controlsContainer = gallery.querySelector('.gallery-nav');
    const totalImages = images.length;
    let currentIndex = 0;

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