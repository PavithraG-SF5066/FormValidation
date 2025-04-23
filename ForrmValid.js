var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirmPwd = document.getElementById("confirm-pwd");
var gender = document.getElementsByTagName("gender");
var presentAdd = document.getElementById("present-add");
var permanentAdd = document.getElementById("permanent-add");
var pincode1 = document.getElementById("present-pincode");
var state1 = document.getElementById("present-state");
var pincode2 = document.getElementById("permanent-pincode");
var state2 = document.getElementById("permanent-state");
var dob = document.getElementById("dob");
var birthTime = document.getElementById("dob-time");
var languages = document.getElementById("languages");
var interest = document.getElementById("interest");
var photo = document.getElementById("photo");
var resume = document.getElementById("resume");
var checkAdd = document.getElementById("add-check");

var formId = document.getElementById("my-form");
var tablediv = document.getElementById("table-div");
var tableBody = document.getElementById("table-body");

var firstNameError = document.getElementById("first-name-error");
var lastNameError = document.getElementById("last-name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var passwordError = document.getElementById("password-error");
var pincode1Error = document.getElementById("present-pincode-error");
var pincode2Error = document.getElementById("permanent-pincode-error");
var confirmPwdError = document.getElementById("confirm-pwd-error");
var presentAddError = document.getElementById("present-error");
var permanentAddError = document.getElementById("permanent-error");
var state1Error = document.getElementById("present-state-error");
var state2Error = document.getElementById("permanent-state-error");
var dobError = document.getElementById("dob-error");
var birthTimeError = document.getElementById("dob-time-error")

var regexName = /^[A-Za-z\s]+$/;
var regexEmail = /^[\w.-]+@[\w]+\.\w{2,}$/;
var regexPhone = /^[1-9]{1}[0-9]{9}$/;
var regexAddress = /^[\w.,-/s]+$/;
var regexPincode = /^[0-9]{6}$/;
var regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$%^&*\s])[A-Za-z0-9@$%^&*\s]{8,}$/;

let flag = true;

