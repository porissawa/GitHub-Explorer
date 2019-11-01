import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../redux/actions/user';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SSearchBar = styled(SearchBar)`
  width: 440px;
`;

function SearchPage() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.users);
  console.log('userList', userList);
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getUser(query));
  };
  return (
    <Container>
      <SSearchBar
        value={query}
        onChange={e => setQuery(e.target.value)}
        onSubmit={e => onSubmit(e)}
        placeholder="Enter github username"
      />
      {/* {userList ? userList.map(user => <div>{user}</div>) : null} */}
    </Container>
  );
}

export default SearchPage;
