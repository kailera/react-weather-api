# Forecast ReactJS API 

Sistema de Consulta de previsão do tempo feito em React Js consumindo a api de previsão do tempo OpenWeather

### Implementação de redux

React Redux foi utilizado neste site pois precisava de uma forma de transitar dados entre dois componentes distintos:

O componente de navegação ficou responsável por coletar a entrada do usuário (input text da cidade) e setar este valor na store global;
O componente weather por meio do useEffect seleciona essa parte da store e realiza a consulta na api em busca destes dados. Assim é possível escutar
as alterações na store, quando o usuário digita um novo endereço.

Assim, qualquer componente interessado pode selecionar toda ou parte da store de forma ordeira e escalável.

### Styled-Components
Essa lib foi utilizada pelo meu interesse de separar bem "o que faz o que". Assim, cada componente tinha seu estilo, suas regras e assim um auto nível de reutilização.

### Problemas no .env
Comecei a criar a aplicação no stackblitz, plataforma excelente, porém quando fiz o clone na minha máquina, tive problemas ao criar variáveis de ambiente. Em buscas na interweb não encontrei nenhuma solução que não envolvesse o CRA ou libs como dotenv. Para não poluir o código mimiquei um .env com o nome de config (.gitignore) onde setei todas as variaveis de ambiente em forma de objeto (obrigado leonardo leitao por essa dica monstra).

### Resultado:
##### img1 
![localhost_3000 e mais 21 páginas - Pessoal — Microsoft​ Edge 22_09_2021 15_14_32](https://user-images.githubusercontent.com/56659030/134401401-1bb7c704-45a4-488b-ac8b-46ad6ee9c929.png)

### gif:




*[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-qjptmy)
