# TemCarga

## O que é o TemCarga?

Já param para pensar como os produtos que vocês compram no mercado ou na internet chegam até vocês? Por trás de tudo que consumimos no Brasil, há um caminhoneiro dirigindo kilometros na estrada, com prazos curtos e muitas vezes em condições de trabalho injusto. E do outro lado, há os empresários que dependendem do transporte de cargas para manter seu negócio funcionando, enfrentando atrasos, preços abusivos e nenhuma forma de rastreamento de seu próprio material.

É por isso que criamos o TemCarga: uma plataforma que conecta aqueles que precisam enviar cargas com caminhoneiros autônomos de forma justa, fácil e totalmente tecnologica. Criamos essa plataforma para melhorar a mobilidade da logistica do Brasil, não criando mais um dispositivo tecnologico, mas sim utilizando algo que todo mundo já usa: o celular e o WhatsApp.

## Como funciona?

Tudo começa quando o cliente acessa nossa plataforma web, onde ele pode solicitar um frete, informando origem, destino, tipo da carga, peso, etc. Após o cliente informar sobre o serviço, ele recebe um orçamento instantâneo (com base na Tabela Mínima da ANTT) e enviar o solicitação no sistema para algum caminhoneiro aceitar.

Quanto ao caminhoneiro, ele terá que adicionar no celular dele o nosso número ao WhatsApp, fazer um cadastro e ver os serviços disponíveis, onde ele pode escolher o serviço e realizá-lo. Ao longo do serviço, tanto o caminhoneiro quanto o cliente recebem os documentos via PDF para manter dentro da lei.

Para o desenvolvimento da plataforma utilizamos 



---


Aqui está um roteiro em **3 partes**, pensado para **3 apresentadores**, com uma estrutura simples, clara e focada no problema de mobilidade que o *TemCarga* resolve:

---



## 📌 Parte 2 – Solução e Funcionamento (Apresentador 2)

1. **Fluxo de Uso – Cliente**

   * “O cliente acessa nosso site, informa origem, destino, tipo e peso da carga.”
   * “Recebe orçamento instantâneo baseado na Tabela Mínima da ANTT.”

2. **Fluxo de Uso – Caminhoneiro**

   * “O caminhoneiro usa nosso bot no WhatsApp:

     1. É notificado de fretes compatíveis.
     2. Aceita o serviço com um toque.
     3. Recebe CT-e/MDF-e e instruções pelo próprio chat.”

3. **Tecnologia-chave**

   * Front-end: React.js + Node.js.
   * Bot: whatsapp-web.js + IA leve (NLU) para interpretar mensagens.
   * Pagamento: OpenPix via API Python para pagamento automático após confirmação de entrega.

4. **Rastreamento em tempo real**

   * “O cliente vê no mapa a localização do caminhão, reduzindo incertezas e atrasos.”

---

## 📌 Parte 3 – Proposta de Valor e Impacto (Apresentador 3)

1. **Benefícios para Clientes e Caminhoneiros**

   * Clientes: previsibilidade, transparência e garantia de entrega.
   * Caminhoneiros: fretes justos (pagamento ≥ ANTT), sem taxa oculta, e gestão fácil via WhatsApp.

2. **Como resolvemos o problema de mobilidade**

   * **Transparência de rota**: rastreamento diminui espera e sobra logística.
   * **Otimização de encaixes**: bot sugere fretes próximos, reduz tempo ocioso e km rodado vazio.

3. **Modelo de Negócio & Impacto**

   * Taxa de 20% por frete (ex.: cliente paga R\$ 1.500 → caminhoneiro R\$ 1.200 + TemCarga R\$ 300).
   * Projeção piloto: 50 fretes no 1º mês (R\$ 15.000 receita) → 100 fretes no 3º mês (R\$ 30.000/mês).

4. **Próximos Passos e Escalabilidade**

   * Expandir rotas SP-MG e RJ-MG.
   * Desenvolver app leve de rastreamento offline.
   * Parcerias com grandes embarcadores e seguradoras.

5. **Encerramento / Call to Action**

   * “Com *TemCarga*, tornamos o transporte rodoviário de cargas mais justo, eficiente e tecnológico. Obrigado!”

---

Cada apresentador pode usar este roteiro como fio condutor, adaptando a linguagem e exemplos práticos para manter a plateia engajada. Bom TCC! 😃
