// DOM Elements
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
const preview = document.querySelector('.project-preview');
const header = document.querySelector('header');

// Debug: Ensure canvas is properly set up
console.log('Canvas found:', canvas);
canvas.style.backgroundColor = 'rgba(10, 10, 10, 0.5)'; // Make background slightly transparent for debugging

// Mouse position variables
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;
let currentMouseX = 0, currentMouseY = 0;
let isPreviewHovered = false;
let activePreviewStar = null;
let hideTimeout = null;
let showTimeout = null;

// Star arrays
let stars = [];
let backgroundStars = [];

// Constellation data with clearer, more distinct project information
const constellationStars = [
    {
        x: 0.75, 
        y: 0.45,
        project: {
            title: "Lexio's waitlist",
            description: "a waitlist landing page for Lexio, startup in stealth mode",
            image: "public/media/img/pr1.png", 
            url: "public/projects/pr1.html"
        }
    },
    {
        x: 0.15, 
        y: 0.2,
        project: {
            title: "piano",
            description: "experience my passion",
            image: "public/media/img/pr2.jpg", 
            url: "public/projects/pr2.html"
        }
    },
    {
        x: 0.6, 
        y: 0.28,
        project: {
            title: "maths & physics",
            description: "come here to check my formulas and demonstrations",
            image: "public/media/img/pr3.png", 
            url: "public/projects/pr3.html"
        }
    },
    {
        x: 0.3, 
        y: 0.62,
        project: {
            title: "this website",
            description: "a personal website to showcase my projects and experiments",
            image: "public/media/img/pr4.png", 
            url: "public/projects/pr4.html"
        }
    },
    {
        x: 0.6, 
        y: 0.82,
        project: {
            title: "Lexio app",
            description: "the Lexio app, my biggest project so far",
            image: "public/media/img/pr5.png", 
            url: "public/projects/pr5.html"
        }
    }
];

const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 4]
];

// Star Class with more pronounced visual style
class Star {
    constructor(baseX, baseY, project) {
        this.baseX = baseX;
        this.baseY = baseY;
        this.x = baseX * canvas.width;
        this.y = baseY * canvas.height;
        this.size = 6; // Increased size for better visibility
        this.project = project;
        this.brightness = 0.9; // Increased brightness
        
        this.angle = Math.random() * Math.PI * 2;
        this.amplitude = 20; // Increased amplitude for more movement
        this.speed = 0.002 + Math.random() * 0.005;
        this.phaseOffset = Math.random() * Math.PI * 2;
        
        this.attractionX = 0;
        this.attractionY = 0;
        this.attractionForce = 0;
        this.attractionDecay = 0.85;
    }

    update() {
        this.angle += this.speed;
        const offsetX = Math.sin(this.angle + this.phaseOffset) * this.amplitude;
        const offsetY = Math.cos(this.angle * 1.5) * this.amplitude;
        
        this.attractionForce *= this.attractionDecay;
        this.attractionX *= this.attractionDecay;
        this.attractionY *= this.attractionDecay;
        
        this.x = (this.baseX * canvas.width) + offsetX + this.attractionX;
        this.y = (this.baseY * canvas.height) + offsetY + this.attractionY;
    }

    applyAttraction(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attractionRadius = 150;
        
        if (distance < attractionRadius) {
            const force = (1 - distance / attractionRadius) * 0.05;
            const angle = Math.atan2(dy, dx);
            
            this.attractionX = Math.cos(angle) * force * 20;
            this.attractionY = Math.sin(angle) * force * 20;
            this.attractionForce = force;
        }
    }

