const getBeatById = async (req, res) => {
    const { id } = req.params

    try {
        res.status(200).send(`Devolviendo beat de ID: ${id}`)
    } catch (error) {
        res.status(404).send(`Error al devolver el Beat con ID: ${id}`)
    }
}

module.exports = getBeatById