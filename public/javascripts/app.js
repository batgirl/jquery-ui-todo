$(document).ready(function() {
  $(function() {
    $.ajax({
      method: "GET",
      url: "/tasks",
      dataType: "json",
      success: function(data) {
        for (var i = 0; i < data.length; i++) {
          var formerHealthHtml = $("#health").html();  
          if (data[i]["category"] === "Health") {
            $("#health").html(formerHealthHtml + "<li class='draggable'>" + data[i]["description"] + "</li>");            
          }
          var formerWealthHtml = $("#wealth").html();  
          if (data[i]["category"] === "Wealth") {
            $("#wealth").html(formerWealthHtml + "<li class='draggable'>" + data[i]["description"] + "</li>");            
          }
          var formerSoulHtml = $("#soul").html();  
          if (data[i]["category"] === "Soul") {
            $("#soul").html(formerSoulHtml + "<li class='draggable'>" + data[i]["description"] + "</li>");            
          }
        }
        $("#accordion").accordion();
        var listItem;
        $( ".draggable" ).draggable({
          start: function(event, ui) {
            $(ui.helper).css("white-space", "nowrap");
          },
          stack: "body",
          zIndex: 1000,
          helper: "clone",
          drag: function(event, ui) {
            listItem = $(this).html();
            $(this).css("z-index", 1000); 
          }
        });
        $( "#droppable" ).droppable({
          tolerance: "touch",
          accept: ":not(.ui-sortable-helper)",
          drop: function( event, ui ) {
            $( this ).find( ".placeholder" ).remove();
            var formerHtml = $(this).find( "ol" ).html();
            $(this).find("ol").html(formerHtml + "<li>" + listItem + "</li>");
          }
        }).sortable({
          items: "li",
          appendTo: "ol"
        });
      }
    })
  });
});

