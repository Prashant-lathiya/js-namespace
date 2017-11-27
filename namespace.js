var LATH0028 = {
   init: function () {
        let div = document.createElement("div");//div created
        div.classList.add("box");
        div.textContent = "LATH0028";
        let idboxes = document.querySelector("#boxes");
        div.addEventListener("click", LATH0028.onClick);
        div.addEventListener("mouseover", LATH0028.onMouseOver);
        div.addEventListener("mouseout", LATH0028.onMouseOut);
        idboxes.appendChild(div);
       
       

    },
    
    onClick: function (ev) {
        ev.currentTarget.style.borderColor = "#3C3F73";
        ev.currentTarget.style.backgroundColor = "#9D9FBF";
    },
    
    onMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    
    onMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
};