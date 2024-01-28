import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HeadingRightPanel.module.css";

type HeadingRightPanelType = {
  /** Style props */
  headingRightPanelFlexShrink?: CSSProperties["flexShrink"];
};

const HeadingRightPanel: FunctionComponent<HeadingRightPanelType> = ({
  headingRightPanelFlexShrink,
}) => {
  const headingRightPanelStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: headingRightPanelFlexShrink,
    };
  }, [headingRightPanelFlexShrink]);

  return (
    <div className={styles.headingRightPanel} style={headingRightPanelStyle}>
      <div className={styles.calendarWeekParent}>
        <img
          className={styles.calendarWeekIcon}
          alt=""
          src="/calendarweek3.svg"
        />
        <div className={styles.div}>スケジュール</div>
      </div>
      <img className={styles.calendarWeekIcon} alt="" src="/xlg.svg" />
    </div>
  );
};

export default HeadingRightPanel;
