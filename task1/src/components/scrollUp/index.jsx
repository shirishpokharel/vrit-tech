"use client";
import { cn } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    window.scrollY >= 200 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Link
      href="#"
      className={cn("scrollup", show && " show-scroll")}
      id="scroll-up"
    >
      <i class="ri-arrow-up-fill scrollup__icon"></i>
    </Link>
  );
}

export default ScrollUp;
