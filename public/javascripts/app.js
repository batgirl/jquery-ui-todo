$(document).ready(function() {
  $(function() {
    $("#accordion").accordion();
  });
  $(function() {
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
  });
});