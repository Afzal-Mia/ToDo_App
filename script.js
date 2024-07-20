document.addEventListener("DOMContentLoaded",()=>{

    const inputBox=document.getElementById("inputBox");
    const addBtn=document.getElementById("addBtn");
    const list=document.querySelector("#list");
    const body=document.getElementsByTagName("body")[0];


    addBtn.addEventListener("click",addTask);//clicking over the addBtn
    inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {//pressing the enter by being inside the input Inbox
          addTask();
        }
      });

    function addTask(){
        const task=inputBox.value.trim();
        if(inputBox.value==='')//or you can do :inputBox.value.length===0;
        {
            alert("Add Your Task!..");
        }
        else{
            const li =document.createElement("li");
            li.textContent=task;
            //button to remove the task
            const removeBtn=document.createElement("button");
            removeBtn.textContent="Remove";
            
            li.appendChild(removeBtn);//adding removeBtn as a child to the li element
           
            list.appendChild(li);//adding li as a child to the list
             inputBox.value='';//making input box empty
             saveDate();
        }
    }
    //event delegation concept are used! event occurs to the child comes to parent to result parent who is the target 
    // and do some defined acts
    list.addEventListener("click",(e)=>{
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentElement;
        list.removeChild(li);
        saveDate();
    }
    })

    //saving data into local Storage
    function saveDate()
    {
        localStorage.setItem("data",list.innerHTML);
        //use for that only part which removes on refresh
    }
    function showData(){
        list.innerHTML=localStorage.getItem("data");
    }
showData();
    list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") { // Check if clicked element is an LI
        const clickedLi = e.target; // Reference the clicked LI
        clickedLi.classList.toggle("complete"); // Toggle class on the clicked LI
      }
    });
});

