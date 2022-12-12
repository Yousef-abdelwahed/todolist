//issues 
/* -cant check Existed Emails -->
    -cant refuse to fill empty string value in list 
    -because I cant check existing useres i cant assign specific tasks list to users 
***********************************************************************************/


let form=document.getElementById("form");
const userName= document.getElementById("userName").value,
           userEmail =document.getElementById("email").value,
           userPsw = document.getElementById("psw").value;
let users= [{
                name:userName,
                email:userEmail,
                password:userPsw
}];
let tasks=[]; 
var arr=[];

///***************is Exists*******************
function isExist(){
    for (let i=0;i<users.length;i++){
        if(users[i].name==document.getElementById("userName").value){
            
            return true;
        }else{
            return false;
        }
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    isExist();
    if(isExist()==false || isExist()!= "undefined"){
        login();
        display();
    }else{
        alert("please fill in the below fields")
    }});
    // **************** Login --*****************************   
       function login(){
           
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
    // **************** Display --*****************************   

function display(){
  
   for(let i=0; i<users.length ; i++){
    arr[i]=users[i]
};
    for(let i=0; i<arr.length;i++){
        let p=document.createElement("p");
        let listUsers=document.getElementById("listUer");
        p.innerHTML=arr[arr.length-1].name;
        p.style.backgroundColor="green";
        p.classList.add("my-3");
        listUsers.appendChild(p);
        break;}};
    //**************Search User */
// function searchUser(searchText){
//     for(let i=0; i<users.length;i++){
//         if(users[i].name.toUpperCase().includes(searchText.toUpperCase())){
//             alert("a");
//             }        
//     }
// }

// ****************Create List of Tasks ****************/
function btnList(){
    getList();
    setList();
}

function getList(){
    let getTask=document.getElementById("getTask").value;
    let task={
        userTask:getTask
    }
    tasks.push(task);
}
function setList(){
    var container="";
    
        for(let i=0; i<tasks.length;i++){
            // if (tasks[i].userTask =""){
            //    alert("fill in your Tasks ")
            // }else{
                container+=`
                <tr id="changeClor${i}">
                <td  >${tasks[i].userTask} </td>
                <td> <button id="taskBtn" onclick="deletTask(${i})" class="btn btn-danger">Delet</button>
                <td > <button id="taskBtnDone" onclick="doneTask(${i})" class="btn btn-success">Done</button>
                <td > <button id="taskReassign" onclick="taskBtnReassign(${i})" class="btn btn-success">Assign</button>

                </td>
                </tr>  `;
            // };         
document.getElementById("setTask").innerHTML=container;
}};
function taskBtnReassign(index){
    taskReassign =document.getElementById("taskReassign");
    document.getElementById(`changeClor${index}`).style.backgroundColor="";
}
function doneTask(index){
    let changeClor=document.getElementById(`changeClor${index}`);
    
       changeClor.style.backgroundColor ="yellow";
         
    console.log(index)
}
// *****Delet Task******* */
function deletTask(index){
    tasks.splice(index,1);
     setList();
};