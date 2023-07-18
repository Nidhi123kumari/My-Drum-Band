var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".drum")[j].
  addEventListener("click", function() {


      var buttonInnerHtml = this.innerHTML;

      makesound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress",
 function(event) {

    makesound(event.key);
    buttonAnimation(event.key);
  });


  function makesound(key) {
    switch (key) {

      case "w":
        var sound1 = new Audio("music/folder.1/Audio/tom-1 - Shortcut.lnk");
        sound1.play();
        break;
    
      case "a":
        var sound2 = new Audio("music/folder.1/Audio/tom-2 - Shortcut.lnk");
        sound2.play();
        break;
    
      case "s":
        var sound3 = new Audio("music/folder.1/Audio/tom-3 - Shortcut.lnk");
        sound3.play();
        break;
    
      case "d":
        var sound4 = new Audio("music/folder.1/Audio/tom-4 - Shortcut.lnk");
        sound4.play();
        break;
    
      case "j":
        var sound5 = new Audio("music/folder.1/Audio/snare - Shortcut.lnk");
        sound5.play();
        break;
    
      case "k":
        var sound6 = new Audio("music/folder.1/Audio/crash - Shortcut.lnk")
        sound6.play()
        break;
    
      case "l":
        var sound7 = new Audio("music/folder.1/Audio/kick-bass - Shortcut.lnk");
        sound7.play();
        break;
    
      default: console.log(key);
    }
  } 

  function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    
    setTimeout(function() {

      activeButton.classList.remove("pressed");
    }, 100);
  }