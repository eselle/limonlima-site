import React from "react"
import { Header } from "../components/Header"
import { HeadFC } from "gatsby"
import { Footer } from "../components/Footer"

const About = () => {
  return (
    <main className="pt-24 lg:pt-36">
    <Header />
    <div className="px-8 lg:px-40 grid gap-8 grid-cols-12 font-grotesk">
      <div className="col-span-12 lg:col-span-6">
        <img src="/about.jpg" alt="" />
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-4">
        <p>
        Somos Facundo y Cucha, amigos y socios, te presentamos nuestro estudio creativo de diseño gráfico e ilustración. En Limonlima nos apasiona el arte visual y nos encanta combinar nuestra creatividad con las necesidades de nuestros clientes para crear diseños únicos y cautivadores.
        </p>
        <p>
          Compartimos una pasión común por el arte y la ilustración, y decidimos unir fuerzas para crear algo extraordinario juntos. Así nació Limonlima, una combinación de nuestros gustos y personalidades que refleja nuestra visión única en el mundo del diseño.
        </p>
       
      </div>
      <div className="col-span-12">
      <p>
          En Limonlima, creemos en la importancia de la colaboración y la comunicación abierta con nuestros clientes. Nos encanta sumergirnos en los detalles de cada proyecto, entender las metas y objetivos de nuestros clientes y traducirlos en diseños visualmente impactantes. Trabajamos estrechamente en cada etapa del proceso, desde la conceptualización hasta la entrega final, para asegurarnos de que estemos completamente satisfecho con el resultado.
        </p>
        <p>
          Nuestro enfoque se basa en la combinación de técnicas tradicionales y herramientas digitales. Nos gusta explorar diferentes estilos y enfoques, desde ilustraciones vibrantes y coloridas hasta diseños minimalistas y elegantes. Estamos constantemente actualizando nuestras habilidades y conocimientos para estar al tanto de las últimas tendencias en diseño y garantizar que nuestras creaciones sean frescas, modernas y relevantes.
        </p>
        <p>
          Además de nuestro trabajo con clientes, también nos encanta colaborar en proyectos personales y experimentar con nuevas ideas. Creemos que la creatividad no tiene límites y disfrutamos explorando nuevas formas de expresión artística. Esta mentalidad nos impulsa a estar constantemente innovando y desafiándonos a nosotros mismos para superar las expectativas.
        </p>
      </div>
    </div>
    <Footer />
    </main>
  )
}

export const Head: HeadFC = () => <title>limonlima - nosotros</title>

export default About