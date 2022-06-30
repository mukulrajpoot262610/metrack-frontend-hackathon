import Channels from "components/sections/Channels";
import Courses from "components/sections/Courses";
import Features from "components/sections/Features";
import HashnodeArticle from "components/sections/HashnodeArticle";
import HashnodeLike from "components/sections/HashnodeLike";
import Header from "components/sections/Header";
import Team from "components/sections/Team";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HashnodeArticle />
      <Channels />
      <Courses />
      <Features />
      <Team />
      <HashnodeLike />
    </div>
  );
}
