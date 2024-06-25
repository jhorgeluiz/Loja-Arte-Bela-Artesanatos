
function CasaHobbit() {
    // alert('Você será direcionado para o WhatsApp do proprietário!')
    // let img = document.getElementsByTagName('img')
    // let numero = '55085987150712'
    // let mensagem = 'Olá Arte Bela, quero comprar! Casa Hobbit';
    // let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    // window.location.href = url
    
    alert('Você será direcionado para o WhatsApp do proprietário!');
    
    // Obtém o elemento da imagem pelo ID
    let img = document.getElementById('img');
    
    // Pega o URL da imagem
    let imgURL = img.src;
    
    // Número de telefone e mensagem
    let numero = '55085987150712';
    let mensagem = 'Olá Arte Bela, quero comprar! Casa Hobbit';
    
    // Inclui o URL da imagem na mensagem
    let mensagemComImagem = `${mensagem} Veja a imagem aqui: ${imgURL}`;
    
    // Cria a URL do WhatsApp com a mensagem codificada
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemComImagem)}`;
    
    // Redireciona o usuário para a URL do WhatsApp
    window.location.href = url;
    
    
}



function valores_entrar() {
    let valores = document.getElementById('valores')
    let res = document.getElementById('res')
    if (valores == MouseEvent.mouseenter) {
        res.innerHTML = `<p class="texto">Aqui no ARTE BELA ARTESANATOS, cada peça é criada com dedicação e paixão, refletindo a beleza e a singularidade do trabalho artesanal. Oferecemos produtos que não são apenas belos, mas também carregam uma história e uma alma própria.</p>`
    } 
}
function valores_sair() {
    let sair = document.getElementById('sair')
    let res = document.getElementById('res')
    if (sair == MouseEvent.mouseout) {
        res.innerHTML = ''
    } 
}

function missao_entrar() {
    let missao = document.getElementById('missao')
    let res = document.getElementById('res')
    if (missao == MouseEvent.mouseenter) {
        res.innerHTML = `<p class="texto">Nossa missão é trazer a beleza do artesanato para sua vida cotidiana, oferecendo produtos que não só embelezam seu espaço, mas também trazem alegria e autenticidade. Acreditamos que cada peça artesanal tem o poder de conectar pessoas e contar histórias, e é isso que queremos compartilhar com você.</p>`
    } 
}
function missao_sair() {
    let sair = document.getElementById('sair')
    let res = document.getElementById('res')
    if (sair == MouseEvent.mouseout) {
        res.innerHTML = ''
    } 
}

function produtos_entrar() {
    let produtos = document.getElementById('produtos')
    let res = document.getElementById('res')
    if (produtos == MouseEvent.mouseenter) {
        res.innerHTML = `<p class="texto">Visite nossa coleção e descubra a peça perfeita que combina com seu estilo e personalidade. Desde peças    decorativas até utilitárias, cada item é uma obra  de arte criada com carinho.</p>`
    } 
}
function produtos_sair() {
    let sair = document.getElementById('sair')
    let res = document.getElementById('res')
    if (sair == MouseEvent.mouseout) {
        res.innerHTML = ''
    } 
}


// ===================script select==================
document.getElementById('select').addEventListener('change', function() {
    let ordem = this.value
    let itemsContainer = document.getElementById('itemsContainer')
    let items = Array.from(itemsContainer.getElementsByClassName('container_conteudo'))
    items.sort(function(a, b) {
        let precoA = parseFloat(a.getAttribute('data-price'))
        let precoB = parseFloat(b.getAttribute('data-price'))
        if (ordem === 'asc') {
            return precoA - precoB
        } else {
            return precoB - precoA
        }
    })

    while (itemsContainer.firstChild) {  // Removendo itens do container
        itemsContainer.removeChild(itemsContainer.firstChild)
    }

    items.forEach(function(item) {  // Adicionando itens ordenados de volta ao container
        itemsContainer.appendChild(item)
    })
})
// ===================script select==================