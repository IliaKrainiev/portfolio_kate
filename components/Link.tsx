import styles from '../styles/Link.module.css';
import Link from 'next/link';

const LinkButton = ({ 
  buttonText, buttonLink,
}: { buttonText: any, buttonLink: string }) => {
  return (
    <div className={styles.button}> 
      <span className={styles.text}>
        <a href={buttonLink} target="_blank" rel="noreferrer">{buttonText}</a>
      </span>
    </div>
  );
};

export default LinkButton;