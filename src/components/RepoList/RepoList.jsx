import React from "react";
import './RepoList.css'
import { Card } from "@mui/material";
import { StarOutlineOutlined } from "@mui/icons-material";
const RepoList = ({repoList, username}) => {
  repoList.sort(function(a, b) { 
    return b.stargazers_count -  a.stargazers_count ||  a.name.localeCompare(b.name);
  })
    return ( 

<div className="List">
          { repoList.map((data) => {
          const { id, name, description, stargazers_count } = data
            return (
              <Card className="cardList" key={id}>
                {/* Nome do projeto */}
                <div className="nameList"><a href={`https://github.com/${username}/${name}`} target="_blank">{name}</a></div>
                {/* Descrição */}
                {description ?
                <div className="descriptionList">{description}</div>
                : <p>Sem descrição</p>
                }         
                {/* Quantidade de estrelas */}
                
                <div className="stars"><StarOutlineOutlined />{stargazers_count}{' '}estrelas</div>
              </Card>
            )
          })}
    </div>
     );
}
 
export default RepoList;