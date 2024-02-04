import { useState } from "react";
import { ImageModal } from "../../ImageModal/ImageModal";
import { FaHeart } from "react-icons/fa";
import css from "./ImageCard.module.css";

export const ImageCard = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <li className={css.photo_card}>
      <div className={css.info_container}>
        <img
          src={items.urls.small}
          alt={items.alt_description}
          className={css.image}
          onClick={openModal}
        />
        <div className={css.info}>
          <p className={css.info_item}>
            {items.likes} <FaHeart color="red" />
          </p>
        </div>
        <ImageModal
          isOpen={isOpen}
          closeModal={closeModal}
          urls={items.urls}
          alt={items.alt_description}
        />
      </div>
    </li>
  );
};
