const Client = require('../models/Client')

module.exports = {
    async create (req, res) {
        const { nome, email, telefone, cep, logradouro, numero, bairro, cidade, estado } = req.body

        let client = await Client.findOne({ email })

        if (!client) {
            client = await Client.create({
                nome,
                email,
                telefone,
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado
            })

        return res.json(client.nome)

        } else {
            return res.status(400).send({ error: 'Cliente já cadastrado.' })
        }
    },

    async index (req, res) {
        const clients = await Client.find()

        return res.json(clients)
    },

    async delete (req, res) {
        const { id } = req.params

        await Client.findOneAndDelete({
            _id: id
        })

        return res.status(200).send('Cliente deletado com sucesso.')
    },

    async update (req, res) {
        const { id } = req.params
        const { nome, email, telefone, cep, logradouro, numero, bairro, cidade, estado } = req.body

        await Client.findOneAndUpdate({ _id: id }, {
            nome,
            email,
            telefone,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            estado
        })

        return res.status(200).send('Os dados foram alterados com sucesso.')
    }

}