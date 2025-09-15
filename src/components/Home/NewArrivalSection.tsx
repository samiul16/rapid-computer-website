"use client";

import React from "react";
import SectionHeader from "../common/SectionHeader";
import ButtonLink from "../common/ButtonLink";
import { PrimaryBtn } from "../common/PrimaryBtn";

const NewArrivalSection: React.FC = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <SectionHeader title="New Arrivals" />
        <ButtonLink link="/">View All</ButtonLink>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Large Card */}
        <div className="relative w-full h-[400px] md:h-[650px] rounded-2xl overflow-hidden group">
          <div
            className="absolute inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("/global/bg04.png")` }}
          />

          {/* Content Layer */}
          <div className="absolute bottom-0 w-full bg-neutral-900/10 h-[200px] md:h-[200px] backdrop-blur-sm p-4 flex flex-col gap-5">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                SoundWave Pro X
              </h3>
              <p className="text-white text-sm md:text-base mt-1 max-w-sm">
                Introducing the Soundwave Pro X: a revolutionary audio
                experience for gamers!
              </p>
            </div>
            <PrimaryBtn size="md" className="font-bold w-1/3">
              View More
            </PrimaryBtn>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Top Medium Card */}
          <div className="relative w-full h-[200px] md:h-[340px] rounded-2xl overflow-hidden group">
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url("/global/bg01.png")` }}
            />
            <div className="absolute bottom-0 right-0 w-1/2 bg-neutral-900/10 h-[100px] md:h-[180px] backdrop-blur-sm p-4 flex flex-col gap-2 items-start text-left rounded-tl-2xl">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                UltraHD Monitor 24
              </h3>
              <p className="text-white text-sm md:text-base max-w-60">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-white border-2 border-white px-4 py-2 font-bold text-sm md:text-base rounded-full cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Two Small Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Small Card 1 */}
            <div className="relative w-full h-[140px] md:h-[285px] rounded-2xl overflow-hidden group">
              <div
                className="absolute inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url("/global/bg03.png")` }}
              />
              <div className="absolute bottom-0 left-0 w-2/3 bg-neutral-900/10 h-[100px] backdrop-blur-sm p-2 flex flex-col gap-1 items-start text-left rounded-tr-2xl">
                <h4 className="text-white font-semibold text-sm md:text-lg mb-1">
                  Wireless Earbuds
                </h4>
                <button className="text-white border-2 border-white px-3 py-1 font-bold text-sm md:text-base rounded-full cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative w-full h-[140px] md:h-[285px] rounded-2xl overflow-hidden group">
              <div
                className="absolute inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url("/global/bg02.png")` }}
              />
              <div className="absolute bottom-0 left-0 w-2/3 bg-neutral-900/10 h-[100px] backdrop-blur-sm p-2 flex flex-col gap-1 items-start text-left rounded-tr-2xl">
                <h4 className="text-white font-semibold text-sm md:text-lg mb-1">
                  Smart Home Hub
                </h4>
                <button className="text-white border-2 border-white px-3 py-1 font-bold text-sm md:text-base rounded-full cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewArrivalSection;
