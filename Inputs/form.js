class Column {
    openingTag = "<div class='col'>";
    closingTag = "</div>";
    innerHTML = "";

    /*
    3. Use constructor, innerhtml is passed into it.
    */
    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return this.openingTag + this.innerHTML + this.closingTag
    }

    info(columnNumber) {
        console.log("The column number is " + columnNumber);
    }

    content() {
        console.log("The column content is " + this.innerHTML);
    }

}
function practice5() {
  debugger;
  /*
2. Create the column Object
    */
  /*
    pass in some content--> "i am a column"
    */

  /*
    4. Use toString to output all object properties
    */
  // output(column, "outputTag5", "<br>");

  /*
    5. Add a loop to display a bootstrap grid system with 3 rows
    
    */
  /*The string is empty, start constructing the columns, 
    use the new "keyword" to construct the column,
    it's going to create an openingtag, a closingtag and blank innerHTML;
    the innerHTML is going to be set to COLUMN 1

    */
  let rows = "";
  for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
    let columns = "";
    for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
      const column = new Column(`COLUMN ${columnNumber}`);
      /*
            create a column using the constructor
            take the innerHTML ;;No need to do that manually anymore
            Also we can sanddown the code/ using toString on the snippet   
        // columns += `${column.openingTag}${column.innerHTML}${column.closingTag}`;
        and turn it into
        columns += column;
        */
      columns += column;
      /*
            So we created a column and it has innerHTML ::const column:: and ::COLUNM ${columnNumber}; eg. column1 or column2::
            and we append that to ::columns += column; - which is the column string::
            */
    }

    rows += `<div class="row">${columns}, <br><br></div>`;
  }

  const griSystem = `
        <div class="container">
            ${rows}
        </div > `;

  output(griSystem, "outputTag5", "<br>");
}

