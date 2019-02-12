
'use strict';
// function shoppingList()
function shoppingList(){
  // form button click triggers event
  $('form button').on('click', function(event){
    // prevent default action of form
    event.preventDefault();
    // capture new entry as string and assigned to newItem
    let newItem = $('#shopping-list-entry').val();
    
    // append new item to the class .shopping-list 
    $('.shopping-list').append(`<li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
      
  }
  );
  // declare num = 1
  let num = 1;
  // check and uncheck button 
  // employed event delegation 
  // button class=.shopping-item-toggle. 
  // click of button will invoke event at its parent ul.
  $('ul').on('click','li .shopping-item-toggle'
    ,function(event){
      // new array items for toggle button
      let arrayL = ['check','uncheck'];
      // set up toggleclass to update item's name style(strikethrough line) 
      $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
      // button update between check and uncheck,it uses mod 2 to produce 0 and 1
      $(this).find('.button-label').text(arrayL[num%2]);
      num+=1;
    }); 
  // event listener for delete button     
  $('ul').on('click','li .shopping-item-delete'
    ,function(event){
      // whenever delete is clicked, item is removed. 
      $(this).parent().parent().remove();
      
    });    

}
  
 
// call function shoppingList
$(shoppingList);


// Question
// Is it still necessary to set up Ally? It seems like
// chrome and firefox allow keyboard naviation even I did not 
// setup the key event here. 