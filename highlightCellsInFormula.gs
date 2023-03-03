function highlightCellsInFormula(){
    var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var ranges_ = ss.getActiveRange();
    var formulas = ranges_.getFormulas();
    for(var r = 0; r <  ranges_.getNumRows(); r++){
      for(var c = 0; c < ranges_.getNumColumns(); c++){
        if(formulas[r][c] !== ""){
          
          var formulas2 = formulas[r][c] + " "
          formulas2 = formulas2.replace("="," ")
          formulas2 = formulas2.replace(","," ")
          formulas2 = formulas2.replace("("," ")
          formulas2 = formulas2.replace(")"," ")
          //formulas2 = formulas2.replace(":"," ")
          var cellsAddress = ""
          for(j = 1; j < formulas2.length; j++){
            console.log(formulas2.substring(j,j+1))
            if(formulas2.substring(j,j+1) !== " "){
              cellsAddress = cellsAddress + formulas2.substring(j,j+1)
              console.log(cellsAddress)
            } else {
                    try{ss.getRange(cellsAddress).setBackground('#FFD700');
                    cellsAddress = ""}
                    catch(error){
                      cellsAddress = ""
                    }
                    
              
              }    
              
          }

          }
              
        }
    }

    
  }
