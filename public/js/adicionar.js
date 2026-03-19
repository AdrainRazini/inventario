import { descricoesPorCategoria, iconesPorItem, DDD_LIST } from "./data/data.js";

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


import { auth, db } from "./Auth.js";
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
    //if (!user) throw new Error("Usuário não autenticado.");

    // Você pode até buscar o doc do usuário para obter dados (ex: nome)
    // mas para criar não precisa verificar role
    // const userDocRef = doc(db, "users", user.email);
    // const userDocSnap = await getDoc(userDocRef);
    // if (!userDocSnap.exists()) throw new Error("Documento do usuário não encontrado.");

    const produtosColRef = collection(db, "produtos");

    await addDoc(produtosColRef, {
    ...data,
    criadoPor: user ? user.email : "anonimo",
    uid: user ? user.uid : null,
    publico: user ? false : true,
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
     if (cb.value === descricaoAtual) {
        cb.checked = true;
      }
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
