/*
Formato de Representação de Dados, comumente usado para APIs e Configs.

Json é uma forma de enviar e receber dados de forma organizada, utilizando objetos JS, com propriedades e valores.

Geralmente, quando nós recebemos um objeto JSON, Nós o recebemos como string. E para transformar isso em um objeto JS. Nós precisamos usar o JSON.parse().

E quando enviamos um objeto JSON para um local Storage por exemplo. Precisamos fazer o contrario, utilizando o JSON.stringfy().Exemplo*/-

function Person(name,age,tech){
    this.nome = name;
    this.idade = age;
    this.tech = tech;
}

const joão = new Person('Jhonattan',19,'PHP')
const stringJoão = JSON.stringify(joão)
const noStringJoão = JSON.parse(strJoão)
console.log(noStringJoão)
