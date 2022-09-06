// on page load new deck is fetched
const pile = document.getElementById('pile')


async function oneCard() {
    const res = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    return res.data.deck_id
}
let deckId = oneCard()


// draws one card
async function drawOneCard() {
    const res = await axios.get(`http://deckofcardsapi.com/api/deck/${await deckId}/draw/?count=1`)
    img = document.createElement('img')
    img.setAttribute('src', res.data.cards[0].image)
    img.className = 'card'
    pile.append(img)
}

function removeCard() {
    pile.remove(oldCard)
}

const draw = document.getElementById('draw')
draw.addEventListener('click', drawOneCard)