function FirstNameValidation() {

    if (!regexName.test(firstName.value)) {
        firstNameError.textContent = "Enter Valid Name";
        firstName.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        firstNameError.textContent = "";
        firstName.setAttribute("class", "correct-value");
        flag = true;
    }
}
function LastNameValidation() {
    if (!regexName.test(lastName.value)) {
        lastNameError.textContent = "Enter Valid Name";
        firstName.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        lastNameError.textContent = "";
        firstName.setAttribute("class", "correct-value");
        flag = true;
    }
}
function EmailValidation() {
    if (!regexEmail.test(email.value)) {
        emailError.textContent = "Enter Valid Email Id";
        flag - false;
    }
    else {
        emailError.textContent = "";
        flag = true;
    }
}
function PhoneNumberValidation() {
    if (!mobileRegex.test(phone.value)) {
        phoneError.textContent = "Enter Valid Phone Number";
        firstName.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        phoneError.textContent = "";
        firstName.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PasswordValidation() {
    if (!regexPassword.test(password.value)) {
        passwordError.textContent = "Enter Valid Password";
        firstName.setAttribute("class","incorrect-value");
        flag - false;
    }
    else {
        passwordError.textContent = "";
         firstName.setAttribute("class", "correct-value");
        
         flag = true;
    }
}
// function ConfirmPwdValidation() {
//     var pwd=password.value;
//     var cpwd=confirmPwd.value;
//     if (pwd != cpwd) {
//         confirmPwdError.textContent = "Password Mismatches";
// firstName.setAttribute("class","incorrect-value");

//         flag - false;
//     }
//     else {
//         confirmPwdError.textContent = "";
// firstName.setAttribute("class","correct-value");
// 
//         flag = true;
//     }
// }
function presentAddValidation() {
    if (!addressRegex.test(presentAdd.value)) {
        presentAddError.textContent = "Enter Valid Address";
        presentAdd.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        presentAddError.textContent = "";
        presentAdd.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PermanentAddValidation() {
    if (!addressRegex.test(permanentAdd.value)) {
        permanentAddError.textContent = "Enter Valid Address";
        permanentAdd.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        permanentAddError.textContent = "";
        permanentAdd.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PresentPincodeValidation() {
    if (!pincodeRegex.test(pincode1.value)) {
        pincode1Error.textContent = "Enter Valid Pincode";
        pincode1.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        pincode1Error.textContent = "";
        pincode1.setAttribute("class", "correct-value");
        flag = true;
    }
}
function permanentPicodeValidation() {
    if (!pincodeRegex.test(pincode2.value)) {
        pincode2Error.textContent = "Enter Valid Pincode";
        pincode2.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        pincode2Error.textContent = "";
        pincode2.setAttribute("class", "correct-value");
        flag = true;
    }
}
function State1Validation() {
    if (state1.value === "Select") {
        state1Error.textContent = "Select State";
        state1.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        state1Error.textContent = "";
        state1.setAttribute("class", "correct-value");
        flag = true;
    }
}

function State2Validation() {
    if (state2.value === "Select") {
        state2Error.textContent = "Select State";
        state2.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        state2Error.textContent = "";
        state2.setAttribute("class", "correct-value");
        flag = true;
    }
}
function DOBValidation() {
    if (dob.value === "") {
        dobError.textContent = "Enter Date of Birth";
        dob.setAttribute("class", "incorrect-value");
        flag - false;
    }
    else {
        dobError.textContent = "";
        dob.setAttribute("class", "correct-value");
        flag = true;
    }
}
// function DOBTimeValidation()
// {    
//     if (birthTime.value==="") {
//         birthTimeError.textContent = "Enter BirthTime";
//         birthTime.setAttribute("class","incorrect-value");
//         flag - false;
//     }
//     else {
//         birthTimeError.textContent = "";
//         birthTime.setAttribute("class","correct-value");
//         flag = true;
//     }  
// }
let base64Value = ""
function AddressCopy() {
    if (checkAdd) {
        permanentAdd.value = presentAdd.value;
        state2.value = state1.value;
        pincode2.value = pincode1.value;
    }
}
async function SubmitValidation() {
    event.preventDefault();
    FirstNameValidation();
    LastNameValidation();
    PhoneNumberValidation();
    PresentPincodeValidation();
    permanentPicodeValidation();
    presentAddValidation();
    PermanentAddValidation();
    State1Validation();
    State2Validation();
    DOBValidation();

    if (flag == true) {
        base64Value = await toBase64(photo.files[0]);
        formId.style.display = "none"
        tablediv.style.display = "block";
        AddData();
    }
    else {
        alert("Please fill the form properly");
    }
}
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
    });
}

let data = [];
let EditId = null;


function AddData() {
    // alert(base64Value);
    var firstNameIp = firstName.value;
    var lastNameIp = lastName.value;
    var emailIp = email.value;
    var phoneIp = phone.value;
    var passwordIp = password.value;
    var genderIp = gender.value;
    var presentAddIp = presentAdd.value;
    var permanentAddIp = permanentAdd.value;
    var pincode1Ip = pincode1.value
    var state1Ip = state1.value;
    var pincode2Ip = pincode2.value;
    var state2Ip = state2.value;
    var dobIp = dob.value;
    var birthTimeIp = birthTime.value;
    // var languages 
    var interestIp = Array.from(interest.selectedOptions).map(opt => opt.value);
    // var photo = photo.value;
    // var resume = d
    // alert(interestIp);
    if (EditId !== null) {
        const index = data.findIndex((item) => item.id === EditId);
        if (index !== -1) {
            data[index] = {
                ...data[index],
                firstNameIp, lastNameIp, emailIp, phoneIp, passwordIp, genderIp, presentAddIp, permanentAddIp, pincode1Ip,
                state1Ip, pincode2Ip, state2Ip, dobIp, birthTimeIp, photoIp: base64Value || data[index].photoIp
            };
        }
        EditId = null;
    }
    else {
        const newData = {
            id: data.length + 1,
            firstNameIp,
            lastNameIp,
            emailIp,
            phoneIp,
            passwordIp,
            genderIp,
            presentAddIp,
            permanentAddIp,
            pincode1Ip,
            state1Ip,
            pincode2Ip,
            state2Ip,
            dobIp,
            birthTimeIp,
            interestIp,
            photoIP: base64Value,
        }
        data.push(newData);
    }
    AddDataToTable();
    document.getElementById("submitBtn").value = "Submit";
    // formId.reset();
}

function AddDataToTable() {
    // alert("hdbcn");
    tableBody.innerHTML = "";
    data.forEach((item) => {
        // alert(item.photoIP);
        const row = document.createElement("tr");
        row.setAttribute('id', 'row' + item.id);
        row.innerHTML = `
        <td>${item.firstNameIp}</td>
        <td>${item.lastNameIp}</td>
        <td>${item.emailIp}</td>
        <td>${item.phoneIp}</td>
        <td>${item.passwordIp}</td>
        <td>${item.genderIp}</td>
        <td>${item.presentAddIp}</td>
        <td>${item.pincode1Ip}</td>
        <td>${item.state1Ip}</td>
        <td>${item.permanentAddIp}</td>
        <td>${item.pincode2Ip}</td>
        <td>${item.state2Ip}</td>
        <td>${item.dobIp}</td>
        <td>${item.birthTimeIp}</td>
        <td>${item.languages}</td>
        <td>${item.interestIp}</td>
        <td>${item.photoIp ? `<img src='${item.photoIp}' width='100px' alt='photo'>` : ""}</td>
        <td>${item.resumeIp}</td>
        <td>
            <input type="button" value="Edit" onclick='EditData(${item.id})'>
            <input type="button" value="Delete" onclick='DeleteData(${item.id})'>
        </td>
        `;
        tableBody.appendChild(row);
    });
}

function EditData(id) {
    document.getElementById("submitBtn").value = "Update";
    formId.style.display = "block";
    tablediv.style.display = "none";

    const element = data.find((item) => item.id === id);
    if (element) {
        EditId = element.id;
        firstName.value = element.firstNameIp;
        email.value = element.emailIp;
        phone.value = element.phoneIp;
        password.value = element.passwordIp;
        presentAdd.value = element.presentAddIp;
        permanentAdd.value = element.permanentAddIp;
        pincode1.value = element.pincode1Ip;
        state1.value = element.state1Ip;
        pincode2.value = element.pincode2Ip;
        state2.value = element.state2Ip;
        dob.value = element.dobIp;
        birthTime.value = element.birthTimeIp;
        // languages.value = element.languagesIp;
        // photo.value = element.photoIp;
        // resume.value = element.resumeIp;
        // gender.value = element.genderIp;
        Array.from(interest.options).forEach(option => {
            option.selected = element.interestIp.includes(option.value);
        });

    }
}

function DeleteData(id) {
    document.getElementById('row' + id).remove();
}

function AddUser() {
    tablediv.style.display = "none";
    formId.reset();
    formId.style.display = "block";
}
function Back() {
    tablediv.style.display = "none";
    formId.style.display = "block";
}
