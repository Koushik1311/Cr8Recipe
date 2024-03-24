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
        height="4px"
        color="#ea580c"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
