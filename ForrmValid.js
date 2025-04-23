var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirmPwd = document.getElementById("confirm-pwd");
var gender = document.getElementsByName("gender");
var presentAdd = document.getElementById("present-add");
var permanentAdd = document.getElementById("permanent-add");
var pincode1 = document.getElementById("present-pincode");
var state1 = document.getElementById("present-state");
var pincode2 = document.getElementById("permanent-pincode");
var state2 = document.getElementById("permanent-state");
var dob = document.getElementById("dob");
var birthTime = document.getElementById("dob-time");
var languages = document.getElementsByName("language");
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
var genderError = document.getElementById("gender-error");
var passwordError = document.getElementById("password-error");
var pincode1Error = document.getElementById("present-pincode-error");
var pincode2Error = document.getElementById("permanent-pincode-error");
var confirmPwdError = document.getElementById("confirm-pwd-error");
var presentAddError = document.getElementById("present-error");
var permanentAddError = document.getElementById("permanent-error");
var state1Error = document.getElementById("present-state-error");
var state2Error = document.getElementById("permanent-state-error");
var dobError = document.getElementById("dob-error");
var birthTimeError = document.getElementById("dob-time-error");
var langError = document.getElementById("languages-error");
var interestError = document.getElementById("interest-error");
var photoError = document.getElementById("photo-error");
var resumeError = document.getElementById("resume-error");

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
        flag = false;
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
        lastName.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        lastNameError.textContent = "";
        lastName.setAttribute("class", "correct-value");
        flag = true;
    }
}
function EmailValidation() {
    if (!regexEmail.test(email.value)) {
        emailError.textContent = "Enter Valid Email Id";
        email.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        emailError.textContent = "";
        email.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PhoneNumberValidation() {
    if (!regexPhone.test(phone.value)) {
        phoneError.textContent = "Enter Valid Phone Number";
        phone.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        phoneError.textContent = "";
        phone.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PasswordValidation() {
    if (!regexPassword.test(password.value)) {
        passwordError.textContent = "Enter Valid Password";
        password.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        passwordError.textContent = "";
        password.setAttribute("class", "correct-value");
        flag = true;
    }
}
function ConfirmPwdValidation() {
    let pwd = password.value;
    let cpwd = confirmPwd.value;
    if (!regexPassword.test(password.value)) {
        confirmPwdError.textContent = "Enter Valid Password";
        confirmPwd.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else if (pwd !== cpwd) {
        confirmPwdError.textContent = "Password Mismatches";
        confirmPwd.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        confirmPwdError.textContent = "";
        confirmPwd.setAttribute("class", "correct-value");
        flag = true;
    }
}
function GenderValidation() {
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        genderError.textContent = 'Please select a gender';
        flag = false;
    } else {
        genderError.textContent = '';
        flag = true;
    }
}
function presentAddValidation() {
    if (!regexAddress.test(presentAdd.value)) {
        presentAddError.textContent = "Enter Valid Address";
        presentAdd.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        presentAddError.textContent = "";
        presentAdd.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PermanentAddValidation() {
    if (!regexAddress.test(permanentAdd.value)) {
        permanentAddError.textContent = "Enter Valid Address";
        permanentAdd.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        permanentAddError.textContent = "";
        permanentAdd.setAttribute("class", "correct-value");
        flag = true;
    }
}
function PresentPincodeValidation() {
    if (!regexPincode.test(pincode1.value)) {
        pincode1Error.textContent = "Enter Valid Pincode";
        pincode1.setAttribute("class", "incorrect-value");
        flag = false;
    }
    else {
        pincode1Error.textContent = "";
        pincode1.setAttribute("class", "correct-value");
        flag = true;
    }
}
function permanentPicodeValidation() {
    if (!regexPincode.test(pincode2.value)) {
        pincode2Error.textContent = "Enter Valid Pincode";
        pincode2.setAttribute("class", "incorrect-value");
        flag = false;
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
        flag = false;
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
        flag = false;
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
        flag = false;
    }
    else {
        dobError.textContent = "";
        dob.setAttribute("class", "correct-value");
        flag = true;
    }
}
function BirthTimeValidation() {
    if (birthTime.value === '') {
        birthTimeError.textContent = 'Birth Time is required';
        birthTime.setAttribute("class", "incorrect-value");
        flag = false;
    } else {
        birthTimeError.textContent = "";
        birthTime.setAttribute("class", "correct-value");
        flag = true;
    }
}
function LanguagesValidation() {
    let languages = document.querySelectorAll('input[name="language"]:checked');
    if (languages.length === 0) {
        langError.textContent = 'Please select at least one language';
        flag = false;
    } else {
        langError.textContent = '';
        flag = true;
    }
}
function InterestValidation() {
    let selectedOptions = interest.selectedOptions;

    if (selectedOptions.length === 0) {
        interestError.textContent = 'Please select at least one field of interest';
        flag = false;
    } else {
        interestError.textContent = '';
        flag = true;
    }
}
function PhototValidation() {
    if (photo.files.length === 0) {

        photoError.textContent = 'Please upload photo';
        flag = false;
    }
    else {
        photoError.textContent = '';
        flag = true;
    }
}
function ResumeValidation() {
    if (resume.files.length === 0) {

        resumeError.textContent = 'Please upload photo';
        flag = false;
    }
    else {
        resumeError.textContent = '';
        flag = true;
    }
}
function AddressCopy() {
    let isChecked = checkAdd.checked;
    if (isChecked) {
        permanentAdd.value = presentAdd.value;
        state2.value = state1.value;
        pincode2.value = pincode1.value;
        permanentAdd.disabled = true;
        pincode2.disabled = true;
        state2.disabled = true;
        PermanentAddValidation();
        permanentPicodeValidation();
        State2Validation();
    }
    else {
        permanentAdd.value = "";
        state2.value = "";
        pincode2.value = "";
        permanentAdd.disabled = false;
        pincode2.disabled = false;
        state2.disabled = false;
        PermanentAddValidation();
        permanentPicodeValidation();
        State2Validation();
    }
}
let base64Value = ""
var resumelink="";
async function SubmitValidation() {
    event.preventDefault();
    FirstNameValidation();
    LastNameValidation();
    EmailValidation();
    PhoneNumberValidation();
    PasswordValidation();
    ConfirmPwdValidation();
    GenderValidation();
    PresentPincodeValidation();
    permanentPicodeValidation();
    presentAddValidation();
    PermanentAddValidation();
    State1Validation();
    State2Validation();
    DOBValidation();
    BirthTimeValidation();
    LanguagesValidation();
    InterestValidation();
    PhototValidation();
    ResumeValidation();

    if (flag == true) {
        base64Value = await toBase64(photo.files[0]);
        var resumeBlob=await GetResume(resume.files[0]);
        var url=URL.createObjectURL(resumeBlob);
        resumelink=`<a href="${url}" download="${resume.files[0].name}">${resume.files[0].name}</a>`;
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
function GetResume(resume)
{
    var reader=new FileReader();
    return new Promise((resolve,reject)=> {
        reader.onload=() =>
            resolve(new Blob([reader.result],{type:resume.type}));
        reader.onerror =(error) => reject(error);
        reader.readAsArrayBuffer(resume);
    })
}

let data = [];
let EditId = null;

function AddData() {
    var firstNameIp = firstName.value;
    var lastNameIp = lastName.value;
    var emailIp = email.value;
    var phoneIp = phone.value;
    var passwordIp = password.value;
    var genderIp = Array.from(gender).find((gender) => gender.checked).value;
    var presentAddIp = presentAdd.value;
    var permanentAddIp = permanentAdd.value;
    var pincode1Ip = pincode1.value
    var state1Ip = state1.value;
    var pincode2Ip = pincode2.value;
    var state2Ip = state2.value;
    var dobIp = dob.value;
    var birthTimeIp = birthTime.value;
    var languageIp = Array.from(languages).filter((languages) => languages.checked).map(opt => opt.value).join(',');
    var interestIp = Array.from(interest.selectedOptions).map(opt => opt.value);
    if (EditId !== null) {
        const index = data.findIndex((item) => item.id === EditId);
        if (index !== -1) {
            data[index] = {
                ...data[index],
                firstNameIp, lastNameIp, emailIp, phoneIp, passwordIp, genderIp, presentAddIp, permanentAddIp, pincode1Ip,
                state1Ip, pincode2Ip, state2Ip, dobIp, birthTimeIp, languageIp, photoIp: base64Value || data[index].photoIp,
                resume:resumelink || data[index].resumeIp
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
            languageIp,
            interestIp,
            photoIP: base64Value,
            resumeIp:resumelink
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
        <td>${item.presentAddIp} <br>${item.state1Ip}<br> ${item.pincode1Ip}  </td>
        <td>${item.permanentAddIp} <br>${item.state2Ip} <br>${item.pincode2Ip} </td>
        <td>${item.dobIp}</td>
        <td>${item.birthTimeIp}</td>
        <td>${item.languageIp}</td>
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
        gender.value = element.genderIp;
        presentAdd.value = element.presentAddIp;
        permanentAdd.value = element.permanentAddIp;
        pincode1.value = element.pincode1Ip;
        state1.value = element.state1Ip;
        pincode2.value = element.pincode2Ip;
        state2.value = element.state2Ip;
        dob.value = element.dobIp;
        birthTime.value = element.birthTimeIp;
        languages.value = element.languagesIp;
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