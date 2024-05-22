document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('addUserButton');
    const contact = document.getElementById("contactCard");


    var saveContactButton = document.getElementById('saveContactBtn');
    var name = document.getElementById('contactName');
    var email = document.getElementById('contactEmail');
    var number = document.getElementById('contactNumber');
    var address = document.getElementById('contactAddress');
    var dynamicList= document.getElementById('dynamic-list');
    var searchInput = document.getElementById('searchInput');



    var show = false;
    button.addEventListener('click', function(){ //add new contact window
        show = !show;
        if (show) 
        {
            button.value="Cancel";
            contact.classList.remove('hide');
            contact.classList.add('show');
            contact.style.display = 'block';
        } 
        else 
        {            
            button.value="Add New Contact";
            setTimeout(() => {
                contact.style.display = 'none';
            }, 1000);
            contact.classList.add('hide');   
        }  
    });





    function addNewContact(){
        show = !show;
        
        var newContactName = name.value.trim();
        var newContactEmail= email.value.trim();
        var newContactNumber= number.value.trim();
        var newContactAddress = address.value.trim();
        if (show) 
        {
            button.value="Cancel";
            contact.classList.remove('hide');
            contact.classList.add('show');
            contact.style.display = 'block';
        } 
        else 
        {            
            button.value="Add New Contact";
            setTimeout(() => {
                contact.style.display = 'none';
            }, 1000);
            contact.classList.add('hide');   
        } 
    
        //if at least one is filled
        if(newContactName || newContactEmail || newContactNumber || newContactAddress){
    
            let listItem = document.createElement('li');
            listItem.innerHTML = 
            `Name: ${newContactName}<br> 
            Email: ${newContactEmail} <br> 
            Number: ${newContactNumber}<br> 
            Address: ${newContactAddress}`;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit Contact';
            editBtn.setAttribute('id','editBtn');
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete Contact';
            deleteBtn.setAttribute('id','deleteBtn');
            

            dynamicList.appendChild(listItem);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);

            //clear input
            name.value = "";
            email.value = "";
            number.value = "";
            address.value = "";
            
            deleteBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this contact?')) {
                    listItem.remove();
                }            
            });

            editBtn.addEventListener('click',function(){
                if (editBtn.textContent === 'Edit Contact') {
                    listItem.innerHTML = `
                        Name: <input type="text" value="${newContactName}" class="edit-name"><br>
                        Email: <input type="email" value="${newContactEmail}" class="edit-email"><br>
                        Number: <input type="tel" value="${newContactNumber}" class="edit-number"><br>
                        Address: <input type="text" value="${newContactAddress}" class="edit-address">`;

                    listItem.appendChild(editBtn);
                    listItem.appendChild(deleteBtn);

                    editBtn.textContent = 'Save Changes';
                } else {
                    const updatedName = listItem.querySelector('.edit-name').value.trim();
                    const updatedEmail = listItem.querySelector('.edit-email').value.trim();
                    const updatedNumber = listItem.querySelector('.edit-number').value.trim();
                    const updatedAddress = listItem.querySelector('.edit-address').value.trim();

                    listItem.innerHTML = `
                        Name: ${updatedName}<br>
                        Email: ${updatedEmail}<br>
                        Number: ${updatedNumber}<br>
                        Address: ${updatedAddress}`;

                    listItem.appendChild(editBtn);
                    listItem.appendChild(deleteBtn);

                    editBtn.textContent = 'Edit Contact';
                }
            });
        }
        else
        {
            alert('Please enter contact info');
        }
    }

    function filterListByInput(inputText) {
        var items = dynamicList.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
          // If the list item does not contain the input text, hide it
          if (items[i].textContent.toLowerCase().indexOf(inputText.toLowerCase()) === -1) {
            items[i].style.display = 'none';
          } else {
            items[i].style.display = '';
          }
        }
      }
   
    
    saveContactButton.addEventListener('click', addNewContact);

    searchInput.addEventListener('input', function() {
        filterListByInput(searchInput.value);
    })


});




