import * as React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Header = () => {
  return (
    <div className="z-50 w-full flex p-4 items-center fixed top-0 left-0">
      <AniLink fade to="/">
        <img src="/logo.jpg" height={80} width={80} />
      </AniLink>
      <div className="flex-1 flex justify-around gap-x-2 text-base lg:text-lg">
        <AniLink fade className="hover:underline hover:text-red-500" to="/projects">PROYECTOS</AniLink>
        <a className="hover:underline hover:text-red-500" href="https://www.instagram.com/limonlima.studio/" target="_blank">INSTAGRAM</a>
        <AniLink fade className="hover:underline hover:text-red-500" to="/about">NOSOTROS</AniLink>
      </div>
    </div>
  )
}