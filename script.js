function preload(image, url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onloadend = function () {
      image.src = url("1.png");
      image.src = url("2.png");
      image.src = url("3.png");
      image.src = url("remeras/1.png");
      image.src = url("remeras/2.png");
      image.src = url("remeras/3.png");
      image.src = url("remeras/4.png");
      image.src = url("remeras/5.png");
      image.src = url("remeras/6.png");
      image.src = url("remeras/7.png");
      image.src = url("remeras/8.png");
      image.src = url("remeras/9.png");
      image.src = url("remeras/10.png");
    };
  }



      



    $( document ).ready(function(){
      var position =$(this).scrollTop();
      $(".boton-subir").fadeIn('slow');

      var p1 = "$18.000";
      var p2 = "$15.000";
    
      document.getElementById("precio1").innerHTML=p1;
      document.getElementById("precio2").innerHTML=p1;
      document.getElementById("precio3").innerHTML=p1;
      document.getElementById("precio4").innerHTML=p1;
      document.getElementById("precio5").innerHTML=p1;
      document.getElementById("precio6").innerHTML=p1;
      document.getElementById("precio7").innerHTML=p1;
      document.getElementById("precio8").innerHTML=p1;
      document.getElementById("precio9").innerHTML=p2;
      document.getElementById("precio10").innerHTML=p2;

    });
    
    $( document ).ready(function(){
        $('.carousel').carousel({
          interval: 2000
        })
    });