// issues
//all data of array is played #done 
//the data stored just single array #done

let form=document.getElementById("form");
// let searchUser =document.getElementById("searchUser");

let users= [];
let tasks=[]; 
var arr=[];

///***************is Exists*******************
function isExist(){
    for (let i=0;i<users.length;i++){
        if(users[i].name===document.getElementById("userName").value){
            alert("T")
            return true;
        }else{
            alert("F")

           return false;
        }
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    isExist();
    console.log(isExist())
    if(isExist()==false || isExist()!= "undefined"){
        login();
        display();
    }else{
        alert("a")
    }
    
  
     
       });
       
       function login(){
           const userName= document.getElementById("userName").value,
           userEmail =document.getElementById("email").value,
           userPsw = document.getElementById("psw").value;
           let user={
               name:userName,
                email:userEmail,
                password:userPsw
    };
    //store user data 
    users=JSON.parse(localStorage.getItem("user"))||[];
    users.push(user)
   localStorage.setItem("user",JSON.stringify(users));
}

function display(){
  
   for(let i=0; i<users.length ; i++){
    arr[i]=users[i]
};
    for(let i=0; i<arr.length;i++){
        let li=document.createElement("li");
        let listUsers=document.getElementById("listUer");
        li.innerHTML=arr[arr.length-1].name;
        console.log(users)
        listUsers.style.backgroundColor="green";
        listUsers.appendChild(li);
             break;}};




    //**************Search User */
// function searchUser(searchText){
//     for(let i=0; i<users.length;i++){
//         if(users[i].name.toUpperCase().includes(searchText.toUpperCase())){
//             alert("a");
//             }        
//     }
// }

//****************Create List of Tasks ****************/
// function btnList(){
//     getList();
//     setList();
// }

// function getList(){
//     let getTask=document.getElementById("getTask").value;
//     let task={
//         userTask:getTask
//     }
//     tasks.push(task);
// }
// function setList(){
//     var container="";
    
//         for(let i=0; i<tasks.length;i++){
//             if (tasks[i].userTask =""){
//                alert("fill in your Tasks ")
//             }else{
//                 container+=`
//                 <tr>
//                 <td>${tasks[i].userTask} </td>
//                 <td> <button id="taskBtn" onclick="deletTask(${i})" class="btn btn-danger">Delet</button>
//                 </td>
//                 </tr>  `;
//             };         
// document.getElementById("setTask").innerHTML=container;
// }};
//*****Delet Task******* */
// function deletTask(index){
//    tasks.splice(index,1);
//    setList();
// };