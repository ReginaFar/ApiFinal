        'use strict';
        
        const photoContainer = document.querySelector('.photo-container')
        const authorName = document.querySelector('.author-name');
        const likeButton = document.querySelector('.button-like');
        let page = 1;

        window.addEventListener('load', () => {
            getRandomPhoto();
        });

        async function fetchPhotos() {
            try {
                const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=uMwJUUR8FwBIW98NgSnyDzBNWZcVdo3ON7zV9TbCKy4`);
                const photos = await response.json();
                console.log(photos);
                return photos;
            } catch (error) {
                console.error('Ошибка при загрузке фотографий:', error);
            return [];
            }
        }

        function randomIndex (n, m) {
            return Math.round(Math.random()*(m-n)+n);
        }

        async function getRandomPhoto() {
            const data = await fetchPhotos();
            let index = randomIndex (0, data.length-1);
            photo.src = data [index].urls.full;
            authorName.textContent = data [index].user.first_name;
        }

        likeButton.addEventListener('click',() => {
            photoContainer.style = 'background-color: beige';
        })