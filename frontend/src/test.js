let Test = ()=>{

    let list_content = document.querySelectorAll('.list-content>input');
    for (let i = 0; i < list_content.length; i++) {
    
        list_content[i].addEventListener("click", (e) => {
    
            if (list_content[i].checked === true) {
                console.log("checked");
    
                document.getElementsByClassName('show_list')[i].style.background = "#f3f3f3";
                document.getElementsByClassName('show_list')[i].style.textDecoration = " line-through";
    
            } else {
                document.getElementsByClassName('show_list')[i].style.background = "none";
                document.getElementsByClassName('show_list')[i].style.textDecoration = "none";
            }
    
    
        })
    
    }

  }    

  export default Test;