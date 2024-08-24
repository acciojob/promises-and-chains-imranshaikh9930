const nameIn = document.getElementById("name");
const ageIn = document.getElementById("age");
const myForm = document.getElementById("myForm");
const btn = document.getElementById("btn");


function validate(name,age){
    return name.trim() !== "" && !isNaN(age) && age.trim() !== "";
}
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = nameIn.value.trim();
    const age = ageIn.value.trim();

   const isValid =  validate(name,age);

   function checkAge(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
        if(isValid && ageIn.value > 18){
                resolve(`Welcome, ${name}. You can vote.`)
            }else{
                reject(`Oh sorry ${name}. You aren't old enough.`)
            }
        },4000)
       })
   }
 
   checkAge().then((res)=>{
        alert(res);
   }).catch((err)=>alert(err));
})
