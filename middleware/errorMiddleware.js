export default function errorMiddleware(err, req, res, next) {
    try {
        let error = {...err};
        error.message = err.message;

        if(err.name === "CastError") {
            const message = `Resources is not found. ${err.path}`;
            error = new Error(message);
            error.statusCode = 404;
        }

        if (err.code === 11000) {
            const message = `Duplicate key value entered: ${err.keyValue.name}`
            error = new Error(message);
            error.statusCode = 400;
        }

        if(err.name === "ValidationError") {
            const message = Object.values(err.errors).map(value => value.message);
            error = new Error(message);
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || 'Internal server error'
        })
    } catch(error) {
        next(error)
    }
}