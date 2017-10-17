var LATH0028 = {
   init: function () {
        let div = document.createElement("div");//div created
        div.classList.add("box");//Box class added to div fron CSS
        div.textContent = "LATH0028";//Text added to div
        let idboxes = document.querySelector("#boxes");//boxes id
        div.addEventListener("click", LATH0028.onClick);//click event
        div.addEventListener("mouseover", LATH0028.onMouseOver);//mouseOver event
        div.addEventListener("mouseout", LATH0028.onMouseOut);//mouseout event
        idboxes.appendChild(div);//append todiv
       
       

    },
    //click function
    onClick: function (ev) {
        ev.currentTarget.style.borderColor = "#3C3F73";//bodercolour changed
        ev.currentTarget.style.backgroundColor = "#9D9FBF";//background changed
    },
    //MouseOver function
    onMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");//toggel highlight class of CSS
    },
    //MouseOut function
    onMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");//toggel highlight class of CSS
    }
};