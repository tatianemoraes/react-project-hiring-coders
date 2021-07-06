import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName  !== null)  {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }   
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        <S.ListItem>
          { repositories.map(repository => {
            return (
              <S.ListItem>Repositório: { repository }</S.ListItem>
            )
          }) }
        </S.ListItem>
        <S.LinkHome to="/">Voltar</S.LinkHome>
      </S.List>
    </S.Container>
  )
}
