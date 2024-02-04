import { useEffect, useState } from "react";
import { requestResponse } from "../js/api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";
import Modal from "react-modal";

export const App = () => {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  Modal.setAppElement("#root");

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImage([]);
  };

  const handleSearch = async (image_query, page) => {
    try {
      setLoad(true);
      setError(false);
      const data = await requestResponse(image_query, page);
      setImage((prevImages) => {
        return [...prevImages, ...data];
      });
      setQuery(image_query);
    } catch (error) {
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    handleSearch(query, page);
  }, [query, page]);

  const addPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar searchValue={searchImages} />
      <ImageGallery data={image} />
      {image.length > 0 && <LoadMoreBtn addPage={addPage} />}
      {image.length === 0 && load && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};
