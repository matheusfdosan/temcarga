# TemCarga

Um sistema de requisição de caminhoneiros para entregar cargas. Na qual, clientes pode contatar um serviço de um caminhoneiro para mover sua carga. Os caminhoneiros iriam procurar serviços através de um número de WhatsApp, incluindo uma IA para conversar com o caminhoneiros, trocando informações como a ficha do caminhoneiro, frete, tempo, informa peso, localização, data/hora, disponibilidade, meta, etc. Para o cliente haverá um site para fazer a solicitação, e no Whatsapp o caminhoneiro irá solicitar serviço, o que resultará solicitação do cliente. O caminheiro visualiza qual serviço ele quer. Os dados são confirmados e o pedido é agendado. No processo é calculado frete, tempo, quilometragem, etc.

## Concorrentes

### FreteBras

Basicamente a Frete Bras peca nas funcionalidades, praticamente obrigando seus clientes a pagar planos com preços abusivos que nem sempre atendem as necessidades do cliente. Além da, falta de personalização e funções de localização em tempo real.

Muitos motoristas reclamam que as empresas publicam fretes com preços baixos, às vezes abaixo da tabela mínima da ANTT (Agência Nacional de Transportes Terrestres), o que não cobre custos como combustível, pedágio e manutenção. O aplicativo não regula os valores, deixando a negociação livre, o que pode prejudicar os caminhoneiros.

Os filtros de busca (tipo de veículo, carroceria, localização) são considerados insuficientes por alguns usuários, dificultando encontrar fretes adequados rapidamente. Isso é mais evidente no app do que no site, o que frustra quem gerencia múltiplos caminhões.

Fretes Repetidos ou Desatualizados: Informções desnecessárias aparecendo no site de fretes duplicados ou que já foram fechados.

O app exige que o usuário fique conectado e atualize manualmente a tela para ver novos fretes, sem notificações automáticas em alguns casos, o que é inconveniente em áreas com sinal fraco. Plano pago para melhorar funcionalidades

### TruckPad

Há pouca informação sobre a Truckpad no reclame aqui. Na playstore seu aplicativo, aparentemente, apresenta um desempenho baixo. Vários problemas são relatados desde 2019 até hoje. Não tem gestão pós-contratação, não tem rastreamento ou gestão da entrega dentro do app. Gratuito, Mas Limitado. Por ser gratuito, não oferece recursos avançados (ex.: cálculo de custos detalhado)

Recursos avançados podem ser intimidantes para motoristas autônomos menos experientes, que preferem soluções simples. Planos pagos podem afastar usuários que buscam opções totalmente gratuitas, como as oferecidas por Fretebras.

### Cargas.com.br

Não conecta diretamente caminhoneiros autônomos a embarcadores, restringindo-se a transportadoras, o que reduz seu alcance no mercado de motoristas individuais.
Falta de recursos como rastreamento em tempo real ou IA o coloca atrás de TruckPad e até Fretebras em termos de modernização. Atua como um intermediário básico, sem controle sobre a execução das cargas, o que pode limitar confiabilidade. Cargas.com.br não atraem muitos usuários.

### Cargo X

É mais voltado para transportadoras do que para motoristas autônomos, o que pode limitar oportunidades para quem trabalha sozinho. O uso de Big Data e Machine Learning para sugerir fretes é um diferencial, mas pode ser confuso para motoristas menos familiarizados com tecnologia. Embora ofereça capital de giro e outros serviços, esses benefícios podem vir com taxas ou condições que nem todos os usuários entendem de início.

## Problemas Gerais em Aplicativos de Carga

### Falta de Segurança e Fraudes:
- Apesar de validações (como prova de vida ou checagem de CPF), ainda há riscos de fretes falsos ou empresas duvidosas, especialmente em plataformas com muitos usuários.
- Falta de Suporte em Tempo Real(ex.: atrasos, avarias)

### Dependência Tecnológica:
- Motoristas em áreas rurais ou com celulares mais simples enfrentam dificuldades com apps que exigem boa conexão ou hardware mais novo.

## Plano de negócios para o nosso projeto/empresa

## Análise Comparativa de Plataformas de Frete

**Situação Hipotética (Cenário Ideal):**
- **Origem/Destino:** São Paulo (SP) → Rio de Janeiro (RJ)  
- **Distância:** 430 km  
- **Carga:** 10 toneladas (carga geral)  
- **Veículo:** Caminhão truck  
- **Custos Operacionais do Motorista:**  
  - Diesel: R$ 788,32  
  - Pedágios: R$ 80  
  - Outros (alimentação etc.): R$ 50  
  - **Total:** R$ 918,32

