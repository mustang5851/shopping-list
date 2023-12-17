const form = document.getElementById('item-form');
const input = document.querySelector('.form-input');
const listItems = document.getElementById('item-list');
function addItem(e){
  e.preventDefault();
//  validate item has value
const itemValue = input.value;
if(itemValue === ''){
  alert('pls enter item value')
  return;
}
const item = document.createElement('li');
item.appendChild(document.createTextNode(itemValue));
const button = addButton('remove-item text-red btn-link');
item.appendChild(button);
listItems.appendChild(item);
input.value = '';
}
function addButton(classes){
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}
function createIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}





form.addEventListener('submit',addItem)


