import React from 'react';
import Footer from './components/footer';
import Style from './Dashboard.module.css'
import ima from '../IMG/WhatsApp Image 2024-04-17 at 20.07.32.jpeg';
import icon1 from '../IMG/icons8-github-48.png';
import icon2 from '../IMG/icons8-linkedin-32.png';
import icon3 from '../IMG/2416659.webp'

function Dashboard() {
    return (
        <div className={Style.backgroundHome}>
            <div className={Style.basicInformation}>
                <h1>Mirko Miler</h1>
                <p>Programador Full Stack Developer con enfoque en el Front End</p>
                <div className={Style.locationContainer}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe size-3"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>
                    <p>Gualeguaychú, Entre Ríos, Argentina</p>
                </div>
                <div>
                    <a href="https://github.com/Mirko1523">
                        <img src={icon1} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/mirko-miler-290bb3295/">
                        <img src={icon2} alt="LinkedIn" />
                    </a>
                    <a href="https://drive.google.com/drive/u/1/folders/1xFYdr-g3-u4Bxxyo6JFaI8tJt7UEF5fe">
                        <img src={icon3} alt="CV" />
                    </a>
                </div>
                <div className={Style.img}>
                    <img src={ima} alt="foto perfil" />
                </div>
            </div>
            <hr />
            <div className={Style.backgroundAboutMe}>
                <h1>Sobre mí</h1>
                <p>
                    Desarrollador Web especializado en Front End, residente en Gualeguaychú, Entre Ríos, Argentina. He trabajado en varios proyectos, tanto individuales como grupales, donde he adquirido experiencia en diversas tecnologías.
                </p>
                <p>
                    Me destaco en: <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong> y <strong>Redux</strong> <strong>Redux-Toolkit</strong>.
                </p>
            </div>
            <hr />
            <div className={Style.backgroundExperiency}>
                <h1>Experiencia Laboral</h1>
                <h3>Desarrollador Front-End en Rebrit (2024-2025)</h3> 
                <ul>
                <li>
                 Lideré en el desarrollo para crear una plataforma de gestion de Usuarios para Empresas.
                </li>
                <hr></hr>
                <li>
                 Fui responsable de asegurar una experiencia de usuario fluida y atractiva, ademas de integrar la API.
                </li>
                <hr></hr>
                <li>
                    Colaboré con el equipo del Back-End para garantizar una integración perfecta entre ambos lados de la aplicación.
                </li>
                <hr></hr>
                <li>
                    <strong>Stack Tecnológico:</strong> Javascript, React, Redux-Toolkit, Tailwind, Axios.
                </li>
                </ul>
<hr></hr>
            <h3>Desarrolador web Freelancer en Siim Ingenieria</h3>
                <ul>
            <li>
                Desarrollé una Página Web desde 0 para la Empresa de Ingenieria.
            </li>
            <hr></hr>
            <li>
                Implementé un diseño responsivo para asegurar una experiencia óptima en dispositivos móviles y de escritorio.
            </li>
            <hr></hr>
            <li>
                    <strong>Stack Tecnológico:</strong> Javascript, React, Redux-Toolkit, Tailwind, Axios.
            </li>
                </ul>
            <hr></hr>

              <h3>Desarrolador web Freelancer en Faa Agency</h3>
            <ul>
                <li>
                    Estuve encargado de desarrollar una Página Web desde 0 para la Agencia de Marketing Digital.
                </li>
                <hr></hr>
                <li>
                    Creé un diseño atractivo, responsivo y funcional que reflejara la identidad de la agencia.
                </li>
                <hr></hr>
                <li>
                    <strong>Stack Tecnológico:</strong> Javascript, React, Redux-Toolkit, Tailwind, Axios.
                </li>
            </ul>
            </div>

            <div className={Style.education}>
                <h1>Educación</h1>
                <h3>Henry</h3>
                <p>Me gradué como Full Stack Developer</p>
            </div>
            <hr />
            <div className={Style.skills}>
                <h1>Skills</h1>
                <div className={Style.skillsP}>
                    <p><strong>HTML</strong></p>
                    <p><strong>CSS</strong></p>
                    <p><strong>Tailwind</strong></p>
                    <p><strong>JavaScript</strong></p>
                    <p><strong>TypeScript</strong></p>
                    <p><strong>MySql</strong></p>
                    <p><strong>React</strong></p>
                    <p><strong>Redux</strong></p>
                    <p><strong>Next.js</strong></p>
                    <p><strong>Node.js</strong></p>
                </div>
            </div>
            <hr />
            <div className={Style.Projects}>
                <h1>Proyectos</h1>
                <div className={Style.projectContainer}>

                  <div className={Style.ProjectsText}>
                        <a href='https://criptoprice24hours.netlify.app/'><h3>Siim Ingenieria</h3></a>
                        <p>Aplicación Web para una empresa Ingeniera Internacional.</p>
                    </div>
                      <div className={Style.ProjectsText}>
                        <a href='https://criptoprice24hours.netlify.app/'><h3>Faa Agency</h3></a>
                        <p>Página creada ha pedido de una Agencia nacional dedicada al marketing digital.</p>
                    </div>
                    <div className={Style.ProjectsText}>
                        <a href='https://weatherallworld.netlify.app/'><h3>Mkm Agency</h3></a>
                        <p>Página Web creada para la Agencia Mkm Agency para ofrecer sus Servicios Informaticos</p>
                    </div>
                    <div className={Style.ProjectsText}>
                        <a href='https://criptoprice24hours.netlify.app/'><h3>Climas</h3></a>
                        <p>Web en donde podes mirar y buscar el clima en cualquier parte del mundo en cualquier dispositivo.</p>
                    </div>
                      <div className={Style.ProjectsText}>
                        <a href='https://criptoprice24hours.netlify.app/'><h3>Crypto Price App</h3></a>
                        <p>Aplicación que muestra los cambios de valor de las criptomonedas más importantes</p>
                    </div>
                      <div className={Style.ProjectsText}>
                        <a href='https://criptoprice24hours.netlify.app/'><h3>FMA Scalable</h3></a>
                        <p>Web para Empresa Argentina dedicada al Marketing Digital, Creación y Diseños Web.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;