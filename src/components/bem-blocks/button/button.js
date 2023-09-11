document.addEventListener("DOMContentLoaded", () => {
    let elem = document.querySelector(".js-btn__language");
    elem.addEventListener("click", (e) => {
        change(e);  
    })
    function change(e)
    {
        let target = e.target,
        targetText;
        
        target.classList.contains('js-btn__text') 
            ?  targetText = target 
            :  targetText = target.querySelector(".js-btn__text")

        if (!targetText) return;
        
        targetText.innerText === "EN" 
            ? targetText.innerText = "RU" 
            :  targetText.innerText = "EN"
    }
});