import jwt_decode from "jwt-decode";

export const jwtVerify = () => {
    let userData = localStorage.getItem("user")
    if (userData) {
        const token = JSON.parse(userData)?.stsTokenManager?.accessToken
        var decoded = jwt_decode(token);
        var exp = decoded.exp;
        var now = new Date().getTime() / 1000;
        if (now > exp) {
            alert("Session expired")
            localStorage.removeItem("user");
        }
    }

}