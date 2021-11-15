import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/auth";
import RepoList from "../components/RepoList/RepoList";
import Profile from "../components/Profile/Profile"
import { useNavigate } from "react-router";
import "./List.css"
const List = () => {
  const [repoArray, setRepoArray] = useState([])
  const [profileArray, setProfileArray] = useState([])
  const { username } = React.useContext(AuthContext)
  const navigate = useNavigate();
  // Endpoint que pega todos repos
  async function getRepoList() {
    try {
      const url = `https://api.github.com/users/${username}/repos`
      const result = await axios.get(url)
      setRepoArray(result.data)
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }

  // Endpoit para informações do perfil
  async function getProfile() {
    const userData = []
    try {
      const url = `https://api.github.com/users/${username}`
      const result = await axios.get(url)
      userData.push(result.data)
      setProfileArray(userData)

    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }

  useEffect(() => {
    getProfile()
    getRepoList()
  }, [username])

  return (
    <div className="container">
        <Profile profile={profileArray} />
        <RepoList repoList={repoArray} username={username}/>
    </div>

  );
}

export default List;