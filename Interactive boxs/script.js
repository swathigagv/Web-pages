function selectBundle(element, price, count) {
    document.querySelectorAll('.bundle').forEach(b => {
        b.classList.remove('selected');
        b.querySelector('.options').style.display = 'none';
    });
    element.classList.add('selected');
    document.getElementById('total').textContent = price;
    
    const optionsContainer = element.querySelector('.options');
    optionsContainer.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        optionsContainer.innerHTML += `
            <div>
                <label>Size: 
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </label>
                <label>Color: 
                    <select>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Black</option>
                    </select>
                </label>
            </div>
        `;
    }
    optionsContainer.style.display = 'block';
}
