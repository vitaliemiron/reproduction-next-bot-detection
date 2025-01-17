import styles from './page.module.css';
import BotDetectionTester from './isBot';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BotDetectionTester />
      </main>
    </div>
  );
}
