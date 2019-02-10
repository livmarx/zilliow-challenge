import axios from 'axios';

//action types:
const GOT_REPOS = 'GOT_REPOS';
const GOT_USER = 'GOT_USER';

//action creators:
export const gotRepos = repos => ({
  type: GOT_REPOS,
  repos,
});

export const gotUser = user => ({
  type: GOT_USER,
  user,
});

//Thunk Creators
export const getUser = searchInput => {
  return async (dispatch, getState) => {
    const res = await axios.get(`https://api.github.com/users/${searchInput}`);
    console.log('res: ', res);
    const user = res.data;
    console.log('user: ', user);
    const currAction = gotUser(user);
    dispatch(currAction);
  };
};

export async function getRepoNames(searchInput) {
  // Create array of user's repos that incluse lots of info inclding name of repo
  const res = await axios.get(
    `https://api.github.com/users/${searchInput}/repos`
  );
  const repos = res.data;

  // Create array of repos' names
  const repoNames = repos.map(repo => repo.name);

  // Use names of repos and username to get array of repo commit history (which is an array of week objects). Add a name field to the object to hold onto name
  const userHists = repoNames.map(async name => {
    const commitHist = await axios.get(
      `https://api.github.com/repos/${searchInput}/${name}/stats/commit_activity`
    );
    const total = commitHist.data.reduce((acc, cur) => acc + cur.total);
    return { total, name };
  });
  return total.sort((a, b) => a.total - b.total).slice(0, 10);
}
