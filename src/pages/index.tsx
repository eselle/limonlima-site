import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Marquee from "react-fast-marquee"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="pt-24 lg:pt-36">
      <Header />
      <div className="text-5xl lg:text-8xl px-4 lg:px-8 pb-2 lg:pb-8 hover:cursor-fancy font-grotesk text-right select-none">
        <span>
          Somos <Link to="/about" className="cursor-nwse-resize hover:underline">Limonlima</Link>. un estudio creativo de diseño gráfico e ilustración. ●●
        </span>
        <span className="lg:ml-4 text-right flex flex-wrap justify-end">
          Proyectos: <AniLink fade to="projects/kerchak" className="cursor-nwse-resize hover:underline">Kerchak</AniLink> / <AniLink fade to="/projects/santo-estudio" className="cursor-nwse-resize hover:underline">Santo Estudio</AniLink> / <AniLink fade to="/projects/loww" className="cursor-nwse-resize hover:underline">Loww</AniLink> / <AniLink fade to="/projects/campamento-digital" className="cursor-nwse-resize hover:underline">Campamento Digital</AniLink>
        </span>
      </div>
      <Marquee>
        {" "}creemos en el poder de la imagen y cómo puede transmitir mensajes, contar historias y generar conexiones emocionales. nuestro objetivo principal es crear diseños únicos y memorables que reflejen la identidad y los valores de quienes representamos.
      </Marquee>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>limonlima</title>
