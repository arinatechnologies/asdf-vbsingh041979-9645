document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const category = button.dataset.category;
      
      // Filter items
      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Load more functionality
  const loadMoreBtn = document.querySelector('.load-more');
  let currentItems = 12;
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // In a real implementation, this would fetch more items
      // For demo, we'll just show an alert
      alert('Loading more projects...');
      currentItems += 12;
    });
  }
  
  // Modal functionality
  const modal = document.getElementById('projectModal');
  const modalImg = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalDesc = document.querySelector('.modal-description');
  const modalCategory = document.querySelector('.modal-category');
  const closeModal = document.querySelector('.close-modal');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.querySelector('img').src;
      const title = this.querySelector('h3').textContent;
      const desc = this.querySelector('p').textContent;
      const category = this.dataset.category;
      
      modalImg.src = imgSrc;
      modalImg.alt = title;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalCategory.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      
      modal.style.display = 'block';
    });
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});