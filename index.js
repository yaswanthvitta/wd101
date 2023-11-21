let userForm1 = document.getElementById("user_form");
let Entries1=[];
if(localStorage.getItem("Entries1")===null)
{
    Entries1 =[];
    console.log("if");
}
else{
    Entries1 = JSON.parse(localStorage.getItem("Entries1")); 
   console.log("else");
}

let errors=[]
const retrieveEntries = ()=>{
    let entries = localStorage.getItem('Entries1')
    if(entries){
        entries=JSON.parse(entries)
    }else{
        entries=[]
    }
    return entries
}
const displaydetails = ()=>{
let entries=retrieveEntries()
const tableEntries = entries.map((entry)=>{
const nameCelluser = `<td class='border px-4 py-2'>${entry.FullName}</td>`
const emailCelluser = `<td class='border px-4 py-2'>${entry.email}</td>`
const passwordCelluser = `<td class='border px-4 py-2'>${entry.password}</td>`
const dobCelluser = `<td class='border px-4 py-2'>${entry.dob}</td>`
const acceptTermsCelluser = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`
const row1 = `<tr>${nameCelluser} ${emailCelluser} ${passwordCelluser} ${dobCelluser} ${acceptTermsCelluser}</tr>`
return row1

}).join('\n')
const table =` <table class='table-auto w-full' style="background-color:#E4EBEB; ">
    <tr>
    <th class='px-4 py-2 '>Name </th>
    <th class='px-4 py-2 '>Email </th>
    <th class='px-4 py-2 '>Password </th>
    <th class='px-4 py-2 '>Dob </th>
    <th class='px-4 py-2 '>Accepted terms? </th>
    </tr>${tableEntries}
</table>`
let details = document.getElementById('user-entries')
details.innerHTML=table
}

const saveForm = (event)=>{
event.preventDefault();
const FullName = document.getElementById('name').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const dob = document.getElementById('dob').value
const acceptTerms = document.getElementById('acceptTerms').checked
var currentYearuser = new Date().getFullYear();
var birthYear = dob.split("-");
let year=birthYear[0]
var age = currentYearuser-year
console.log({age,currentYearuser,birthYear})
if(age < 18 || age > 55){
    document.getElementById('dob').style='border:2px solid red'
  let d=document.getElementById('demo');
  d.textContent="Your age should be between 18 and 55"
  let time = setTimeout(func,3000);
  function func(){
    d.textContent=""
  }

}else{
    document.getElementById('dob').style='border:none'

    const entry ={
        FullName,
        email,
        password,
        dob,
        acceptTerms
     }
     Entries1.push(entry);
     localStorage.setItem("Entries1",JSON.stringify(Entries1))
    displaydetails()
    userForm1.reset()
   
}
 
}
userForm1.addEventListener('submit',saveForm)
displaydetails()
