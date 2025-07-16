
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





    function atualizarDescricoes(categoriaSelect, descricaoSelect) {
        const categoria = categoriaSelect.value;
        descricaoSelect.innerHTML = '<option value="">Selecione uma descrição</option>';
        if (categoria in descricoesPorCategoria) {
            descricoesPorCategoria[categoria].forEach(descricao => {
                descricaoSelect.innerHTML += `<option value="${descricao}">${descricao}</option>`;
            });
        }
    }

   function calcularValorTotal() {
  const container = document.getElementById('itens-container');
  const items = container.querySelectorAll('.item');
  let total = 0;

  items.forEach(item => {
    const inputValor = item.querySelector('input[name="movel_valor[]"]');
    const inputQuantidade = item.querySelector('input[name="movel_quantidade[]"]');

    if (!inputValor || !inputQuantidade) return;

    const valorFormatado = inputValor.value.replace(/[^\d]/g, '');
    const valorNumerico = parseFloat(valorFormatado) / 100;

    const quantidade = parseInt(inputQuantidade.value, 10);

    if (!isNaN(valorNumerico) && !isNaN(quantidade)) {
      total += valorNumerico * quantidade;
    }
  });

  const inputTotal = document.getElementById('valor_total_declarado');
  if (inputTotal) {
    inputTotal.value = total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}


// formatar Valor
   function formatarValor(input) {
  const onlyDigits = input.value.replace(/[^\d]/g, '');
  const number = parseFloat(onlyDigits) / 100;
  if (!isNaN(number)) {
    input.value = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  } else {
    input.value = '';
  }
  calcularValorTotal();
}


// Adicionar item manual ou editar
let contadorItens = 0;
const container = document.getElementById('itens-container');

// Cria botão dinamicamente
const btnAdicionar = document.createElement('button');
btnAdicionar.type = 'button';
btnAdicionar.id = 'adicionar-item';
btnAdicionar.textContent = 'Adicionar Móvel';
btnAdicionar.style.display = 'none'; // escondido inicialmente

// Adiciona no DOM após o container
container.parentElement.appendChild(btnAdicionar);

// Define a função de adicionar item
function adicionarItem() {
  const newItem = document.createElement('div');
  newItem.className = 'item item_editar';
  const id = contadorItens++;

  newItem.innerHTML = `
    <label>Categoria:</label>
    <select name="movel_categoria[]" required>
      <option value="">Selecione uma categoria</option>
      ${Object.keys(descricoesPorCategoria).map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    </select>

    <label>Descrição do Móvel:</label>
    <select name="movel_descricao[]" required>
      <option value="">Selecione uma descrição</option>
    </select>

    <label>Quantidade:</label>
    <input type="number" name="movel_quantidade[]" required>

    <label>Valor (R$):</label>
    <input type="text" name="movel_valor[]" required placeholder="R$ 0,00">

    <label>Estado do Item:</label>
    <div class="radio-group">
      ${["Desmontado", "Embalada", "Amassado", "Normal", "Arranhado", "Solto"].map((estado, idx) => `
        <label><input type="radio" name="ep_${id}" value="${idx + 1}"> ${estado}</label>
      `).join('')}
    </div>

    <input type="hidden" name="movel_estado[]" value="">
    <button type="button" class="remover-item">Remover</button>
  `;

  container.appendChild(newItem);

  // Exibir botão se sumiu antes
  btnAdicionar.style.display = 'inline-block';

  // Referências
  const categoriaSelect = newItem.querySelector('select[name="movel_categoria[]"]');
  const descricaoSelect = newItem.querySelector('select[name="movel_descricao[]"]');
  const estadoInput = newItem.querySelector('input[name="movel_estado[]"]');

  categoriaSelect.onchange = () => {
    const anterior = descricaoSelect.value;
    atualizarDescricoes(categoriaSelect, descricaoSelect);

    if (!descricoesPorCategoria[categoriaSelect.value]?.includes(anterior)) {
      descricaoSelect.value = '';
      document.querySelectorAll('#itensSelecionadosContainer tbody tr').forEach(tr => {
        if (tr.cells[0]?.textContent === anterior) tr.remove();
      });
      document.querySelectorAll('input[name="itens"]').forEach(cb => {
        if (cb.value === anterior) cb.checked = false;
      });
      calcularTotal();
    }

    sincronizarEdicoes();
  };

  newItem.querySelectorAll(`input[type="radio"][name="ep_${id}"]`).forEach(radio => {
    radio.onchange = () => {
      if (radio.checked) estadoInput.value = radio.value;
    };
  });

  newItem.querySelector('input[name="movel_valor[]"]').addEventListener('input', function () {
    formatarValor(this);
  });

  newItem.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('change', calcularValorTotal);
    el.addEventListener('input', calcularValorTotal);
    el.addEventListener('change', sincronizarEdicoes);
    el.addEventListener('input', sincronizarEdicoes);
  });

  newItem.querySelector('.remover-item').onclick = () => {
    const nomeItem = descricaoSelect.value;
    container.removeChild(newItem);
    calcularValorTotal();

    document.querySelectorAll('input[name="itens"]').forEach(cb => {
      if (cb.value === nomeItem) cb.checked = false;
    });

    document.querySelectorAll('#itensSelecionadosContainer tbody tr').forEach(tr => {
      if (tr.cells[0]?.textContent === nomeItem) tr.remove();
    });

    if (container.querySelectorAll('.item').length === 0) {
      btnAdicionar.style.display = 'none';
    }

    calcularTotal();
  };
}

