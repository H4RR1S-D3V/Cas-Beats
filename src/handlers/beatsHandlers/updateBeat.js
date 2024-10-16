const updateBeat = async (req, res) => {
    try {
        const data = req.body

        res.status(201).json({
            message: 'Beat updtated',
            data})
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports = updateBeat