Esse seria o cenário ideial, seguindo as leis de da Tabela Mínima de Frete, criada pela Agência Nacional de Transportes Terrestres (ANTT), estabelecendo os valores mínimos obrigatórios para o transporte rodoviário de cargas no Brasil. 

## Informações sobre como é a interação entre cliente e o caminhoneiro

**Cliente contratando a transportadora (nós)**

- **Cliente solicita o frete**:  
   - O cliente entra em contato (pelo site ou outro canal) e diz:  
     *"Quero transportar 1 tonelada de argamassa do fornecedor X para meu endereço."*  
   - Informa os detalhes básicos: tipo de carga, peso, local de coleta e entrega, seguro, preço da carga, prazo.

2. **Transportadora confirma o pedido**:  
   - Nós (a transportadora) recebemos a solicitação, confirmamos a disponibilidade e combinamos o preço e o prazo com o cliente.

3. **Cliente fornece informações do fornecedor**:  
   - O cliente passa os dados do fornecedor (quem vai fornecer a carga) para que possamos organizar a coleta.

4. **Transportadora organiza a logística**:  
   - Nós cuidamos de encontrar um caminhoneiro e preparar tudo para o transporte, informando o cliente que o frete está confirmado.

5. **Entrega realizada**:  
   - Após o transporte, o cliente recebe a carga no endereço indicado e confirma a entrega (assinando um comprovante, se necessário).

**A transportadora contrata o caminhoneiro**

- **Transportadora seleciona o caminhoneiro**:  
   - Nós (a transportadora) escolhemos um caminhoneiro autônomo ou contratado para realizar o frete com base na solicitação do cliente.

2. **Transportadora passa as instruções**:  
   - Informamos ao caminhoneiro:  
     - Local de coleta (fornecedor).  
     - Local de entrega (endereço do cliente).  
     - Tipo e quantidade de carga (ex.: 1 tonelada de argamassa).  
     - Prazo para o transporte.

3. **Caminhoneiro realiza o transporte**:  
   - O caminhoneiro vai até o fornecedor, pega a carga e a leva até o cliente.

4. **Caminhoneiro confirma a entrega**:  
   - Após entregar a carga ao cliente, o caminhoneiro nos avisa que o serviço foi concluído (pode devolver um comprovante assinado, se aplicável).

5. **Transportadora paga o caminhoneiro**:  
   - Nós acertamos o pagamento com o caminhoneiro pelo serviço realizado (via Pix, transferência, etc.).



## Pesquisa para as tecnologias para desenvolvimento

- Site para clientes:
  - React.js
  - Node.js

- Bot com IA do Whatsapp:
  - JavaScript

- Pagamento
  - Python
  - OpenPix

## Organização das Funções

- Matheus Faustino
  - Líder do Projeto
  - Desenvolvedor Full-stack
  - CEO (Diretor geral)

- Pedro Cabral
  - Organizar a reunões
  - Desenvolvedor Front-end
  - Documentação (principal)
  - COO (Diretor de operações)

- Daniel Rodrigues
  - Desenvolvedor Back-end
  - CTO (Diretor de tecnologia)

## Ainda falta resolver

- Sazonalidade e Disponibilidade: Em períodos de baixa demanda, a quantidade de fretes cai, e os motoristas podem ficar sem opções viáveis, mesmo em apps populares.
- Motoristas não se valorizam e trabalham de graça. Inumeros motoristas acabam fazendo fretes muito baratos a preço de custo . Isso afeta negativamente nossa competitividade pois queremos oferecer cargas de qualidade para o motorista, mas enquanto existir caminhoneiros que cobram preços muito baixos (e muitas vezes sem qualidade) os cliente vão optar pelo menor custo.

## Planos Futuros

- Rotas Inadequadas: Alguns apps calculam rotas baseadas em carros de passeio, ignorando restrições para caminhões (ex.: pontes baixas, ruas estreitas), o que pode gerar custos extras ou atrasos. Precisamos desenvolver um mapa para fazer as melhores rotas para caminhões.
- Mais agilidade no processo de carga e descarga. Inumeras vezes caminhoneiros passam horas ou dias em filas para carregar ou descarregar o caminhão. Isso afeta produtividade pois ficam ociosos aguardando. Esses muitas vezes nem se quer recebem pelo período de aguardo. 

## **Burocracia**

**Fluxo Simplificado da Burocracia:**
## 🧾 1. Cliente Solicita o Frete
**“Quero transportar 1 tonelada de argamassa do fornecedor X para meu endereço.”**

