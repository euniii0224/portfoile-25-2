import { Repository } from '@/types/github'
import { githubuser } from '@/types/constant'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

interface RepoProps {
  name: string
}

export default async function Repo({ name }: RepoProps) {
  const username = githubuser
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )
  const repo: Repository = await response.json()

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
      <p className="mb-4">{repo.description}</p>
      <div className="flex gap-4 text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye /> {repo.watchers_count}
        </span>
      </div>
    </div>
  )
}
