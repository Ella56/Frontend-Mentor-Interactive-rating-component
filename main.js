const rating = document.querySelector(".rating");
const ratings = document.querySelector(".ratings");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submit = document.querySelector(".submit");
const thankU = document.querySelector(".thanku");
const selectedRate = document.querySelector(".selectedrating");
let ratingNumber;


ratingBtns.forEach((btn) => {
    
    btn.addEventListener("click" , (e) => {
        ratingBtns.forEach((btn) =>{
            btn.classList.remove("selected");
        })
        
        btn.classList.add("selected");
        ratingNumber = btn.dataset.id;
        console.log(ratingNumber);
        
    })
})

// ratings.addEventListener("click", (e) => {
//     if(e.target.classList.contains("selected")){
//         e.target.classList.remove("selected");
//         ratings.classList.remove("selected");
//     }else{
//         ratingBtns.forEach((btn) => {
//             btn.classList.remove("selected");
//         })
//         e.target.classList.add("selected");
//         ratingNumber = e.target.dataset.id;
//     }
// })

submit.addEventListener("click" , () =>{
    if(!ratingNumber){
        rating.style.display = "none";
        thankU.style.display = "block";  
        selectedRate.innerText= `You selected 0 out of 5`;
    }else{
      rating.style.display = "none";
      thankU.style.display = "block";  
      selectedRate.innerText= `You selected ${ratingNumber} out of 5`;
    }
    
})
