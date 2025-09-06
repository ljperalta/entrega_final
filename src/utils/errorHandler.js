const errorHandler = (err, req, res, next) => {
    console.error(`[Error]: ${err.message}`);
    if (err.name === 'ValidationError') {
        return res.status(400).json({ status: 'error', message: 'Datos inválidos', details: err.errors });
    }
    if (err.name === 'CastError') {
        return res.status(400).json({ status: 'error', message: 'ID inválido' });
    }
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Error interno del servidor'
    });
};

module.exports = errorHandler;