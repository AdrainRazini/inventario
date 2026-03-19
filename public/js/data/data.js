
    const descricoesPorCategoria = {
    "ESTAR E JANTAR": [
    "Abajour", "Aparelho-Som", "Ar-Condicionado", "Arranjos-Ornamentais", "Banco-Piano", "Banqueta", "Bar", "Biombo", 
    "Buffet-Pequeno", "Buffet-Grande", "Buffet-com-Cristal", "CD", "Cadeira-Balanço", "Cadeira-de-Braço", "Cadeira-de-Criança", 
    "Cadeira-Simples", "Caixa-de-Som-Peq", "Caixa-de-Som-Gde", "Carrinho-de-Cha", "Console", "Cristaleira", "Discos", 
    "DVD-Player", "DVD", "Espelhos", "Estante-Alta", "Estante-Baixa", "Lustre-Luminaria", "Mármore-Granito", "Mesa-de-Centro", 
    "Mesa-Dobravel", "Mesa-Elastica", "Mesa-Jantar", "Mesa-Lateral", "Mesa-de-Telefone", "Mesa-TV", "Piano-Armario", "Piano-Apartamento", "Piano-Cauda", "Poltrona", 
    "Rack", "Radio", "Relogio-de-Parede", "Sofa-2-Almofadas", "Sofa-3-Almofadas", "Sofa-4-Almofadas", 
    "Tapete-Pequeno", "Tapete-Grande", "TV-Preto-e-Branco", "TV-Cores", "Vídeo-Cassete", "Vidro-Mesa"
  ],
   "DORMITÓRIO": [
    "Arca-Baú", "Ar-Condicionado", "Armário-2-Portas", "Armário-3-Portas", "Armário-4-Portas", "Armário-Duplex", "Cama-Beliche", 
    "Cama-Berço", "Cama-Casal", "Cama-Criança", "Cama-Solteiro", "Cama-Dobrável", "Carrinho-Bebê", "Cesto-para-Roupas", "Colchão-Berço", "Colchão-Casal", 
    "Colchão-Solteiro", "Cômoda-Penteadeira", "Mala-Pequena", "Mala-Grande", "Maquina-Costura", "Mesa-Cabeceira", "Sofa-Cama"
  ],
  "ESCRITÓRIO": [
    "Armário-de-Aço", "Arquivo", "Cadeira-Estofada", "Calculadora-Manual", "Calculadora-Elétrica", "Calculadora-Eletrônica",  "Cofre",
    "Computador", "Escrivaninha-Grande", "Escrivaninha-Pequena", "Escrivaninha-em-L", "Estante-Madeira", "Estante-Aço", "Formulários-DVS", "Impressora", "Máquina-de-Escrever", 
    "Máquina-Elétrica","Material-Escritorio", "Mesa-de-Reunião", "Monitor"
  ],
  "COZINHA / ÁREA": [
    "Aquecedor", "Armário-Alto", "Armário-Baixo", "Armário-Parede", "Balança","Batedeira","Botijao-de-Gas", "Enceradeira",  "Espremedor", "Exaustor",
   "Forno" , "Filtro", "Fogão", "Freezer", "Geladeira", "Lava-Louças", "Lava-Roupas", "Liquidificador", "Mesa", "Microondas", "Moedor", "Secadora",
   "Sucata"
    
  ],
  "DIVERSOS": [
    "Artigos-Esportivos","Aspirador-de-Pó", "Bebidas-Lacradas", "Bicicleta","Máquina-de-Lavar", "Cortinas", "Cristais", "Esculturas", "Ferramentas", "Filmadora",
     "Instrumentos-Musicais", "Livros", "Louças", "Objeto-Uso-Pessoal", "Perfume-Maq", "Porcelana", "Prataria", "Projetor", "Quadros-e-Telas", "Roupas-Pessoais", "Cama","Mesa", "Banho"
   
  ],
  "VEÍCULOS": [
    "Automovel", "Moto"
  ],
  "OUTROS (ESPECIFICAR ABAIXO)":
  [
    "Nada"
  ]
}
;
   

 const iconesPorItem = {

//ESTAR E JANTAR

  "Abajour": "light",
  "Aparelho-Som": "speaker",
  "Ar-Condicionado": "ac_unit",
  "Arranjos-Ornamentais": "grass",
  "Banco-Piano": "event_seat",
  "Banqueta": "chair",
  "Bar": "local_bar",
  "Biombo": "privacy_tip",
  "Buffet-Pequeno": "kitchen",
  "Buffet-Grande": "kitchen",
  "Buffet-com-Cristal": "wine_bar",
  "CD": "disc_full",
  "Cadeira-Balanço": "deck",
  "Cadeira-de-Braço": "deck",
  "Cadeira-de-Criança": "child_friendly",
  "Cadeira-Simples": "chair",
  "Caixa-de-Som-Peq": "speaker_group",
  "Caixa-de-Som-Gde": "speaker_group",
  "Carrinho-de-Cha": "restaurant_menu",
  "Console": "gamepad",
  "Cristaleira": "window",
  "Discos": "disc_full",
  "DVD-Player": "disc_full",
  "DVD": "disc_full",
  "Espelhos": "photo_camera_back",
  "Estante-Alta": "view_sidebar",
  "Estante-Baixa": "view_sidebar",
  "Lustre-Luminaria": "light",
  "Mármore-Granito": "texture",
  "Mesa-de-Centro": "table_bar",
  "Mesa-Dobravel": "table_bar",
  "Mesa-Elastica": "table_bar",
  "Mesa-Jantar": "table_restaurant",
  "Mesa-Lateral": "table_bar",
  "Mesa-de-Telefone": "call",
  "Mesa-TV": "tv",
  "Piano-Armario": "piano",
  "Piano-Apartamento": "piano",
  "Piano-Cauda": "piano",
  "Poltrona": "weekend",
  "Rack": "storage",
  "Radio": "radio",
  "Relogio-de-Parede": "schedule",
  "Sofa-2-Almofadas": "weekend",
  "Sofa-3-Almofadas": "weekend",
  "Sofa-4-Almofadas": "weekend",
  "Tapete-Pequeno": "bolt",
  "Tapete-Grande": "bolt",
  "TV-Preto-e-Branco": "tv",
  "TV-Cores": "tv",
  "Vídeo-Cassete": "video_library",
  "Vidro-Mesa": "window",

 //DORMITÓRIO

  "Arca-Baú": "inventory_2",
  "Ar-Condicionado": "ac_unit",
  "Armário-2-Portas": "kitchen",
  "Armário-3-Portas": "kitchen",
  "Armário-4-Portas": "kitchen",
  "Armário-Duplex": "kitchen",
  "Cama-Beliche": "bed",
  "Cama-Berço": "crib",
  "Cama-Casal": "bed",
  "Cama-Criança": "bed",
  "Cama-Solteiro": "bed",
  "Cama-Dobrável": "bed",
  "Carrinho-Bebê": "child_friendly",
  "Cesto-para-Roupas": "view_headline",
  "Colchão-Berço": "crib",
  "Colchão-Casal": "bed",
  "Colchão-Solteiro": "bed",
  "Cômoda-Penteadeira": "view_headline",  // sem ícone exato, usei similar
  "Mala-Pequena": "work_history",
  "Mala-Grande": "work_history",
  "Maquina-Costura": "design_services",
  "Mesa-Cabeceira": "table_bar", // não existe, pode usar "table_bar"
  "Sofa-Cama": "weekend",

//ESCRITÓRIO

 "Armário-de-Aço": "inventory_2",
  "Arquivo": "folder",
  "Cadeira-Estofada": "event_seat",
  "Calculadora-Manual": "calculate",
  "Calculadora-Elétrica": "calculate",
  "Calculadora-Eletrônica": "calculate",
  "Cofre": "lock",
  "Computador": "computer",
  "Escrivaninha-Grande": "desk",
  "Escrivaninha-Pequena": "desk",
  "Escrivaninha-em-L": "desk",
  "Estante-Madeira": "shelves", // abstrato
  "Estante-Aço": "shelves",
  "Formulários-DVS": "description",
  "Impressora": "print",
  "Máquina-de-Escrever": "keyboard_alt", // similar
  "Máquina-Elétrica": "electrical_services",
  "Material-Escritorio": "draw",
  "Mesa-de-Reunião": "meeting_room",
  "Monitor": "monitor",


//COZINHA / ÁREA

 "Aquecedor": "heat_pump", // ou "thermostat"
  "Armário-Alto": "kitchen",
  "Armário-Baixo": "kitchen",
  "Armário-Parede": "kitchen", // reaproveitado
  "Balança": "monitor_weight",
  "Batedeira": "blender",
  "Botijao-de-Gas": "propane",
  "Enceradeira": "cleaning_services", // genérico
  "Espremedor": "blender", // mesmo ícone de batedeira
  "Exaustor": "air", // ícone abstrato de ventilação
  "Forno": "monitor_weight",
  "Filtro": "filter_alt", // genérico
  "Fogão": "restaurant",
  "Freezer": "ac_unit",
  "Geladeira": "kitchen",
  "Lava-Louças": "countertops", // pode usar "sink" também
  "Lava-Roupas": "monitor_weight",
  "Liquidificador": "blender",
  "Mesa": "table_restaurant",
  "Microondas": "microwave",
  "Moedor": "restaurant_menu", // ou "science"
  "Secadora": "dry", // ícone real de secadora
  "Sucata": "delete", // representando descarte ou algo velho

//DIVERSOS
  "Artigos-Esportivos": "sports_soccer",
  "Aspirador-de-Pó": "cleaning_services",
  "Bebidas-Lacradas": "local_bar",
  "Bicicleta": "directions_bike",
  "Cortinas": "window",
  "Cristais": "auto_awesome", // efeito brilhante
  "Esculturas": "architecture",
  "Ferramentas": "build",
  "Filmadora": "videocam",
  "Instrumentos-Musicais": "music_note",
  "Livros": "menu_book",
  "Louças": "restaurant", // ou "table_restaurant"
  "Objeto-Uso-Pessoal": "person",
  "Perfume-Maq": "science", // ou "local_florist"
  "Porcelana": "emoji_objects", // ou "kitchen"
  "Prataria": "emoji_events",
  "Projetor": "video_settings",
  "Quadros-e-Telas": "photo",
  "Roupas-Pessoais": "checkroom",
  "Cama": "bed",
  "Mesa": "table_restaurant",
  "Banho": "bathtub",

//VEÍCULOS
  "Automovel": "directions_car",
  "Moto": "two_wheeler"
    };


