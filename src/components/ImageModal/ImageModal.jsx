import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

export const ImageModal = ({ isOpen, closeModal, urls, alt }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button className={css.close_btn} onClick={closeModal}>
        <IoMdClose size={24} />
      </button>
      <div className={css.modal_window}>
        <img src={urls.full} alt={alt} className={css.modal_image} />
      </div>
    </Modal>
  );
};
