const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

// para exportar uma função ou algo no nodejs usamos a váriavel global chamda "module.exports {nome}"
// ou uma notação ES6, que é mais moderna, com o comando "expoer default {nome}" mas para isso é necessário usar um transpilador
module.exports= sayHi;

// no caso de enviar mais de uma variavel ou função o valor pode ser mandado em chaves, o que significa que apenas um objeto será enviado.
