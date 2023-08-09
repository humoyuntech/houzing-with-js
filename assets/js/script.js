"use strict";
const logoHumburger = document.querySelector(".logo__humburger"),
      mobileMenu = document.querySelector(".mobile-menu"),
      close = document.querySelector(".close-mobile-menu"),
      user = document.querySelector(".user"),
      userList = document.querySelector(".user__list"),
      body = document.querySelector("body"),
      advanced = document.querySelector(".advanced"),
      advancedBlock = document.querySelector(".advanced-block"),
      advancedBlockFooter = document.querySelector(".advanced-block__footer")

logoHumburger.addEventListener("click", ()=>{
    mobileMenu.classList.remove("none")
});

close.addEventListener("click", ()=> {
    mobileMenu.classList.add("none")
});

$(document).ready(function(){
    $('.hero').slick({
        arrows: true,
        dots: true
    });
});

user.addEventListener("click", (e) =>{
    userList.classList.toggle("none");
    console.log(e);
});

advanced.addEventListener("click", (e) =>{
    console.log(e);
    
    if(e.target && e.target.className === "settings-section__button"){
        advancedBlock.classList.toggle("none");
    }
});

advancedBlockFooter.addEventListener("click", (e)=>{
    advancedBlock.classList.toggle("none");
    console.log(e.target);
})


// body.addEventListener("click", (e) =>{
//     console.log(e);
    // if(e.target && e.target.className == "user"){
    //     userList.classList.remove("none")
    // }

// });

// className: "user"
// className: "settings-section__button"


// card

$('.card__block').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false
});