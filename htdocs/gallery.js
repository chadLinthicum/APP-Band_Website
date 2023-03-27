const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');

const modal = document.createElement('div');
const closeBtn = document.createElement('button');
closeBtn.innerText = "✖";
closeBtn.className = "closeBtn"
const header = document.getElementById("Header");
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);
modal.appendChild(closeBtn);
document.body.appendChild(modal);

images.forEach((image) => {
    image.addEventListener('click', () => {
        modalContent.innerHTML = '';
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modalContent.appendChild(modalImage);
        modal.style.display = 'block';
        header.style.visibility = 'hidden';
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        header.style.visibility = 'visible';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
        header.style.visibility = 'visible';
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    header.style.visibility = 'visible';
}
)