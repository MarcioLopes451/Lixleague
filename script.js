// splash screen

const splash = document.querySelector('.splash');
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {


    setTimeout(() => {

        logoSpan.forEach((span,idx)=>{
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) * 400)
        })
        setTimeout(() => {
            logoSpan.forEach((span,idx) => {
                setTimeout(() => {
                    span.classList.remove("active");
                    span.classList.add("fade")
                }, (idx + 1) * 50)
            })
        } ,2000);

        setTimeout(() => {
            splash.style.top = '-100vh';
        },2300)

    })
})

// nav for contents

var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
  var visibleDivId = null;
  function toggleVisibility(divId) {
    if(visibleDivId === divId) {
      //visibleDivId = null;
    } else {
      visibleDivId = divId;
    }
    hideNonVisibleDivs();
  }
  function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);
      if(visibleDivId === divId) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  }
         