// Lógica do botão
btnAdicionar.onclick = adicionarItem;



// js/firebase.js -- main.js



//------------------------------------//
  import { auth, db } from "./firebase.js";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

document.getElementById('form-adicionar').onsubmit = async function (event) {
  event.preventDefault();

  const loadingMessage = document.createElement('div');
  loadingMessage.textContent = 'Adicionando item...';
  document.body.appendChild(loadingMessage);

  const formData = new FormData(event.target);
  const data = {
    transportadora: {
      nome: "TRANSKOTEMPO LTDA",
      cnpj: "59521601000192"
    },
    cliente: {
      nome: formData.get('cliente_nome'),
      telefone: formData.get('cliente_telefone'),
      endereco_origem: {
        endereco: formData.get('endereco_origem'),
        bairro: formData.get('bairro_origem'),
        cidade: formData.get('cidade_origem'),
        uf: formData.get('uf_origem'),
        complemento_origem: formData.get('tipo_origem'),
        andar_origem: formData.get('andar_origem'),
        elevador_origem: formData.get('elevador_origem'),
      },
      endereco_destino: {
        endereco: formData.get('endereco_destino'),
        bairro: formData.get('bairro_destino'),
        cidade: formData.get('cidade_destino'),
        uf: formData.get('uf_destino'),
        complemento_destino: formData.get('tipo_destino'),
        andar_destino: formData.get('andar_destino'),
        elevador_destino: formData.get('elevador_destino'),
      }
    },
    itens: Array.from(formData.getAll('movel_descricao[]')).map((descricao, i) => ({
      categoria: formData.getAll('movel_categoria[]')[i],
      descricao,
      quantidade: parseInt(formData.getAll('movel_quantidade[]')[i]),
      valor: parseFloat(formData.getAll('movel_valor[]')[i].replace(/[^\d]/g, '')) / 100,
      estado: formData.getAll('movel_estado[]')[i]
    })),
    valor_total_declarado: parseFloat(formData.get('valor_total_declarado').replace(/[^\d]/g, '')) / 100,
    observacao: formData.get('observacao'),
    data_local: new Date().toISOString(),
    assinaturas: {
      transportador: "",
      cliente: formData.get('cliente_nome'),
      email: formData.get('email'),
    }
  };

  try {
    const user = auth.currentUser;
    if (!user) throw new Error("Usuário não autenticado.");

    const userDocRef = doc(db, "users", user.email);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      throw new Error("Documento do usuário não encontrado.");
    }

    const userData = userDocSnap.data();

    if (userData.role !== "admin") {
      throw new Error("Acesso negado: usuário não é admin.");
    }

    const produtosColRef = collection(db, "produtos");
    await addDoc(produtosColRef, {
      ...data,
      criadoPor: user.email,
      criadoEm: serverTimestamp(),
    });

    loadingMessage.remove();
    alert("Item adicionado com sucesso.");
    window.location.href = 'index.html';

  } catch (error) {
    loadingMessage.remove();
    alert("Erro: " + error.message);
  }
};

//------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
  const categoriaSelect = document.querySelector('select[name="movel_categoria[]"]');
  const descricaoSelect = document.querySelector('select[name="movel_descricao[]"]');

  categoriaSelect.addEventListener('change', () => {
    atualizarDescricoes(categoriaSelect, descricaoSelect);
  });


  // Evento para calcular valor total ao digitar valores
  document.querySelectorAll('input[name="movel_valor[]"]').forEach(input => {
    input.addEventListener('input', calcularValorTotal);
  });

  // Evento para remover item
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remover-item')) {
      e.target.closest('.item').remove();
      calcularValorTotal();
    }
  });
});