const DDD_LIST = [
  { ddd: "11", estado: "São Paulo", regiao: "Região Metropolitana de São Paulo / Região Metropolitana de Jundiaí / Região Geográfica Imediata de Bragança Paulista" },
  { ddd: "12", estado: "São Paulo", regiao: "Região Metropolitana do Vale do Paraíba e Litoral Norte" },
  { ddd: "13", estado: "São Paulo", regiao: "Região Metropolitana da Baixada Santista / Vale do Ribeira" },
  { ddd: "14", estado: "São Paulo", regiao: "Avaré / Bauru / Botucatu / Jaú / Lins / Marília / Ourinhos" },
  { ddd: "15", estado: "São Paulo", regiao: "Itapetininga / Itapeva / Sorocaba / Tatuí" },
  { ddd: "16", estado: "São Paulo", regiao: "Araraquara / Franca / Jaboticabal / Ribeirão Preto / São Carlos / Sertãozinho" },
  { ddd: "17", estado: "São Paulo", regiao: "Barretos / Catanduva / Fernandópolis / Jales / São José do Rio Preto / Votuporanga" },
  { ddd: "18", estado: "São Paulo", regiao: "Andradina / Araçatuba / Assis / Birigui / Dracena / Presidente Prudente" },
  { ddd: "19", estado: "São Paulo", regiao: "Americana / Campinas / Limeira / Piracicaba / Rio Claro / São João da Boa Vista" },
  { ddd: "21", estado: "Rio de Janeiro", regiao: "Rio de Janeiro e Região Metropolitana / Teresópolis" },
  { ddd: "22", estado: "Rio de Janeiro", regiao: "Cabo Frio / Campos dos Goytacazes / Itaperuna / Macaé / Nova Friburgo" },
  { ddd: "24", estado: "Rio de Janeiro", regiao: "Angra dos Reis / Petrópolis / Volta Redonda / Piraí" },
  { ddd: "27", estado: "Espírito Santo", regiao: "Vitória e Região Metropolitana / Colatina / Linhares / Santa Maria de Jetibá" },
  { ddd: "28", estado: "Espírito Santo", regiao: "Cachoeiro de Itapemirim / Castelo / Itapemirim / Marataízes" },
  { ddd: "31", estado: "Minas Gerais", regiao: "Belo Horizonte e Região Metropolitana / Conselheiro Lafaiete / Ipatinga / Viçosa" },
  { ddd: "32", estado: "Minas Gerais", regiao: "Barbacena / Juiz de Fora / Muriaé / São João del-Rei / Ubá" },
  { ddd: "33", estado: "Minas Gerais", regiao: "Almenara / Caratinga / Governador Valadares / Manhuaçu / Teófilo Otoni" },
  { ddd: "34", estado: "Minas Gerais", regiao: "Araguari / Araxá / Patos de Minas / Uberlândia / Uberaba" },
  { ddd: "35", estado: "Minas Gerais", regiao: "Alfenas / Guaxupé / Lavras / Poços de Caldas / Pouso Alegre / Varginha" },
  { ddd: "37", estado: "Minas Gerais", regiao: "Bom Despacho / Divinópolis / Formiga / Itaúna / Pará de Minas" },
  { ddd: "38", estado: "Minas Gerais", regiao: "Curvelo / Diamantina / Montes Claros / Pirapora / Unaí" },
  { ddd: "41", estado: "Paraná", regiao: "Curitiba e Região Metropolitana" },
  { ddd: "42", estado: "Paraná", regiao: "Ponta Grossa / Guarapuava" },
  { ddd: "43", estado: "Paraná", regiao: "Apucarana / Londrina" },
  { ddd: "44", estado: "Paraná", regiao: "Maringá / Campo Mourão / Umuarama" },
  { ddd: "45", estado: "Paraná", regiao: "Cascavel / Foz do Iguaçu" },
  { ddd: "46", estado: "Paraná", regiao: "Francisco Beltrão / Pato Branco" },
  { ddd: "47", estado: "Santa Catarina", regiao: "Balneário Camboriú / Blumenau / Itajaí / Joinville" },
  { ddd: "48", estado: "Santa Catarina", regiao: "Florianópolis e Região Metropolitana / Criciúma" },
  { ddd: "49", estado: "Santa Catarina", regiao: "Caçador / Chapecó / Concórdia / Lages" },
  { ddd: "51", estado: "Rio Grande do Sul", regiao: "Porto Alegre e Região Metropolitana / Santa Cruz do Sul / Litoral Norte" },
  { ddd: "53", estado: "Rio Grande do Sul", regiao: "Pelotas / Rio Grande" },
  { ddd: "54", estado: "Rio Grande do Sul", regiao: "Caxias do Sul / Passo Fundo" },
  { ddd: "55", estado: "Rio Grande do Sul", regiao: "Santa Maria / Santana do Livramento / Santo Ângelo / Uruguaiana" },
  { ddd: "61", estado: "Distrito Federal/Goiás", regiao: "Todo o Distrito Federal e alguns municípios da RIDE" },
  { ddd: "62", estado: "Goiás", regiao: "Goiânia e Região Metropolitana / Anápolis / Niquelândia / Porangatu" },
  { ddd: "63", estado: "Tocantins", regiao: "Todo o estado" },
  { ddd: "64", estado: "Goiás", regiao: "Caldas Novas / Catalão / Itumbiara / Rio Verde" },
  { ddd: "65", estado: "Mato Grosso", regiao: "Cuiabá e Região Metropolitana" },
  { ddd: "66", estado: "Mato Grosso", regiao: "Rondonópolis / Sinop" },
  { ddd: "67", estado: "Mato Grosso do Sul", regiao: "Todo o estado" },
  { ddd: "68", estado: "Acre", regiao: "Todo o estado" },
  { ddd: "69", estado: "Rondônia", regiao: "Todo o estado" },
  { ddd: "71", estado: "Bahia", regiao: "Salvador e Região Metropolitana" },
  { ddd: "73", estado: "Bahia", regiao: "Eunápolis / Ilhéus / Porto Seguro / Teixeira de Freitas" },
  { ddd: "74", estado: "Bahia", regiao: "Irecê / Jacobina / Juazeiro / Xique-Xique" },
  { ddd: "75", estado: "Bahia", regiao: "Alagoinhas / Feira de Santana / Paulo Afonso / Valença" },
  { ddd: "77", estado: "Bahia", regiao: "Barreiras / Bom Jesus da Lapa / Guanambi / Vitória da Conquista" },
  { ddd: "79", estado: "Sergipe", regiao: "Todo o estado" },
  { ddd: "81", estado: "Pernambuco", regiao: "Recife e Região Metropolitana / Caruaru" },
  { ddd: "82", estado: "Alagoas", regiao: "Todo o estado" },
  { ddd: "83", estado: "Paraíba", regiao: "Todo o estado" },
  { ddd: "84", estado: "Rio Grande do Norte", regiao: "Todo o estado" },
  { ddd: "85", estado: "Ceará", regiao: "Fortaleza e Região Metropolitana" },
  { ddd: "86", estado: "Piauí", regiao: "Teresina e Grande Teresina / Parnaíba" },
  { ddd: "87", estado: "Pernambuco", regiao: "Garanhuns / Petrolina / Salgueiro / Serra Talhada" },
  { ddd: "88", estado: "Ceará", regiao: "Juazeiro do Norte / Sobral" },
  { ddd: "89", estado: "Piauí", regiao: "Picos / Floriano" },
  { ddd: "91", estado: "Pará", regiao: "Belém e Região Metropolitana" },
  { ddd: "92", estado: "Amazonas", regiao: "Manaus / Região Metropolitana / Parintins" },
  { ddd: "93", estado: "Pará", regiao: "Santarém / Altamira" },
  { ddd: "94", estado: "Pará", regiao: "Marabá" },
  { ddd: "95", estado: "Roraima", regiao: "Todo o estado" },
  { ddd: "96", estado: "Amapá", regiao: "Todo o estado" },
  { ddd: "97", estado: "Amazonas", regiao: "Interior do estado" },
  { ddd: "98", estado: "Maranhão", regiao: "São Luís e Região Metropolitana" },
  { ddd: "99", estado: "Maranhão", regiao: "Caxias / Codó / Imperatriz" }
];

 export { descricoesPorCategoria, iconesPorItem, DDD_LIST };