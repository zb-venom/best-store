exports.getPanel = async (req, res) =>  {
    if (req.params.key == '50454e4953') {        
        res.render('adminPanel', {
            title: 'ADMIN | BestStore',
            admin: true,
        })
    } else res.redirect('/');
}


exports.postCategory = async (req, res) => {
    
}