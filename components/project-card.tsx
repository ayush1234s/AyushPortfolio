import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import Image from "next/image"

type ProjectCardProps = {
  title?: string
  stack?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  githubUrl?: string
  liveUrl?: string
  leftMode?: "icon" | "image" // default: icon-only on the left
}

export default function ProjectCard({
  title = "Project Title",
  stack = "(HTML, CSS, JS)",
  description = "Short description of the project.",
  imageSrc = "/placeholder.svg?height=480&width=720",
  imageAlt = "Project image",
  githubUrl = "",
  liveUrl = "",
  leftMode = "icon",
}: ProjectCardProps) {
  const hasGitHub = Boolean(githubUrl)

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Left: either a big GitHub icon or an image (for special cases) */}
        {leftMode === "image" ? (
          <div className="relative md:w-5/12">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={720}
              height={480}
              className="h-56 w-full object-cover md:h-full"
              priority={false}
            />
          </div>
        ) : (
          <div className="md:w-5/12 flex h-56 md:h-auto items-center justify-center bg-neutral-50">
            {hasGitHub ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open project on GitHub"
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg ring-1 ring-black/5 hover:bg-neutral-100"
              >
                <Github className="h-10 w-10" />
              </a>
            ) : (
              <div
                aria-hidden="true"
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-neutral-400 shadow-lg ring-1 ring-black/5"
                title="GitHub link coming soon"
              >
                <Github className="h-10 w-10" />
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
              {stack}
            </span>
          </div>
          <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold text-neutral-900">
            <FolderGit2 className="h-5 w-5 text-neutral-700" />
            {title}
          </h3>
          <p className="mt-2 text-neutral-600">{description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {hasGitHub ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                aria-label="Open Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
