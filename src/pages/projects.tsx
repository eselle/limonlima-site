import React from "react"
import { Header } from "../components/Header"
import { HeadFC } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Masonry from "react-responsive-masonry"

import { content } from '../content/projects'
import { Footer } from "../components/Footer"

const Projects = () => {
  return (
    <main className="pt-24 lg:pt-36 lg:px-40 px-5">
      <Header />
      <Masonry columnsCount={2} gutter="1rem">
        {Object.keys(content).map((key) => {
          const { srcCover, title } = content[key]
          return (
            <AniLink fade to={`/projects/${key}`} className="relative group">
              <div className="h-full w-full flex justify-end items-start absolute transition-opacity top-0 left-0 bg-black group-hover:opacity-100 opacity-0">
                <h2 className="font-grotesk text-2xl lg:text-8xl">{title}</h2>
              </div>
              <img src={srcCover} />
            </AniLink>
          )
        })}
        </Masonry>
        <Footer />
    </main>
  )
}

export const Head: HeadFC = () => <title>limonlima - proyectos</title>

export default Projects