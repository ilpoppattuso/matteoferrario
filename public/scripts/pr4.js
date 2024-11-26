const fileTree = {
    "root": {
        "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>matteo ferrario</title>
    <link rel="stylesheet" href="public/styles/style.css">
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-trail"></div>
    <canvas id="particles-canvas"></canvas>

    <header>
        <h1 class="hero-title">matteo ferrario</h1>
        <p class="hero-subtitle">student, pianist and coder</p>
    </header>

    <div class="project-preview">
        <img src="/api/placeholder/320/180" alt="Project Preview">
        <h3></h3>
        <p></p>
    </div>

    <script src="public/scripts/index.js"></script>
</body>
</html>`,
        "public": {
            "styles": {
                "styles.css": `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
    user-select: none;
}

:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent: #4a9eff;
    --cursor-color: rgba(255, 255, 255, 0.8);
    --cursor-trail: rgba(255, 255, 255, 0.3);
}

body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.cursor {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease, opacity 0.3s ease, background-color 0.2s ease;
}

.cursor.dark {
    background-color: rgba(50, 50, 50, 0.8); /* Grigio scuro */
}

.cursor-trail {
    width: 25px;
    height: 25px;
    border: 2px solid var(--cursor-trail);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.15s ease;
}

#particles-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.hero-title {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--text-primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease forwards;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease forwards 0.3s;
}

.project-preview {
    position: fixed;
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(74, 158, 255, 0.2);
    border-radius: 12px;
    padding: 20px;
    max-width: 90%; /* Adattabile alla dimensione dello schermo */
    max-height: 90%; /* Limita l'altezza per evitare overflow */
    pointer-events: auto;
    opacity: 0;
    z-index: 9999;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-100%, -100%) scale(0.7);
    top: 0;
    left: 0;
    overflow: auto; /* Aggiunge lo scrolling se necessario */
}

.project-preview.visible {
    opacity: 1;
    transform: translate(0, 0) scale(1);
}

.project-preview img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.project-preview h3 {
    color: var(--text-primary);
    margin-bottom: 8px;
    font-size: 1.25rem;
}

.project-preview p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 15px;
}

.preview-button {
    width: 100%;
    padding: 10px;
    background-color: var(--accent);
    color: var(--bg-primary);
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: none;
    transition: background-color 0.2s ease;
}

.preview-button:hover {
    background-color: color-mix(in srgb, var(--accent) 80%, white);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }
    .hero-subtitle {
        font-size: 1.2rem;
    }
}`,
                "pr1.css": `body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.cursor {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.cursor.hidden {
    opacity: 0;
}

.left-panel {
    width: 30%;
    background-color: #1a1a1a;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 2px solid #284b63;
}

.title {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

.file {
    padding: 10px;
    background-color: #2a2a2a;
    border-radius: 5px;
    cursor: none;
    font-family: monospace;
    font-size: 1rem;
    color: #ffffff;
    transition: background-color 0.2s ease;
}

.file:hover {
    background-color: #4a9eff;
}

.right-panel {
    width: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-box {
    width: 90%;
    height: 90%;
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    color: #ffffff;
    font-family: monospace;
    font-size: 1rem;
    overflow-y: hidden;
}

.content-box.hidden {
    display: none;
}

.description-writing {
    white-space: pre-wrap;
    overflow-wrap: break-word;
}

iframe {
    border-radius: 10px;
}

.github-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
}

.github-link {
    padding: 10px 20px;
    background-color: #4a9eff;
    color: #0a0a0a;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s ease;
}

.github-link:hover {
    background-color: color-mix(in srgb, #4a9eff 80%, white);
}

.back-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #2a2a2a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #4a9eff;
    transform: scale(1.05);
}

/* Rimuovi i pallini per le cartelle e i file */
#file-tree ul {
    list-style: none;
    padding: 0;
}

#file-tree li {
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.15s ease;
}

#file-tree li.folder {
    font-weight: bold;
    color: var(--text-secondary);
}

#file-tree li.file {
    color: var(--text-primary);
}

#file-tree li:hover {
    background-color: rgba(74, 158, 255, 0.2);
    transform: scale(1.02); /* Ridotto lo zoom */
}

