(function() {

  // $("#welcome").velocity({
  //   opacity: "1",
  // }, {
  //   duration: 500,
  //   easing: "easeInOutQuint",
  //   delay: 1000,
  // });
  //
  // $("#player").velocity({
  //   opacity: "1",
  // }, {
  //   duration: 500,
  //   easing: "easeInOutQuint",
  //   delay: 1200,
  // });




// WELCOME SECTION ::::::::::::::::::::::::::::::::::::::::::::::::::::
  $("#welcomeExpand").click(function() {

      $(this).toggleClass('end-closed');
      // animates the plus/minus button

    if ($("#welcome").hasClass("check")) {
      // increase size

      $("#welcome").toggleClass("check")

      $("#welcome").velocity({
        width: "600px",
      }, {
        duration: 500,
        easing: "easeInOutQuint",
        delay: 0,
      });

      $("#welcome").velocity({
        height: "160px",
      }, {
        duration: 500,
        easing: "easeInOutQuint",
        delay: 0,
      });

    } else {
      // decrease size

      $("#welcome").toggleClass("check")

      $("#welcome").velocity({
        height: "35px",
      }, {
        duration: 500,
        easing: "easeInOutQuint",
        delay: 0,
      });

      $("#welcome").velocity({
        width: "250px",
      }, {
        duration: 500,
        easing: "easeInOutQuint",
        delay: 0,
      });

    }

  });


  dragElement(document.getElementById("welcome"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "welcomeHeader")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "welcomeHeader").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }



  // PLAYER SECTION ::::::::::::::::::::::::::::::::::::::::::::::::::::
    $("#playerExpand").click(function() {

        $(this).toggleClass('end-closed');
        // animates the plus/minus button

      if ($("#player").hasClass("check")) {
        // increase size

        $("#player").toggleClass("check")

        $("#player").velocity({
          width: "400px",
        }, {
          duration: 500,
          easing: "easeInOutQuint",
          delay: 0,
        });

        $("#player").velocity({
          height: "160px",
        }, {
          duration: 500,
          easing: "easeInOutQuint",
          delay: 0,
        });

      } else {
        // decrease size

        $("#player").toggleClass("check")

        $("#player").velocity({
          height: "35px",
        }, {
          duration: 500,
          easing: "easeInOutQuint",
          delay: 0,
        });

        $("#player").velocity({
          width: "250px",
        }, {
          duration: 500,
          easing: "easeInOutQuint",
          delay: 0,
        });

      }

    });


    dragElement(document.getElementById("player"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "playerHeader")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "playerHeader").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }





}());
// IIFE ENDS
