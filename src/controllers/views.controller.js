

exports.home = async (req, res) => {
    if(req.query.token){
        
        res.render('../views/pages/home_page.ejs', {})
    }
    let data = {
        category : ["Mental Issues", "Lifestyle"],
        isLogged : false
    };
    res.render('../views/pages/home_page.ejs', {
        category : ["Mental Issues", "Lifestyle"],
        isLogged : false
    });
}

exports.welcome = async (req,res) => {
    res.render('../views/pages/welcome_page.ejs', {appLink: process.env.APP_LINK});
}

exports.login = async(req,res) => {
    res.render('../views/pages/login_page.ejs', {appLink: process.env.appLink});
}

exports.forgotpassword = async (req,res) => {
    if(req.params.success){
        res.render('../views/pages/forgotpassword/success_forgot_password.ejs', {
            appLink : process.env.APP_LINK
        })
    }else {
        res.render('../views/pages/forgotpassword/forgot_password.ejs', {
            appLink : process.env.APP_LINK
        })
    }
    
}