#file-tree li.active {
    background-color: rgba(74, 158, 255, 0.5);
}
`,
                "pr2.css": `body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.cursor {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.cursor.hidden {
    opacity: 0;
}

body {
    cursor: none; /* Nasconde il cursore di sistema */
}

.left-panel {
    width: 30%;
    background-color: #1a1a1a;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 2px solid #284b63;
}

.title {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

.file {
    padding: 10px;
    background-color: #2a2a2a;
    border-radius: 5px;
    cursor: none;
    font-family: monospace;
    font-size: 1rem;
    color: #ffffff;
    transition: background-color 0.2s ease;
}

.file:hover {
    background-color: #4a9eff;
}

.right-panel {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
}

.content-box {
    width: 90%;
    height: 90%;
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    overflow-y: auto;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    margin-top: 20px;
    cursor: none;
}

.gallery-item {
    width: 100%;
    margin-bottom: 30px; /* Aumenta il margine sotto */
    padding: 15px; /* Aumenta il padding intorno all'audio */
    background-color: #2a2a2a;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: none;
}

.gallery-item video {
    width: 100%; /* Occupa tutta la larghezza */
    height: 100%; /* Occupa tutta l'altezza */
    object-fit: cover; /* Mantiene le proporzioni e taglia il video se necessario */
    border-radius: 10px;
}

.audio-info {
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px; /* Più spazio tra il testo e il player */
    text-align: center;
}

.gallery-item audio {
    width: 100%;
    border-radius: 10px;
    background-color: #2a2a2a;
    margin-top: 10px;
    pointer-events: auto;
    cursor: none;
}

.back-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #2a2a2a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #4a9eff;
    transform: scale(1.05);
}

/* Rimuovi i pallini per le cartelle e i file */
#file-tree ul {
    list-style: none;
    padding: 0;
}

#file-tree li {
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.15s ease;
}

#file-tree li.folder {
    font-weight: bold;
    color: var(--text-secondary);
}

#file-tree li.file {
    color: var(--text-primary);
}

#file-tree li:hover {
    background-color: rgba(74, 158, 255, 0.2);
    transform: scale(1.02); /* Ridotto lo zoom */
}

#file-tree li.active {
    background-color: rgba(74, 158, 255, 0.5);
}
`,
                "pr3.css": `body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.cursor {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.cursor.hidden {
    opacity: 0;
}

body {
    cursor: none;
}

.left-panel {
    width: 30%;
    background-color: #1a1a1a;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 2px solid #284b63;
}

.title {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

#file-name {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

.file {
    padding: 10px;
    background-color: #2a2a2a;
    border-radius: 5px;
    cursor: none;
    font-family: monospace;
    font-size: 1rem;
    color: #ffffff;
    transition: background-color 0.2s ease;
}

#introduction::marker {
    content: '';
}

#files-folder::marker {
    content: '';
}

.file:hover {
    background-color: #4a9eff;
}

.right-panel {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
}

.content-box {
    width: 90%;
    height: 90%;
    background-color: #1a1a1a;
    border-radius: 10px;
    padding: 20px;
    color: #ffffff;
    overflow-y: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.content-box.hidden {
    display: none;
}

#pdf-preview iframe {
    width: 100%;
    height: 500px;
    border: none;
    border-radius: 8px;
}

.description-writing {
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
}

.back-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #2a2a2a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #4a9eff;
    transform: scale(1.05);
}

#file-tree ul {
    list-style: none;
    padding: 0;
}

#file-tree li {
    padding: 10px;
    border-radius: 6px;
    transition: background-color 0.15s ease, transform 0.15s ease;
}

#file-tree li.folder {
    cursor: none;
    font-weight: bold;
    color: var(--text-secondary);
}

#file-tree li.file {
    cursor: none;
    color: var(--text-primary);
    margin-bottom: 10px;
}

#file-tree li:hover {
    background-color: rgba(74, 158, 255, 0.2);
    transform: scale(1.02);
}

#file-tree li.active {
    background-color: rgba(74, 158, 255, 0.5);
}

#ul-text {
    padding-bottom: 10px;
}
`,
                "pr4.css": `body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.cursor {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease, opacity 0.3s ease;
}

.cursor.hidden {
    opacity: 0;
}

body {
    cursor: none;
}

.left-panel {
    width: 30%;
    background-color: #1a1a1a;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 2px solid #284b63;
}

.title {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

#file-name {
    font-size: 1.2rem;
    color: var(--accent);
    text-transform: lowercase;
    margin-bottom: 20px;
}

