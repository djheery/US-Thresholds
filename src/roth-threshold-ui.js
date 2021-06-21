const ThresholdUI = (() => {
  const selectors = {
    selectContainers: Array.from(document.querySelectorAll('#bacc__select-container')),
    rothTable: document.querySelector('.roth-thresholds'),
    tradTable: document.querySelector('.trad-thresholds'),
    tradMarriageSeperateTable: document.querySelector('.trad-marriage-seperate')
  }

  return {
    getSelectors: () => {return selectors},
    changeTable: (e) => {
      if(!e.target.classList.contains('select-box')) return
      if(e.target.classList.contains('roth')) ThresholdUI.RothThresholds(e.target.options[e.target.selectedIndex].value)
      if(e.target.classList.contains('trad')) ThresholdUI.TraditionalThresholds(e.target.options[e.target.selectedIndex].value)
    },
    RothThresholds: (option) => {
      if(option === "21-22") {
        selectors.rothTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)</th>
            <th class="table-heading">Married Filing Seperately (MAGI)</th>
            <th class="table-heading">Maximum Contributribution for Individuals Under Age 50</th>
            <th class="table-heading">Maximum Contributribution for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $125,000</td>
            <td>under $198,000</td>
            <td>$0</td>
            <td>$6,000</td>
            <td>$7,000</td>
          </tr>
          <tr class="table-data-row">
            <td>$126,500</td>
            <td>$199,000</td>
            <td>$1,000</td>
            <td>$5,400</td>
            <td>$6,300</td>
          </tr>
          <tr class="table-data-row">
            <td>$128,000</td>
            <td>$200,000</td>
            <td>$2,000</td>
            <td>$4,800</td>
            <td>$5,600</td>
          </tr>
          <tr class="table-data-row">
            <td>$129,500</td>
            <td>$201,000</td>
            <td>$3,000</td>
            <td>$4,200</td>
            <td>$4,900</td>
          </tr>
          <tr class="table-data-row">
            <td>$131,000</td>
            <td>$202,000</td>
            <td>$4,000</td>
            <td>$3,600</td>
            <td>$4,200</td>
          </tr>
          <tr class="table-data-row">
            <td>$132,500</td>
            <td>$203,000</td>
            <td>$5,000</td>
            <td>$3,000</td>
            <td>$3,500</td>
          </tr>
          <tr class="table-data-row">
            <td>$134,000</td>
            <td>$204,000</td>
            <td>$6,000</td>
            <td>$2,400</td>
            <td>$2,800</td>
          </tr>
          <tr class="table-data-row">
            <td>$135,500</td>
            <td>$205,000</td>
            <td>$7,000</td>
            <td>$1,800</td>
            <td>$2,100</td>
          </tr>
          <tr class="table-data-row">
            <td>$137,000</td>
            <td>$206,000</td>
            <td>$8,000</td>
            <td>$1,200</td>
            <td>$1,400</td>
          </tr>
          <tr class="table-data-row">
            <td>$138,500</td>
            <td>$207,000</td>
            <td>$9,000</td>
            <td>$600</td>
            <td>$700</td>
          </tr>
          <tr class="table-data-row">
            <td>$140,000</td>
            <td>$208,000 & Over</td>
            <td>$10,000 & Over</td>
            <td>$0</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
        `
      }
      if(option === "20-21") {
        selectors.rothTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)</th>
            <th class="table-heading">Married Filing Seperately (MAGI)</th>
            <th class="table-heading">Maximum Contributribution for Individuals Under Age 50</th>
            <th class="table-heading">Maximum Contributribution for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $124,000</td>
            <td>under $196,000</td>
            <td>$0</td>
            <td>$6,000</td>
            <td>$7,000</td>
          </tr>
          <tr class="table-data-row">
            <td>$125,500</td>
            <td>$197,000</td>
            <td>$1,000</td>
            <td>$5,400</td>
            <td>$6,300</td>
          </tr>
          <tr class="table-data-row">
            <td>$127,000</td>
            <td>$198,000</td>
            <td>$2,000</td>
            <td>$4,800</td>
            <td>$5,600</td>
          </tr>
          <tr class="table-data-row">
            <td>$128,500</td>
            <td>$199,000</td>
            <td>$3,000</td>
            <td>$4,200</td>
            <td>$4,900</td>
          </tr>
          <tr class="table-data-row">
            <td>$130,000</td>
            <td>$200,000</td>
            <td>$4,000</td>
            <td>$3,600</td>
            <td>$4,200</td>
          </tr>
          <tr class="table-data-row">
            <td>$131,500</td>
            <td>$201,000</td>
            <td>$5,000</td>
            <td>$3,000</td>
            <td>$3,500</td>
          </tr>
          <tr class="table-data-row">
            <td>$133,000</td>
            <td>$202,000</td>
            <td>$6,000</td>
            <td>$2,400</td>
            <td>$2,800</td>
          </tr>
          <tr class="table-data-row">
            <td>$134,500</td>
            <td>$203,000</td>
            <td>$7,000</td>
            <td>$1,800</td>
            <td>$2,100</td>
          </tr>
          <tr class="table-data-row">
            <td>$136,000</td>
            <td>$204,000</td>
            <td>$8,000</td>
            <td>$1,200</td>
            <td>$1,400</td>
          </tr>
          <tr class="table-data-row">
            <td>$137,500</td>
            <td>$205,000</td>
            <td>$9,000</td>
            <td>$600</td>
            <td>$700</td>
          </tr>
          <tr class="table-data-row">
            <td>$139,000</td>
            <td>$206,000 & Over</td>
            <td>$10,000 & Over</td>
            <td>$0</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
        `
      }
    },
    TraditionalThresholds: (option) => {
      console.log(option)
      if(option === '21-22') {
        selectors.tradTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)*</th>
            <th class="table-heading">Married Filing Jointly (MAGI)**</th>
            <th class="table-heading">Allowable Deduction for individuals Under Age 50</th>
            <th class="table-heading">Allowable Deduction for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $66,000</td>
            <td>under $105,000</td>
            <td>under $198,000</td>                
            <td>$6,000</td>
            <td>$7,000</td>
          </tr>
          <tr class="table-data-row">
            <td>Between $66,000 & $76,000</td>
            <td>Between $105,000 & $125,000</td>
            <td>Between $198,000 & $208,000</td>                
            <td>A partial deduction based on your MAGI</td>
            <td>A partial deduction based on your MAGI</td>
          </tr>
          <tr class="table-data-row">
            <td>$76,000 or more</td>
            <td>$125,000 or more</td>
            <td>$208,000 or more</td>                
            <td>No Deduction</td>
            <td>No deduction</td>
          </tr>
        </tbody>
      </table>
        `
      }
      if(option === '20-21') {
        selectors.tradTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Single Filers (MAGI)</th>
            <th class="table-heading">Married Filing Jointly (MAGI)*</th>
            <th class="table-heading">Married Filing Jointly (MAGI)**</th>
            <th class="table-heading">Allowable Deduction for individuals Under Age 50</th>
            <th class="table-heading">Allowable Deduction for Individuals Age 50 and Over</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>under $65,000</td>
            <td>under $104,000</td>
            <td>under $198,000</td>                
            <td>$6,000</td>
            <td>$7,000</td>
          </tr>
          <tr class="table-data-row">
            <td>Between $65,000 & $75,000</td>
            <td>Between $104,000 & $124,000</td>
            <td>Between $196,000 & $206,000</td>                
            <td>A partial deduction based on your MAGI</td>
            <td>A partial deduction based on your MAGI</td>
          </tr>
          <tr class="table-data-row">
            <td>$75,000 or more</td>
            <td>$124,000 or more</td>
            <td>$206,000 or more</td>                
            <td>No Deduction</td>
            <td>No deduction</td>
          </tr>
        </tbody>
      </table>
        `
      }
    }
  }
})()