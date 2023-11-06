import './App.css';
import {useState} from 'react';

function App() {

//   const[firstName, setFirstName] =useState("");
//   const[LastName, setLastName] =useState("");

// function firstNameHandler(event){
// //   console.log("printing first name");
// //  console.log( event.target.value)
// setFirstName(event.target.value)
// }

// function lastNameHandler(event){
//   // console.log("printing last name");
//   // console.log( event.target.value)
//   setLastName(event.target.value)
//  }

const [formData,setFormData] = useState( {
firstName: "", 
lastName: "",
email:"", 
comments:"", 
isVisible:false, 
mode: "",
favCar: ""
});
//  console.log(formData.email); 
// console.log(formData);  

 function changeHandler(event){
  const {name,value,checked,type} = event.target
      setFormData(prevFormData =>{
        return{
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
          // [event.target.name]: event.target.value

        }
      });
       
 }

function submitHandler(event){
 event.preventDefault();
 console.log("Finally printing the entire form data")
 console.log(formData);
 setFormData(0)
}

  return (
    <div className="App">
   <form onSubmit={submitHandler}>

<br/>
<br/>
    <input 
    type="text"
    placeholder="first name"
    onChange={changeHandler}
    name="firstName"
    value={formData.firstName}
    />

<br/>
<br/>
 
    <input 
    type="text"
    placeholder="last name"
    onChange={changeHandler}
    name="lastName"
    value={formData.lastName}
    />

<br/><br/>
 
    <input 
    type="email"
    placeholder="Enter your email here "
    onChange={changeHandler}
    name="email"
    value={formData.email}
    />

<br/><br/>

     <textarea
     placeholder='enter your comments here'
     onChange={changeHandler}
     name="comments"
     value={formData.comments}
     />
   
<br/><br/>
     <input 
     type="checkbox"
     onChange={changeHandler}
     name="isVisible"
     id="isVisible"
     checked={formData.isVisible}
     />

     <label htmlFor='isVisible'>Am I visible ?</label>

<br/><br/>

<fieldset>
  <legend>Mode :</legend>
  <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="online-mode"
     value="Online-Mode"
     checked={formData.mode === "Online-Mode"}
    />
    <label htmlFor='online-mode'>Online-Mode</label>
    
    <br/><br/>
    <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="offline-mode"
     value="Offline-Mode"
     checked={formData.mode === "Offline-Mode"}
    />
    <label htmlFor='offline-mode'>Offline-Mode</label>


</fieldset>
   
<br/><br/>
<label htmlFor='favCar'>  Your favourite Car  </label>
   <select
   name="favCar"
   id="favCar"
   onChange={changeHandler}
   value={formData.favCar}
    >
   <option value="Maruti">Maruti</option> 
   <option value="scarpio">Scarpio</option>  
   <option value="fartuner">Fartuner</option> 
   <option value="Thar">Thar</option>  
   <option value="legender">Legender</option> 
   <option value="Defender">Defender</option> 

   </select>
  
<br/><br/>

{/* <input type="submit"> Submit </input> */}
<button>Submit</button>
     
    
   </form>
    </div>
  );
}

export default App;
