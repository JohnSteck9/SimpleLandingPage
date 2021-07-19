const form = document.getElementById("consultation__form");
const sendBtn = form.querySelector(".btn_send");
const formName = form.querySelector("#inputName");
const formPhone = form.querySelector("#inputPhone");
const formEmail = form.querySelector("#inputEmail");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let validNameRegex = /^[a-zA-Z ]{2,30}$/;
    let validPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(formName.value.match(validNameRegex)) {
        if (formPhone.value.match(validPhoneRegex)) {
            if (formEmail.value.match(validEmailRegex) || formEmail.value == '') {
                
                addAlert("All Good")

            } else return addAlert("Email Error")
        } else return addAlert("Phone Error")
    } else return addAlert("Name Error")


});

const addAlert = (text) => {
    const footer = document.querySelector("footer");
    let alertStr = `<div class="alert">
 <span class="closebtn" onclick="remove(this)">&times;</span>
 ${text}
 </div>`;
 
 footer.insertAdjacentHTML("beforeend", alertStr);
};


function remove(el) {
    el.parentNode.remove();
}