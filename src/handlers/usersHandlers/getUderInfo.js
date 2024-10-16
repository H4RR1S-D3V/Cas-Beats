const getUserInfo = (req, res) => {
    try {
        const { id } = req.params
        res.status(200).send(`Mostrando información del usuario de ID: ${id}`)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = getUserInfo