
const anotherPage = () => {
        window.location = "buyerPage.html";
    }
const openFile = () => {
    myFile.click();
}
    let phoneArr = [];
const mySave = () => {
    let edited = myFile.value.slice(myFile.value.lastIndexOf('\\')+1, );
    
    if (localStorage.getItem("phoneList") != null) {
        phoneArr = JSON.parse(localStorage.getItem("phoneList"));
    } else {
        phoneArr = [];
    }
    if (input.value == '' || input2.value == '' || input3.value == '') {
        myMessage.innerHTML = `There is nothing to save!!!, please insert your details`;
    }else {
        let phoneObj = {phoneName: input.value, price: input2.value, quantity: input3.value, image: edited};
        phoneArr.push(phoneObj);
        console.log(phoneArr);
        localStorage.setItem("phoneList", JSON.stringify(phoneArr)); 
        input.value = ""; 
        input2.value = "";
        input3.value = "";
        myMessage.innerHTML = `Congratulations! Your goods has been saved to the buyer page`
    }
}