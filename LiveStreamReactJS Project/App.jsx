import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LiveStreamWebApp from "./components/LiveStreamWebApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|livestreamwebapp)">
          <LiveStreamWebApp {...liveStreamWebAppData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const profile4Data = {
    rectangle41: "/img/rectangle-41@2x.png",
    name: "Floyd Miles",
};

const profile42Data = {
    rectangle41: "/img/rectangle-41-1@2x.png",
    name: "Jerome Bell",
    className: "profile-3",
};

const group107Data = {
    price: "$12.50",
};

const group1072Data = {
    price: "$10.20",
    className: "group-107-1",
};

const high2Data = {
    className: "high-1",
};

const liveStreamWebAppData = {
    searchHere: "Search here...",
    date: "02-02-2021",
    image3: "/img/image-3@2x.png",
    menu: "MENU",
    dashboard: "Dashboard",
    profile: "Profile",
    chat: "Chat",
    schedule: "Schedule",
    team: "Team",
    support: "SUPPORT",
    privecy: "Privecy",
    setting: "Setting",
    text3: "Become to pro get more update",
    upgrade: "Upgrade",
    x51435412: "/img/5143541-2@2x.png",
    promo: "/img/rectangle-36@1x.png",
    live: "Live",
    x42K: "42k",
    text8: "02:45:30",
    statisticScore: "Statistic Score",
    kingNet: "King.net",
    tistik: "Tistik",
    number: "100",
    number2: "75",
    number3: "50",
    number4: "25",
    number5: "0",
    name: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name2: "May",
    jun: "Jun",
    jul: "Jul",
    othersMatch: "Others Match",
    live2: "Live",
    r8Fa9Kk72Kphghk16_7Bn_Rqm44Kut4Io1G: "/img/r8fa9kk72kphghk16-7bn-rqm44kut4io1gs6zliatdxvht4xcnxpyd2fti-dxaa@2x.png",
    vs: "VS",
    imageRemovebgPreview20211109T153932: "/img/image-removebg-preview---2021-11-09t153932-1@2x.png",
    baywtch: "Baywtch",
    number6: "02",
    memome: "MemoMe",
    number7: "01",
    watchNow: "Watch Now",
    teamName: "Team Name",
    match: "Match",
    win: "Win",
    lost: "Lost",
    time: "Time",
    avgPoint: "Avg.Point",
    rectangle48: "/img/rectangle-48@2x.png",
    wedTigerCo: "WED Tiger.co",
    number8: "11",
    number9: "10",
    number10: "01",
    address: "3 h 20 m",
    text1: "+.820",
    rectangle482: "/img/rectangle-48-1@2x.png",
    bdKingNet: "BD King.net",
    number11: "14",
    number12: "11",
    number13: "03",
    address2: "2 h 50 m",
    text2: "+.540",
    liveChat: "Live Chat",
    rectangle40: "/img/rectangle-40@2x.png",
    name3: "Brooklyn Simmons",
    x7MAgo: "7m ago",
    text6: "Games are games, whether indoor or outdoor.",
    rectangle24: "/img/rectangle-40@2x.png",
    name4: "Dianne Russell",
    x9MAgo: "9m ago",
    text7: "Hi Gays, Are you here? Please all of mate check",
    taxtMassage: "Taxt massage...",
    schedule2: "Schedule",
    today: "Today",
    legendsVsStrike: "Legends  vs  Strike",
    gmt5: "GMT+5",
    x1230Pm: "12:30 pm",
    classic: "Classic",
    mineraftVsCrfire: "Mineraft	  vs  CrFire",
    gmt7: "GMT+7",
    x1030Pm: "10:30 pm",
    medium: "Medium",
    specialOffer: "Special Offer",
    rectangle56: "/img/rectangle-56@2x.png",
    giftV: "Gift V",
    rectangle55: "/img/rectangle-55@2x.png",
    fiGun: "Fi gun",
    profile4Props: profile4Data,
    profile42Props: profile42Data,
    group107Props: group107Data,
    group1072Props: group1072Data,
    highProps: high2Data,
};

