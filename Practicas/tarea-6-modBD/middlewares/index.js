export const logMiddleware = (req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
}

export const bodyValidation = (req, res, next) => {
    if (req.body.name && req.body.price > 0 && req.body.category && req.body.description) {
        next()
    } else {
        res.status(404).json({
            message: 'all fields must be filled out correctly!'
        })
    }
}