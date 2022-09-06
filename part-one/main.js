const favsList = document.getElementById('favsList')
const multNums = document.getElementById('multNums')


async function multipleNums(arr) {
    const strQ = arr.join(',')
    res = await axios.get(`http://numbersapi.com/${strQ}?json`)
    console.log(res)
    for (let num of arr) {
        let newFact = document.createElement('li')
        newFact.innerHTML = res['data'][num]
        multNums.append(newFact)
    }
}

multipleNums([5, 2, 7])

async function favNum(num) {
    for (let i = 0; i < 4; i++) {
        res = await axios.get(`http://numbersapi.com/${num}?json`)
        const favItem = document.createElement('li')
        favItem.innerHTML = await res.data.text
        favsList.append(favItem)
    }

}

favNum(7)