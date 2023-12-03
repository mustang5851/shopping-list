const formInput = document.getElementById('item-form');
const itemInput = document.querySelector('.form-input');
const itemList = document.getElementById('item-list');
const addItem = e=>{
  e.preventDefault()
  const itemValue = itemInput.value;
  if(itemValue=== ''){
    alert('Please enter item')
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(itemValue));
  const button = createButton('remove-item text-red btn-link');
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  li.appendChild(button);
  itemList.appendChild(li);


}
const createButton = classes=>{
  const button = document.createElement('button');
  button.className = classes;
  return button;
 

}
const createIcon = classes=>{
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}



formInput.addEventListener('submit',addItem);

 


