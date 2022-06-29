import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Timeline from "./Timeline";
import { MdEdit } from "react-icons/md";
import About from "./About";
import Stats from "./Stats";
import Tabs from "./Tabs";
import User from "./User";

export default function ProfileComponent({ data, user }) {
  return (

    <div className="grid grid-cols-4 gap-4">

      <section id="profile" className="col-span-4 md:col-span-1">
        <User profile={data?.profile} user={user} />
      </section>

      <section className="col-span-4 md:col-span-2" id="tabs">
        <Tabs
          profile={data?.profile || null}
          courses={data?.courses || []}
          projects={data?.projects || []}
        />
      </section>

      <section id="stats" className="col-span-4 md:col-span-1">
        <Stats
          courses={data?.courses?.length}
          projects={data?.projects?.length}
        />
      </section>

    </div>

  );
}
