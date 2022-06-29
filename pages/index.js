import { useState } from "react";
import Channels from "../components/HomepageSections/Channels";
import Courses from "../components/HomepageSections/Courses";
import Features from "../components/HomepageSections/Features";
import HashnodeArticle from "../components/HomepageSections/HashnodeArticle";
import HashnodeLike from "../components/HomepageSections/HashnodeLike";
import Header from "../components/HomepageSections/Header";
import Team from "../components/HomepageSections/Team";

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
  )
}