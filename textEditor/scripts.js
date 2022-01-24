const box = document.querySelector("#box")

const nav = document.querySelector(".nav"),
      selectFont = nav.querySelector("#select-font"),
      selectSize = nav.querySelector("#select-size"),
      color = nav.querySelector("#chosen-color"),
      fontEdit = nav.querySelector(".font-edit"),
      textEdit = nav.querySelector(".text-edit");


//======== CHANGE FONT ==================================================
selectFont.addEventListener("change", (e)=> {
    box.style.fontFamily = e.target.value;
})

//======== CHANGE FONT SIZE =============================================

selectSize.addEventListener("change", (e)=> {
    console.log(e.target.value);
    box.style.fontSize = e.target.value+"px";
})

//======== FONT EDITS ===================================================

fontEdit.addEventListener("click", (e)=> {
    let eClass = e.target.classList
    let isActive = e.target.classList.contains("active");
    if(isActive){
        console.log(eClass.value);
        if (eClass.value == "b active") {
            box.style.fontWeight = "normal";
        } else if (eClass.value == "i active") {
            box.style.fontStyle = "normal";
        } else if (eClass.value == "u active"){
            box.style.textDecoration = "none";
        }else{
            console.log("shit");
        }
        eClass.remove('active')
        
    }else{
        console.log(eClass.value);
        if (eClass.value == "b") {
            box.style.fontWeight = "bold";
        } else if (eClass.value == "i") {
            box.style.fontStyle = "italic";
        } else if (eClass.value == "u"){
            box.style.textDecoration = "underline";
        }else{
            console.log("shit");
        }
        eClass.add('active')
    }
    
})


//======== TEXT EDITS ===================================================

textEdit.addEventListener("click", (e)=> {
    let eClass = e.target.classList
    let isActive = e.target.classList.contains("active");
    if(isActive){
        console.log(eClass.value);
        if (eClass.value == "l active") {
            box.style.textAlign = "left";
        } else if (eClass.value == "c active") {
            box.style.textAlign = "left";
        } else if (eClass.value == "r active"){
            box.style.textAlign = "left";
        }else{
            console.log("shit");
        }
        eClass.remove('active')
        
    }else{
        console.log(eClass.value);
        if (eClass.value == "l") {
            box.style.textAlign = "left";
        } else if (eClass.value == "c") {
            box.style.textAlign = "center";
        } else if (eClass.value == "r"){
            box.style.textAlign = "right";
        }else{
            console.log("shit");
        }
        for (let i = 0; i < textEdit.children.length; i++) {
            console.log(textEdit.children[i]);
            if(textEdit.children[i].classList.contains("active")){
                textEdit.children[i].classList.remove("active");
            }
            
        }
        eClass.add('active')
    }
    
    
})



//======== CHANGE COLOR ===============================================
color.addEventListener('change', ()=>{
    console.log(color.value);
    box.style.color = color.value
})