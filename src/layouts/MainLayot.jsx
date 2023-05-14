import { useNavigate, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const MainLayout = ({ children }) => {

    const navigate = useNavigate();

    const onMenuClick = (_e, { name }) => {
        navigate(name);
    }
    
    return (
        <div>
            <Menu>
                <Menu.Item name="profile" /*onClick={onMenuClick} */>
                    <Link to={'/profile'}>Profile</Link>
                </Menu.Item>
                <Menu.Item name="home" /* onClick={onMenuClick} */>
                    <Link to={'/home'}>Home</Link>
                </Menu.Item>
                <Menu.Item name="login">
                    <Link to={'/login'}>Log In</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/product-mock'}>Product Mock</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/shopping-cart'}>Shopping Cart</Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};