import { FunctionComponent } from "react";
import Component1 from "../components/Component1";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Component from "../components/Component";
import HeadingRightPanel from "../components/HeadingRightPanel";
import CalendarCircle from "../components/CalendarCircle";
import ScheduleList from "../components/ScheduleList";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className={styles.parent}>
                  <div className={styles.div1}>佐藤真紀</div>
                  <div className={styles.makiSato}>Maki Sato</div>
                </div>
              </div>
              <div className={styles.navItemParent}>
                <Component1
                  scheduleIconId="/calendarweek.svg"
                  scheduleLabel="スケジュール"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
                <Component1
                  scheduleIconId="/pinmapfill.svg"
                  scheduleLabel="スケジュール"
                  divFlexShrink="unset"
                  divColor="#f44d69"
                />
              </div>
              <div className={styles.frameChild} />
              <div className={styles.group}>
                <div className={styles.div1}>探す</div>
                <Component1
                  scheduleIconId="/building@2x.png"
                  scheduleLabel="ホテル予約"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
                <Component1
                  scheduleIconId="/airplane.svg"
                  scheduleLabel="観光スポット"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
                <Component1
                  scheduleIconId="/cuphot@2x.png"
                  scheduleLabel="レストラン・カフェ"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
                <Component1
                  scheduleIconId="/briefcase@2x.png"
                  scheduleLabel="ビジネス"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
                <Component1
                  scheduleIconId="/balloon@2x.png"
                  scheduleLabel="イベント"
                  divFlexShrink="unset"
                  divColor="#444f52"
                />
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <img className={styles.frameItem} alt="" src="/group-8.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerParent}>
        <Header headerBoxSizing="border-box" />
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.headingParent}>
              <Heading />
              <div className={styles.spotItemsParent}>
                <Component />
                <Component />
                <Component />
                <Component />
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameInner} />
            <div className={styles.headingRightPanelParent}>
              <HeadingRightPanel headingRightPanelFlexShrink="unset" />
              <div className={styles.calendarCircleParent}>
                <CalendarCircle
                  numberText="23"
                  satelliteNumber="sat"
                  calendarCircleFlexShrink="unset"
                />
                <div className={styles.navItemParent}>
                  <ScheduleList
                    departureTime="9:30"
                    travelTime="新幹線で移動"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="12:40"
                    travelTime="福岡到着🎉"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="13:00"
                    travelTime="福岡駅でラーメン"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="14:30"
                    travelTime="イベント参加"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="19:30"
                    travelTime="市内でラーメンその2"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="20:30"
                    travelTime="チェックイン"
                    scheduleListFlexShrink="unset"
                  />
                </div>
              </div>
              <div className={styles.lineDiv} />
              <div className={styles.calendarCircleParent}>
                <CalendarCircle
                  numberText="24"
                  satelliteNumber="sun"
                  calendarCircleFlexShrink="unset"
                />
                <div className={styles.navItemParent}>
                  <ScheduleList
                    departureTime="7:30"
                    travelTime="ホテルで朝食"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="9:00"
                    travelTime="福岡県立美術館に移動、鳥獣戯画展を見る"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="13:00"
                    travelTime="福岡駅でラーメン"
                    scheduleListFlexShrink="unset"
                  />
                  <ScheduleList
                    departureTime="14:30"
                    travelTime="新幹線"
                    scheduleListFlexShrink="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
