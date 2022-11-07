function generateTable(k) {
    /* Continue using the code from thursday-1.js */
    let table = document.querySelector('table'); 
    let tHeading = document.querySelector('thead tr'); 
    let tBody = document.querySelector('tbody') 


     Object.keys(k[0]).forEach(i => {
        let newElement = document.createElement('th');
        newElement.textContent = i;
        tHeading.appendChild(newElement);
     })


     k.forEach(i => {
      let tr = document.createElement('tr');
      tBody.appendChild(tr);

      for (const [j, k] of Object.entries(i)) {
              let td = document.createElement('td');
              td.textContent = k; 
              tr.appendChild(td) 
      }
    })
}

export default generateTable;
