
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