    draw() {
        // Main star
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 4
        );
        gradient.addColorStop(0, `rgba(74, 158, 255, 0.4)`); // Accent color glow
        gradient.addColorStop(1, 'rgba(74, 158, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Background stars remain the same...
class BackgroundStar {
    constructor() {
        this.resetPosition();
    }

    resetPosition() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.brightness = Math.random() * 0.3;
        
        if (Math.random() < 0.4) {
            this.size = Math.random() * 0.8;
            this.brightness = Math.random() * 0.15;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize stars
function initializeStars() {
    // Initialize main constellation stars
    stars = constellationStars.map(data => new Star(data.x, data.y, data.project));
    
    // Initialize background stars
    backgroundStars = Array.from({ length: 300 }, () => new BackgroundStar());

    // Debug: Log star positions
    console.log('Constellation Stars:', stars.map(star => ({ x: star.x, y: star.y })));
}

// Resize handling
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reinitialize background stars on resize
    backgroundStars.forEach(star => star.resetPosition());
    
    // Update main stars positions based on new canvas dimensions
    stars.forEach(star => {
        star.x = star.baseX * canvas.width;
        star.y = star.baseY * canvas.height;
    });
}

function showProjectPreview(star) {
    if (hideTimeout) {
        clearTimeout(hideTimeout); // Evita che l'anteprima venga nascosta
        hideTimeout = null;
    }

    if (activePreviewStar === star) return; // Evita di ripetere l'animazione per la stessa stella

    activePreviewStar = star;

    const previewImg = preview.querySelector('img');
    const previewTitle = preview.querySelector('h3');
    const previewDesc = preview.querySelector('p');

    // Crea il pulsante se non esiste
    let previewButton = preview.querySelector('.preview-button');
    if (!previewButton) {
        previewButton = document.createElement('button');
        previewButton.classList.add('preview-button');
        previewButton.textContent = 'View Project';
        preview.appendChild(previewButton);
    }

    // Aggiorna i contenuti del pulsante
    previewButton.onclick = () => {
        if (star.project.url) {
            window.location.href = star.project.url;
        }
    };

    // Aggiorna il contenuto dell'anteprima
    previewImg.src = star.project.image || '/api/placeholder/320/180'; // Fallback se manca l'immagine
    previewTitle.textContent = star.project.title;
    previewDesc.textContent = star.project.description;

    // Posizionamento dinamico dell'anteprima
    const previewHeight = preview.offsetHeight || 300;
    const previewWidth = preview.offsetWidth || 320;
    let top = star.y + 20; // Default: sotto la stella
    let left = star.x - previewWidth / 2; // Centrato rispetto alla stella

    // Se troppo vicino al bordo inferiore, spostalo sopra
    if (top + previewHeight > window.innerHeight) {
        top = star.y - previewHeight + 150;
    }

    // Se troppo vicino al bordo superiore, spostalo sotto
    if (top < 0) {
        top = star.y + 20;
    }

    // Assicurati che non vada oltre i bordi laterali
    if (left < 0) {
        left = 10; // Margine sinistro
    } else if (left + previewWidth > window.innerWidth) {
        left = window.innerWidth - previewWidth - 10; // Margine destro
    }

    // Applica posizione e mostra l'anteprima
    preview.style.transform = `translate(${left}px, ${top}px) scale(1)`;
    preview.style.opacity = '1';
    preview.classList.add('visible');
}

function hideProjectPreview() {
    if (showTimeout) {
        clearTimeout(showTimeout); // Cancella eventuali tentativi di mostrare
        showTimeout = null;
    }

    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }

    hideTimeout = setTimeout(() => {
        if (!isPreviewHovered) { // Nascondi solo se il cursore non è sull'anteprima
            preview.style.opacity = '0';
            preview.style.transform = `scale(0.7)`;
            activePreviewStar = null;

            setTimeout(() => {
                preview.classList.remove('visible');
            }, 300); // Tempo per completare l'animazione
        }
    }, 300); // Ritardo prima di nascondere
}


function checkStarHover(mouseX, mouseY) {
    let hoveredStar = null;
    let minDistance = 20;

    for (const star of stars) {
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
            hoveredStar = star;
            minDistance = distance;
        }
    }

    if (hoveredStar) {
        if (!showTimeout) {
            showTimeout = setTimeout(() => showProjectPreview(hoveredStar), 100);
        }
    } else {
        hideProjectPreview();
    }
}

// Eventi per mantenere visibile l'anteprima
preview.addEventListener('mouseenter', () => {
    isPreviewHovered = true;

    if (hideTimeout) {
        clearTimeout(hideTimeout); // Cancella il timeout per nascondere
    }
    preview.style.pointerEvents = 'auto';
});

preview.addEventListener('mouseleave', () => {
    isPreviewHovered = false;
    hideProjectPreview();
});

function animateTrail() {
    const dx = mouseX - trailX;
    const dy = mouseY - trailY;
    
    trailX += dx * 0.15;
    trailY += dy * 0.15;
    
    cursorTrail.style.transform = `translate(${trailX - 12.5}px, ${trailY - 12.5}px)`;
    requestAnimationFrame(animateTrail);
}

function animate() {
    ctx.fillStyle = 'rgba(10, 10, 10, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw background stars
    backgroundStars.forEach(star => star.draw());

    // Update main stars
    stars.forEach(star => star.update());

    // Draw connections
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    connections.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
    });

    // Draw main stars
    stars.forEach(star => star.draw());

    requestAnimationFrame(animate);
}

// Event Listeners
window.addEventListener('resize', resizeCanvas);


// Initialization 
function initApp() {
    resizeCanvas();
    initializeStars();
    animateTrail();
    animate();
}

// Ensure DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initApp);

document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    currentMouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
    currentMouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    
    checkStarHover(currentMouseX, currentMouseY);
});