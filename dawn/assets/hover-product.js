const products = {
  art: {
    name: 'Organic Connections Art',
    price: 126,
    image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg',
  },
  sofa: {
    name: 'Scandinavian Gray Sofa',
    price: 2499,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
  },
  shelf: {
    name: 'Modern White Bookshelf',
    price: 899,
    image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
  },
};

// Add click event listeners to all hotspots
document.querySelectorAll('.hotspot').forEach((hotspot) => {
  hotspot.addEventListener('click', () => {
    const productId = hotspot.dataset.product;
    const product = products[productId];
    showModal(product);
  });
});

function showModal(product) {
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');

  modalImage.src = product.image;
  modalTitle.textContent = product.name;
  modalPrice.textContent = `$${product.price}`;

  modal.classList.remove('hidden');
  modal.classList.add('fade-in');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) {
    closeModal();
  }
});
