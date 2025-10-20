interface InfoCardProps {
  title: string
  content: string | React.ReactNode
}

export default function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-700">{content}</div>
    </div>
  )
}
