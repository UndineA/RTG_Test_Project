const inputBox = document.getElementById("input-box");
const tasks = document.getElementById("tasks");
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
tryCatch();

function tryCatch() {
     try { 
          itemsArray.forEach(element => {
               addHtmlElements(element);
          }); 
     
     } catch (error) {
          return "";
     };
};

function addHtmlElements(inputtext) {
     let li = document.createElement("li");
     li.innerHTML = inputtext;  
     tasks.appendChild(li);

     // Delete-button
     let deleteButton = document.createElement("button");
     deleteButton.innerHTML = "Delete";
     deleteButton.setAttribute("class", "deleteButton");
     li.appendChild(deleteButton);

     // Checkbox
     let taskCheckbox = document.createElement("input");
     taskCheckbox.setAttribute("type", "checkbox");
     taskCheckbox.setAttribute("class", "checkbox");
     li.prepend(taskCheckbox);



     const newElement = `
     <div onclick="removeTask()" data-item-id="2">
          <li>${inputtext}</liv>
          <button class="deleteButton"">Delete</button>
     </div>
     `

     deleteTask();
}

function removeTask(event) {
     const dataAtribute = event.target.getAttribute("data-item-id");

}

function saveData(text){
   itemsArray.push(text);
   localStorage.setItem('items', JSON.stringify(itemsArray));
};


function addTask(){
   if (inputBox.value === "") {
        alert("You must write something!");
   } else {
        saveData(inputBox.value);
        addHtmlElements(inputBox.value);
   }
   inputBox.value = "";
};

deleteTask();

function deleteTask(event) {

     // GET items from localStorage
     // Take ID from event.target.getAttribute
     // Find this item with ID in localStorage and in DOM tree
     // Remove from DOM tree and store new array in localStorage
     
     let deleteBtn = document.getElementsByClassName("deleteButton");
     let i;
     let j;     
     
     for (i = 0; i < deleteBtn.length; i++) {
       deleteBtn[i].onclick = function() {
       this.parentElement.remove();

       for (j = 0; j < itemsArray.length; j++){
          console.log(j === i)
          if (j === i) {
               console.log('TADAAA')
             let filteredArray = itemsArray.filter((element, index) => j != index);
             localStorage.setItem('items', JSON.stringify(filteredArray));
             }
          }
       }
     };
};

