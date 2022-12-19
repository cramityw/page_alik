import "./import/modules";
import "./import/components";

$(function () {
    $.getJSON('https://fakestoreapi.com/products', function (data) {
        var template = document.querySelector('#template-card')
        for (var i = 0; i < data.length; i++) {
            var mohs = data[i]
            var clone = template.content.cloneNode(true)

            var title = clone.querySelectorAll('span')
            title[0].textContent = mohs.title

            var price = clone.querySelectorAll('h3')
            price[0].textContent = mohs.price + ' руб.'

            var category = clone.querySelectorAll('a')
            category[0].textContent = mohs.category

            var rating = clone.querySelectorAll('p')
            rating[0].textContent = mohs.rating.rate

            var image = clone.querySelectorAll('div img')
            var img = image[0],
                src = img.src.replace(/.*?:\/\//g, "");
            img.src = mohs.image;

            template.parentNode.appendChild(clone)
        }
    });
});