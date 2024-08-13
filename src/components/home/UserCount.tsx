import config from '@/app/config';
import React from 'react'
import CountUp from 'react-countup';

export const UserCount = () => {
  const { file, users, clicks } = config;


  interface UserItem {
    label: string;
    count: number;
  }
  const userItems: UserItem[] = [
    { label: "Files", count: file},
    { label: "Users", count: users},
    { label: "Views", count: clicks},
  ];
  return (
    
    <section className="border-toper py-32 md:px-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center">
      {userItems.map((item) => (
            <div key={`${item.count}`} className="user-box animate-slideLeft shadow-lg rounded-lg border w-64 p-6 mx-4 mb-4 max-w-xs">
            <CountUp
              start={0}
              end={item.count}
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
            <p className="text-lighter text-2xl">{item.label}</p>
          </div>
          
          ))}


      </div>
    </div>
  </section>
  )
}
