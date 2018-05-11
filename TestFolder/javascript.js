

var grid = new Muuri('.grid', {
  dragEnabled: true,
  layoutOnInit: false,
  sortData: {
    id: function (item, element) {
        // console.log(element.children[0].textContent);
        // console.log(element.children)
      return element.children[0].textContent;

    }
}

});

// var grid2 = new Muuri('.grid', {
//   dragEnabled: true,
//   layoutOnInit: false,
//   sortData: {
//     id: function (item, element) {
//     return element.children[0].classList[1];    }
// }
// });



var sortAsc = document.querySelector('.sort-asc');
var sortDesc = document.querySelector('.sort-desc');
// var sortLabelfruit = document.querySelector('.sort-labelfruit');
// var sortLabelveg = document.querySelector('.sort-labelveg');

// Sort the items before the initial layout
// and do the initial layout
grid.sort('id', {layout: 'instant'})

// Bind the button event listeners
sortAsc.addEventListener('click', function () {
  grid.sort('id');
});
sortDesc.addEventListener('click', function () {
  grid.sort('id:desc');
});

// grid2.sort('id', {layout: 'instant'})
//
// sortLabelfruit.addEventListener('click', function () {
//   grid2.sort('id');
// });
//
// sortLabelveg.addEventListener('click', function () {
//   grid2.sort('id:desc');
// });

[].slice.call(document.querySelectorAll('.item'))
  .forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  function addProduce() {
    // document.getElementById("plus").innerHTML = "Hello World";
    // alert("Hello\nHow are you?");
    var item = document.createElement('div');
    var inner = document.createElement('div');
    // var innertext = document.createElement('h5');
    item.className = 'item';
    inner.className = 'item-content';
    // inner.innerHTML = 'Yay!'
    var x = prompt("Enter the name of the produce you wish to add","");
    var addedProduce = document.createElement('img');
    addedProduce.className = 'thumbnail';
    addedProduce.src = "./Produce/" + x + ".jpg"

    item.appendChild(addedProduce);
    grid.add(item);

  }


function goToInfoPage(clickedID){
   // alert(clickedID);
   var a = "./Produce/" + clickedID + ".jpg";
   // alert(a);
    window.location.href = './produce.html';
    // changingImg(a);
}

//
function changingImg(value){
    document.getElementById("y").src="./Produce/apple.jpg";
    // alert(value);
    //
    // var l = document.createElement("IMG");
    // l.setAttribute("src", value);
    // l.setAttribute("width", "304");
    // l.setAttribute("height", "228");
    // l.setAttribute("alt", value);
    // document.body.appendChild(l);
}
