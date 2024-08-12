import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../redux/reducers/imageSlice";
import { selectFilteredImages } from "../../redux/selectorFilter";

function BodyImage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.imageBox);
  const images = useSelector(selectFilteredImages);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading)
    return (
      <div
        aria-label="Loading..."
        role="status"
        className="flex items-center space-x-2 justify-center mt-12"
      >
        <svg
          className="h-20 w-20 animate-spin stroke-gray-500"
          viewBox="0 0 256 256"
        >
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></line>
        </svg>
        <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
    );
  if (error)
    return (
      <p className="text-red-500 mt-32 text-[20px] text-center font-bold">
        Error: {error}
      </p>
    );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4"></div>
      <div className="flex flex-auto justify-center flex-wrap gap-1 w-[50%] m-auto">
        {images.map((item) => (
          <div
            key={item.id}
            className="relative w-[250px] h-[250px] overflow-hidden"
          >
            <img
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
              src={item.download_url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyImage;
