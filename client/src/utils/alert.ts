import toast from 'react-hot-toast';

export const showToast = ( message: string ) => {
  toast(message, {
    className: 'toast'
  })
};