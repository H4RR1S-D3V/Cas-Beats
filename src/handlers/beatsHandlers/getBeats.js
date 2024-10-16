const getBeats = async (req, res) => {
    try {
        res.status(200).send(`Devolviendo beats`)
    } catch (error) {
        res.status(404).send(`Error al devolver beats`)
    }
}

module.exports = getBeats