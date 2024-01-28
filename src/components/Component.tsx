import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img
        className={styles.f310545398Hy6yeochzkzttktilbIcon}
        alt=""
        src="/240-f-310545398-hy6yeochzkzttktilbzg2pe1sljptfg1-1@2x.png"
      />
      <div className={styles.headingParent}>
        <b className={styles.heading}>Uncovering Fukuoka's Hidden Gems</b>
        <div className={styles.text}>
          Explore the best places to visit, eat, and experience in Fukuoka.
        </div>
        <div className={styles.info}>
          <div className={styles.groupParent}>
            <div className={styles.containerParent}>
              <div className={styles.container}>
                <div className={styles.text1}>Category</div>
              </div>
              <div className={styles.text2}>5 min read</div>
            </div>
            <div className={styles.calendarWeekParent}>
              <img
                className={styles.calendarWeekIcon}
                alt=""
                src="/calendarweek2.svg"
              />
              <img
                className={styles.bookmarkCheckFillIcon}
                alt=""
                src="/bookmarkcheckfill@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
