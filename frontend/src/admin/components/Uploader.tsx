import { useEffect, useRef, useState } from "react";
import "../css/uploader.css";
import { RiImageAddFill } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

interface UploaderProps {
  onImageChange: (file: File | null) => void;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  image: File | null;
  defaultImage?: string | null;
}

const Uploader: React.FC<UploaderProps> = ({
  onImageChange,
  setImage,
  image,
  defaultImage,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleFileClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      setImage(file);
      onImageChange(file);
    }
  };

  const removeImage = () => {
    setFileName("No image selected");
    setImage(null);
    onImageChange(null);
  };

  const formatImageUrl = (url: string) => {
    return url.replace("public\\", "http://localhost:5000/");
  };

  const getImageFileName = (imageUrl: string): string => {
    const startIndex = imageUrl.lastIndexOf("\\");
    return imageUrl.substring(startIndex + 1);
  };

  useEffect(() => {
    if (image) {
      setFileName(image.name);
    } else if (defaultImage) {
      setFileName(getImageFileName(defaultImage));
    } else {
      setFileName("No image selected");
    }
  }, [image, defaultImage]);

  useEffect(() => {
    // Update fileName when defaultImage changes
    if (defaultImage && !image) {
      setFileName(getImageFileName(defaultImage));
    }
  }, [defaultImage, image]);

  console.log("image after remove: ", image);
  console.log("defaultImage after remove: ", defaultImage);
  console.log("fileName after remove: ", fileName);

  return (
    <div className="uploader-container">
      <button type="button" className="uploader" onClick={handleFileClick}>
        <input
          type="file"
          accept="image/*"
          name="imageUrl"
          className="input-image"
          ref={inputFileRef}
          hidden
          onChange={handleFileChange}
        />
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt={fileName}
            className="uploaded-image"
          />
        ) : defaultImage ? (
          <img
            src={formatImageUrl(defaultImage)}
            alt={fileName}
            className="uploaded-image"
          />
        ) : (
          <>
            <RiImageAddFill className="image-icon" />
            <p>
              Upload an image <span className="required">*</span>
            </p>
          </>
        )}
      </button>
      <div className="uploaded-row">
        <div className="uploaded-content">
          <FaFileImage />
          <div className="uploaded-filename">{fileName}</div>
        </div>
        {(image || defaultImage) && (
          <MdDelete className="delete-icon" onClick={removeImage} />
        )}
      </div>
    </div>
  );
};

export default Uploader;
