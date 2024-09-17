export const logMiddleWare = (req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
}

export const bodyValidation = (req, res, next) => {
    if (req.body.id && req.body.title && req.body.author && req.body.gender) {
        next()
    } else {
        res.send('El body es invalido.')
    }
}