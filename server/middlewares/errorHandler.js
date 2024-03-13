module.exports = (error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || 'Internal server error'

    switch(error){
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            status = 400
            message = error.errors[0],message
    }
}