const postBeat = async (req, res) => {
    try {

        const data = req.body

        res.status(201).json({
            message: 'New Beat posted',
            data})
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports = postBeat