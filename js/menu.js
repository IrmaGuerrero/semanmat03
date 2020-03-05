alertSize();
function alertSize() {
     var myWidth = 0, myHeight = 0;
     if( typeof( window.innerWidth ) == 'number' ) {
       //No-IE
       myWidth = window.innerWidth;
       myHeight = window.innerHeight;
     } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
       //IE 6+
       myWidth = document.documentElement.clientWidth;
       myHeight = document.documentElement.clientHeight;
     } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
       //IE 4 compatible
       myWidth = document.body.clientWidth;
       myHeight = document.body.clientHeight;
     }

     let displayo;
     var cardmenu = document.getElementsByClassName("text-nav");
     for(let i = 0; i < cardmenu.length; i++ ){
          displayo = cardmenu[i].style.display;
          if (myWidth < 767){
          cardmenu[i].style.display = "none";
          }
          else {
          cardmenu[i].style.display = "flex";
          }
     }   
   }

function displayMenu(){
    let displayo;
     var cardmenu = document.getElementsByClassName("text-nav");

     for(let i = 0; i < cardmenu.length; i++ ){
          displayo = cardmenu[i].style.display;

          if (displayo == "none"){
               cardmenu[i].style.display = "block"
          }
          else {
               cardmenu[i].style.display = "none"
          }
     }
}
