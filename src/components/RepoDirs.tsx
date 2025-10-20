import Image from 'next/image'
import Link from 'next/link'
import { githubuser } from '@/types/constant'
import { GitHubContent } from '@/types/github'

interface RepoProps {
  name: string
}

export default async function RepoDirs({ name }: RepoProps) {
  const username = githubuser

  // 깃허브 API에서 해당 리포지토리 내용 가져오기
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )
  const contents: GitHubContent[] = await response.json()

  // 폴더만 필터링
  const dirs = Array.isArray(contents)
    ? contents.filter((content) => content.type === 'dir')
    : []

  // 프로젝트별 대표 이미지 & 링크
  const projectPreviews: Record<
    string,
    { img: string; link: string; label: string }[]
  > = {
    test: [
      {
        img: '/images/nextjs.png',
        link: 'https://test-lovat-delta.vercel.app/',
        label: 'test 사이트 바로가기',
      },
    ],
    'clerk-app': [
      {
        img: '/images/clerkapp.png',
        link: 'https://clerk-app-ecru.vercel.app/',
        label: 'clerk-app 페이지 바로가기',
      },
    ],
  }

  const previews = projectPreviews[name] || []

  return (
    <div className="mt-10 w-full px-0">
      {/* 디렉토리 목록 */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Directories</h3>
        <ul className="list-disc list-inside">
          {dirs.map((dir) => (
            <li key={dir.path}>
              <Link
                href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
                target="_blank"
                className="underline hover:text-gray-800"
              >
                {dir.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 프로젝트별 대표 이미지 섹션 */}
      {/* 프로젝트별 대표 이미지 섹션 */}
      {previews.length > 0 && (
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-center">
            🔗 프로젝트 관련 페이지
          </h3>
          <div className="w-full max-w-6xl mx-auto">
            {' '}
            {/* 중앙 정렬 + 최대 폭 */}
            {previews.map((p) => (
              <a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* ✅ 이미지 상자를 화면 가로로 가득 채움 */}
                <div className="relative w-full h-auto">
                  <Image
                    src={p.img}
                    alt={p.label}
                    width={1600}
                    height={900}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* ✅ 하단 텍스트 */}
                <div className="bg-gray-100 py-4 text-center text-lg font-medium text-gray-800">
                  {p.label}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
