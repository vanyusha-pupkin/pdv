  let gallery = document.querySelectorAll('._gallery');

  if (gallery) {
     gallery_init();
  }

  function gallery_init() {
     for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
           counter: false,
           selector: 'a',
           download: false
        });
     }
  }




// ОПИСАНИЕ
/*

показает изображения в модальном окне
 - блоку к котором находятся изображения нужно добавить класс _gallery
 - каждую картинку нужно завернуть в тег <a> и в атрибуте href указать путь к большой картинки

в файле style.scss должен быть подключен lightgallery.scss
@import "vendor/_lightgallery.scss";

в папке src\img\icons должны быть иконки
close.svg
loading.gif
p-left.svg
p-right.svg

в файле main.js должен быть подключен lightgallery.min.js
import "./vendor/_lightgallery.min";

*/

//ПРИМЕР

/*

HTML

<div class="gallery-block _gallery">
  <a href="img/01.jpg" class="gallery-block__item">
    <img src="img/01.jpg" alt="">
  </a>
  <a href="img/02.jpg" class="gallery-block__item">
    <img src="img/02.jpg" alt="">
  </a>
  <a href="img/03.jpg" class="gallery-block__item">
    <img src="img/03.jpg" alt="">
  </a>
  <a href="img/04.jpg" class="gallery-block__item">
    <img src="img/04.jpg" alt="">
  </a>
  <a href="img/05.jpg" class="gallery-block__item">
    <img src="img/05.jpg" alt="">
  </a>
</div>

*/
