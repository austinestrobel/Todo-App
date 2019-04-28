var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearAll);


//add item button
function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    var textnode = document.createTextNode(item.charAt(0).toUpperCase() + item.slice(1));

    if (item === '') {
        return false;
        //???add a p tag and assign a value of "enter your todo"
    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout (() => {
            li.className = 'visual';
        }, 500);

        input.value = '';
    }
}

//Hit enter
var input = document.getElementById("input");

    input.addEventListener("keyup", function(event) {
    event.preventDefault();
        if (event.keyCode === 13) {
         document.getElementById("add").click();
        }
    });

//remove single item button
function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

//remove everything button
function clearAll() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
    }
}

