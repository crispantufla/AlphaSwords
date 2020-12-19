const isLogin = () => !!localStorage.getItem('token');

const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
}

module.exports = {isLogin, logOut};