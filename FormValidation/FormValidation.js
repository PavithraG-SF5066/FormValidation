// document.getElementById('username').addEventListener('blur', validateUsername);
// document.getElementById('fatherName').addEventListener('blur', validatefatherName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('currAddress').addEventListener('blur', validateCurrAddress);
document.getElementById('city1').addEventListener('blur', validateCity);
document.getElementById('state1').addEventListener('blur', validateState);
document.getElementById('pincode1').addEventListener('blur', validatePincode1);
document.getElementById('perAddress1').addEventListener('blur', validatePerAddress);
document.getElementById('city2').addEventListener('blur', validateCity2);
document.getElementById('state2').addEventListener('blur', validateState2);
document.getElementById('pincode2').addEventListener('blur', validatePincode2);
document.getElementById('photo').addEventListener('blur', validatePhoto);

var username = document.getElementById('username');
var fathername = document.getElementById('fatherName');
var email = document.getElementById('email');
var dob = document.getElementById('dob');
var phone = document.getElementById('phone');
var curraddress = document.getElementById('currAddress');
var curraddress2 = document.getElementById('currAddress2');
var city1 = document.getElementById('city1');
var state1 = document.getElementById('state1');
var pincode1 = document.getElementById('pincode1');
var perAddress = document.getElementById('perAddress1');
var perAddress2 = document.getElementById('perAddress2');
var city2 = document.getElementById('city2');
var state2 = document.getElementById('state2');
var pincode2 = document.getElementById('pincode2');
var formId = document.getElementById('myForm');

var usernameError = document.getElementById('usernameError');
var fathernameError = document.getElementById('fatherNameError');
var emailError = document.getElementById('emailError');
var mobileError = document.getElementById('mobileError');
var currAddressError = document.getElementById('address1Error');
var city1Error = document.getElementById('city1Error');
var stateError = document.getElementById('state1Error');
var pincode1Error = document.getElementById('pincode1Error');
var perAddressError = document.getElementById('perAddress1Error');
var city2Error = document.getElementById('city2Error');
var state2Error = document.getElementById('state2Error');
var pincode2Error = document.getElementById('pincode2Error');




var regexName = /^[A-Za-z\s]+$/;
var regexEmail = /^[\w.-]+@[\w]+\.\w{2,}$/;
var regexPhone = /^[1-9]{1}[0-9]{9}$/;
var regexAddress = /^[\w.,-/s]+$/;
var regexPincode = /^[0-9]{6}$/;
var regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$%^&*\s])[A-Za-z0-9@$%^&*\s]{8,}$/;
var flag = true;
function ValidationForm() {

}


function validateUsername() {
    if (username.value.trim() === '') {
        usernameError.textContent = 'Name is required';
        flag = false;
    }
    else if (!regexName.test(username.value)) {
        usernameError.textContent = 'Name is invalid';
        flag = false;
    }
    else {
        usernameError.textContent = '';
        flag = true;
    }
}
function validatefatherName() {
    if (fathername.value.trim() === '') {
        fathernameError.textContent = 'Father Name is required';
        flag = false;

    }
    else if (!regexName.test(fathername.value)) {
        fathernameError.textContent = 'Father Name is invalid';
        flag = false;

    }
    else {
        fathernameError.textContent = '';
        flag = true;

    }
}

function validateEmail() {
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        flag = false;

    }
    else if (!regexEmail.test(email.value.trim())) {
        emailError.textContent = 'Invalid email address';
        flag = false;

    }
    else {
        emailError.textContent = '';
        flag = true;

    }
}

function validateCurrAddress() {
    if (curraddress.value.trim() === "") {
        currAddressError.textContent = 'Address1 is Required';
        flag = false;

    }
    else if (!regexAddress.test(curraddress.value.trim())) {
        currAddressError.textContent = 'Invalid Address';
        flag = false;

    }
    else {
        currAddressError.textContent = '';
        flag = true;

    }
}
function validatePerAddress() {
    if (perAddress.value.trim() === "") {
        perAddressError.textContent = 'Address1 is Required';
        flag = false;

    }
    else if (!regexAddress.test(perAddress.value.trim())) {
        perAddressError.textContent = 'Invalid Address';
        flag = false;

    }
    else {
        perAddressError.textContent = '';
        flag = true;

    }
}
function validatePhone() {
    if (phone.value.trim() === "") {
        mobileError.textContent = 'Phone Number is Required';
        flag = false;

    }
    else if (!regexPhone.test(phone.value.trim())) {
        mobileError.textContent = 'Invalid phone number';
        flag = false;

    }
    else {
        mobileError.textContent = '';
        flag = true;

    }
}
function validateCity() {
    if (city1.value.trim() === '') {
        city1Error.textContent = 'City is required';
        flag = false;

    }
    else if (!regexName.test(city1.value)) {
        city1Error.textContent = 'City Name is invalid';
        flag = false;

    }
    else {
        city1Error.textContent = '';
        flag = true;

    }
}
function validateCity2() {
    if (city2.value.trim() === '') {
        city2Error.textContent = 'City is required';
        flag = false;

    }
    else if (!regexName.test(city1.value)) {
        city2Error.textContent = 'City Name is invalid';
        flag = false;

    }
    else {
        city2Error.textContent = '';
        flag = true;

    }
}
function validateState() {
    // alert(state1.value);
    if (state1.value ==="Select") {
        stateError.textContent = 'Please Select Your State';
        flag = false;

    }
    else {
        stateError.textContent = '';
        flag = true;

    }
}
function validateState2() {
    // alert(state1.value);
    if (state2.value ==="Select") {
        state2Error.textContent = 'Please Select Your State';
        flag = false;

    }
    else {
        state2Error.textContent = '';
        flag = true;

    }
}

