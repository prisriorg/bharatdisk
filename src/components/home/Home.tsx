// src/HomePage.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import FloatingHeader from "./Header";
import Features from "./Features";
import CountUp from "react-countup";
import config from "@/app/config";
import { MainHome } from "./MainHome";
import { Footer } from "./Footer";
import { Reviews } from "./Reviews";

const HomePage: React.FC = () => {
  const { file, users, clicks } = config;
  return (
    <main className="text-white bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 animate-gradient-xy min-h-screen">
      <main className="px-8 md:px-32 md:py-32">
        <FloatingHeader />
        <MainHome />
        <Features />

        <Reviews/>

        <section className="py-12 border-t">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-lg bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 rounded-lg border w-64 p-6 mx-4 mb-4 max-w-xs">
                <CountUp
                  start={0}
                  end={file}
                  duration={4}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyDelay={500}
                >
                  {({ countUpRef, start }) => (
                    <h2 className="text-3xl font-semibold mb-2">
                      <span ref={countUpRef} />
                    </h2>
                  )}
                </CountUp>
                <p className="text-2xl">Total Files</p>
              </div>
              <div className="shadow-lg bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 rounded-lg border w-64 p-6 mx-4 mb-4 max-w-xs">
                <CountUp
                  start={0}
                  end={users}
                  duration={4}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyDelay={500}
                >
                  {({ countUpRef, start }) => (
                    <h2 className="text-3xl font-semibold mb-2">
                      <span ref={countUpRef} />
                    </h2>
                  )}
                </CountUp>
                <p className="text-2xl">Total Users</p>
              </div>
              <div className="shadow-lg bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950 rounded-lg border w-64 p-6 mx-4 mb-4 max-w-xs">
                <CountUp
                  start={0}
                  end={clicks}
                  duration={4}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyDelay={500}
                >
                  {({ countUpRef, start }) => (
                    <h2 className="text-3xl font-semibold mb-2">
                      <span ref={countUpRef} />
                    </h2>
                  )}
                </CountUp>
                <p className="text-2xl">Total Clicks</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-left mx-auto max-w-3xl">
              <li>Upload your files to BharatDisk.</li>
              <li>Share your files with others.</li>
              <li>Earn rewards based on the views and shares of your files.</li>
              <li>Manage your files and rewards easily from your dashboard.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer/>
    </main>
  );
};

export default HomePage;
