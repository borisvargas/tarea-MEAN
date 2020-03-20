let usuarios = [
    {
        id: 1,
        nombre: 'Boris',
        edad: 23,
        ci: '9884972',
    },
    {
        id: 2,
        nombre: 'Horacio',
        edad: 23,
        ci: '1234567',
    }
];

function findUser(id: number) {
    usuarios.forEach(usuario => {
        if (usuario.id === id) {
            console.log(`Hola ${usuario.nombre} tienes ${usuario.edad} y tu carnet es ${usuario.ci}`);
        }
    });
}

findUser(1);
