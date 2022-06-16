import Channels from "../components/Sections/Channels";
import Courses from "../components/Sections/Courses";
import Features from "../components/Sections/Features";
import Header from "../components/Sections/Header";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Channels />
      <Courses />
      <Features />
    </div>
  )
}