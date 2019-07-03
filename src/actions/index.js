import * as loginActions from './login';
import * as registerActions from './register';
import * as userActions from './user';
import * as appActions from './app';
import * as driverActions from './driver';

export const doLogin = loginActions.doLogin,
    doRegister = registerActions.doRegister,
    getCurrentUser = userActions.loggedInUser,
    fetchUsers = userActions.fetchUsers,
    logout = userActions.logout,
    initializeApp = appActions.initializeApp,
    authorizeUser = appActions.authorizeUser,
    updateDriverProfile = driverActions.driverProfile,
    fetchDriver = driverActions.fetchDriver,
    editUser = userActions.editUser,
    editDriver = driverActions.editDriver,
    fetchUser = userActions.fetchUser,
    addCard = userActions.addCard,
    avatar = driverActions.avatar