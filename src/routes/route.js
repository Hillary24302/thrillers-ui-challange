import { paths } from './paths';
// import AuthLayout from '../layouts/auth';
import MemberLayout from '../layout/members';
import Dashboard from '../pages/members/dashboard/Dashboard';
import {  SvgDashboard, SvgFlight, SvgReport, SvgSetting, SvgStat, SvgWallet } from '../components/svg-icon';
import FlightPage from '../pages/members/flights/Flights';
import ReportPage from '../pages/members/report/Report';
import StatisticsPage from '../pages/members/statistics/statistics';
import WalletPage from '../pages/members/wallets/Wallets';
import SettingPage from '../pages/members/settings/settings';

export const membersRoute = [
  {
    title: "Dashboard",
    path: paths.dashboard,
    layout: MemberLayout,
    component: Dashboard,
    protected: true,
    icon: <SvgDashboard />
  },
  {
    title: "Flights",
    path: paths.flights,
    layout: MemberLayout,
    component: FlightPage,
    protected: true,
    icon: <SvgFlight />
  },
  {
    title: "Wallet",
    path: paths.wallet,
    layout: MemberLayout,
    component: WalletPage,
    protected: true,
    icon: <SvgWallet />
  },
  {
    title: "Reports",
    path: paths.report,
    layout: MemberLayout,
    component: ReportPage,
    protected: true,
    icon: <SvgReport />
  },
  {
    title: "Statistics",
    path: paths.statistics,
    layout: MemberLayout,
    component: StatisticsPage,
    protected: true,
    icon: <SvgStat />
  },
  {
    title: "Settings",
    path: paths.settings,
    layout: MemberLayout,
    component: SettingPage,
    protected: true,
    icon: <SvgSetting />
  }
];


const WebRoutes =[
  ...membersRoute,
];

export default WebRoutes