document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
})

let masha = document.querySelector('.section-header__btn')
let open = document.querySelector('.open')
let poisk = document.querySelector('.section-header__search-window')
let zakryt = document.querySelector('.close-textarea')

masha.onclick = function(){
  poisk.classList.add("open")
}

zakryt.onclick = function(){
  poisk.classList.remove("open")
}




document.querySelectorAll('.how-we-work__link').forEach(function(howWeWorkLink) {
  howWeWorkLink.addEventListener('click',function(event){
    const path = event.currentTarget.dataset.path
    console.log(path)


    document.querySelectorAll('.how-we-work__two-parts').forEach(function(open) {
      open.classList.remove('open1')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('open1')
      })

      $(".accordion").accordion();
    })

    $( function() {
      $( "#accordion" ).accordion();
    } );


    document.querySelectorAll('.questions__icon').forEach(function(dzhuinya) {
      dzhuinya.addEventListener('click',function(event){
        const path = event.currentTarget.dataset.path
        console.log(path)


        document.querySelectorAll('.questions__svg-plus').forEach(function(open) {
          open.classList.remove('active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('active')
          })

          $(".accordion").accordion();
        })


          /*burger*/

document.querySelector("#headerButton").addEventListener('click',function(){
  document.querySelector('#listStyle').classList.toggle("menu-burger-active")
  document.querySelector('.section-header__burger').classList.toggle("burger-menu-non-active")
  document.querySelector('.list-close').classList.toggle("burger-menu-non")
})
document.querySelector(".list-close").addEventListener('click',function(){
  document.querySelector('#listStyle').classList.toggle("menu-burger-active")
  document.querySelector('.section-header__burger').classList.toggle("burger-menu-non-active")
  document.querySelector('.list-close').classList.toggle("burger-menu-non")
})

  })
