
let form=document.getElementById("form");
        
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userEmail =document.getElementById("email").value;
    let userPsw = document.getElementById("psw").value;
    let pswRepeat= document.getElementById("psw-repeat")
    let user={
        email:userEmail,
        password:userPsw,
        pswRepeat:pswRepeat
    }
        
    //localStorage
    localStorage.setItem('user',JSON.stringify(user))
    console.log(JSON.stringify(user))
})