.file {
    padding: 10px;
    margin-bottom: 5px;
    background-color: #2a2a2a;
    border-radius: 5px;
    cursor: none;
    font-family: monospace;
    font-size: 1rem;
    color: #ffffff;
    transition: background-color 0.2s ease;
}

.file:hover {
    background-color: #4a9eff;
}

.right-panel {
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
}

.right-panel h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--accent);
    text-transform: uppercase;
}

#file-content {
    font-family: 'Courier New', monospace;
    font-size: 1rem;
    background-color: rgba(10, 10, 10, 0.95);
    color: #a8ff60;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.back-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #2a2a2a;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.back-button:hover {
    background-color: #4a9eff;
    transform: scale(1.05);
}

#file-tree ul {
    list-style: none;
    padding: 0;
}

#file-tree li {
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.15s ease, transform 0.15s ease;
}

#file-tree li.folder {
    cursor: none;
    font-weight: bold;
    color: var(--text-secondary);
}

#file-tree li.file {
    cursor: none;
    color: var(--text-primary);
}

#file-tree li:hover {
    background-color: rgba(74, 158, 255, 0.2);
    transform: scale(1.02);
}

#file-tree li.active {
    background-color: rgba(74, 158, 255, 0.5);
}

#ul-text {
    padding-bottom: 10px;
}

.file::marker {
    content: '';
}

.ul-text::marker {
    content: '';
}`
            },
            "scripts": {
                "index.js": `// DOM Elements
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
    }
];

