const bancodedados = {
    identificadorInstrutor: 4,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: "Guido",
            email: "guido@email.com",
            status: true
        },
        {
            id: 2,
            nome: "Dani",
            email: "dani@email.com",
            status: false
        },
        {
            id: 3,
            nome: "Caio",
            email: "caio@email.com",
            status: true
        }
    ],
    aulas: [
        {
            id:1,
            instrutor_id: 1,
            titulo: "Primeiro servidor",
            descricao: "Construindo o primeiro servidor"
        }
    ]
};
module.exports = bancodedados;