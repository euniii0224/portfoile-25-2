import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'
import { myProjects } from '@/types/constant'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
        Projects
      </h1>
      {myProjects.map((project) => (
        <Link
          key={project}
          href={`/repos/${project}`}
          className="block border border-gray-300 rounded-lg p-6 hover:shadow-md transition hover:-translate-y-1"
        >
          <Suspense fallback={<div>Loading project...</div>}>
            <Repo name={project} />
          </Suspense>
        </Link>
      ))}
    </main>
  )
}
