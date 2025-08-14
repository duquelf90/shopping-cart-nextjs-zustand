"use client";

import React from "react";
import { NotificationProvider } from "@/lib/context/NotificationContext";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <NotificationProvider>{children}</NotificationProvider>;
};

export default Providers;
