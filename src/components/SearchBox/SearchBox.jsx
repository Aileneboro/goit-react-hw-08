import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p className={css.findField}>Find contacts by name:</p>
      <input
        type="text"
        placeholder="type..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
