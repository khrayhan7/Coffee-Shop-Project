let buttonOrder = document.getElementById("button-Order");
let orderBox = document.querySelector(".orderBox");
let toDoList = document.querySelector(".To-doList");
let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let coffeName = document.getElementById("nameOfCoffee's");
let wholeTodoStruc = document.querySelector(".divForBorder");
let todoItems = document.querySelector(".list-Items ,.divForBorder, .customer-Info");
let customerDetails = document.querySelector(".customer-Info");
let tableRow = document.getElementById("table-Row");
let tableClass = document.querySelector(".tableClass");
let tableTr = document.getElementById("tableData")


function boxOrderNew() {
  orderBox.style.display = "block";
  savedata();
}
function addTolist(){
    orderBox.style.display = "none";
    toDoList.style.display = "block";

   if (firstNameInput.value == "" || lastNameInput.value == "") {
    alert("Please fill the input the first");
   }else{

    

//     let inputDataAll = `
//     <div   style="width: 400px;position: relative;left: 750px;bottom: 170px;" class="customer-Info">
          
//  <div   style="float: left;margin-left: 7.33%;color: white; font-size: 10px;border-bottom: 1px solid white;">${coffeName.value}</div>
//  <div   style="float: left;margin-left: 23.33%;color: white;font-size: 10px;border-bottom: 1px solid white;">${firstNameInput.value}</div>
//  <div   style="float: left;margin-left: 82.33%;color: white;font-size: 10px;position: relative;bottom: 14px;border-bottom: 1px solid white;">${lastNameInput.value}</div>

// </div>
// `;

// var tablCr = document.createElement('table');
// tablCr.classList.add('tableClass');
// wholeTodoStruc.appendChild(tablCr);

// `
// <table class="tableClass">
// <tr id="tableData">
//  <td  style="position:relative;right:25px;">${coffeName.value}</td>
// <td  style="position:relative;left:75px;">${firstNameInput.value}</td>
// <td style="position:relative;left:205px;">${lastNameInput.value}</td>
// </tr>
// </table>
// `;

wholeTodoStruc.innerHTML +=  `
  <div style="width: 400px;position: relative;left: 783px;bottom: 170px;font-size:10px" class="customer-Info">
 <table class="tableClass">
 <tr id="tableData">
  <td  style="position:relative;right:25px;">${coffeName.value}</td>
 <td  style="position:relative;left:75px;">${firstNameInput.value}</td>
  <td style="position:relative;left:205px;">${lastNameInput.value}</td>
 </tr>
 </table>
 </div>
 `;




savedata();
   }
   firstNameInput.value ="";
   lastNameInput.value ="";
   savedata();
  
   wholeTodoStruc.addEventListener("click",function(){
   
    wholeTodoStruc.style.textDecoration = "line-through";
    savedata();
    
    
   
  })

  wholeTodoStruc.addEventListener("dblclick",function(){

   
    wholeTodoStruc.remove(wholeTodoStruc.innerHTML);
    savedata();
    
    // wholeTodoStruc.remove(tablCr.innerHTML);
  
  })
 


 }

 




 function savedata(){
  localStorage.setItem("coffee_shop_data",wholeTodoStruc.innerHTML);
 }
  function showdata(){
  wholeTodoStruc.innerHTML = localStorage.getItem("coffee_shop_data");
  }
  showdata();


  
  // todoItems.addEventListener("click", (e)  =>{
  //   if (e.target.nodeName == "DIV") {
  //     let pos = dataInput.map((itm,i)=> {
  //    return {...itm,index: i};
  //   }).filter((itm,i)=> {
  //      return itm.id == e.target.dataset.id;
      
  //   })[0].index;

  //   dataInput.splice(pos,1);
  //   updateText(dataInput);

  //    e.target.remove();


      
  //   }
  // });





// function updateText(Arr){
//   localStorage.setItem("Coffee-Shop-Todo",JSON.stringify(Arr));
// }

// function todoStructure(){
   
//    let inputDataAll = `
//       <div  data-id="${id}" style="width: 400px;position: relative;left: 750px;bottom: 170px;" class="customer-Info">
            
//    <div   style="float: left;margin-left: 7.33%;color: white; font-size: 10px;border-bottom: 1px solid white;">${coffeName.value}</div>
//    <div   style="float: left;margin-left: 23.33%;color: white;font-size: 10px;border-bottom: 1px solid white;">${firstNameInput.value}</div>
//    <div   style="float: left;margin-left: 82.33%;color: white;font-size: 10px;position: relative;bottom: 14px;border-bottom: 1px solid white;">${lastNameInput.value}</div>
 
//  </div>
//  `;
// }

//  dataInput.push({inputDataAll,id});
//  if (dataInput.length == 1) {
//   wholeTodoStruc.innerHTML = "";
  
//  }
//  wholeTodoStruc.innerHTML += inputDataAll;
//  firstNameInput.value = "";
//  lastNameInput.value = "";
//  updateText(dataInput);
// }
// function randomId(){
//   let id = "";
//   let randomNum = Math.random();
//   id = randomNum.toString();
//   return id;
// }

// function locStrageGet(){
//   let getData = localStorage.getItem("Coffee-Shop-Todo");
//   let  dataInput = JSON.parse(getData);
//   let emptyMsg = "";
//   let MsgText = "Please add some data";
//     if(dataInput == null){
//       emptyMsg = MsgText;
//      wholeTodoStruc.innerHTML =` <div style="width: 400px;position: relative;left: 850px;bottom: 170px;color:white;" class="customer-Info">${emptyMsg}</div>`;
//    }
//      if (dataInput != null) {
//          if(dataInput.length <= 0){
//        emptyMsg = MsgText;
//        wholeTodoStruc.innerHTML = ` <div style="width: 400px;position: relative;left: 750px;bottom: 170px;color:white;" class="customer-Info">${emptyMsg}</div>`;
//      }
  
//     else{
//     dataInput.forEach((itm)=>{
//        wholeTodoStruc.innerHTML += itm.inputDataAll;
//     });
//   }
//    }
//   }
// locStrageGet();