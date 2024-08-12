import HeaderTable from "./components/HeaderTable";
import BodyTable from "./components/BodyTable";
import Category from "./components/Category";
import BodyImage from "./components/BodyImage";
import ImageItem from "./components/ImageItem";
import { useDispatch, useSelector } from "react-redux";
import { filterSlice } from "./redux/reducers/filterSlice";

function App() {
  const dispatch = useDispatch();
  const textSearch = useSelector((state) => state.filter.textSearch);
  const author = useSelector((state) => state.imageBox.images);
  const uniqueAuthorsSet = new Set();
  const uniAuthor = author.filter((item) => {
    if (uniqueAuthorsSet.has(item.author)) {
      return false;
    } else {
      uniqueAuthorsSet.add(item.author);
      return true;
    }
  });

  const handleTextSearchChange = (e) => {
    dispatch(filterSlice.actions.setTextSearch(e.target.value));
  };

  const handleAuthorSearchChange = (e) => {
    dispatch(filterSlice.actions.setAuthorSearch(e));
  };

  return (
    <div className="flex flex-col justify-center h-[100vh] gap-9">
      <HeaderTable>
        <h1 className="font-bold text-[40px]">Snap Shot</h1>
        <input
          type="text"
          placeholder="Search"
          className="w-[400px] mb-4 bg-gray-200 px-2 py-2"
          value={textSearch}
          onChange={handleTextSearchChange}
        />
        <div className="flex gap-2">
          {uniAuthor.map((item) => (
            <Category
              key={item.id}
              name={item.author}
              change={handleAuthorSearchChange}
            />
          ))}
        </div>
      </HeaderTable>
      <BodyTable>
        <h1 className="text-[#051c33] font-extrabold text-[30px] text-center">
          Mountain Pictures
        </h1>
        <BodyImage>
          <ImageItem />
        </BodyImage>
      </BodyTable>
    </div>
  );
}

export default App;
