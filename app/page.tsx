'use client';

import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import ProjectCard from '../components/ProjectCard'; // <--- 1. Importamos la tarjeta
import FadeInSection from '../components/FadeInSection';
// Creamos una versión "ClientTypewriter" que NUNCA se ejecuta en el servidor
const ClientTypewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false // <-- La clave: Deshabilitamos el Server-Side Rendering
});
import dynamic from 'next/dynamic';

// --- 2. Datos de ejemplo para tus proyectos ---
// (Más adelante podemos mover esto a su propio archivo)
const portfolioProjects = [
  {
    title: 'Modern E-commerce Store',
    description: 'A full-stack e-commerce site built with Next.js, Stripe for payments, and a custom CMS for product management.',
    imageUrl: '/project-ecommerce.jpg', // <-- añadir esta imagen en /public
    projectUrl: 'https://zero-club-store.vercel.app/', // <-- Cambiar esto por la URL demo
    tags: ['Next.js', 'React', 'Stripe', 'SASS', 'TypeScript'],
  },
  {
    title: 'Corporate Landing Page',
    description: 'A responsive and fast landing page for a tech startup, focused on performance (Lighthouse score 95+) and SEO.',
    imageUrl: '/project-landing.jpg', // <-- añadir esta imagen en /public
    projectUrl: 'https://zero-club-business.netlify.app/',
    tags: ['React', 'Gatsby', 'Styled-Components'],
  },
  {
    title: 'Admin Dashboard',
    description: 'A data visualization dashboard for business analytics, built with Python (Django) on the backend and React on the frontend.',
    imageUrl: '/project-dashboard.jpg', // <-- añadir esta imagen en /public
    projectUrl: '#',
    tags: ['React', 'Python', 'Django', 'Chart.js'],
  },
];
// -------------------------------------------------

export default function HomePage() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi! Im <span className={styles.highlight}>Lautaro A. Paz</span>
          </h1>
        <div className={styles.heroSubtitle}>
      <ClientTypewriter // <--- Nombre nuevo y dinámico
        options={{
          strings: [
            'Full-Stack Web Developer',
            'React & Next.js Specialist',
            'Python & Node.js Expert',
            'Building amazing digital experiences.'
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
          <div className={styles.heroButtons}>
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/profile.jpg"
            alt="Your Profile Photo"
            width={200}
            height={200}
            className={styles.profileImage}
            priority
          />
        </div>
      </section>

      {/* --- About Section --- */}
      <FadeInSection> {/* <--- ENVOLVEMOS */}
      <section id="about" className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>
          Passionate about web development and building innovative solutions. Experienced in the MERN stack (MongoDB, Express.js, React, Node.js) and Python/Django, I focus on developing robust, scalable applications with a great user experience.
        </p>
      </section>
      </FadeInSection> {/* <--- Y CERRAMOS */}


{/* --- NUEVA SECCIÓN DE SERVICIOS --- */}
    <FadeInSection> {/* <--- ENVOLVEMOS */}
      <section id="services" className={styles.servicesSection}>
        <h2>My Services</h2>
        <div className={styles.servicesGrid}>
          
          {/* Tarjeta de Servicio 1 */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>E-commerce Development</h3>
            <p className={styles.serviceDescription}>
              Building fast, secure, and user-friendly online stores with modern tech stacks and payment integration.
            </p>
          </div>

          {/* Tarjeta de Servicio 2 */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Custom Web Applications</h3>
            <p className={styles.serviceDescription}>
              Developing custom-tailored web apps (dashboards, admin portals) to solve your specific business needs.
            </p>
          </div>

          {/* Tarjeta de Servicio 3 */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Landing Page & SEO</h3>
            <p className={styles.serviceDescription}>
              Creating high-impact, responsive landing pages that convert visitors, fully optimized for search engines (SEO).
            </p>
          </div>

        </div>
      </section> {/* <--- CIERRA LA SECCIÓN "SERVICES" AQUÍ */}
    </FadeInSection> {/* <--- Y CERRAMOS */}

      {/* --- 3. NUEVA SECCIÓN DE PROYECTOS --- */}
      <FadeInSection> {/* <--- ENVOLVEMOS */}
      <section id="projects" className={styles.projectsSection}>
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
      </FadeInSection> {/* <--- Y CERRAMOS */}
      {/* ---------------------------------- */}

      {/* --- Tech Stack Section --- */}
      <FadeInSection> {/* <--- ENVOLVEMOS */}
      <section id="skills" className={styles.skillsSection}>
        <h2>My Tech Stack</h2>
        <div className={styles.skillsGrid}>
          <span className={styles.skillBadge}>React</span>
          <span className={styles.skillBadge}>Next.js</span>
          <span className={styles.skillBadge}>Node.js</span>
          <span className={styles.skillBadge}>TypeScript</span>
          <span className={styles.skillBadge}>Python</span>
          <span className={styles.skillBadge}>SASS</span>
          <span className={styles.skillBadge}>MongoDB</span>
        </div>
      {/* --- Tech Stack Section (Termina arriba) --- */}
      </section>
</FadeInSection> {/* <--- Y CERRAMOS */}


      {/* --- NUEVA SECCIÓN DE CONTACTO --- */}
      <FadeInSection> {/* <--- ENVOLVEMOS */}
      <section id="contact" className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p className={styles.contactIntro}>
          Have a project in mind or just want to say hi? 
          My inbox is always open. Ill get back to you as soon as possible!
        </p>

        {/* ¡IMPORTANTE! 
          Este formulario se conectará a Formspree.
          Sigue los pasos que te daré a continuación.
        */}
        <form 
          action="https://formspree.io/f/xzzknqpb" 
          method="POST" 
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className={styles.formInput} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={styles.formInput} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              className={styles.formTextarea} 
              required 
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary formButton">
            Send Message
          </button>
        </form>
      </section>
      </FadeInSection> {/* <--- Y CERRAMOS */}
      {/* ---------------------------------- */}

      {/* Aquí (debajo) debería terminar tu componente, 
          probablemente con la etiqueta </> */}
    </>

  );
}