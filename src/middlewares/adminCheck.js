module.exports = (req,res,next) => {
    if (req.session.userLog && req.session.userLog.category === "admin") {
        next()
    } else {
        res.redirect("/")
    }
}