import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const teamMembers = [
  {
    name: '박민영',
    role: '팀장',
    image: '/images/min2.png',
    description: '92410756',
    github: 'https://github.com/minyeong0125',
    Homepage: 'https://github.com/minyeong0125',
  },
  {
    name: '송미강',
    role: '멤버',
    image: '/images/미강.png',
    description: '92410794',
    github: 'https://github.com/Junbyung2',
    Homepage: 'https://next-js-portfolio-jhve.vercel.app/',
  },
  {
    name: '원종은',
    role: '멤버',
    image: '/images/duk01.png',
    description: '92410823',
    github: 'https://github.com/euniii0224',
    Homepage: 'https://github.com/euniii0224',
  },
  {
    name: '이성혜',
    role: '멤버',
    image: '/images/성혜.png',
    description: '92415548',
    github: 'https://github.com/SuNghYe414',
    Homepage: 'https://middle-my.vercel.app/',
  },
  {
    name: '허다현',
    role: '멤버',
    image: '/images/다현.png',
    description: '92410990',
    github: 'https://github.com/chick127',
    Homepage: 'https://middle-portfolio.vercel.app/',
  },
  {
    name: 'gpt',
    role: '멤버',
    image: '/images/team.png',
    description: '똑똑한 아이에요...',
  },
]

export default function TeamPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          팀원 소개
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-40 h-40 object-cover rounded-full mx-auto mt-6"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-gray-600 items-center">
                  {member.role}{' '}
                  {member.Homepage && (
                    <a
                      href={member.Homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-55 px-2 py-1 bg-gray-800 text-white text-xs rounded hover:bg-blue-900"
                    >
                      Homepage
                    </a>
                  )}
                </p>
                <p className="mt-4 text-gray-500 flex items-center">
                  {member.description}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-58"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: '16px', marginLeft: '4px' }}
                        className=" text-gray-700 text-sm "
                      />
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          팀 프로젝트 예정
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* 프로젝트 카드 넣는 곳 */}
        </div>
      </section>
    </main>
  )
}
