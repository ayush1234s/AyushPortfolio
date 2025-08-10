export default function SectionHeading({
  title = "Section",
  subtitle = "",
  align = "center",
}: {
  title?: string
  subtitle?: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-neutral-600">{subtitle}</p> : null}
    </div>
  )
}
