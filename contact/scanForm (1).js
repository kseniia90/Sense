function submitForm() {
    
    if(!document.querySelector('[name="user_email"]').value){
        if(!document.querySelector('[name="user_email"]').classList.contains("empty")){
            document.querySelector('[name="user_email"]').classList.add('empty');
            return false;
        }   
    }else{
        if(document.querySelector('[name="user_email"]').classList.contains("empty")){
            document.querySelector('[name="user_email"]').classList.remove('empty');
        }   
    }

    if(!document.querySelector('[name="user_name"]').value){
        if(!document.querySelector('[name="user_name"]').classList.contains("empty")){
            document.querySelector('[name="user_name"]').classList.add('empty');
            return false;
        }   
    }else{
        if(document.querySelector('[name="user_name"]').classList.contains("empty")){
            document.querySelector('[name="user_name"]').classList.remove('empty');
        }   
    }
    
    
    const form = document.querySelector('.sense__form');
    const formData = new FormData(form);


  
    fetch('https://api.nb-soft.tech/sites/sens/form_send/sendForm.php', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        send_OK();
      } else {
        if(data.type === 'empty_post'){
            alert('Заповніть поля відмічені *');
            return false;
        }
        alert(`Під час надсилання сталася помилка: ${data.message}`);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  }
  

document.querySelector('.sense__form__button').addEventListener('click', (e)=>{
    e.preventDefault();

    submitForm();
})


document.querySelector('[name="user_phone"]').addEventListener('click', (e)=>{
    if(e.target.value.length < 4){
        e.target.value = '+380';
    }
})

document.querySelector('[name="user_phone"]').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  });

function send_OK(){
    document.body.style.overflow = 'hidden';
    document.querySelector('.thanks_popup').classList.add('active');
    document.querySelector('.thanks_popup-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.querySelector('.sense__form').querySelectorAll('input').forEach((input)=>{
        if(input.classList.contains('empty')){
            input.classList.remove('empty');
        }
        input.value = '';
    })

    document.querySelector('.sense__form').querySelectorAll('textarea').forEach((input)=>{
        input.value = '';
    })
}

document.querySelector('.thanks_popup .close_popup').addEventListener('click', function (e) {
    document.body.style.overflow = 'visible';
    document.querySelector('.thanks_popup').classList.remove('active');
});