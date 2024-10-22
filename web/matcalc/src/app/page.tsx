import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.sizeform}>
        <form>
            <label>hello</label>
            <input type="text" />
            <button type="submit">Enter</button>
        </form>
    </div>
  );
}
