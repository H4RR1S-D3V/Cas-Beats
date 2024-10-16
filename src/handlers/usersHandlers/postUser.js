const postUser = (req, res) => {
    try {
        const user = req.body
        res.status(201).json({
            message: 'User Posted',
            user
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = postUser