import Image from 'next/image';
import styles from '../styles/components.module.scss'; // Usamos el mismo SASS

// Definimos los "tipos" de datos que recibirá la tarjeta (esto es TypeScript)
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

export default function ProjectCard({ title, description, imageUrl, projectUrl, tags }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        <Image 
          src={imageUrl} 
          alt={`${title} project screenshot`} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>{tag}</span>
          ))}
        </div>
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary" // Reutilizamos la clase de botón
        >
          View Project
        </a>
      </div>
    </div>
  );
}