const connections = [
    [0, 1], [0, 2], [1, 3], [2, 3]
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
        ctx.fillStyle = \`rgba(255, 255, 255, \${this.brightness})\`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 4
        );
        gradient.addColorStop(0, \`rgba(74, 158, 255, 0.4)\`); // Accent color glow
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
        ctx.fillStyle = \`rgba(255, 255, 255, \${this.brightness})\`;
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
    preview.style.transform = \`translate(\${left}px, \${top}px) scale(1)\`;
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
            preview.style.transform = \`scale(0.7)\`;
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
    
    cursorTrail.style.transform = \`translate(\${trailX - 12.5}px, \${trailY - 12.5}px)\`;
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
    
    cursor.style.transform = \`translate(\${mouseX - 6}px, \${mouseY - 6}px)\`;
    
    checkStarHover(currentMouseX, currentMouseY);
});`,
                "pr1.js": `const cursor = document.querySelector('.cursor');
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
    cursor.style.transform = \`translate(\${e.clientX - 6}px, \${e.clientY - 6}px)\`;
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
            const description = \`
                Lexio's waitlist
                --------------

                technologies: html, css, js, node.js, github actions

                Lexio aims to revolutionize knowledge sharing and productivity enhancement through its innovative platform. the waitlist website is designed to provide a seamless user experience, acting as the first step towards engaging with Lexio's ecosystem.

                **features:**
                - sleek, responsive design;
                - intuitive sign-up process;
                - integrated analytics for waitlist management;
                - deployed using CI/CD pipelines for rapid updates.

                explore the website or the repository to learn more about our approach to modern knowledge management.\`;

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
`,
                "pr2.js": `const files = document.querySelectorAll('.file');
const galleryContent = document.getElementById('gallery-content');

// Video e audio simulati
const media = {
    video: [
        { src: "../media/pr2/videos/1.mov", type: "video" }
    ],
    audio: [
        { 
            src: "../media/pr2/audios/1.dat",
            type: "audio",
            title: "atlantis",
            artist: "roberto cacciapaglia",
            date: "2023"
        },
        { 
            src: "../media/pr2/audios/2.dat", 
            type: "audio",
            title: "clair de lune - first part",
            artist: "claude debussy",
            date: "1905"
        },
        { 
            src: "../media/pr2/audios/3.dat", 
            type: "audio",
            title: "the crisis",
            artist: "ennio morricone",
            date: "1982"
        },
        { 
            src: "../media/pr2/audios/4.dat", 
            type: "audio",
            title: "comptine d'un autre été",
            artist: "yann tiersen",
            date: "2001"
        },
        {
            src: "../media/pr2/audios/5.dat", 
            type: "audio",
            title: "experience",
            artist: "ludovico einaudi",
            date: "2013"
        },
        {
            src: "../media/pr2/audios/6.dat", 
            type: "audio",
            title: "nuvole bianche",
            artist: "ludovico einaudi",
            date: "2004"
        },
        {
            src: "../media/pr2/audios/7.dat", 
            type: "audio",
            title: "bohemian rhapsody - first part arranged",
            artist: "the queen",
            date: "1975"
        }
    ]
};


const cursor = document.querySelector('.cursor');
const galleryItems = document.querySelectorAll('.gallery-item');

// Segui il cursore del mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = \`translate(\${e.clientX - 6}px, \${e.clientY - 6}px)\`;
});

// Rendi il cursore visibile sopra i contenuti della galleria
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('hidden'));
});


// Funzione per mostrare i contenuti
function loadMedia(type) {
    galleryContent.innerHTML = ""; // Pulisce la galleria

    media[type].forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        if (item.type === "audio") {
            const audioInfo = document.createElement('div');
            audioInfo.classList.add('audio-info');
            audioInfo.innerHTML = \`<strong>title:</strong> \${item.title}<br>
                                    <strong>artist:</strong> \${item.artist}<br>
                                    <strong>year:</strong> \${item.date}\`;

            const audioElement = document.createElement('audio');
            audioElement.classList.add('audio-elements');
            audioElement.controls = true;
            const source = document.createElement('source');
            source.src = item.src;
            source.type = 'audio/mp3';
            audioElement.appendChild(source);

            galleryItem.appendChild(audioInfo);
            galleryItem.appendChild(audioElement);
        } else if (item.type === "video") {
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            const source = document.createElement('source');
            source.src = item.src;
            source.type = 'video/mp4';
            videoElement.appendChild(source);
            galleryItem.appendChild(videoElement);
        }

        galleryContent.appendChild(galleryItem);
    });
}


// Event listener per i file
files.forEach(file => {
    file.addEventListener('click', () => {
        const type = file.dataset.type;
        loadMedia(type);
    });
});

// Carica i video per default
window.onload = () => {
    loadMedia('video');
};
`,
                "pr3.js": `const fileTreeElement = document.getElementById('file-tree');
const descriptionBox = document.getElementById('description');
const descriptionWriting = descriptionBox.querySelector('.description-writing');
const pdfPreview = document.getElementById('pdf-preview');

const introductionText = \`
my passion for mathematics and physics has been a driving force in my life, 
representing years of dedicated research and intellectual exploration. 

through these documents, i aim to share insights into the profound 
beauty into mathematical theory and physical phenomena. 
each formula, each theorem is a window into the elegant complexity 
of our universe, revealing patterns that connect seemingly disparate 
fields of scientific inquiry.

mathematics is not just about numbers and equations — it is a language 
of universal truth, a method of understanding the fundamental 
structures that govern reality itself. my work seeks to push the 
boundaries of this understanding, to illuminate the deep mathematical 
principles that underlie natural phenomena.
\`;

const pdfDescriptions = {
    "file 1.pdf": "This equation represents the total potential gravitational energy of a system of masses. The double sum is a straightforward way to sum all the potential energies of all the possible pairs of masses in the system.",
    "file 2.pdf": "Sorry, I will publish this sheet soon."
};

let writingInterval = null;

// Mostra il testo dinamico
function showDynamicText(textElement, text) {
    textElement.textContent = '';
    let index = 0;
    clearInterval(writingInterval);
    writingInterval = setInterval(() => {
        textElement.textContent += text[index];
        index++;
        if (index === text.length) clearInterval(writingInterval);
    }, 50);
}

// Gestione cartelle e file
fileTreeElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('folder')) {
        const folderContent = target.querySelector('.folder-content');
        folderContent.style.display = folderContent.style.display === 'block' ? 'none' : 'block';
    } else if (target.classList.contains('file')) {
        document.querySelectorAll('#file-tree .file').forEach(el => el.classList.remove('active'));
        target.classList.add('active');

        const fileName = target.textContent.trim();
        if (target.dataset.type === 'text') {
            descriptionBox.style.display = 'block';
            pdfPreview.style.display = 'none';
            showDynamicText(descriptionWriting, introductionText);
        } else if (target.classList.contains('pdf')) {
            descriptionBox.style.display = 'block';
            pdfPreview.style.display = 'flex';
            pdfPreview.innerHTML = \`<iframe src="\${target.dataset.src}" title="PDF Preview"></iframe>\`;
            showDynamicText(descriptionWriting, pdfDescriptions[fileName] || 'No description available.');
        }
    }
});

// Carica l'introduzione per default
window.onload = () => {
    document.getElementById('introduction').click();
};

const cursor = document.querySelector('.cursor');

// Segui il cursore del mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = \`translate(\${e.clientX - 6}px, \${e.clientY - 6}px)\`;
});
`,
                "pr4.js": "Unfortunately, we cannot show the script for this project."
            },
            "projects": {
                "pr1.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lexio's waitlist</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/pr1.css">
</head>
<body>
    <div class="cursor"></div>

    <div class="left-panel">
        <div class="file" data-type="description">description.txt</div>
        <div class="file" data-type="github">github.git</div>
        <div class="file" data-type="website">website.link</div>
    </div>

    <div class="right-panel">
        <div class="content-box hidden" id="description">
            <div class="description-writing"></div>
        </div>
        <div class="content-box hidden" id="github">
            <div class="github-preview">
                <iframe src="README.html" width="100%" height="80%" style="border: none; border-radius: 10px;"></iframe>
                <a href="https://github.com/lexio-admin/site_wtlst" target="_blank" class="github-link">Open GitHub Repository</a>
            </div>
        </div>
        <div class="content-box hidden" id="website">
            <iframe src="https://www.lexio.me" width="100%" height="100%" style="border: none;"></iframe>
        </div>
    </div>

    <a href="../../index.html" class="back-button">back to home</a>

    <script src="../scripts/pr1.js"></script>
</body>
</html>
`,
                "pr2.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>piano project</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/pr2.css">
</head>
<body>
    <div class="cursor"></div>

    <div class="left-panel">
        <div class="file" data-type="video">video</div>
        <div class="file" data-type="audio">audio</div>
    </div>

    <div class="right-panel">
        <div class="content-box" id="gallery">
            <!-- Galleria dinamica -->
            <div class="gallery-grid" id="gallery-content"></div>
        </div>
    </div>

    <a href="../../index.html" class="back-button">back to home</a>

    <script src="../scripts/pr2.js"></script>
</body>
</html>
`,
                "pr3.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>math & physics - project 3</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/pr3.css">
</head>
<body>
    <div class="cursor"></div>

    <!-- File Explorer -->
    <div class="left-panel">
        <h2 class="title">file explorer</h2>
        <ul id="file-tree">
            <li class="file" id="introduction" data-type="text">introduction.txt</li>
            <li class="folder" data-type="folder" id="files-folder">
                <p id="ul-text">files</p>
                <ul class="folder-content">
                    <li class="file pdf" data-src="../media/pr3/pdf1.pdf">file 1.pdf</li>
                    <li class="file pdf" data-src="../media/pr3/pdf2.pdf">file 2.pdf</li>
                </ul>
            </li>
        </ul>
    </div>

    <!-- Content Area -->
    <div class="right-panel">
        <div class="content-box" id="combined-container">
            <div id="description">
                <div class="description-writing"></div>
            </div>
            <div id="pdf-preview">
                <p>select a document from the left to preview it here.</p>
            </div>
        </div>
    </div>

    <!-- Back Button -->
    <a href="../../index.html" class="back-button">back to home</a>

    <script src="../scripts/pr3.js"></script>
</body>
</html>
`,
                "pr4.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>project 4 - this website</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link rel="stylesheet" href="../styles/pr4.css">
</head>
<body>
    <div class="cursor"></div>

    <!-- File Explorer -->
    <div class="left-panel">
        <h2 class="title">file explorer</h2>
        <ul id="file-tree">
            <!-- Generato dinamicamente -->
        </ul>
    </div>

    <!-- Content Area -->
    <div class="right-panel">
        <h2 id="file-name">select a file</h2>
        <pre id="file-content">click on a file to see its content.</pre>
    </div>

    <!-- Back Button -->
    <a href="../../index.html" class="back-button">back to home</a>

    <script src="../scripts/pr4.js"></script>
</body>
</html>
`,
                "readme.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lexio Waitlist - README</title>
    <style>
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        /* Scrollbar scura */
        body::-webkit-scrollbar {
            width: 8px;
        }

        body::-webkit-scrollbar-track {
            background: #1a1a1a; /* Sfondo della scrollbar */
        }

        body::-webkit-scrollbar-thumb {
            background-color: #4a4a4a; /* Colore della "maniglia" */
            border-radius: 4px;
            border: 2px solid #1a1a1a; /* Per creare lo spazio */
        }

        body::-webkit-scrollbar-thumb:hover {
            background-color: #666666; /* Colore più chiaro al passaggio del mouse */
        }
        h1, h2 {
            color: #4a9eff;
        }
        p, ul {
            margin-bottom: 1rem;
        }
        a {
            color: #4a9eff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 1rem;
            font-weight: bold;
            color: #0a0a0a;
            background-color: #4a9eff;
            border: none;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            transition: background-color 0.2s ease;
        }
        .btn:hover {
            background-color: color-mix(in srgb, #4a9eff 80%, white);
        }
        .code {
            background-color: #2a2a2a;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: monospace;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <h1>Lexio's waitlist</h1>
    <p>
        welcome to the official repository of the Lexio waitlist project! This repository contains the source code for 
        the waitlist application, which is part of Lexio's ecosystem. the waitlist allows users to sign up for early 
        access and provides a sleek, intuitive interface for managing registrations.
    </p>

    <h2>technologies used</h2>
    <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>node.js</li>
    </ul>

    <h2>features</h2>
    <ul>
        <li>responsive design for seamless use on all devices</li>
        <li>intuitive and fast waitlist sign-up process</li>
        <li>integrated analytics for tracking registrations</li>
        <li>deployed using ci/cd pipelines</li>
    </ul>

    <h2>installation</h2>
    <p>
        to clone and run this project locally, follow these steps:
    </p>
    <div class="code">
        git clone https://github.com/lexio-admin/site_wtlst<br>
        cd site_wtlst<br>
        npm install<br>
        npm start
    </div>

    <h2>how to contribute</h2>
    <p>
        contributions are welcome! to contribute to this project:
    </p>
    <ul>
        <li>fork the repository</li>
        <li>create a new branch for your feature or bug fix</li>
        <li>make your changes and commit them</li>
        <li>push your changes to the forked repository</li>
        <li>submit a pull request to the main branch</li>
    </ul>

    <h2>license</h2>
    <p>
        this project is licensed under the mit license. see the 
        <a href="https://github.com/lexio-admin/site_wtlst/blob/main/LICENSE" target="_blank">license file</a> for details.
    </p>
    
</body>
</html>
`
            },
            "media": {
                "img": {
                    "pr1.png": "Image for project 1",
                    "pr2.jpg": "Image for project 2",
                    "pr3.png": "Image for project 3",
                    "pr4.png": "Image for project 4"
                },
                "pr2": {
                    "audios": {
                        "2.dat": "Audio 2 for project 2",
                        "3.dat": "Audio 3 for project 2"
                    },
                    "videos": {
                        "1.mov": "Video 1 for project 2"
                    }
                },
                "pr3": {
                    "pdf1.pdf": "PDF 1 for project 3"
                }
            }
        }
    }
};

const fileTreeElement = document.getElementById('file-tree');
const fileNameElement = document.getElementById('file-name');
const fileContentElement = document.getElementById('file-content');

// Funzione per creare la struttura ad albero dei file
function createFileTree(node, parentElement) {
    Object.keys(node).forEach(key => {
        const li = document.createElement('li');
        if (typeof node[key] === 'object') {
            // Cartella
            li.textContent = key;
            li.classList.add('folder');
            li.classList.add('ul-text');  // Aggiungi la classe 'ul-text' solo ai nomi delle cartelle
            const ul = document.createElement('ul');
            ul.style.display = 'none'; // Chiudi la cartella inizialmente
            li.appendChild(ul);
            
            li.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita che l'evento propaghi al genitore
                const isVisible = ul.style.display === 'block';
                ul.style.display = isVisible ? 'none' : 'block'; // Mostra o nasconde la cartella
            });

            createFileTree(node[key], ul);
        } else {
            // File
            li.textContent = key;
            li.classList.add('file');
            li.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita conflitti con la cartella genitore
                document.querySelectorAll('#file-tree .file').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                fileNameElement.textContent = key;
                fileContentElement.textContent = node[key]; // Mostra il contenuto del file effettivo
            });
        }
        parentElement.appendChild(li);
    });
}

// Inizializza la struttura dei file
createFileTree(fileTree.root, fileTreeElement);

const cursor = document.querySelector('.cursor');

// Segui il cursore del mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
});