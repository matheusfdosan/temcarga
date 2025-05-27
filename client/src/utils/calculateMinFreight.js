const anttTable = {
  "Carga Geral": {
    2: { CCD: 3.6255, CC: 404.67 },
    3: { CCD: 4.593, CC: 493.25 },
    4: { CCD: 5.2636, CC: 541.33 },
    5: { CCD: 5.6013, CC: 498.04 },
    6: { CCD: 6.2628, CC: 532.13 },
    7: { CCD: 7.2119, CC: 728.74 },
    9: { CCD: 8.1626, CC: 789.41 },
  },
  "Granel sólido": {
    2: { CCD: 3.656, CC: 413.06 },
    3: { CCD: 4.629, CC: 503.16 },
    4: { CCD: 5.285, CC: 547.19 },
    5: { CCD: 5.6195, CC: 503.06 },
    6: { CCD: 6.2731, CC: 534.98 },
    7: { CCD: 7.2163, CC: 729.94 },
    9: { CCD: 8.1375, CC: 782.5 },
  },
  "Granel líquido": {
    2: { CCD: 3.7114, CC: 420.01 },
    3: { CCD: 4.7006, CC: 514.58 },
    4: { CCD: 5.494, CC: 588.12 },
    5: { CCD: 5.7648, CC: 526.44 },
    6: { CCD: 6.4089, CC: 555.76 },
    7: { CCD: 7.3706, CC: 755.8 },
    9: { CCD: 8.3015, CC: 811.04 },
  },
  "Frigorificada ou Aquecida": {
    2: { CCD: 4.2873, CC: 470.77 },
    3: { CCD: 5.3966, CC: 563.73 },
    4: { CCD: 6.2691, CC: 641.71 },
    5: { CCD: 6.6945, CC: 597.75 },
    6: { CCD: 7.4265, CC: 623.07 },
    7: { CCD: 8.6788, CC: 903.05 },
    9: { CCD: 9.748, CC: 961.91 },
  },
  "Perigosa (frigorificada ou aquecida)": {
    2: { CCD: 4.8379, CC: 570.02 },
    3: { CCD: 5.9472, CC: 662.98 },
    4: { CCD: 6.8507, CC: 751.48 },
    5: { CCD: 7.2761, CC: 707.52 },
    6: { CCD: 8.0081, CC: 732.84 },
    7: { CCD: 9.2967, CC: 1022.8 },
    9: { CCD: 10.4042, CC: 1092.2 },
  },
}

const cargoTypeMapping = {
  "Carga Geral": "Carga Geral",
  "Alimentos Perecíveis": "Frigorificada ou Aquecida",
  "Alimentos Não Perecíveis": "Carga Geral",
  "Carga Frigorificada": "Frigorificada ou Aquecida",
  "Produtos Farmacêuticos": "Frigorificada ou Aquecida",
  "Químicos Perigosos": "Perigosa (frigorificada ou aquecida)",
  Inflamáveis: "Perigosa (frigorificada ou aquecida)",
  "Construção Civil": "Granel sólido",
  Madeira: "Granel sólido",
  "Metal/Minerais": "Granel sólido",
  Eletrodomésticos: "Carga Geral",
  Móveis: "Carga Geral",
  Veículos: "Carga Geral",
  "Carga Viva": "Carga Geral",
  "Cargas a Granel (seca)": "Granel sólido",
  "Cargas a Granel (líquida)": "Granel líquido",
  "Produtos de Limpeza": "Carga Geral",
  "Tecidos e Roupas": "Carga Geral",
  "Papel e Celulose": "Carga Geral",
  Embalagens: "Carga Geral",
  Eletrônicos: "Carga Geral",
  "Carga Frágil": "Carga Geral",
  "Encomenda Expressa": "Carga Geral",
  "Mudança Residencial": "Carga Geral",
  "Carga Oversize (grande porte)": "Carga Geral",
}

// Função auxiliar para obter coordenadas a partir de CEPs (usando uma API de geocodificação)
async function getCoordinates(cep) {
  try {
    // Buscando endereço
    const addressFetch = await fetch(
      `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`
    )

    if (!addressFetch.ok) {
      throw new Error("Erro ao obter endereço")
    }
    const address = await addressFetch.json()

    if (address.length === 0) {
      throw new Error(`Nenhum resultado encontrado para o endereço ${cep}.`)
    }

    // Buscando coordenadas através do endereço
    const fullAddress = `${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}, Brasil`
    const coordsFetch = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        fullAddress
      )}`
    )

    if (!coordsFetch.ok) {
      throw new Error("Erro ao obter coordenadas para o CEP.")
    }
    const data = await coordsFetch.json()
    // console.log(data)

    if (data.length === 0) {
      throw new Error(`Nenhum resultado encontrado para o CEP ${cep}.`)
    }

    const { lat, lon } = data[0]
    return { lat, lon }
  } catch (error) {
    throw new Error(
      `Falha ao obter coordenadas para o CEP ${cep}: ${error.message}`
    )
  }
}

async function calculateMinFreight(formData, numAxles) {
  const originCEP = formData.location.origin.cep
  const destinationCEP = formData.location.destination.cep

  // Mapear tipo de carga
  let cargoType = formData.load_description.type
  if (!cargoTypeMapping[cargoType]) {
    throw new Error(`Tipo de carga '${cargoType}' não reconhecido.`)
  }
  let anttCargoType = cargoTypeMapping[cargoType]

  // Ajustar para perecível ou perigoso
  if (
    formData.load_description.features.perishable &&
    cargoType !== "Carga Frigorificada" &&
    cargoType !== "Produtos Farmacêuticos"
  ) {
    anttCargoType = "Frigorificada ou Aquecida"
  } else if (
    formData.load_description.features.perishable &&
    (cargoType === "Químicos Perigosos" || cargoType === "Inflamáveis")
  ) {
    anttCargoType = "Perigosa (frigorificada ou aquecida)"
  }

  // Obter coordenadas dos CEPs
  try {
    const originCoords = await getCoordinates(originCEP)
    const destinationCoords = await getCoordinates(destinationCEP)

    // Calcular distância usando OSRM
    const osrmUrl = `http://router.project-osrm.org/route/v1/driving/${originCoords.lon},${originCoords.lat};${destinationCoords.lon},${destinationCoords.lat}?overview=false`
    const distanceResponse = await fetch(osrmUrl)
    if (!distanceResponse.ok) {
      throw new Error("Erro ao consultar a API de distância do OSRM.")
    }
    const distanceData = await distanceResponse.json()
    if (
      !distanceData.routes ||
      !distanceData.routes[0] ||
      !distanceData.routes[0].distance
    ) {
      throw new Error("Distância não encontrada na resposta da API OSRM.")
    }
    const distance = distanceData.routes[0].distance / 1000 // Converter de metros para quilômetros

    // Calcular frete
    if (anttTable[anttCargoType] && anttTable[anttCargoType][numAxles]) {
      const { CCD, CC } = anttTable[anttCargoType][numAxles]
      const totalCost = CCD * distance + CC
      return {totalCost: totalCost.toFixed(2), distance}
    } else {
      throw new Error(
        `Tipo de carga '${anttCargoType}' ou número de eixos ${numAxles} não encontrado na tabela da ANTT.`
      )
    }
  } catch (error) {
    throw new Error(`Falha ao calcular o frete: ${error}`)
  }
}

export default calculateMinFreight