// -------------------------------------------//

// segunda parte do prenchimento do checks 

 const containerItens = document.getElementById('itensDinamicos');
//  Criação dos elementos dinâmicos
    Object.entries(descricoesPorCategoria).forEach(([categoria, itens]) => {
      const grupo = document.createElement('fieldset');
      const legenda = document.createElement('legend');
      legenda.textContent = categoria;
      grupo.appendChild(legenda);

      itens.forEach((item, index) => {
        const id = `item-${categoria}-${index}`;
        const div = document.createElement('div');
        div.className = 'item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.name = 'itens';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = id;

        const iconName = iconesPorItem[item] || "inventory_2";
        label.innerHTML = `<span class="material-icons" aria-hidden="true" style="vertical-align:middle; color:#6366f1;">${iconName}</span> ${item}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        grupo.appendChild(div);
      });

      containerItens.appendChild(grupo);
    });


// -------------------------------------------//

//  Parte da Lista de itens dinâmicos selecionados
    (() => {
      const btnMostrar = document.getElementById('btnMostrar');
      const container = document.getElementById('itensSelecionadosContainer');
      const btnSalvar = document.getElementById('btnSalvar');
      const totalContainer = document.getElementById('totalContainer');
      const totalValue = document.getElementById('totalValue');
//  Função para mostrar os itens selecionados
      btnMostrar.addEventListener('click', () => {
  const checkboxes = Array.from(document.querySelectorAll('input[name="itens"]:checked'));
  container.innerHTML = '';
  totalContainer.style.display = 'none';
  btnSalvar.style.display = 'none';

  if (checkboxes.length === 0) {
    container.innerHTML = '<p class="no-items">Nenhum item selecionado.</p>';
    return;
  }

  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantidade</th>
        <th>Valor (R$)</th>
      </tr>
    </thead>
  `;
  const tbody = document.createElement('tbody');

  checkboxes.forEach(checkbox => {
    const tr = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.textContent = checkbox.value;
    tr.appendChild(tdNome);
    tr.dataset.itemId = `check-${checkbox.value}`; // um id relacionado à descrição


    const tdQtde = document.createElement('td');
    const inputQtde = document.createElement('input');
    inputQtde.type = 'number';
    inputQtde.min = '1';
    inputQtde.value = '1';
    tdQtde.appendChild(inputQtde);
    tr.appendChild(tdQtde);

    const tdValor = document.createElement('td');
    const inputValor = document.createElement('input');
    inputValor.type = 'text';
    inputValor.inputMode = 'numeric';
    inputValor.placeholder = 'R$ 0,00';
    inputValor.value = '0,00';

    inputValor.addEventListener('input', () => {
      formatarValor(inputValor);
      calcularTotal();
    });

    tdValor.appendChild(inputValor);
    tr.appendChild(tdValor);

    tbody.appendChild(tr);

    inputQtde.addEventListener('input', calcularTotal);
  });

  table.appendChild(tbody);
  container.appendChild(table);
  btnSalvar.style.display = 'inline-flex';
  totalContainer.style.display = 'block';
  calcularTotal();
});

// funçao para formatar o valor do input
function calcularTotal() {
  const linhas = container.querySelectorAll('tbody tr');
  let total = 0;

  linhas.forEach(tr => {
    const quantidade = Number(tr.cells[1].querySelector('input').value);
    const valorRaw = tr.cells[2].querySelector('input').value;
    const valor = parseFloat(valorRaw.replace(/[^\d]/g, '')) / 100;

    if (!isNaN(quantidade) && !isNaN(valor)) {
      total += quantidade * valor;
    }
  });

  totalValue.textContent = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}



// salvar os itens do check para adicionar ao inventario 
btnSalvar.addEventListener('click', () => {
  const linhas = container.querySelectorAll('tbody tr');
  if (linhas.length === 0) {
    alert('Nenhum item para salvar.');
    return;
  }

  for (const tr of linhas) {
    const nome = tr.cells[0].textContent;
    const quantidade = Number(tr.cells[1].querySelector('input').value);

    const valorStr = tr.cells[2].querySelector('input').value;
    const valor = parseFloat(valorStr.replace(/[^\d]/g, '')) / 100;

    if (quantidade < 1 || isNaN(quantidade)) {
      alert(`Quantidade inválida para o item "${nome}"`);
      return;
    }

    if (valor < 0 || isNaN(valor)) {
      alert(`Valor inválido para o item "${nome}"`);
      return;
    }

    // Encontrar categoria a partir da descrição
    let categoriaEncontrada = '';
    for (const [cat, descricoes] of Object.entries(descricoesPorCategoria)) {
      if (descricoes.includes(nome)) {
        categoriaEncontrada = cat;
        break;
      }
    }

    // Verifica se já existe um item com essa descrição no formulário
    let itemExistente = null;
    const items = document.querySelectorAll('#itens-container .item');

    items.forEach(item => {
      const desc = item.querySelector('select[name="movel_descricao[]"]')?.value;
      if (desc === nome) itemExistente = item;
    });

    if (itemExistente) {
      // Atualiza o item existente
      const categoriaSelect = itemExistente.querySelector('select[name="movel_categoria[]"]');
      const descricaoSelect = itemExistente.querySelector('select[name="movel_descricao[]"]');
      const quantidadeInput = itemExistente.querySelector('input[name="movel_quantidade[]"]');
      const valorInput = itemExistente.querySelector('input[name="movel_valor[]"]');

      if (categoriaEncontrada) {
        categoriaSelect.value = categoriaEncontrada;
        atualizarDescricoes(categoriaSelect, descricaoSelect);
        descricaoSelect.value = nome;
      }

      quantidadeInput.value = quantidade;
      valorInput.value = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    } else {
      // Cria novo item
      document.getElementById('adicionar-item').click();

      const items = document.querySelectorAll('#itens-container .item');
      const lastItem = items[items.length - 1];

      const categoriaSelect = lastItem.querySelector('select[name="movel_categoria[]"]');
      const descricaoSelect = lastItem.querySelector('select[name="movel_descricao[]"]');
      const quantidadeInput = lastItem.querySelector('input[name="movel_quantidade[]"]');
      const valorInput = lastItem.querySelector('input[name="movel_valor[]"]');

      if (categoriaEncontrada) {
        categoriaSelect.value = categoriaEncontrada;
        atualizarDescricoes(categoriaSelect, descricaoSelect);
        descricaoSelect.value = nome;
      }

      quantidadeInput.value = quantidade;
      valorInput.value = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
  }

  calcularValorTotal();
  sincronizarEdicoes(); // Garante que a lista "mostrar" seja atualizada também

  alert('Itens adicionados com sucesso!');
});



})();

function sincronizarEdicoes() {
  const itens = document.querySelectorAll('#itens-container .item');
  const checkboxes = document.querySelectorAll('input[name="itens"]');
  const tbody = document.querySelector('#itensSelecionadosContainer tbody');

  if (!tbody) return;

  itens.forEach(item => {
    const descricaoSelect = item.querySelector('select[name="movel_descricao[]"]');
    const descricaoAtual = descricaoSelect.value;
    const descricaoAnterior = descricaoSelect.dataset.original || descricaoAtual;
    const quantidade = item.querySelector('input[name="movel_quantidade[]"]').value;
    const valorRaw = item.querySelector('input[name="movel_valor[]"]').value;

    if (!descricaoAtual) return;

    // Atualiza checkbox
    checkboxes.forEach(cb => {
      cb.checked = (cb.value === descricaoAtual);
    });

    // Remove linha anterior se mudou
    if (descricaoAtual !== descricaoAnterior) {
      const linhaAnterior = tbody.querySelector(`tr[data-item-id="check-${descricaoAnterior}"]`);
      if (linhaAnterior) linhaAnterior.remove();
    }

    // Remove linha duplicada
    const linhasDuplicadas = tbody.querySelectorAll(`tr[data-item-id="check-${descricaoAtual}"]`);
    linhasDuplicadas.forEach((linha, idx) => {
      if (idx > 0) linha.remove(); // mantém só a primeira
    });

    let linhaExistente = tbody.querySelector(`tr[data-item-id="check-${descricaoAtual}"]`);
    const valor = parseFloat(valorRaw.replace(/[^\d]/g, '') || 0) / 100;
    const valorFormatado = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    if (linhaExistente) {
      linhaExistente.cells[0].textContent = descricaoAtual;
      linhaExistente.cells[1].querySelector('input').value = quantidade;
      linhaExistente.cells[2].querySelector('input').value = valorFormatado;
    } else {
      const tr = document.createElement('tr');
      tr.dataset.itemId = `check-${descricaoAtual}`;
      tr.innerHTML = `
        <td>${descricaoAtual}</td>
        <td><input type="number" value="${quantidade}" min="1"></td>
        <td><input type="text" value="${valorFormatado}" placeholder="R$ 0,00" inputmode="numeric"></td>
      `;
      tbody.appendChild(tr);

      const inputValor = tr.querySelector('input[type="text"]');
      inputValor.addEventListener('input', () => {
        formatarValor(inputValor);
        calcularTotal();
      });

      tr.querySelector('input[type="number"]').addEventListener('input', calcularTotal);
    }

    descricaoSelect.dataset.original = descricaoAtual;
  });

  const algumaLinha = tbody.querySelectorAll('tr').length > 0;
  document.getElementById('totalContainer').style.display = algumaLinha ? 'block' : 'none';
  document.getElementById('btnSalvar').style.display = algumaLinha ? 'inline-flex' : 'none';

  if (!algumaLinha) {
    document.getElementById('itensSelecionadosContainer').innerHTML = '<p class="no-items">Nenhum item selecionado.</p>';
  }

  calcularTotal();
}



// -------------------------------------------//

// Parte onde Formata no formato de Email

  const telefoneInput = document.getElementById('cliente_telefone');

  telefoneInput.addEventListener('input', function (e) {
    let value = telefoneInput.value.replace(/\D/g, '');

    // Limita a 11 dígitos (2 DDD + 9 número)
    if (value.length > 11) value = value.slice(0, 11);

    // Aplica a máscara
    let formatted = value;

    if (value.length > 0) {
      formatted = `(${value.slice(0, 2)}`;
    }
    if (value.length >= 3) {
      formatted += `) ${value.slice(2, 7)}`;
    }
    if (value.length >= 8) {
      formatted += `-${value.slice(7)}`;
    }

    telefoneInput.value = formatted;
  });

  // Impede que o usuário trave ao apagar parênteses ou traço
  telefoneInput.addEventListener('keydown', function (e) {
    const key = e.key;
    if ((key === 'Backspace' || key === 'Delete')) {
      const cursor = telefoneInput.selectionStart;
      const prevChar = telefoneInput.value[cursor - 1];

      if (['(', ')', '-', ' '].includes(prevChar)) {
        // Pula o caractere formatador ao apagar
        telefoneInput.setSelectionRange(cursor - 1, cursor - 1);
      }
    }
  });

 const dddInfo = document.getElementById('ddd-info');

  telefoneInput.addEventListener('input', function () {
    const ddd = telefoneInput.value.replace(/\D/g, '').slice(0, 2);
    const entry = DDD_LIST.find(item => item.ddd === ddd);

    if (entry) {
      dddInfo.textContent = `${entry.estado} - ${entry.regiao}`;
    } else {
      dddInfo.textContent = '';
    }
  });

// -------------------------------------------//

// Parte do Email

 const emailInput = document.getElementById('email');

  emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    const isValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

    emailInput.style.borderColor = isValid ? '' : 'red';
  });

