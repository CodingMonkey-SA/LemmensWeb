$(document).ready(function(){

  $(".slickAble").owlCarousel({
    autoplay:true,
    autoplaySpeed: 500,
    responsive:{
        500:{
            items:4
        },
        700:{
            items:7
        },
        900:{
            items:9
        }
    }
  });
  $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 100,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,                     // Show Navigation
        nextText: "Siguiente",                   // Next button text
        //nextText: "<span class='glyphicon glyphicon-search' aria-hidden='true'></span>",
        prevText: "Anterior",               // Previous button text
        closeText: "Cerrar",                 // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded            
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

  function ShowBeerModal(beerTitle, beerDescription, beerImage){
    $("#modalBody img").hide();
    $("#modalTitle").text(beerTitle);
    $("#modalDescription").text(beerDescription);
    $("#modalBody").append(beerImage);
    $("#modal").modal();
  }

  //ROOD
  var roodTitle = "Rood";
  var roodDescription = "La birra de los pibes";
  var roodImageUrl = "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12193305_1057396324293729_6964707944742043049_n.jpg?oh=f56afb04a9e7774d5e5c0cf9de25febc&oe=57141CAC";
  var roodImage = "<img class='center-block img-responsive' src='"+ roodImageUrl +"''>";

  $("#rood").on("click", function(e){
    e.preventDefault();
    ShowBeerModal(roodTitle, roodDescription, roodImage);
  });

  //IPA
  var ipaTitle = "Ipa";
  var ipaDescription = "La birra de las pibas";
  var ipaImageUrl = "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/12342371_1077133868986641_8403171427521160396_n.jpg?oh=e5272ff6b7eb4ff1caea5c02a852d0e9&amp;oe=570DD224";
  var ipaImage = "<img class='center-block img-responsive' src='"+ ipaImageUrl +"''>";

  $("#ipa").on("click", function(e){
    e.preventDefault();
    ShowBeerModal(ipaTitle, ipaDescription, ipaImage);
  });
});
