import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Syllabus } from "./components/Syllabus";
import { Feedback } from "./components/Feedback";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Syllabus />
        <Contact />
        <Feedback />
      </main>
    </div>
  );
}
