const designContainers = document.querySelectorAll('.js-design-container');

designContainers.forEach(designContainer => {
  designContainer.addEventListener('mouseenter', () => {
    const id = designContainer.dataset.id;

    document.querySelectorAll(`.js-design-container[data-id="${id}"]`).forEach(element => element.classList.add('hovered'));
  });

  designContainer.addEventListener('mouseleave', () => {
    const id = designContainer.dataset.id;

    document.querySelectorAll(`.js-design-container[data-id="${id}"]`).forEach(element => element.classList.remove('hovered'));
  });
});
