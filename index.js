document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('addUserButton');

    button.addEventListener('click', function(){

        if (button.classList.contains('hover-style')) 
        {
            button.classList.remove('hover-style');
            button.classList.add('active-style');
            button.value="";
        } 
        else 
        {
            button.classList.remove('active-style');
            button.classList.add('hover-style');
            button.value="Add New Contact";
        }
    })
})

