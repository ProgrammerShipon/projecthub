"use client";

// antd design imports
import {
  AppstoreOutlined,
  CalendarOutlined,
  LineChartOutlined,
  MessageOutlined,
  ProjectOutlined,
  SafetyOutlined,
  ScheduleOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { useToken } = theme;
const { Header, Content, Footer, Sider } = Layout;

import logo from "@/Assets/logo.png";
import Image from "next/image";
import TopHeader from "@/Components/TopHeader/TopHeader";
import TaskContainer from "@/Components/TaskProject/Task/TaskContainer";
import ProjectBrief from "@/Components/TaskProject/ProjectBrief/ProjectBrief";

// nav items
const items = [
  {
    key: "side-nav-dashboard",
    icon: <AppstoreOutlined />,
    label: "Dashboard",
  },
  {
    key: "side-nav-MyTasks",
    icon: <ScheduleOutlined />,
    label: "My Tasks",
  },
  {
    key: "side-nav-projects",
    icon: <ProjectOutlined />,
    label: "Projects",
  },
  {
    key: "side-nav-Calendar",
    icon: <CalendarOutlined />,
    label: "Calendar",
  },
  {
    key: "side-nav-Feed",
    icon: <SafetyOutlined />,
    label: "Feed",
  },
  {
    key: "side-nav-Messages",
    icon: <MessageOutlined />,
    label: "Messages",
  },
  {
    key: "side-nav-Goals",
    icon: <LineChartOutlined />,
    label: "Goals",
  },
  {
    key: "side-nav-Team",
    icon: <TeamOutlined />,
    label: "Team",
  },
  {
    key: "side-nav-Settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = useToken();

  return (
    <Layout className="min-h-screen">
      {/* side bar */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        theme="light"
      >
        <div className="demo-logo-vertical max-w-24 rounded-2xl shadow-lg mx-auto mt-8 mb-4">
          <Image className="w-full h-full rounded-2xl" src={logo} alt="logo" />
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>

      {/* content side */}
      <Layout>
        <TopHeader />

        {/* Main Content */}
        <Content>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              margin: "24px 16px 0",
            }}
          >
            <ProjectBrief />
          </div>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              margin: "24px 16px 0",
            }}
            className="overflow-x-scroll max-w-full"
          >
            <TaskContainer />
          </div>
        </Content>

        {/* Footer */}
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
