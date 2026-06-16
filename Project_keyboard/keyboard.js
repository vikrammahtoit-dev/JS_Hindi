const insert =  document.getElementById('insert');

window.addEventListener('keyboard', (e) =>{
    insert.innerHTML = `
    <div class = 'color'> 
<table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space': e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.Code}</td>
  </tr>
 
</table>
    </div>
    `
})