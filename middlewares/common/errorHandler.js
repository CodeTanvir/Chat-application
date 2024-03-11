const createError = require('http-errors')
// 404 not found

function notFoundHandler(req, res, next){
    next(createError(404, "your requested content was not found!"))
}

//default error handler
function errorHandler(err, req, res, next){
    console.log(`this------${res.locals}`)
   res.locals.error = 
   process.env.NODE_ENV === "development" ? err : {message: err.message};

   res.status(err.status || 500);

   if(res.locals.html){
    //html response
    res.render("error",{
        tittle:"Error Page"
    });
   }else{
    // json response
    res.json(res.locals.error)
   }
}
module.exports = {
    notFoundHandler,
    errorHandler,
}