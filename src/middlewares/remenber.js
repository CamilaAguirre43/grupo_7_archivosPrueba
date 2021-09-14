module.exports = (req,res,next) =>{
    if (req.cookies.remenber !== undefined && req.session.userLog === undefined) {
        req.session.userLog = req.cookies.remenber 
    }
    
    next()
}