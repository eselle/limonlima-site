import * as React from "react"

export const Footer = () => {
  return (
    <div className="w-full flex p-4 justify-around items-center mt-10">
      <div className="text-xs">
        All rights reserved. @2023 limonlima
      </div>
      <a className="text-xs hover:underline hover:text-red-500" href="https://www.behance.net/somoslimon234a" target="_blank">
        BEHANCE
      </a>
    </div>
  )
}