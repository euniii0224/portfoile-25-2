import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center bg-white text-gray-800 px-4">
      <Image
        src="/images/홈.png"
        alt="Won Jong Eun"
        width={120}
        height={120}
        className="rounded-full shadow-md mb-6 object-cover"
      />

      {/* 이름 */}
      <h1 className="text-6xl font-bold mb-6 tracking-tight">
        <span className="text-gray-800">Won Jong Eun</span>
      </h1>

      {/* 소개 문구 */}
      <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
        {/* 안냐세요 👋{' '} */}
        <strong className="text-gray-800">
          Web Programming | My PORTFOILO{' '}
        </strong>
      </p>

      {/* 버튼 */}
      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 rounded-full font-semibold transition-all duration-200"
        >
          프로젝트 보기
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-100 rounded-full font-semibold transition-all duration-200"
        >
          정보보기
        </a>
      </div>
    </main>
  )
}
