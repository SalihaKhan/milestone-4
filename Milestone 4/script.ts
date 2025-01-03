const form= document.getElementById('Resume-Builder') as HTMLFormElement;
const dynamicResume = document.getElementById('Dynamic-resume') as HTMLDivElement;


form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const fatherName=(document.getElementById('fatherName') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const contact=(document.getElementById('contact') as HTMLInputElement).value
    const address=(document.getElementById('add') as HTMLInputElement).value
    const education=(document.getElementById('fieldOfStudy') as HTMLInputElement).value
    const degree=(document.getElementById('degree') as HTMLInputElement).value
    const school=(document.getElementById('school') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const interest=(document.getElementById('interest') as HTMLInputElement).value

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
     <p><b>Name:</b><span contentEditable="true">${name}</span></p>
     
    <h3>Personal information</h2> <br><br>
    <p><b>Fathername:</b><span contentEditable="true">${fatherName}</span></p>
    <p><b>Email:</b><span contentEditable="true">${email}</span></p>
    <p><b>Contact:</b><span contentEditable="true">${contact}</span></p> 
     <p><b>Address:</b><span contentEditable="true">${address}</span></p> 
     
     
    <h3>Education</h3>
    <p><b>Field of study:</b><span contentEditable="true">${education}</span></p> 
    <p><b>Degree:</b><span contentEditable="true">${degree}</span></p> 
    <p><b>School:</b><span contentEditable="true">${school}</span></p> 


     <h3>Skills:</h3>
     <p contentEditable="true">${skills}</p>


     <h3>Experience:</h3>
     <p contentEditable="true">${experience}</p>

      <h3>Interest:</h3>
     <p contentEditable="true">${interest}</p>`;

     if(dynamicResume){
       dynamicResume.innerHTML = resumeHTML;
     } else{
        console.error('Required conditions are not fulfilled')
     }
    
});