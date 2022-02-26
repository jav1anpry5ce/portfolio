import React from "react";

export default function MailMe() {
  return (
    <div className="fixed right-24 bottom-10 hidden sm:block">
      <a
        href="mailto:javanpryce1@gmail.com"
        className="vertical transform cursor-pointer text-gray-300 duration-300 hover:-translate-y-1 hover:text-muted"
      >
        javanpryce1@gmail.com
      </a>
    </div>
  );
}
