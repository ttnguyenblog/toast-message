function toast({title='',message='',type='info',duration=3000}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        toast.onclick = function(e){
            if(e.target.closest(".toast__close")){
                main.removeChild(toast);
            }
        }
        
        toast.style.animation = 'slideInLeft ease .3s, fadeOut linear 1s 4s forwards';

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            error: 'fa-solid fa-triangle-exclamation',
        };

       
        const icon = icons[type];
        
        toast.classList.add('toast',`toast--${type}`);
        toast.innerHTML = ` 
        <div class="toast__icon ${type}">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>`;

       
        main.appendChild(toast);
        setTimeout(function (){
            main.removeChild(toast);
        },5000)
    }
}   


function showSuccessToast(){
    toast({
        title:'Success',
        message: 'Toast message Thành công!!!',
        type: 'success',
        duration: 3000
    });

}
function showErrorToast(){
    toast({
        title:'Error',
        message: 'Toast message Thất bại!!!',
        type: 'error',
        duration: 3000
    });
}