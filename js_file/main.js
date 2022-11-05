let form=document.getElementById("form");
// let searchUser =document.getElementById("searchUser");

let users= [];
let tasks=[] 


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    isExist();
    login();
    display();
   console.log(isExist())
    })
    
    function login(){
        let userEmail =document.getElementById("email").value;
        let userPsw = document.getElementById("psw").value;
        let userName= document.getElementById("userName").value
    let user={
        name:userName,
        email:userEmail,
        password:userPsw
    };
    
    //store user data 
    users=JSON.parse((localStorage.getItem("user")))||[];
    users.push(user);
   localStorage.setItem("users",JSON.stringify(users));
   
   return true;
}
function display(){
    for(let i=0; i<users.length;i++){
        let li=document.createElement("li");
        let listUsers  =document.getElementById("listUer");
        li.innerHTML=users[i];
        listUsers.appendChild(li); 
        listUsers.style.backgroundColor="green";         
    }};

//is Exists
    function isExist(){
        for (let i=0;i<users.length;i++){
            if(users[i].name==userName){
                console.log(userName)
                return true;
            }else{
               return false
            }
        }
    }



    //**************Search User */
// function searchUser(searchText){
//     for(let i=0; i<users.length;i++){
//         if(users[i].name.toUpperCase().includes(searchText.toUpperCase())){
//             alert("a");
//             }        
//     }
// }

//****************Create List of Tasks ****************/
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
            if (tasks[i].userTask =""){
               alert("fill in your Tasks ")
            }else{
                container+=`
                <tr>
                <td>${tasks[i].userTask} </td>
                <td> <button id="taskBtn" onclick="deletTask(${i})" class="btn btn-danger">Delet</button>
                </td>
                </tr>  `;
            }
           
          
document.getElementById("setTask").innerHTML=container;
}};
//*****Delet Task******* */
function deletTask(index){
   tasks.splice(index,1);
   setList();
};