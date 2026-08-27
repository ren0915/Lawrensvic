const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('active');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const infoImageModal =
    document.getElementById('infoImageModal');
const infoImageModalClose =
    document.getElementById('infoImageModalClose');
const infoImageModalImage =
    document.getElementById('infoImageModalImage');
const infoImageModalCategory =
    document.getElementById('infoImageModalCategory');
const infoImageModalTitle =
    document.getElementById('infoImageModalTitle');
const infoImageModalDescription =
    document.getElementById('infoImageModalDescription');
const infoImageModalTriggers =
    document.querySelectorAll(
        '.activity-modal-trigger, .place-modal-trigger'
    );

infoImageModalTriggers.forEach(function (item) {
    item.addEventListener('click', function () {
        const image =
            item.getAttribute('data-modal-image');
        const category =
            item.getAttribute('data-modal-category');
        const title =
            item.getAttribute('data-modal-title');
        const description =
            item.getAttribute('data-modal-description');
        infoImageModalImage.src = image;
        infoImageModalImage.alt = title;
        infoImageModalCategory.textContent =
            category;
        infoImageModalTitle.textContent =
            title;
        infoImageModalDescription.textContent =
            description;
        infoImageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeInfoImageModal() {
    infoImageModal.classList.remove('active');
    document.body.style.overflow = '';
}
infoImageModalClose.addEventListener(
    'click',
    closeInfoImageModal
);
infoImageModal.addEventListener(
    'click',
    function (event) {
        if (
            event.target === infoImageModal ||
            event.target.classList.contains(
                'info-image-modal-overlay'
            )
        ) {
            closeInfoImageModal();
        }
    }
);

document.addEventListener(
    'keydown',
    function (event) {
        if (
            event.key === 'Escape' &&
            infoImageModal.classList.contains('active')
        ) {
            closeInfoImageModal();
        }
    }
);
