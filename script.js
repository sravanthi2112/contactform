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
});
