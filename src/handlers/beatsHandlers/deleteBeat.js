const deleteBeat = async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).send(`Beat con ID: ${id} eliminado`)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = deleteBeat