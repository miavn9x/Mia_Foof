import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/users/homePage';
import ProfilePage from './pages/users/profilePage'; // Import ProfilePage
import { ROUTERS } from './utils/router';
import MasterLayout from './pages/users/theme/masterLayout';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USERS.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USERS.PROFILE,
            component: <ProfilePage />
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
