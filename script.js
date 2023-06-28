var textlinks = document.getElementsByClassName("text-links");
var tabcontents = document.getElementsByClassName("tabcontents");
       
        function opentab(tabname) {
            for (var i = 0; i < textlinks.length; i++) {
                textlinks[i].classList.remove("active-link");
            }
            for (var i = 0; i < tabcontents.length; i++) {
                tabcontents[i].classList.remove("active-tab");
            }
            
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
var menu = document.getElementById("menu");
     function openmenu(){
        menu.style.right = "0";
     }
     function closemenu(){
        menu.style.right = "-200px";
     }