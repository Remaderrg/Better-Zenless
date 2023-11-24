function Buttons() {
        setInterval(function() {
        var button_check = document.querySelector('#button_down');
        if (button_check == null) {
            var backContainer = document.querySelector('.backContainer');
            let btndown = document.createElement('input');
            let btnup = document.createElement('input');
            btndown.type = 'button'
            btnup.type = 'button'
            btndown.id = 'button_down'
            btnup.id = 'button_up'
            try {
                backContainer.appendChild(btnup);
                backContainer.appendChild(btndown);
            } catch(e) {
            }
            btndown.addEventListener('click', ()=>{window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })});
            btnup.addEventListener('click', ()=>{window.scrollTo({ top: document.body.scrollTop, behavior: "smooth" })});
        }
        }, 100);
    };
window.onload = Buttons;