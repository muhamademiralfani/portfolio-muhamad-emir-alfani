document.getElementById('postForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    to: 'muhamademiralfani@gmail.com',
    name: document.querySelector('input[name="userId"]').value,
    subject: document.querySelector('input[name="title"]').value,
    text: document.querySelector('textarea[name="body"]').value,
  };

  fetch('https://lumoshive-academy-email-api.vercel.app/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'RJS1-202413',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('postForm').reset();
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        confirmButtonColor: '#366cd8',
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonColor: '#366cd8',
        confirmButtonText: 'Try Again',
        // Custom style
        customClass: {
          confirmButton: 'custom-confirm-button',
          popup: 'custom-popup',
        },
      });
    });
});

// Ambil elemen yang diperlukan
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Tambahkan event listener untuk hamburger menu
menuBtn.addEventListener('click', () => {
  // Toggle class 'open' untuk nav links
  navLinks.classList.toggle('open');
});
