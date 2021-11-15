import React from "react";
import Searchbar from '../components/Searchbar/Searchbar'
import { AuthContext } from "../providers/auth";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const Home = () => {
    const {setUsername} = React.useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsername(e.target.value.toLowerCase());
        e === 'undefined' ?  setDisabled(true) : setDisabled(false) 
    }

    const openDev = (e) => {
        e.preventDefault();
        disabled === true ? alert('Digite um usuário do github'): navigate('/list')
    }
    return (
            <Searchbar
                onClick={openDev}
                onChange={handleChange}
            >
            </Searchbar>
    );

}

export default Home;