# Desenvolvendo o Dio Bank #
desenvolvido por Elvis Gomide

Projeto desenvolvido com conceitos básicos de typescript
### Tecnologias ###
* Typescript
### Como rodar o projeto ###
1. Clone o repositório

2. Instale as dependências

```npm install```

3. Execute o projeto

```npm run dev```

#### Desafios ####
1. Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

   * Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
   * Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
 
2. Implementar o método de empréstimo (getLoan) na classe CompanyAccount

   * Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
   * Apenas contas com o status true podem fazer empréstimo

3. Criar um novo tipo de conta a partir da DioAccount
   * Esta conta não deve receber novos atributos
   * Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

4. Todos os atributos de qualquer conta devem ser privados

5. Os atributos name e accountNumber não podem ser alterados internamente ou externamente

6. Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.# Challenge-DIO-bank
