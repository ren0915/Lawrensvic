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

const favoriteTriggers =
  document.querySelectorAll(
    '.favorite-modal-trigger'
  );
favoriteTriggers.forEach(
  function (trigger) {
    trigger.addEventListener(
      'click',
      function () {
        const modalId =
          trigger.getAttribute(
            'data-favorite-modal'
          );
        const modal =
          document.getElementById(
            modalId
          );
        if (!modal) {
          return;
        }
        modal.classList.add(
          'active'
        );
        document.body.style.overflow =
          'hidden';
      }
    );
  }
);
const favoriteCloseButtons =
  document.querySelectorAll(
    '.favorite-category-modal-close'
  );
favoriteCloseButtons.forEach(
  function (button) {
    button.addEventListener(
      'click',
      function () {
        const modal =
          button.closest(
            '.favorite-category-modal'
          );
        if (!modal) {
          return;
        }
        modal.classList.remove(
          'active'
        );
        document.body.style.overflow ='';
      }
    );
  }
);

const favoriteModals =
  document.querySelectorAll(
    '.favorite-category-modal'
  );
favoriteModals.forEach(
  function (modal) {
    modal.addEventListener(
      'click',
      function (event) {
        if (
          event.target === modal
        ) {
          modal.classList.remove(
            'active'
          );
          document.body.style.overflow ='';
        }
      }
    );
  }
);
document.addEventListener(
  'keydown',
  function (event) {

    if (
      event.key !== 'Escape'
    ) {
      return;
    }
    favoriteModals.forEach(
      function (modal) {
        if (
          modal.classList.contains(
            'active'
          )
        ) {
          modal.classList.remove(
            'active'
          );
        }
      }
    );
    document.body.style.overflow =
      '';
  }
);
