var userName = document.getElementById('userName');
var fatherName = document.getElementById('fatherName');
var gender = document.getElementById('gender');
var phone = document.getElementById('phone');
var languages = document.getElementById('languagesId');
var dob = document.getElementById('dob');
var photo = document.getElementById('photo-file');
var balance = document.getElementById('balance');
var tableBody = document.getElementById('tableBody');

var nameError = document.getElementById('name-error');
var fatherNameError = document.getElementById('fatherName-error');
var genderError = document.getElementById('gender-error');
var phoneError = document.getElementById('phone-error');
var languagesError = document.getElementById('languages-error');
var dobError = document.getElementById('dob-error');
var photoError = document.getElementById('photo-error');
var balanceError = document.getElementById('balance-error');

var regexName = /^[A-Za-z\s]+$/;
var regexEmail = /^[[\w.-]+@[\w]+\.\w{2,}]$/;
var regexPhone = /^[1-9]{1}[0-9]{9}$/;
var regexAddress = /^[\w.,-/s]+$/;
var regexPincode = /^[0-9]{6}$/;
var regexAmount = /^\d+(\.\d+)?$/;

var flag = true;

function validateName() {
    if (!regexName.test(userName.value)) {
        nameError.textContent = 'Name is invalid';
        flag = false;
    }
    else {
        nameError.textContent = '';
        flag = true;
    }
}
function validateFatherName() {
    if (!regexName.test(fatherName.value)) {
        fatherNameError.textContent = 'Name is invalid';
        flag = false;
    }
    else {
        fatherNameError.textContent = '';
        flag = true;
    }
}
function validateGender() {
    if (gender.value === "Select") {
        genderError.textContent = "Please Select Gender";
        flag = false;
    }
    else {
        genderError.textContent = "";
        flag = true;
    }
}
function validatePhone() {
    if (!regexPhone.test(phone.value)) {
        phoneError.textContent = "Enter valid Phone Number";
        flag = false;
    }
    else {
        phoneError.textContent = "";
        flag = true;
    }
}
function validateLanguage() {
    const languagesIp = Array.from(languages.selectedOptions).map(opt => opt.value);
    // alert(languagesIp.length);
    if (languagesIp.length <= 0) {
        languagesError.textContent = "Select any Languages";
        flag = false;
    }
    else {
        languagesError.textContent = "";
        flag = true;
    }
}
function validatePhoto() {
    if (photo.files.length === 0) {
        photoError.textContent = "Select any photo";
        flag = false;
    }
    else {
        photoError.textContent = "";
        flag = true;
    }
}
function validateBalance() {
    if (!regexAmount.test(balance.value)) {
        balanceError.textContent = "Enter valid Amount";
        flag = false;
    }
    else {
        balanceError.textContent = "";
        flag = true;
    }
}
async function SubmitValidation(btnId) {
    event.preventDefault();
    validateName();
    validateFatherName();
    validateGender();
    validatePhone();
    validateLanguage();
    validatePhoto();

    if (flag == true) {
        base64String = await toBase64(photo.files[0]);
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
var userNameIp;
var fatherNameIp;
var genderIp;
var phoneIp;
var dobIp;
var balanceIp;
var languagesInput;

let EditId = null;
function AddData() {
    if (EditId !== null) {
        const index = data.findIndex((item) => item.id === EditId);
        if (index !== -1) {
            data[index] = {
                ...data[index],
                userNameIp, fatherNameIp, genderIp, phoneIp, dobIp, balanceIp, languagesInput
                , photoIp: base64String || data[index].photoIp, // retain old photo if none selected
                balance
            };
        }
        EditId = "";
    }
    else {
        userNameIp = userName.value;
        fatherNameIp = fatherName.value;
        genderIp = gender.value;
        phoneIp = phone.value;
        dobIp = dob.value;
        balanceIp = balance.value;
        languagesInput = Array.from(languages.selectedOptions).map(opt => opt.value);

        const newData = {
            id: data.length + 1,
            userNameIp,
            fatherNameIp,
            genderIp,
            phoneIp,
            dobIp,
            photoIp: base64String,
            balanceIp,
            languagesInput
        }
        data.push(newData);
        AddDataToTable();
        myForm.reset();
    }
    AddDataToTable();
    document.getElementById("submitBtn").value = "Submit";
    formId.reset();
}

function AddDataToTable() {
    tableBody.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.setAttribute('id', 'row' + item.id);
        row.innerHTML = `
        <td>${item.userNameIp}</td>
        <td>${item.fatherNameIp}</td>
        <td>${item.genderIp}</td>
        <td>${item.phoneIp}</td>
        <td>${item.languagesInput.join(",")}</td>
        <td>${item.dobIp}</td>
        <td>${item.photoIp ? `<img src='${item.photoIp}' width='100px' alt='photo'>` : ""}</td>
        <td>${item.balanceIp}</td>
        <td>
            <input type="button" value="Edit" onclick="EditData(${item.id})">
           <input type="button" value="Delete" onclick="DeleteRow(${item.id})">
        </td>
        `;
        tableBody.appendChild(row);
    });
}

function DeleteRow(id) {
    document.getElementById('row' + id).remove();
}
function EditData(id) {
    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'block';

    const element = data.find((item) => item.id === id);
    if (element) {
        EditId = element.id;
        userName.value = element.userNameIp;
        fatherName.value = element.fatherNameIp;
        gender.value = element.genderIp;
        phone.value = element.phoneIp;
        dob.value = element.dobIp;
        // photo.value=element.photoIp
        balance.value = element.balanceIp;
        Array.from(languages.options).forEach(option => {
            option.selected = element.languagesInput.includes(option.value);
        });
    }
}
function Update() {

    AddDataToTable();
    myForm.reset();
}