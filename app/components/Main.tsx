import React from "react";

type Props = {};

export default function Main({}: Props) {
  return (
    <div>
      <div className="flex flex-row flex-nowrap min-h-[fit-content] overflow-hidden p-20 relative w-full">
        <div className="flex content-end items-end flex-row flex-nowrap gap-10 min-h-[fit-content] justify-start overflow-hidden pt-40 relative">
          <div className="flex flex-col flex-nowrap gap-5 min-h-[fit-content] justify-center max-w-[2018px] overflow-visible p-0 relative">
            <div className="contents">
              <span className="text-[32px] font-polySans">Hoan Do</span>
              <div className="relative">
                <h1 className="text-[160px] font-polySans leading-[1.1em] tracking-[-2px] text-white text-left not-italic text-balance">
                  Software Developer with 3 years of experience.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
