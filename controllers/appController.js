exports.getMain = async (req, res) =>  {
    res.render('index', {
        title: 'BestStore',
    })
}

exports.postMain = async (req, res) => {
    
}

exports.getCategory = async (req, res) =>  {
    if (req.params.category == 'male')
        category = "Мужская одежда"
    res.render('products', {
        title: 'BestStore',
        category: category
    })
}


exports.postCategory = async (req, res) => {
    
}