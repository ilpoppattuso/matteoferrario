const files = document.querySelectorAll('.file');
const contentBoxes = document.querySelectorAll('.content-box');
const cursor = document.querySelector('.cursor');

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

        if (type === 'readme') {
            const box = document.getElementById(type);
            const writer = box.querySelector('.description-writing');
            writer.textContent = ''; // Clear previous text
            const description = `
# Project 5 - Application Showcase

This project showcases the application my friend and I developed. It includes a link to Project 1 and a description of the Lexio application.

## Files
- **README.md**: This explanation.
- **website.html**: Link to Project 1.
- **lexio.app**: Explains the application and provides a link to open it (coming soon).

## About the Application
The application took over a year to develop and is being created with a friend. It aims to help students and professionals study, take notes, and review conference materials easily using AI.

## About the Website
The website is built with passion and dedication, using various programming languages and design principles to create an engaging user experience.
            `;

            let i = 0;
            box.classList.remove('hidden');
            writingInterval = setInterval(() => {
                writer.textContent += description[i];
                i++;
                if (i >= description.length) clearInterval(writingInterval);
            }, 50); // Typing speed
        } else if (type === 'website' || type === 'lexio') {
            document.getElementById(type).classList.remove('hidden');
        }
    });
});

// Show README on load
window.onload = () => {
    document.querySelector('.file[data-type="readme"]').click();
};

function openProject1() {
    window.location.href = "pr1.html";
}