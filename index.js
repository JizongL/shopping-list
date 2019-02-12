
'use strict';

function shoppingList(){
  
  $('form button').on('click', function(event){
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    
    // console.log(newItem);
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
  let num = 1;
  $('ul').on('click','li .shopping-item-toggle'
    ,function(event){
      console.log(num);
      let arrayL = ['check','uncheck'];
      $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
      $(this).find('.button-label').text(arrayL[num%2]);
      num+=1;
    }); 

  $('ul').on('click','li .shopping-item-delete'
    ,function(event){
      
      $(this).parent().parent().remove();
      
    });    

}
  
 

$(shoppingList);