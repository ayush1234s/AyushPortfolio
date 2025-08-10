import {
  Code2,
  Braces,
  FileCode2,
  CodepenIcon as ReactIcon,
  NetworkIcon as Nodejs,
  Database,
  GitBranch,
  CircuitBoard,
  Cpu,
} from "lucide-react"

type Skill = {
  name: string
  note?: string
  level?: number // 0-100
  status?: "done" | "learning" | "soon"
  Icon?: any
}

const skills: Skill[] = [
  { name: "HTML", note: "Built many front-end projects", level: 95, status: "done", Icon: Code2 },
  { name: "CSS", note: "Tailwind CSS, responsive design", level: 90, status: "done", Icon: Braces },
  { name: "JavaScript", note: "Multiple front-end projects", level: 85, status: "done", Icon: FileCode2 },
  { name: "React", note: "50% done, basic projects", level: 50, status: "learning", Icon: ReactIcon },
  { name: "Node.js", note: "Update soon", level: 10, status: "soon", Icon: Nodejs },
  { name: "MongoDB", note: "Update soon", level: 10, status: "soon", Icon: Database },
  { name: "Git", note: "Know Git and workflows", level: 70, status: "done", Icon: GitBranch },
  { name: "Arduino", note: "Group IoT project", level: 60, status: "learning", Icon: CircuitBoard },
  { name: "IoT", note: "Built a group project", level: 60, status: "learning", Icon: Cpu },
]

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s) => (
        <div
          key={s.name}
          className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            {s.Icon ? <s.Icon className="h-6 w-6 text-neutral-900" /> : null}
            <div>
              <p className="font-semibold text-neutral-900">{s.name}</p>
              {s.note ? <p className="text-sm text-neutral-600">{s.note}</p> : null}
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-neutral-200">
              <div
                className={`h-2 rounded-full ${
                  s.status === "done" ? "bg-neutral-900" : s.status === "learning" ? "bg-neutral-700" : "bg-neutral-400"
                }`}
                style={{ width: `${Math.min(Math.max(s.level ?? 0, 0), 100)}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-neutral-600">
              <span>{s.status === "soon" ? "Update soon" : s.status === "learning" ? "Learning" : "Experienced"}</span>
              <span>{s.level ?? 0}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
