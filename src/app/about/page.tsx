import InfoCard from '@/components/InfoCard'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <section className="my-12">
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-gray-200 pb-2">
          About Me
        </h1>
        <h2>안녕하세요. 웹 프로그래밍을 배우고 있는 원종은입니다.</h2>
      </section>

      <InfoCard title="이름" content="원종은" />
      <InfoCard title="생년월일" content="2005.02.24" />
      <InfoCard title="연락처" content="010-0000-0000" />
      <InfoCard title="이메일" content="wjy2024@gmail.com" />
      <InfoCard title="학력" content="중부대학교 정보보호학전공" />

      <InfoCard
        title="Github"
        content={
          <a
            href="https://github.com/euniii0224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  hover:text-gray-800 hover:underline transition-colors"
          >
            github.com/euniii0224
          </a>
        }
      />
    </main>
  )
}
