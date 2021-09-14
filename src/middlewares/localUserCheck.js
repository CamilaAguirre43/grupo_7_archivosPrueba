module.exports = (req, res, next) => {
    if(req.session.userLog){
        res.locals.userLog = req.session.userLog
    }
    next()
}