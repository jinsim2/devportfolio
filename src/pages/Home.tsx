import { HeroSection, SkillsSection, ProjectsSection, ExprienceSection } from "../components/sections"

function App() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExprienceSection />
    </div>
  )
}

export { App }