const validation = schema => {
  return (req, res, next) => {
    const { error } = schema.validation(req.body);
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'error.message',
      });
      return;
    }
    next(error);
  };
};

module.exports = validation;
