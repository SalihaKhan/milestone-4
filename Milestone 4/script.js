var form = document.getElementById('Resume-Builder');
var dynamicResume = document.getElementById('Dynamic-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('add').value;
    var education = document.getElementById('fieldOfStudy').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var interest = document.getElementById('interest').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n     <p><b>Name:</b>".concat(name, "</p>\n    <h3>Personal information</h2>\n    <p><b>Fathername:</b>").concat(fatherName, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Contact:</b>").concat(contact, "</p> \n     <p><b>Address:</b>").concat(address, "</p> \n     \n     \n    <h3>Education</h3>\n    <p><b>Field of study:</b>").concat(education, "</p> \n    <p><b>Degree:</b>").concat(degree, "</p> \n    <p><b>School:</b>").concat(school, "</p> \n\n\n     <h3>Skills:</h3>\n     <p>").concat(skills, "</p>\n\n\n     <h3>Experience:</h3>\n     <p>").concat(experience, "</p>\n\n      <h3>Interest:</h3>\n     <p>").concat(interest, "</p>");
    if (dynamicResume) {
        dynamicResume.innerHTML = resumeHTML;
    }
    else {
        console.error('Required conditions are not fulfilled');
    }
});
