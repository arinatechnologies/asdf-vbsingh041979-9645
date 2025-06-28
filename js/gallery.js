document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gridItems = document.querySelectorAll('.grid-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter items
      gridItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
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
      // In a real implementation, this would fetch more items from a server
      // For demo, we'll just simulate loading more items
      currentItems += 4;
      if (currentItems >= 20) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
  
  // Modal functionality
  const modal = document.querySelector('.project-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalCategory = document.querySelector('.modal-category');
  const modalDescription = document.querySelector('.modal-description');
  
  gridItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get project data (in a real app, this would come from a data attribute or API)
      const projectId = this.getAttribute('data-project');
      const projectTitle = this.querySelector('h3').textContent;
      const projectCategory = this.querySelector('p').textContent;
      
      // Set modal content
      modalImage.src = this.querySelector('img').src;
      modalImage.alt = this.querySelector('img').alt;
      modalTitle.textContent = projectTitle;
      modalCategory.textContent = projectCategory;
      modalDescription.textContent = `Detailed description for ${projectTitle} would appear here with comprehensive project details, challenges, solutions, and results.`;
      
      // Show modal
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close when clicking outside modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});