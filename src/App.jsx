import Profile from "./layouts/Profile";
import Projects from "./layouts/projects";

export default function App() {
  return (
      <div className="flex gap-3 h-screen bg-[#181818]">
          <Profile/>
          <Projects/>
      </div>
  );
}
