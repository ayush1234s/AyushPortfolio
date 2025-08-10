import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeading title="Projects" subtitle="Selected works and experiments" align="left" />

          <div className="mt-8 space-y-8">
            {/* Typing Master */}
            <ProjectCard
              title="Typing Master"
              stack="(HTML, CSS, JS)"
              description="Test your typing speed with accuracy, WPM, and highlights for wrong/right words."
              githubUrl="https://github.com/ayush1234s/TypinTest4.O"
              liveUrl="https://typingtestmaster.netlify.app/"
              leftMode="icon"
            />

            {/* Password Manager */}
            <ProjectCard
              title="Password Manager"
              stack="(HTML, CSS, JS)"
              description="A simple password manager for saving and retrieving your credentials locally."
              githubUrl="https://github.com/ayush1234s/Password-Manager"
              liveUrl="https://password-save.netlify.app/"
              leftMode="icon"
            />

            {/* Skill Rathi */}
            <ProjectCard
              title="Skill Rathi"
              stack="(Front‑end, UI/UX)"
              description="A client project to deliver online teaching and sell courses with a modern, user‑friendly front‑end."
              githubUrl="https://github.com/ayush1234s/SkillRathi"
              liveUrl="https://skillrathi.com/"
              leftMode="icon"
            />

            {/* React JS Section */}
            <div className="pt-4">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">React JS</h3>
              <ProjectCard
                title="Hangman"
                stack="(React)"
                description="Classic Hangman game built with React. Repository and live demo will be updated soon."
                githubUrl=""
                liveUrl=""
                leftMode="icon"
              />
            </div>

            {/* Arduino / IoT Project with image */}
            <ProjectCard
              title="Obstacle Avoiding Robot (Multipurpose Robot)"
              stack="(Arduino, IoT)"
              description="An obstacle-avoiding robot built with Arduino and ultrasonic sensors. Multipurpose concept: adaptable for tasks like hazardous object handling and other features. Links will be updated soon."
              imageSrc="/images/robot.png"
              imageAlt="Obstacle avoiding robot photo"
              githubUrl=""
              liveUrl=""
              leftMode="image"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
