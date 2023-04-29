import { useNavigate } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const MainLayout = ({ children }) => {

    const navigate = useNavigate();

    const onMenuClick = (_e, { name }) => {
        navigate(name);
    }
    
    return (
        <div>
            <Menu>
                <Menu.Item name="profile" onClick={onMenuClick}>
                    Profile
                </Menu.Item>
                <Menu.Item name="home" onClick={onMenuClick}>
                    Home
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};