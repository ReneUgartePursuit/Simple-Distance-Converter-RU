document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const distanceInput = document.getElementById('distance');
    const conversionType = document.getElementById('conversionType');
    const resultDisplay = document.getElementById('result');
    const explanationDisplay = document.getElementById('explanation');

    convertBtn.addEventListener('click', function () {
        const value = parseFloat(distanceInput.value);
        if (isNaN(value) || value < 0) {
            resultDisplay.textContent = 'Please enter a valid, positive number.';
            explanationDisplay.textContent = '';
            return;
        }

        let result, explanation;

        if (conversionType.value === 'kmToMi') {
            result = (value * 0.621371).toFixed(3);
            explanation = `${value} kilometer${value !== 1 ? 's' : ''} = ${result} mile${result !== "1.000" ? 's' : ''}`;
        } else {
            result = (value / 0.621371).toFixed(3);
            explanation = `${value} mile${value !== 1 ? 's' : ''} = ${result} kilometer${result !== "1.000" ? 's' : ''}`;
        }

        resultDisplay.textContent = result;
        explanationDisplay.textContent = explanation;
    });
});
