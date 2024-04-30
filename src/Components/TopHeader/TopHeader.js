import { SearchOutlined, BellOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, theme } from "antd";
const { useToken } = theme;

import Image from "next/image";
import maleAvatar from "@/Assets/avatar/male.png";
import femaleAvatar from "@/Assets/avatar/female.jpg";

// Desc: TopHeader component for the website
export default function TopHeader() {
  const gender = "female";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = useToken();

  // onSearch function
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <header
      style={{
        padding: 24,
        margin: "24px 16px 0",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <Input
            size="large"
            placeholder="Search Now..."
            prefix={<SearchOutlined />}
            onSearch={onSearch}
          />
        </div>
        <div className="flex items-center justify-end gap-4">
          {/* add project */}
          <button className="focus:outline-none w-12 h-12 rounded-full p-1.5 border text-lg">
            <PlusOutlined />
          </button>

          {/* Notification */}
          <button className="focus:outline-none w-12 h-12 rounded-full p-1.5 border text-lg">
            <BellOutlined />
          </button>

          {/* user card */}
          <div className="flex items-center justify-end gap-3">
            <figure className="w-12 h-12 rounded-full p-1.5 border">
              {gender == "female" ? (
                <Image
                  className="w-full h-full"
                  src={femaleAvatar}
                  alt="user"
                />
              ) : (
                <Image className="w-full h-full" src={maleAvatar} alt="user" />
              )}
            </figure>
            <div>
              <h2 className="font-semibold text-lg">Shipon Hossen</h2>
              <p className="font-normal text-base text-slate-500">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
