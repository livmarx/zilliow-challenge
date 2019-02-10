import axios from 'axios';

export default async function getRepoNames(searchInput) {
  // Create array of user's repos that incluse lots of info inclding name of repo
  const res = await axios.get(
    `https://api.github.com/users/${searchInput}/repos`
  );
  const repos = res.data;

  // Create array of repos' names
  const repoNames = repos.map(repo => repo.name).slice(0, 3);

  // Use names of repos and username to get array of repo commit history (which is an array of week objects). Add a name field to the object to hold onto name
  const userHists = await Promise.all(
    repoNames.map(async name => {
      const commitHist = await axios.get(
        `https://api.github.com/repos/${searchInput}/${name}/stats/commit_activity`
      );
      const total = Array.isArray(commitHist.data)
        ? commitHist.data.reduce((acc, cur) => acc + cur.total, 0)
        : 0;
      console.log(commitHist, total, name);
      return { total, name };
    })
  );
  return userHists.sort((a, b) => a.total - b.total).slice(0, 10);
}
