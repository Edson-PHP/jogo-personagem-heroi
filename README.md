# ⚡ Projeto – Jogo - Personagem Herói - POO

## 🚀 Visão Geral

Aplicação desenvolvida em **JavaScript**, com foco na criação de uma **classe genérica que representa um herói de uma aventura**, aplicando conceitos fundamentais de programação orientada a objetos.

---

## ✅ O Que Foi Utilizado

O projeto deve aplicar obrigatoriamente:

- Variáveis  
- Operadores  
- Laços de repetição  
- Estruturas de decisões  
- Funções  
- Classes e Objetos  

---

## 🎯 Objetivo

Criada **classe genérica** que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome  
- idade  
- tipo (ex: guerreiro, mago, monge, ninja)  

Além disso, a classe deve possuir um método chamado:

### ⚔️ atacar()

Esse método deve:

- Exibir a mensagem:  
  ```
  o {tipo} atacou usando {ataque}
  ```
- Onde:
  - `{tipo}` deve ser concatenado com o tipo que está na propriedade da classe
  - `{ataque}` deve seguir uma descrição diferente conforme o tipo do herói

---

## 🧩 Regras de Ataque

A descrição do ataque deve seguir a tabela abaixo:

| Tipo       | Ataque exibido |
|------------|----------------|
| mago       | usou magia |
| guerreiro  | usou espada |
| monge      | usou artes marciais |
| ninja      | usou shuriken |

---

## 🖥️ Saída Esperada

Ao final, deve ser exibida a mensagem no seguinte formato:

```
o {tipo} atacou usando {ataque}
```

### Exemplos:

```
mago atacou usando magia
guerreiro atacou usando espada
monge atacou usando artes marciais
ninja atacou usando shuriken
```

---

## 📌 Observação

Utilize estruturas de decisão (como `if/else` ou `switch`) para determinar o tipo de ataque com base no tipo do herói.

Organize seu código aplicando boas práticas, deixando a classe clara, reutilizável e de fácil entendimento.

---

## 🚀 Desafio Extra (Opcional)

- Criar múltiplos heróis e armazená-los em um array  
- Utilizar laço de repetição para executar o método `atacar()` para todos  
- Permitir entrada de dados pelo usuário  

---

## Rodar o Projeto

1. Clone o projeto com o comando git clone e o endereço do projeto
1. Certifique-se de ter o **Node.js** instalado.   
3. Abra o terminal do Visual Studio Code com o comando: Ctrl + '
4. Rode o comando abaixo no terminal do Visual Studio Code
```bash
node index.js
