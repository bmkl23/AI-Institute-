import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Syllabus } from "./components/Syllabus";
import { Feedback } from "./components/Feedback";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { Counselling } from "./components/Counselling";
import { MLChallenge } from "./components/MLChallenge";
import { ALBootcamp } from "./components/ALBootcamp";

function MainSite() {
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
        <Counselling />
        <MLChallenge />
        <Blog />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/al-bootcamp" element={<ALBootcamp />} />
      </Routes>
    </BrowserRouter>
  );
}