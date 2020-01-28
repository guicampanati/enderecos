## [endereços](https://guicampanati.github.io/enderecos/)

### Sobre

Aplicação client-side onde é possível armazenar uma lista de endereços, sendo possível realizar operações CRUD. Nesta primeira versão da aplicação, a lista é salva no localStorage do navegador. Se o usuário sair da página e voltar a lista é recuperada.

### Recursos

O projeto foi inicializado com o [create-react-app](https://github.com/facebook/create-react-app).

Para validação do CEP está sendo utilizado o serviço da api [ViaCEP](https://viacep.com.br/), após a entrada ser validada com os recursos do [react-final-form](https://github.com/final-form/react-final-form), que possibilita formatação e validação assíncrona.

A técnica utilizada para estilizar os componentes foi CSS-in-JS através da biblioteca [style-components](https://styled-components.com/), que permite abstrair o CSS no próprio nível do componente, usando JavaScript para descrever os estilos de maneira declarativa e sustentável.

A aplicação utiliza a biblioteca [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom), que permite roteamento através de manipulação do histórico da sessão do navegador pela interface [history](https://developer.mozilla.org/pt-BR/docs/Web/API/History) do HTML5.

### Testes

Os testes foram implementados com a biblioteca de testes [Jest](https://jestjs.io/), que é configurada por padrão para aplicativos criados com create-react-app. Além do Jest, foi utilizado uma biblioteca para renderizar componentes específica para testes, no caso [react-testing-library](https://github.com/testing-library/react-testing-library), que facilita testes de componentes que utilizam o recurso react hooks, também configurada por padrão na versão 3.3.0 do create-react-app.

Foram escritos somente com a proposta de testar os componentes responsáveis pela renderização de dados, com os serviços que disponibilizariam esses dados sendo <i>mockados</i> para tal realização.
