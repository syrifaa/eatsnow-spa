import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (localStorage.getItem("token") !== null) {
            localStorage.removeItem("token");
        }
        window.location.href = "/login";
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;