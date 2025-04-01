function generateList(listItems) {
  let rows = ''
  for (let i = 0; i < listItems.length; i++) {
      const name = listItems[i].name;
      const amount = listItems[i].amount;

      rows += /*HTML */
      `<tr>
              <td>
                  ${name}
              </td>
              <td>
                  ${amount}
              </td>
          </tr>`
  }

  let recentList = /*HTML*/
      `<table class = "List">
      <tr>
          <th>Varer</th>
          <th>Antall</th>
          ${rows}
      </tr>
  </table>`

  return recentList
}




