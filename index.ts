let usuarios = [
    {
        id: 1,
        nombre: 'Boris',
        edad: 23,
        ci: '111111',
    },
    {
        id: 2,
        nombre: 'Horacio',
        edad: 23,
        ci: '222222',
    }
];

function findUser(id: number) {
    let Noencontro = true;
    usuarios.forEach(usuario => {
        if (usuario.id === id) {
            console.log(`Hola ${usuario.nombre} tienes ${usuario.edad} y tu carnet es ${usuario.ci}`);
            Noencontro = false;
        }
    });
    if (Noencontro) console.log(`no se encontro usuario`);
}

findUser(1);
findUser(2);
findUser(100);
