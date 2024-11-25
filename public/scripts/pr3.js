const fileTreeElement = document.getElementById('file-tree');
const descriptionBox = document.getElementById('description');
const descriptionWriting = descriptionBox.querySelector('.description-writing');
const pdfPreview = document.getElementById('pdf-preview');

const introductionText = `
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
`;

const pdfDescriptions = {
    "file 1.pdf": "This equation represents the total potential gravitational energy of a system of masses. The double sum is a straightforward way to sum all the potential energies of all the possible pairs of masses in the system.",
    "file 2.pdf": "Description for file 2."
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
            pdfPreview.innerHTML = `<iframe src="${target.dataset.src}" title="PDF Preview"></iframe>`;
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
    cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
});
