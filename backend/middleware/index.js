const {auth} = require("../admin");
async function decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    try {
        const decodeValue = await auth.verifyIdToken(token)
        if(decodeValue) {
            return next();
        } else {
            return res.json({message: "Unauthorized"})
        }
    } catch(err) {
        return res.json({message: "Internal Error - " + err.message})
    }
}
module.exports = {decodeToken};