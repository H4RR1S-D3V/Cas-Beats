const updateUser = async (req, res) => {
    try {
        const data = req.body

        res.status(201).json({
            message: 'User updtated',
            data})
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports = updateUser