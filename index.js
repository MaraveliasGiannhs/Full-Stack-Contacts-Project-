document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('addUserButton');
    const contact = document.getElementById("contactCard");

    var show = false;
    button.addEventListener('click', function(){
        show = !show;
        if (show) 
        {
            
            button.value="Cancel";
            contact.classList.remove('hide');
            contact.style.display = "block";
            contact.classList.add('show');
        } 
        else 
        {            
            button.value="Add New Contact";
            contact.classList.remove('show');
            contact.classList.add('hide');
            contact.style.display = "none";

            setTimeout(() => {
                if (!show) 
                { // Check the state to ensure it's still hidden
                    contact.style.display = "none";
                }
            }, 510);
        }

        
    })
})

