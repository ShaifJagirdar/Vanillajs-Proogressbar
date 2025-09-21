document.addEventListener("DOMContentLoaded", function(){

    // let progressBar = document.querySelector(".progressbar");
    let h3 = document.querySelector("h3");
    let maindiv = document.querySelector(".downloadbar");
    // let newprog; // Removed unused variable
    let count = 0;
    let interval = setInterval(function(){
        if(count === 8){
            clearInterval(interval);
            h3.style.display = "block";
        }
        count++;
        // Create and append a new progress bar div
        let progressDiv = document.createElement("div");
        progressDiv.className = "progressbar";
        maindiv.appendChild(progressDiv);
    }, 200)  
});