"use client";

import React, { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type Props = {
  children: ReactNode;
};

export default function ProgressBarProvider({ children }: Props) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#ea580c"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
