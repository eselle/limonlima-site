import React from "react"
import { Header } from "../../components/Header"
import { HeadFC, navigate } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { content } from '../../content/projects'
import { Footer } from "../../components/Footer"

interface Props {
  project: string
}

const ProjectPage = (props: Props) => {
  const isBrowser = typeof window !== "undefined"
  const projectInfo = content[props.project]
  if (!projectInfo && isBrowser) {
    navigate("/")

    return null
  }

  const { title, description, srcCover, assets } = projectInfo ?? {}


  return (
    <main className="pt-24 lg:pt-36">
    <Header />
    <div className="grid grid-cols-12 px-8 lg:px-40 pb-32 lg:gap-x-12">
      <div className="col-span-12 lg:col-span-6">
        <img src={srcCover} />
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col pt-8 lg:pt-32">
        <h1 className="text-4xl mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    <div className="px-8 lg:px-40">
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2}}>
        <Masonry columnsCount={2} gutter="1rem">
          {assets && assets.map(({ src, type }) => (
            type === "video" ? <video key={src} src={src} autoPlay muted /> : <img key={src} src={src} alt="" />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
    <Footer />
    </main>
  )
}

export const Head: HeadFC = (props) => <title>{`limonlima - ${props.params.project}`}</title>

export default ProjectPage