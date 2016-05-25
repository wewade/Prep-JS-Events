
  /*1.  Fill in the correct id to target the paragraph tag*/
  function fontSize(){
    document.getElementById('biggie').style.fontSize = "200%";
  }

 /* 2. change the font color to red*/
  function colorMeBadd(){
    document.getElementById('colors').style.color = 'red'; 
  }

/*3. fill in the spaces to make this function operate:*/
  function showAnswer(){
    document.getElementById('answer').innerHTML = " C (da sea get it?) arrrr!";
  }

  /*4.  Create a button that will display the message "My name is Lee, Brrruuuce Lee!" in a new paragraph element after the button is clicked.*/
function kungfu(){
  document.getElementById('beWater').innerHTML = "My name is Lee, B<span>rrr</span>uuuce Lee!";
}
 
//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){

document.getElementById("Benjamin").addEventListener('click', sayQuote);

function sayQuote(){
  document.getElementById('lines').innerHTML = "Our lives are defined by opportunities; even the ones we miss.";
}


//6.  Generate a random quote from clicking on a button
var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance."];

document.getElementById('change').addEventListener("click", sayQuotes);
                                                   
function sayQuotes(){
  var getQuotes = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById('displayQuotes').innerHTML = getQuotes;
}

/*Final Boss:
Make a visual list of the items in the orders array. When clicking on the product, you must show and hide the price for that item.*/


var orders = [{product: "Space Cat T-shirt", price: 100}, {product: "Barry Manilow's Greatest Hits Colletion Vol 1", price: 500}, {product: "Chewbacca Mask", price: 3.41}, {product: "Woof Washer 360", price: 9.99}, {product: "Sauna Pants", price: 39.95}];

function checkOrders(items){
  for(var i = 0; i<items.length; i++){
    console.log(items[i]);
    console.log(items[i].product);
    console.log(items[i].price);

    var orderBox = document.createElement('div');
    orderBox.className = "orders";
    myOrders.appendChild(orderBox);

    var productItem = document.createElement('div');
    productItem.className = "products";
    productItem.innerHTML = items[i].product;
    orderBox.appendChild(productItem);

    var priceItem = document.createElement('div');
    priceItem.className = "price";
    priceItem.innerHTML = items[i].price;
    productItem.appendChild(priceItem);

}
}
checkOrders(orders);

  var productBox = document.getElementsByClassName("products");
     for(var i= 0; i<productBox.length; i++){
      productBox[i].addEventListener('click', toggle);
    }

    function toggle(){
      var showPrice = this.querySelectorAll('.price')[0];
      if(showPrice.style.display === 'none'){
        showPrice.style.display = 'block';
      }else{
        showPrice.style.display = 'none';
      }
    }
  


};





<<<<<<< HEAD
=======

>>>>>>> 38c9bc6354e2cda5913fee48d0c2b08c464cfd90
