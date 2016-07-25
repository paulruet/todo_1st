function enter_task (event) {
    event.preventDefault();
    console.log("hello");
    var text = $('#enter_task').val();
    var add=' <button type="button" id="edit" class="btn btn-primary">Edit</button>';
    var del='<button type="button" id="delete" class="btn btn-danger">Delete</button>';
    
    
        var show = $('#todo_list').append('<li>'+ text +add+ del+'</li>');

        $('#enter_task').val('');// make the input box empty after adding to do's
    
};

$('#todo_list').on('click', '#edit', function(){

    $(this).parent().attr('contenteditable','true').focus();
});

$('#todo_list').on('click', '#delete',function(){
    if (!confirm("Hey Man,Your task will be deleted!!")){ // opening a box to make sure for delete
      return false;
  }
  $(this).parent().remove();
});

$(function() {
    $('form').on('submit', enter_task);//if user use enter
    $('#add').on('click', enter_task);// if user click on button

});