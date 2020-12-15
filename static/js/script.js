$(document).ready(function(){
    // Sidebar javascript
    $('.sidenav').sidenav({edge: "right"});
    // Accordian tasks
    $('.collapsible').collapsible();
    // Tooltipped note on hover
    $('.tooltipped').tooltip();
    // Form category selection
    $('select').formSelect();
    // Date Picker
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        yearRange:3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
  });


