document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const formTemplate = `
    <div class="container">
      <h2>Contact Form</h2>
      <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  `;

    root.innerHTML = formTemplate;

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Replace form with success message
        root.innerHTML = `
      <div class="container">
        <h3 class="success-message">Form submitted successfully!</h3>
      </div>
    `;
    });

    // Function to change background color dynamically
    const container = document.querySelector('.container');
    const button = document.querySelector('button');

    const colors = ['#f0f8ff', '#ffe4e1', '#f5f5f5', '#f7f7f7', '#faf0e6'];
    const buttonColors = ['#28a745', '#007bff', '#ffc107', '#dc3545', '#17a2b8'];

    let colorIndex = 0;

    setInterval(() => {
        // Change container background color
        container.style.backgroundColor = colors[colorIndex];

        // Change button background color
        button.style.backgroundColor = buttonColors[colorIndex];

        colorIndex = (colorIndex + 1) % colors.length;
    }, 2000); // Change every 2 seconds
});