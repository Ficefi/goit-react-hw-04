import { ImageCard } from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ data }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {data.map((item) => (
          <ImageCard key={item.id} items={item} />
        ))}
      </ul>
    </div>
  );
};
