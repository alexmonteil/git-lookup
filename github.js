class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: '97c66dcc5c4d27bdaef422a856e5d0b5c1467e8e'
      }
    }
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Fetch JSON data for GitHub profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

    // Fetch JSON data for repositories 
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config);

    // Parse profile data
    const profile = await profileResponse.json();

    // Parse repositories data
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}