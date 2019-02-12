// import shhhh from '../../shhhh';

export default async function getRepoNames(searchInput) {
  // Create array of user's repos that incluse lots of info inclding name of repo
  const res = await fetch(
    `https://api.github.com/users/${searchInput}/repos?access_token=a93b2c21918b42df5a28e0e529c627ee22c60de4`
  );
  const repos = await res.json();

  // Create array of repos' names
  const repoNames = repos.map(repo => repo.name);

  // Use names of repos and username to get array of repo commit history (which is an array of week objects). Add a name field to the object to hold onto name
  const userHists = await Promise.all(
    repoNames.map(async name => {
      const commitHist = await fetch(
        `https://api.github.com/repos/${searchInput}/${name}/stats/commit_activity?access_token=a93b2c21918b42df5a28e0e529c627ee22c60de4`
      );
      if (commitHist.status === 200) {
        const commitHistData = await commitHist.json();
        const total = Array.isArray(commitHistData)
          ? commitHistData.reduce((acc, cur) => acc + cur.total, 0)
          : 0;
        return { name, total };
      } else {
        return { name, total: 0 };
      }
    })
  );
  return userHists.sort((a, b) => b.total - a.total).slice(0, 10);
}
