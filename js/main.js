let namecard = document.getElementById("namecard");
let nameinput = document.getElementById("nameinput");
let numbercard = document.getElementById("numbercard");
let numberinput = document.getElementById("numberinput");
let monthcard = document.getElementById("monthcard");
let monthinput = document.getElementById("monthinput");
let yearcard = document.getElementById("yearcard");
let yearinput = document.getElementById("yearinput");
let cvccard = document.getElementById("cvccard");
let cvcinput = document.getElementById("cvcinput");


//name input ===============
document.addEventListener("DOMContentLoaded", function () {
  // Set the default value for the div on page load
  namecard.textContent = 'Jane Appleseed';
  // Add event listener to the input field to update the div on input
  nameinput.addEventListener('input', function () {
    const inputValue = nameinput.value.trim();
    if (inputValue === '') {
      namecard.textContent = 'Jane Appleseed';
    } else {
      namecard.textContent = inputValue;
    }
  });
});

//number input =======================
//to make spaces between numbers
numberinput.addEventListener("input", function () {
  // Get the input value
  let inputValue = document.getElementById("numberinput").value;
  // Remove any existing spaces from the input value
  inputValue = inputValue.replace(/\s/g, '');
  // Check if the input value is empty
  if (inputValue === '') {
    document.getElementById("numbercard").innerText = "0000 0000 0000 0000"; // Set the default value in the div
  } else {
    // Add spaces every 4 characters
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i += 4) {
      formattedValue += inputValue.substr(i, 4) + ' ';
    }
    // Remove the extra space at the end
    formattedValue = formattedValue.trim();
    // Display the formatted value in the div
    document.getElementById("numbercard").innerText = formattedValue;
  }
})

//month input ===============
document.addEventListener("DOMContentLoaded", function () {
  // Set the default value for the div on page load
  monthcard.textContent = '00';
  // Add event listener to the input field to update the div on input
  monthinput.addEventListener('input', function () {
    const inputValue = monthinput.value.trim();
    if (inputValue === '') {
      monthcard.textContent = '00';
    } else {
      monthcard.textContent = inputValue;
    }
  });
});

//year input ===============
document.addEventListener("DOMContentLoaded", function () {
  // Set the default value for the div on page load
  yearcard.textContent = '00';
  // Add event listener to the input field to update the div on input
  yearinput.addEventListener('input', function () {
    const inputValue = yearinput.value.trim();
    if (inputValue === '') {
      yearcard.textContent = '00';
    } else {
      yearcard.textContent = inputValue;
    }
  });
});

//cvc input ===============
document.addEventListener("DOMContentLoaded", function () {
  // Set the default value for the div on page load
  cvccard.textContent = '000';
  // Add event listener to the input field to update the div on input
  cvcinput.addEventListener('input', function () {
    const inputValue = cvcinput.value.trim();
    if (inputValue === '') {
      cvccard.textContent = '000';
    } else {
      cvccard.textContent = inputValue;
    }
  });
});

let senddata = document.getElementById("senddata");

let nameerror = document.getElementById("nameerror");
let numbererror = document.getElementById("numbererror");
let numberformat = document.getElementById("numberformat");
let dateerror = document.getElementById("dateerror");
let cvcerror = document.getElementById("cvcerror");

let form = document.getElementById("form");
let complete = document.getElementById("complete");
let thankbtn = document.getElementById("thankbtn");


let isFormValid = true;

senddata.onclick = function () {

  isFormValid = true;

  if(!nameinput.value){
    nameerror.classList.remove("hidden");
    nameinput.style.borderColor = "red";
    isFormValid = false;
  }

  if(!numberinput.value ){
    numbererror.classList.remove("hidden");
    numberinput.style.borderColor = "red";
    isFormValid = false;
  }else if(numberinput.value.length < 16){
    numberformat.classList.remove("hidden");
    numberinput.style.borderColor = "red";
    isFormValid = false;
  }

  if(!monthinput.value){
    dateerror.classList.remove("hidden");
    monthinput.style.borderColor = "red";
    isFormValid = false;
  }

  if(!yearinput.value){
    dateerror.classList.remove("hidden");
    yearinput.style.borderColor = "red";
    isFormValid = false;
  }

  if(!cvcinput.value){
    cvcerror.classList.remove("hidden");
    cvcinput.style.borderColor = "red";
    isFormValid = false;
  }

  if (isFormValid){
    form.classList.add("hidden");
    complete.classList.remove("hidden");
  }
}

thankbtn.onclick = function () {
  location.reload();
}
