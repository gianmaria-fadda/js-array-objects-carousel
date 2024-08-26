const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imagesContainer = document.querySelector('.images-container');

for (let i = 0; i < images.length; i++) {
    if (i == 0) {
        imagesContainer.innerHTML += `
            <div class="image-slide active">
                <img src="${images[i].image}" class="active">
                <div class="description">
                    <h2>${images[i].title}</h2>
                    <p>${images[i].text}</p>
                </div>
            </div>`;
    }
    else {
        imagesContainer.innerHTML += `
            <div class="image-slide">
                <img src="${images[i].image}">
                <div class="description">
                    <h2>${images[i].title}</h2>
                    <p>${images[i].text}</p>
                </div>
            </div>`;
    }
}

let currentlyActiveImg = 1;

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function () {
    if (currentlyActiveImg < images.length) {
        document.querySelector('.image-slide.active').classList.remove('active');
    
        currentlyActiveImg++;
    
        document.querySelector('.image-slide:nth-child(' + currentlyActiveImg + ')').classList.add('active');
    }
    else {
        currentlyActiveImg = 0;
    }
});

const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', function () {
    if (currentlyActiveImg > 1) {
        document.querySelector('.image-slide.active').classList.remove('active');
    
        currentlyActiveImg--;
    
        document.querySelector('.image-slide:nth-child(' + currentlyActiveImg + ')').classList.add('active');
    }
    else {
        currentlyActiveImg = images.length - 1;
    }
});