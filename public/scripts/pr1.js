const cursor = document.querySelector('.cursor');
const files = document.querySelectorAll('.file');
const contentBoxes = document.querySelectorAll('.content-box');

let writingInterval = null; // To manage typing animation

// Hide cursor inside previews
document.querySelectorAll('.content-box').forEach(box => {
    box.addEventListener('mouseenter', () => cursor.classList.add('hidden'));
    box.addEventListener('mouseleave', () => cursor.classList.remove('hidden'));
});

// Update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
});

// Show content based on file click
files.forEach(file => {
    file.addEventListener('click', () => {
        // Stop typing animation if running
        if (writingInterval) clearInterval(writingInterval);

        contentBoxes.forEach(box => box.classList.add('hidden')); // Hide all boxes
        const type = file.dataset.type;

        if (type === 'description') {
            const box = document.getElementById(type);
            const writer = box.querySelector('.description-writing');
            writer.textContent = ''; // Clear previous text
            const description = `
Lexio's waitlist
--------------

technologies: html, css, js, node.js, github actions

Lexio aims to revolutionize knowledge sharing and productivity enhancement through its innovative platform. the waitlist website is designed to provide a seamless user experience, acting as the first step towards engaging with Lexio's ecosystem.

**features:**
- sleek, responsive design;
- intuitive sign-up process;
- integrated analytics for waitlist management;
- deployed using CI/CD pipelines for rapid updates.

explore the website or the repository to learn more about our approach to modern knowledge management.`;

            let i = 0;
            box.classList.remove('hidden');
            writingInterval = setInterval(() => {
                writer.textContent += description[i];
                i++;
                if (i >= description.length) clearInterval(writingInterval);
            }, 50); // Typing speed
        } else if (type === 'github') {
            const box = document.getElementById(type);
            box.classList.remove('hidden');
        } else {
            document.getElementById(type).classList.remove('hidden');
        }
    });
});

// Show description on load
window.onload = () => {
    document.querySelector('.file[data-type="description"]').click();
};
