document.addEventListener('DOMContentLoaded', () => {
  // Botones de vista
  const gridBtn = document.getElementById('gridView');
  const listBtn = document.getElementById('listView');

  if (gridBtn) {
    gridBtn.addEventListener('click', () => {
      window.location.href = 'grid-view.html';
    });
  }

  if (listBtn) {
    listBtn.addEventListener('click', () => {
      window.location.href = 'list-view.html';
    });
  }

  // Botón Create a New Post → abre modal
  const createBtn = document.getElementById('createPostBtn');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const modalElement = document.getElementById('createPostModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }
});