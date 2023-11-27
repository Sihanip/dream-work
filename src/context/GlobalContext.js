import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();

  // STATE GET DATA API
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  //STATE LOGIN JSX
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  //STATE REGISTER
  const [inputRegister, setInputRegister] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  // STATE CHANGE PASSWORD
  const [changeInputPassword, setChangeInputPassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  //STATE HOME JSX FOR SEARCHING
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [fecthStatus, setFetchStatus] = useState(true);
  const [salaries, setSalaries] = useState([]);
  const [filteredSalaries, setFilteredSalaries] = useState([]);

  // FATCHING DATA
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_API_DATA}`
    );
    setData(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CREATE FUNTION

  useEffect(() => {
    //fetch data dengan kondisi
    if (fecthStatus === true) {
      axios
        .get(`${process.env.REACT_APP_API_DATA}`)
        .then((response) => {
          setData([...response.data.data]);
        })
        .catch((err) => {
          console.log(err.message);
        });

      setFetchStatus(false);
    }
  }, [fecthStatus, setFetchStatus]);

  // ===== LOGIN FUNCTION
  const handleInputLogin = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputLogin({ ...inputLogin, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = inputLogin;

    axios
      .post(`${process.env.REACT_APP_API_DATA}`, {
        email,
        password,
      })
      .then((response) => {
        // const data = response.data;
        // const {token, user } = data;
        // Cookies.set("token", token.data, { expires: 1 });
        // Cookies.set("user", JSON.stringify(user), { expires: 1 });
        console.log(response)
            let data = response.data
            Cookies.set('token', data.token, {expires : 1})

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };
  // ===== LOGIN FUNCTION

  // ===== REGISTER FUNCTION
  const handleInputRegister = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputRegister({ ...inputRegister, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const { name, image_url, email, password } = inputRegister;

    axios
      .post(`${process.env.REACT_APP_API_REGISTER}`, {
        name,
        image_url,
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        // console.log(response);
        Cookies.set("token", data.token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // ===== REGISTER FUNCTION

  //====== CHANGE PASSWORD FUNCTION
  const getAuthTokenFromCookie = () => {
    const name = "authToken=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  //====== CHANGE PASSWORD FUNCTION

  // ===== LOAD MORE FUNCTION
  const hanldeLoadMoreData = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_REGISTER}?page=${page}`)
      .then((response) => {
        // Assuming the API response returns an array of data
        setData((prevData) => [...prevData, ...response.data.data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  // ===== LOAD MORE FUNCTION

  // ===== FILTER FUNCTION

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_DATA}`);
      setSalaries(response.data.data);
      setFilteredSalaries(response.data.data);
    } catch (error) {
      console.error('Error fetching salaries:', error);
    }
  };

  const filterSalaries = (minSalary, maxSalary) => {
    const filteredData = salaries.filter(
      (response) => response.salary >= minSalary && response.salary <= maxSalary
    );
    setFilteredSalaries(filteredData);
  };

  // ===== FILTER FUNCTION


  // ===== DELETE FORM
  const handleDelete = (event) => {
    const ID_GAMES = parseInt(event.target.value);

    axios
      .delete(
        `${process.env.REACT_APP_API_REGISTER}/${ID_GAMES}`
      )
      .then((response) => {
        setFetchStatus(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  
  // ==== DELETE FORM


  // INITIAL STATE FOR EXPORT GLOBAL STATE
  const state = {
    inputLogin,
    setInputLogin,
    inputRegister,
    setInputRegister,
    data,
    setData,
    loading,
    setLoading,
    searchTitle,
    setSearchTitle,
    searchLocation,
    setSearchLocation,
    searchType,
    setSearchType,
    changeInputPassword,
    setChangeInputPassword,
    fecthStatus, 
    setFetchStatus,
    filteredSalaries, 
    setFilteredSalaries,
    salaries, setSalaries
  };

  // INITIAL FUNCTION
  const handleState = {
    fetchData,
    handleLogin,
    handleInputLogin,
    handleInputRegister,
    handleRegister,
    hanldeLoadMoreData,
    handleDelete,
    getAuthTokenFromCookie,
    filterSalaries
  };

  return (
    <GlobalContext.Provider
      value={{
        // EXPORT STATE TO GLOBAL STATE
        state,
        handleState,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
