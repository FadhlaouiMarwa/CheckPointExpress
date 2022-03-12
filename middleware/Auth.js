const day=new Date().getDay()
const hour=new Date().getHours()

function myapp(req,res,next){
    if ( day>0 && day<=6 && hour>8 &&hour<17)
    {
        next()
    }
    else
    {
    res.send("Sorry we work from monday to friday from 8h at 17h")
    }
}
module.exports=myapp

