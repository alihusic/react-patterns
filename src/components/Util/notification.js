import {toast} from "react-toastify";

const settings = {
    position: 'top-left',
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
};

export function notifyError(message){
    createMessage(message, 'error');
}

export function createMessage(message, type = 'success'){

    switch(type){
        case 'success':
            toast.success(message, settings);
            break;
        case 'error':
            toast.error(message, settings);
            break;
        default:
            toast.info(message, settings);
            break;
    }

}
