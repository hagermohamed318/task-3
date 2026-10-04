let recipes = [
  { name: "Bacon Double Cheese Burger Dip", img: "images/burgerjpg.jpeg" },
  { name: "French Onion Soup Stuffed Mushrooms", img: "Images/jpG4.jpeg" },
  { name: "The Best Lasagna Ever", img: "Images/jpg3.jpeg" },
  { name: "Pot Roast", img: "Images/jpG2.jpeg" }
];

let row = document.getElementById('row');
let input = document.getElementById('searchInput');

function show(arr){
 let cartona = "";
 for(let i=0; i<arr.length; i++){
  cartona += `
   <div class="col-md-3 col-6">
    <div class="item">
     <img src="${arr[i].img}" class="w-100">
     <h6>${arr[i].name}</h6>
    </div>
   </div>`;
 }
 row.innerHTML = cartona;
}

show(recipes);

input.addEventListener('input', function(){
 let term = input.value.toLowerCase();
 let filtered = recipes.filter(x => x.name.toLowerCase().includes(term));
 show(filtered);
});