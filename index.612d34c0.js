for(var flipButons=document.querySelectorAll(".products-info-btn"),cards=null,card=null,i=0;i<flipButons.length;i+=1)flipButons[i].addEventListener("click",(function(t){var r=t.target.closest(".card");if(!r)return flipEnd(),void s();if(t.target.closest(".js-flip"))return flipEnd(),r.classList.remove("js-flip"),void s();function s(){cards.classList.remove("js-flip")}document.querySelector(".js-flip")&&(flipEnd(),s()),cards=r,card=r.children,r.classList.add("js-flip"),card[0].style.transform="rotateY(180deg)",card[1].style.transform="rotateY(360deg)"}));function flipEnd(){card[0].style.transform="rotateY(0deg)",card[1].style.transform="rotateY(180deg)",card[0].classList.remove("js-flip")}
//# sourceMappingURL=index.612d34c0.js.map
