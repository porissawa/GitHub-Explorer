import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getCommits, getBranches } from '../redux/actions/repoDetails';
import { getUser } from '../redux/actions/user';
import { H2, H3, P } from '../components/Text';
import { size } from '../styles/theme';
import { formatDate } from '../util/helpers';
import Button from '../components/Button';
import BranchLinks from '../components/BranchLink';
import CommitLinks from '../components/CommitLink';
import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: ${size.sm}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Heading = styled.div`
  margin: 40px 16px 16px;
`;

const SH2 = styled(H2)`
  margin-bottom: 8px;
`;

const SH3 = styled(H3)`
  margin-bottom: 8px;
`;

const SP = styled(P)`
  margin-bottom: 8px;
`;

const SButton = styled(Button)`
  width: 90%;
  margin: 8px 16px 0;
`;

const ListContainer = styled.div`
  display: ${props => (props.isShowing ? 'flex' : 'none')};
  flex-direction: column;
  width: 90%;
  margin: 0 16px;
`;

const DetailsPage = ({ match }) => {
  const { username, repoName } = match.params;
  const dispatch = useDispatch();

  // Selectors
  const commits = useSelector(state => state.details.commits);
  const branches = useSelector(state => state.details.branches);
  const users = useSelector(state => state.user.users);

  // State management
  const [showBranches, setShowBranches] = useState(false);
  const [showCommits, setShowCommits] = useState(false);

  // Effects
  useEffect(() => {
    dispatch(getCommits(username, repoName));
    dispatch(getBranches(username, repoName));
    if (users.length < 1) {
      dispatch(getUser(username));
    }
  }, []);

  const baseUrl = 'https://github.com/';

  const formatBranchUrl = url =>
    url
      .split('/')
      .slice(4, 8)
      .join('/');

  const getStars = () => {
    if (users.length > 0) {
      return (
        users &&
        users
          .filter(user => Object.getOwnPropertyNames(user)[0] === username)[0]
          [username].find(el => el.name === repoName).stargazers_count
      );
    }
    return null;
  };

  return (
    <Container>
      <PageContainer>
        <Header />
        <Heading>
          <SH2>{repoName}</SH2>
          <SH3>{username}</SH3>
          {commits && commits[commits.length - 1] && (
            <SP>
              <i>Creation date: {formatDate(commits[commits.length - 1].commit.author.date)}</i>
            </SP>
          )}
          <SP>
            <i>Stars: {getStars()}</i>
          </SP>
        </Heading>
        <SButton text="Branches" onClick={() => setShowBranches(!showBranches)} />
        <ListContainer isShowing={showBranches}>
          {branches.map(branch => (
            <BranchLinks
              text={branch.name}
              onClick={() =>
                window.open(baseUrl.concat(formatBranchUrl(branch.commit.url)), '_blank')
              }
            />
          ))}
        </ListContainer>
        <SButton text="Commits" onClick={() => setShowCommits(!showCommits)} secondary />
        <ListContainer isShowing={showCommits}>
          {commits.map(commit => (
            <CommitLinks
              message={commit.commit.message}
              author={commit.commit.author.name}
              onClick={() => window.open(commit.html_url, '_blank')}
            />
          ))}
        </ListContainer>
      </PageContainer>
    </Container>
  );
};

export default DetailsPage;
