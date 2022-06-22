const fetch = require('node-fetch');
const { generateToken } = require('./services/auth');

const root = {
  greeting: () => 'Hello World',

  generateToken: ({ token }) => generateToken(token),

  getCommits: async ({ user, repo, limit, offset }) => {
    const commits = []

    const fetched = await fetch(`https://api.github.com/repos/${user}/${repo}/commits`, {
      method: 'get',
    })

    const data = await fetched.json()
    data.forEach(commit => {
      commits.push({
        sha: commit.sha,
        message: commit.commit.message,
        url: commit.url,
        date: commit.commit.committer.date,
        name: commit.commit.committer.name,
        email: commit.commit.committer.email
      })
    });

    if (limit && offset) return commits.slice(offset, offset + limit)
    else if (offset) return commits.slice(offset)
    else if (limit) return commits.slice(0, limit)

    return commits
  }
}

module.exports = { root }
