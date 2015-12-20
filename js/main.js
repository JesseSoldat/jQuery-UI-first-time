import $ from 'jquery';
import _ from 'underscore';
import ui from 'jquery-ui';

console.log('Hello, World');

//Makes the globe at the top of the page Draggable
$('#draggable').draggable();

//Makes the hamster Draggable
$('#hamster').draggable();


//Makes the div a Droppable container
$('#drop').droppable({
  drop: function(event) {
    $(this)
      .addClass('dropped')
      .find('p')
      .html('Drop the world!');
  }
});

//Makes the man Resizable
$(function() {
    $( "#resizable" ).resizable();
  });



