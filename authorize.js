const authorize = (req, res, next) => {
    const { user } = req.query;
    if (!user) {
        res.status(401).send('No user found!');
    }
    console.log(req.method);
    next();
};

module.exports = authorize;