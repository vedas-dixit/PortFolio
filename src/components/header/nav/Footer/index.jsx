import styles from './style.module.scss';
import Image from 'next/image';
export default function index() {
  return (
    <div className={styles.footer}>
    <a href="https://github.com/vedas-dixit" target="_blank">
      <Image
        src="/images/git.png" // Replace with the actual path to your image
        width={30} // Set the width of the image
        height={30} // Set the height of the image
      />
    </a>

    <a href="https://www.instagram.com/vedas_dixit/" target="_blank">
      <Image
        src="/images/instagram.png" // Replace with the actual path to your image
        width={30} // Set the width of the image
        height={30} // Set the height of the image
      />
    </a>

    <a href="https://www.linkedin.com/in/vedas-dixit-3465b5239/" target="_blank">
      <Image
        src="/images/linkedin.png" // Replace with the actual path to your image
        width={30} // Set the width of the image
        height={30} // Set the height of the image
      />
    </a>

    </div>
  )
}
