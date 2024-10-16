const deleteUser = (req, res) => {
    const { id } = req.params
    try {
        res.status(200).send(`Usuario de ID: ${id} eliminado`)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = deleteUser