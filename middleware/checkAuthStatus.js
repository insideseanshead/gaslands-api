const jwt = require("jsonwebtoken");

const checkAuthStatus = request => {
    console.log(request.headers);
    if (!request.headers.authorization) {
        return false
    }
    //gets bearer token
    const token = request.headers.authorization.split(" ")[1]
    console.log(token);

    //once the token is received jwt will verify it 
    const loggedInUser = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return false
        }
        else {
            return data
        }
    })
    console.log(loggedInUser);
    return loggedInUser

}

module.exports = checkAuthStatus