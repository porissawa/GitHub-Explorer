import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../redux/actions/user';
import SearchBar from '../components/SearchBar';
import { H2, P } from '../components/Text';
import Repository from '../components/Repository';
import EmptyState from '../components/EmptyState';
import Header from '../components/Header';
import Toast from '../components/Toast';
import LoadingBar from '../components/LoadingBar';
import { formatDate } from '../util/helpers';
import { colors, size } from '../styles/theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer = styled.div`
  padding: 16px;
  width: 100%;
  max-width: ${size.sm}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const SH2 = styled(H2)`
  margin: 16px;
  color: ${colors.primary};
`;

const RepoContainer = styled.div`
  width: 100%;
`;

const SRepository = styled(Repository)`
  margin-bottom: 8px;
`;

function SearchPage({ history }) {
  const dispatch = useDispatch();

  // Selectors
  const userList = useSelector(state => state.user.users);
  const searchError = useSelector(state => state.user.error);
  const isLoading = useSelector(state => state.user.isFetching);

  // State
  const [query, setQuery] = useState('');

  const errorToast = () => {
    return (
      <Toast>
        <P>User not found</P>
      </Toast>
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getUser(query));
  };

  const renderList = list => {
    if (list.length > 0) {
      return list.map(user => {
        const currUser = Object.getOwnPropertyNames(user);
        return (
          <div key={currUser}>
            <SH2>{currUser}</SH2>
            {user[currUser].length < 1 ? (
              <SRepository name="User has no public repos" />
            ) : (
              user[currUser].map(repo => (
                <SRepository
                  key={repo.id}
                  name={repo.name}
                  creationDate={formatDate(repo.created_at)}
                  stars={repo.stargazers_count}
                  onClick={() => history.push(`/repo/${currUser}/${repo.name}`)}
                />
              ))
            )}
          </div>
        );
      });
    }
    return <EmptyState />;
  };

  return (
    <Container>
      {isLoading && <LoadingBar />}
      <PageContainer>
        <Header />
        <SearchContainer>
          <SearchBar
            value={query}
            onChange={e => setQuery(e.target.value)}
            onSubmit={e => onSubmit(e)}
            placeholder="Enter github username"
            onClear={() => setQuery('')}
          />
        </SearchContainer>
        <RepoContainer>{renderList(userList)}</RepoContainer>
      </PageContainer>
      {searchError !== '' ? errorToast() : null}
    </Container>
  );
}

export default SearchPage;
