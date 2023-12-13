import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = (
   {
      handleClose,
      show,
      children
   }
) => {
   return (
      <div className="bg-white/70 fixed top-0 left-0 w-full h-full z-50">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit rounded-lg border overflow-hidden bg-white">
            <div className="flex flex-row justify-between items-center px-4 py-3 bg-primaryBlue uppercase font-poppins font-medium text-white">
               <span>fit instructions</span>
               <FontAwesomeIcon className="cursor-pointer" icon={faXmark} />
            </div>
            <div>
               <img src="https://via.placeholder.com/510x510" alt="image" />
            </div>
         </div>
      </div>
   )
}

export default Modal;