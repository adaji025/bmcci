import { Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const AboutDropdown = () => {
  const navigate = useNavigate();
  return (
    <Menu shadow="md" width={150} zIndex={1000}>
      <Menu.Target>
        <button>About</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item ta="center" onClick={() => navigate("/about")}>
          Who Are We
        </Menu.Item>
        <Menu.Item ta="center" onClick={() => navigate("/gallery")}>
          Gallery
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AboutDropdown;
