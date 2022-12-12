//issues
/* -cant check Existed Emails -->
    -cant refuse to fill empty string value in list 
    -because I cant check existing useres i cant assign specific tasks list to users 
***********************************************************************************/

let form = document.getElementById("form");

let users = [
  {
    id: 1,
    email: "email@mail.com",
    password: 123,
  },
];

let tasks = [];
var arr = [];
let loginUserId = null;


///***************is Exists*******************
function isExist() {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email == document.getElementById("email").value &&
      users[i].password == document.getElementById("password").value
    ) {
      return true;
    } else {
        break;
      return false;
    }
    
  }

  //check if user
  if(loginUserId){
    loginUserId = users[i].id;
}
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isExist();

  if (isExist()) {
    alert("login success")

    login();
    dispalyTask();
} else {
    alert("please Enter valied user");
  }
});
// **************** Login --*****************************
function login() {
  const userEmail = document.getElementById("email").value,
    userPsw = document.getElementById("password").value;
  let user = {
    email: userEmail,
    password: userPsw,
  };
  //store user data
}
// **************** Display --*****************************
    function dispalyTask(){
        const dispakyTask=document.getElementById("task");
        dispakyTask.style.display="block"
    }
//**************Search User */
// function searchUser(searchText){
//     for(let i=0; i<users.length;i++){
//         if(users[i].name.toUpperCase().includes(searchText.toUpperCase())){
//             alert("a");
//             }
//     }
// }

// ****************Create List of Tasks ****************/
function btnList() {
  getList();
  setList();
}

function getList() {
  let getTask = document.getElementById("getTask").value;
  if (getTask.length) {
    let task = {
      userTask: getTask,
    };
    tasks.push(task);
  }
}
function setList() {
  var container = "";

  for (let i = 0; i < tasks.length; i++) {
    // if (tasks[i].userTask =""){
    //    alert("fill in your Tasks ")
    // }else{
       
    container += `
                <tr id="changeClor${i}">
                <td  >${tasks[i].userTask} </td>
                <td> <button id="taskBtn" onclick="deletTask(${i})" class="btn btn-danger">Delet</button>
                <td > <button id="taskBtnDone" onclick="doneTask(${i})" class="btn btn-success">Done</button>
                <td > <button id="taskUpdate" onclick="taskBtnUpadte(${i})" class="btn btn-success">Update</button>

                </td>
                </tr>  `;
    // };
    
    document.getElementById("setTask").innerHTML = container;
  }
}
function taskBtnUpadte(index) {
    let changeClor = document.getElementById(`changeClor${index}`);

  taskUpdate = document.getElementById("taskUpdate");
  changeClor.style.textDecoration= "none";
  document.getElementById(`changeClor${index}`).style.backgroundColor = "red";

}
function doneTask(index) {
  let changeClor = document.getElementById(`changeClor${index}`);

  changeClor.style.textDecoration = "line-through";
};
// *****Delet Task******* */
function deletTask(index) {
  tasks.splice(index, 1);
  setList();
}
