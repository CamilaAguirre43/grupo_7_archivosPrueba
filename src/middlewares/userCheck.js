module.exports = (req,res,next) => {
    if (req.session.userLog) {
        next()
    }
    return res.redirect("/users/login")
}