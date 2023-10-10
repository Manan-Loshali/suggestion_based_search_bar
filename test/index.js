const searchArr = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Brunei","Bulgaria","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Z"];


const form = document.querySelector(".form");
const inputField = document.querySelector(".input-text");
const submitBtn = document.querySelector(".input-submit");

let exist = false;
let outerDiv; 
let innerDiv;
let inputValue;

inputField.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    inputValue = e.target.value;
    showOptions(inputValue);
})


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputField.value === "" ){
        alert("Enter some value");
        return;
    }
    console.log(inputValue);
})



const showOptions = (value) =>{
    if(exist){
        form.removeChild(outerDiv);
        exist = false;
    }
    let valueToBeSearched = inputField.value.toLowerCase();
    console.log( "valueToBeSearched  ",valueToBeSearched);
    outerDiv = document.createElement("div");
    outerDiv.classList.add("outerdiv");
    !exist ? form.append(outerDiv) : console.log("test");
    exist = true;
    showValues(value);
}

const showValues = (value)=>{
    searchArr.map((item)=>{
        
        if(item.toLowerCase().startsWith(value.toLowerCase())){
            console.log("value   "  ,item);
            innerDiv = document.createElement("div")
            innerDiv.classList.add("innerdiv");
            innerDiv.textContent = item;
            outerDiv.append(innerDiv);
        }
       
    })
}
