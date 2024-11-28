const files = document.querySelectorAll('.file');
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
            title: "the crisis (modified version)",
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
            title: "bohemian rhapsody - first part (piano arrangement)",
            artist: "the queen",
            date: "1975"
        },
        {
            src: "../media/pr2/audios/8.dat", 
            type: "audio",
            title: "inception - time (piano arrangement)",
            artist: "hans zimmer",
            date: "2019"
        },
        {
            src: "../media/pr2/audios/9.dat", 
            type: "audio",
            title: "interstellar - main themes (piano arrangement)",
            artist: "hans zimmer",
            date: "2014"
        }
    ]
};


const cursor = document.querySelector('.cursor');
const galleryItems = document.querySelectorAll('.gallery-item');

// Segui il cursore del mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
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
            audioInfo.innerHTML = `<strong>title:</strong> ${item.title}<br>
                                    <strong>artist:</strong> ${item.artist}<br>
                                    <strong>year:</strong> ${item.date}`;

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
