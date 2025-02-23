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
// function selectBundle(element, price) {
//     document.querySelectorAll('.bundle').forEach(b => b.classList.remove('selected'));
//     element.classList.add('selected');
//     document.getElementById('total').textContent = price;
// }
// function toggleOptions() {
//     const pairSelect = document.getElementById('pairSelect').value;
//     const options1 = document.getElementById('options1');
//     const options2 = document.getElementById('options2');
//     const options3 = document.getElementById('options3');

//     // Hide all options initially
//     options1.classList.add('hidden');
//     options2.classList.add('hidden');
//     options3.classList.add('hidden');

//     // Show the relevant options based on selection
//     if (pairSelect === '1') {
//         options1.classList.remove('hidden');
//     } else if (pairSelect === '2') {
//         options2.classList.remove('hidden');
//     } else if (pairSelect === '3') {
//         options3.classList.remove('hidden');
//     }
// }
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
