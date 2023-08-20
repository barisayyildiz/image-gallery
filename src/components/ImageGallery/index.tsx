import { useSelector } from "react-redux"
import { selectImage } from "../../store/image"
import Loader from "../../assets/loader.svg";
import './style.scss'

const ImageGallery = () => {
  const { loading, images, error } = useSelector(selectImage);

  return (
    <div className="image-gallery-container">
      {loading ? (
        <img className="image-gallery-container-loader" src={Loader}></img>
      ) : error ? (
        <div className="image-gallery-container-error">
          {error}
        </div>
      ) : (
        <div className="image-gallery-container-images">
          {images.map((image, key) => (
            <div className="image-gallery-container-images-image">
              <a href={image.link} target="_blank">
                <img src={image.source}></img>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

export default ImageGallery
