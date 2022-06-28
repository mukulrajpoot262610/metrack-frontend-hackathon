import { useState } from "react";
import Channels from "../components/Sections/Channels";
import Courses from "../components/Sections/Courses";
import Features from "../components/Sections/Features";
import HashnodeArticle from "../components/Sections/HashnodeArticle";
import HashnodeLike from "../components/Sections/HashnodeLike";
import Header from "../components/Sections/Header";
import Team from "../components/Sections/Team";

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