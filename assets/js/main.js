function calc() {
    let height = document.getElementById('height').value
    let age = document.getElementById('age').value
    if (height > 100 && age > 12) {
        let broad = true ? document.getElementById('broad').checked : document.getElementById('thin').checked
        let result = broad ? ((height - 100) + (age / 10)) * 0.9 * 1.1 : ((height - 100) + (age / 10)) * 0.9 * 0.9
        document.getElementById('output').innerHTML = `Dein Idealgewicht beträgt ${result.toFixed(1).replace('.', ',')} kg.<br><br><strong>Aber denk dran:</strong> du bist schön,<br>egal wie viel du wiegst!`
    }
    else {
        alert('Dieser Test ist doof!')
    }
}