import React, { FormEvent } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown";
import Logo from "../../assets/logo.svg";
import { contants } from "../../constants";
import { setError, setImages, setLoading } from "../../store/image";
import "./style.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const fetchImages = async (query: string, category: string) => {
    try {
      dispatch(setLoading(true));
      const queryString = `query=${query}&collections=${category}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
      const { data: { results } } = await axios.get(
        `${contants.BASE_URL}?${queryString}`
      );
      const links = results.map((result: any) => ({
        source: result.urls.raw,
        link: result.links.html
      }));
      dispatch(setImages(links));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query");
    const category = formData.get("category");
    await fetchImages(query as string, category as string);
  };

  const categoryOptions = [
    "Featured",
    "Wallpapers",
    "Nature",
    "Textures & Patterns",
    "Architecture",
  ];

  return (
    <div style={{ backgroundColor: '#050417', padding: '25px 75px', display: 'flex', gap: '170px' }}>
      <img className="navbar-logo" src={Logo} alt="Your SVG" />
      <form onSubmit={handleSubmit} className="navbar-form">
        <input type="text" name="query" placeholder="Query" />
        <Dropdown
          name="category"
          options={categoryOptions}
          style={{
            flex: "2.5",
            minHeight: "50px",
          }}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Navbar;