function validatePincode1() {
    if (pincode1.value.trim() === "") {
        pincode1Error.textContent = 'Please Enter Zip Code';
        flag = false;

    }
    else if (!regexPincode.test(pincode1.value.trim())) {
        pincode1Error.textContent = 'Invalid pincode';
        flag = false;

    }
    else {
        pincode1Error.textContent = '';
        flag = true;

    }
}

function validatePincode2() {
    if (pincode2.value.trim() === "") {
        pincode2Error.textContent = 'Please Enter Zip Code';
        flag = false;

    }
    else if (!regexPincode.test(pincode2.value.trim())) {
        pincode2Error.textContent = 'Invalid pincode';
        flag = false;

    }
    else {
        pincode2Error.textContent = '';
        flag = true;

    }
}
let base64String = ""
async function validatePhoto() {
    // alert("hjsgd")
    var photo = document.getElementById('photo');
    var photoError = document.getElementById('photoError');
    if (photo.files.length === 0) {

        photoError.textContent = 'Please upload photo';
        flag = false;
    }
    else {
        photoError.textContent = '';
        flag = true;
    }
}
if (photo.files.length > 0) {
}
async function submitValidation() {
    event.preventDefault();
    validateUsername();
    validatefatherName();
    validateEmail();
    validateCurrAddress();
    validatePerAddress();
    validatePhone();
    validateCity();
    validateCity2();
    validateState();
    validateState2();
    validatePincode1();
    validatePincode2();
    validatePhoto();
    if (flag == true) {
        base64String = await toBase64(photo.files[0]);
        AddData();
        document.getElementById("table-div").style.display = "block";
        formId.style.display = "none";
    }
    else {
        alert("Please fill all the details properly...");
    }
}
let data = [];
function AddData() {
    const nameIp = username.value;
    const fatherNameIp = fathername.value;
    const emailIp = email.value;
    const dobIp = dob.value;
    const mobileIp = phone.value;
    const currentAdd1 = curraddress.value;
    const currentAdd2 = curraddress2.value;
    const city1Ip = city1.value;
    const state1Ip = state1.value;
    const zipcode1 = pincode1.value;
    const permanentAdd = perAddress.value;
    const permanentAdd1 = perAddress2.value;
    const city2Ip = city2.value;
    const state2Ip = state2.value;
    const zipcode2 = pincode2.value;

    const newData = {
        id: data.length + 1,
        nameIp,
        fatherNameIp,
        emailIp,
        dobIp,
        mobileIp,
        currentAdd1,
        currentAdd2,
        city1Ip,
        state1Ip,
        zipcode1,
        permanentAdd,
        permanentAdd1,
        city2Ip,
        state2Ip,
        zipcode2,
        photoIp: base64String,
    }
    data.push(newData);
    DataAddToTable();
    formId.reset();
}
function DataAddToTable() {
    document.getElementById('tableBody').innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement("tr");
        // alert('row'+item.id);
        row.setAttribute('id', 'row' + item.id);
        row.innerHTML = `
        <td>${item.nameIp}</td>
        <td>${item.fatherNameIp}</td>
        <td>${item.emailIp}</td>
        <td>${item.dobIp}</td>
        <td>${item.mobileIp}</td>
        <td>${item.currentAdd1}</td>
        <td>${item.currentAdd2}</td>
        <td>${item.city1Ip}</td>
        <td>${item.state1Ip}</td>
        <td>${item.zipcode1}</td>
        <td>${item.permanentAdd}</td>
        <td>${item.permanentAdd1}</td>
        <td>${item.city2Ip}</td>
        <td>${item.state2Ip}</td>
        <td>${item.zipcode2}</td>
        <td>${item.photoIp ? `<img src="${item.photoIp}" width="100px" alt="Photo">` : ""}</td>        
       `;
        document.getElementById('tableBody').appendChild(row);
    });
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function AddressUpdate() {
    var checkAddress = document.getElementById('check');
    if (checkAddress.checked) {
        perAddress.value = curraddress.value;
        perAddress2.value = curraddress2.value;
        city2.value = city1.value;
        state2.value = state1.value;
        pincode2.value = pincode1.value;
    }
}
function BackFunction() {
    document.getElementById("table-div").style.display = "none";
    formId.style.display = "block";
}