// -------------------------------------------//

// Parte do Preenchimento

const elevador_origem = document.querySelector('input[name="elevador_origem"]:checked')?.value || "nao";
const elevador_destino = document.querySelector('input[name="elevador_destino"]:checked')?.value || "nao";
console.log("Origem:", elevador_origem);  // "sim" ou "nao"
console.log("Destino:", elevador_destino);  // "sim" ou "nao"

// -------------------------------------------//

// Parte da animação
   AOS.init();
// -------------------------------------------//

// Parte do Preenchimento 2
  const mapaCategorias = {
  "1": "ESTAR E JANTAR",
  "2": "DORMITÓRIO",
  "3": "ESCRITÓRIO",
  "4": "COZINHA / ÁREA",
  "5": "DIVERSOS",
  "6": "VEÍCULOS" // Ou OUTROS, conforme sua estrutura
};

const radios = document.querySelectorAll('input[name="Visor_fieldset"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const categoriaSelecionada = mapaCategorias[radio.value];
    const fieldsets = document.querySelectorAll('#itensDinamicos fieldset');

    fieldsets.forEach(fs => {
      const titulo = fs.querySelector('legend')?.textContent;
      if (titulo === categoriaSelecionada) {
        fs.classList.remove('oculto');
      } else {
        fs.classList.add('oculto');
      }
    });
  });
});

   // Ativar visibilidade inicial com base no checked
document.addEventListener('DOMContentLoaded', () => {
  const checkedRadio = document.querySelector('input[name="Visor_fieldset"]:checked');
  if (checkedRadio) {
    const categoriaSelecionada = mapaCategorias[checkedRadio.value];
    const fieldsets = document.querySelectorAll('#itensDinamicos fieldset');

    fieldsets.forEach(fs => {
      const titulo = fs.querySelector('legend')?.textContent;
      if (titulo === categoriaSelecionada) {
        fs.classList.remove('oculto');
      } else {
        fs.classList.add('oculto');
      }
    });
  }
});
