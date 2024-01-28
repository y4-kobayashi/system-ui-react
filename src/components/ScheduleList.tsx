import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ScheduleList.module.css";

type ScheduleListType = {
  departureTime?: string;
  travelTime?: string;

  /** Style props */
  scheduleListFlexShrink?: CSSProperties["flexShrink"];
};

const ScheduleList: FunctionComponent<ScheduleListType> = ({
  departureTime,
  travelTime,
  scheduleListFlexShrink,
}) => {
  const scheduleListStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: scheduleListFlexShrink,
    };
  }, [scheduleListFlexShrink]);

  return (
    <div className={styles.scheduleList} style={scheduleListStyle}>
      <b className={styles.text}>{departureTime}</b>
      <div className={styles.text1}>{travelTime}</div>
    </div>
  );
};

export default ScheduleList;
