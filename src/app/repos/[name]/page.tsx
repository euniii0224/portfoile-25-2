import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default async function RepoPage({
  params,
}: {
  params: { name: string }
}) {
  const awaitedParams = await params
  const { name } = awaitedParams
  return (
    <div className="flex flex-col max-w-lg mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-6 w-fit"
      >
        Back to Projects
      </Link>
      <Suspense fallback={<div>Loading project...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}