- Cliente preenche os dados no site/app da TemCarga:

  - Tipo de carga, peso, origem, destino, valor da mercadoria, se deseja seguro facultativo (roubo/furto).

  - Escolhe a opção:

    - ✅ Com seguro completo (RCTR-C + RCF-DC)

    -  ❌ Somente seguro obrigatório (RCTR-C)

    -  📝 Ou assina um Termo de Recusa do seguro facultativo.

## 🧾 2. Fornecedor Emite a NF-e
- O fornecedor (quem vendeu a argamassa) gera a NF-e:

  - Destinatário: Cliente

  - Remetente: Fornecedor

- Gera o DANFE (documento impresso da NF-e).

- Entrega o DANFE e o arquivo XML:

  - Ao cliente (e-mail).

  - À TemCarga ou ao motorista (impressa ou digital) no momento da coleta.


## 🛠️ 3. TemCarga Organiza o Transporte

 - **A)** Verificação e Preparação
    - A equipe da TemCarga recebe os dados da carga e o XML/DANFE.

    - Valida a documentação.

    - Define o motorista.

- **B)** Contratação do Seguro

  - Se o cliente escolheu seguro facultativo, é feita a inclusão na apólice da transportadora ou é gerada uma apólice avulsa:

    - Envia dados da carga (valor, origem/destino, tipo, motorista) à seguradora.

    - Recebe número da apólice e protocolo.

  - Se o cliente não quiser o facultativo, apenas registra na apólice do RCTR-C (obrigatório).

  - Os dados do seguro são obrigatoriamente informados no CT-e.

- **C)** Documentos Fiscais
  - Geram o CIOT para o motorista autônomo.

  - Emitem o CT-e, informando:

    - Dados da carga (NF-e vinculada).

    - Dados do seguro (seguradora, nº da apólice, tipo de cobertura).

  - Geram o DACTE (versão impressa do CT-e).

  - Se necessário (ex.: viagens interestaduais), emitem o MDF-e, gerando o DAMDFE.

## 📦 **4**. Motorista Recebe os Documentos
- A TemCarga entrega ao motorista:

  - DANFE (do fornecedor).

  - DACTE (do CT-e, emitido por vocês ou por ele).

  - DAMDFE (do MDF-e, se aplicável).

  - Apólice ou certificado do seguro (caso seja exigido ou solicitado por fiscalização).

- Motorista carrega tudo no caminhão (impresso ou digital, conforme permitido).

## 🚚 **5**. Transporte e Entrega
  - O motorista:

    - Vai até o fornecedor e coleta a carga.

    - Realiza o transporte.

    - Entrega a carga no cliente final.

## ✅ **6**. Comprovação de Entrega.
  
  - O cliente assina:

    - O DANFE ou

    - Um comprovante de entrega separado (canhoto ou digital).

  - O motorista devolve o comprovante à TemCarga para fechamento do frete.


## **Termos explicados:**
- **NF-e (Nota Fiscal Eletrônica)**: Documento fiscal digital que registra a venda de produtos ou serviços. Nesse caso, o fornecedor emite a NF-e para formalizar a transação com o cliente.  
- **DANFE (Documento Auxiliar da Nota Fiscal Eletrônica)**: Documento impresso que acompanha a carga durante o transporte. Não é o documento fiscal, mas contém os dados principais da NF-e e serve como um comprovante da operação.
- **CIOT (Código de Identificação da Operação de Transporte)**: Código único gerado para identificar a operação de transporte de carga, conforme regulamentação da ANTT (Agência Nacional de Transportes Terrestres).
- **CT-e (Conhecimento de Transporte Eletrônico)**: Documento fiscal eletrônico que substitui o antigo Conhecimento de Transporte e é utilizado para formalizar a prestação de serviço de transporte.
- **MDF-e (Manifesto Eletrônico de Documentos Fiscais)**: Documento eletrônico que reúne as informações de transporte e os documentos fiscais relacionados à carga (como NF-e e CT-e). É utilizado para otimizar o processo de fiscalização.
- **DACTE (Documento Auxiliar do Conhecimento de Transporte Eletrônico)**: Documento auxiliar impresso que acompanha o CT-e, servindo como um comprovante da operação de transporte.
- **DAMDFE (Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais)**: Documento impresso que acompanha o MDF-e, similar ao DACTE, e é utilizado durante o transporte da carga.

## Pagamento do Motorista

Vamos utilizar a OpenPix para realizar pagamentos aos nossos motorista/caminhoneiro. Apenas caminhoneiros que utilizam Pix poderam trabalhar para nossa transportadora. 