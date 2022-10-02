let userFormDOM =document.querySelector("#userForm")
userFormDOM.addEventListener('submit',Formhandler)
function Formhandler(e){
e.preventDefault()
const USER_NAME =document.querySelector("#username")
const SCORE =document.querySelector("#score")
adItem(USER_NAME.value,SCORE.value)

{/* <li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="ms-2 me-auto">
   <div class="fw-bold">Subheading</div>
    Cras justo odio
    </div>
   <span class="badge bg-primary rounded-pill">14</span>
    </li> */}




   let userLİST =document.querySelector("#userList")

const adItem =(username,score)=> {
 let liDOM=document.createElement('li')
 liDOM.innerHTML=`${username} ${score}
 <span class="badge bg-primary rounded-pill">${score}</span>`
liDOM.classList.add('list-group-item', 'd-flex ','justify-content-between ','align-items-start')
 userLİST.append(liDOM)
}
}