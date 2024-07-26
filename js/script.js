const imagesContainer = document.querySelector('.images-container');
console.log('imagesContainer', imagesContainer, typeof imagesContainer);

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

console.log(images);
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);
console.log(images[3]);
console.log(images[4]);

for (let i = 0; i < images.length; i++) {
    if (i == 0) {
        imagesContainer.innerHTML += `<img src="${images[i]}" class="active">`
    }
    else {
        imagesContainer.innerHTML += `<img src="${images[i]}">`
    }
}

let currentlyActiveImg = 1;

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function () {
    if (currentlyActiveImg < images.length) {
        document.querySelector('.images-container > img:nth-child(' + currentlyActiveImg + ')').classList.remove('active');
    
        currentlyActiveImg++;
    
        document.querySelector('.images-container > img:nth-child(' + currentlyActiveImg + ')').classList.add('active');
    }
});

const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', function () {
    if (currentlyActiveImg > 1) {
        document.querySelector('.images-container > img:nth-child(' + currentlyActiveImg + ')').classList.remove('active');
    
        currentlyActiveImg--;
    
        document.querySelector('.images-container > img:nth-child(' + currentlyActiveImg + ')').classList.add('active');
    }
});