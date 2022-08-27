let carouselItems = document.querySelectorAll(".carousel-item")
let prevButton = document.querySelector(".carousel-control-prev")
let nextButton = document.querySelector(".carousel-control-next")
let counter=0;


prevButton.addEventListener("click", function () {
      counter--;
      counter < 0 ? counter=carouselItems.length-1 : counter;
      changeTheActiveItem(counter)
})
nextButton.addEventListener("click", function () {
      counter++;
      counter >= carouselItems.length ? counter=0: counter;
      changeTheActiveItem(counter)
})
function changeTheActiveItem(counter) {

      carouselItems.forEach((item,index) => {
            if (index==counter) {
              item.className = "carousel-item active"
            }
            else {
              item.className = "carousel-item"
            }
        })
}



