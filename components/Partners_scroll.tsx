"use client";
import { partners_logo } from "@/lib/data";

const partners = ["Beverage Factories", "pharmaceutical Industries", "Hospitals", "Supermarkets", "Hotels", "Houses", "Banks"]

const Partners = () => {


  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 justify-center items-center">
        <h3 className='text-md font-semibold text-primary'>our partners</h3>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-700 text-center leading-tight'>
          Delivering Excellence Across <span className="text-primary">Multiple Sectors</span><br />
          Partnering with <FlipWords words={partners} className="text-primary" />
        </h1>
        <p className='text-lg text-gray-600 text-center max-w-2xl'>
          We proudly collaborate with top brands and organizations in Ethiopia, ensuring reliable and professional cooling services tailored to diverse industries.
        </p>
        <div className="relative w-full mx-auto flex flex-col gap-5 ">
          <InfiniteMovingCards
            items={partners_logo}
            direction="left"
            speed="slow"
            pauseOnHover={true} // Pause scrolling on hover
            className="partners-cards-container"
          />
          <InfiniteMovingCards
            items={partners_logo}
            speed="slow"
            direction="right"  // Change to "right" if you want a different scroll direction
            pauseOnHover={true} // Pause scrolling on hover
            className="partners-cards-container"
          />
        </div>
      </div>
    </section>
  );
};


export default Partners;



import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name?: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    console.log(direction)
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "180s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20   overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className=" relative rounded-2xl flex-shrink-0"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <Image src={item.logo} width={180} height={180} alt="" />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

