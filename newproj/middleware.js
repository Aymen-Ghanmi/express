const verify = (req, res, next)=>{

let today = new Date()
let days = today.getDay()
let hour = today.getHours()

if 
    (hour < 9 || hour > 17 || days === 0 || days ===6)
{
    res.redirect('/error')
} else{
    next()
}


}

module.exports = verify



