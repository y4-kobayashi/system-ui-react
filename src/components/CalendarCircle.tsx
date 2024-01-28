import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CalendarCircle.module.css";

type CalendarCircleType = {
  numberText?: string;
  satelliteNumber?: string;

  /** Style props */
  calendarCircleFlexShrink?: CSSProperties["flexShrink"];
};

const CalendarCircle: FunctionComponent<CalendarCircleType> = ({
  numberText,
  satelliteNumber,
  calendarCircleFlexShrink,
}) => {
  const calendarCircleStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: calendarCircleFlexShrink,
    };
  }, [calendarCircleFlexShrink]);

  return (
    <div className={styles.calendarCircle} style={calendarCircleStyle}>
      <div className={styles.calendarCircleChild} />
      <div className={styles.textParent}>
        <div className={styles.text}>{numberText}</div>
        <div className={styles.text1}>{satelliteNumber}</div>
      </div>
    </div>
  );
};

export default CalendarCircle;
