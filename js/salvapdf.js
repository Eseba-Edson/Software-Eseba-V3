//Autores: Paulo Souza, Pedro Ribeiro
//02/09/2022

function salvaPeriodo(texto, posicao){
    doc.setFontSize(9);
    doc.setFontType("bold");
    doc.text(texto, 15, doc.lastAutoTable.finalY +posicao);
}

function salvaModalidade(texto, posicao){
   
    doc.setFontType("bold");
    doc.setFontSize(8);
    doc.text(texto, (doc.internal.pageSize.width/2), posicao,null, null, 'center');
 
    doc.setFontType("normal");
    doc.setFontSize(6);
    doc.autoTable( {head:[['Posição','Inscrição', 'Candidato', 'Nascimento', 'CPF do Responsável Legal']], startY: posicao+5, 
    tableWidth: 180,
    headStyles:{
        valign: 'middle',
        halign : 'center'
    },
    columnStyles: {
                        0: {
                            cellWidth: 20
                        },
                        1: {
                            cellWidth: 30
                        },
                        2: {
                            cellWidth: 40
                        },
                        3: {
                            cellWidth: 20
                        },
                        4: {
                            cellWidth: 70
                        },
                        
                    }

     })
}    

function salvaDados(listaRankeados1pvm1){
    doc.setFontSize(10);
    doc.setFontType("normal");
    for(var i = 0; i < listaRankeados1pvm1.length; i++){
        
        doc.autoTable({
            body: [[(i+1)+"º", listaRankeados1pvm1[i][0], listaRankeados1pvm1[i][1].toUpperCase(), listaRankeados1pvm1[i][6],
        listaRankeados1pvm1[i][8]]], startY: doc.lastAutoTable.finalY, tableWidth: 180, theme:'grid',
        columnStyles: {
                        0: {
                            cellWidth: 20
                        },
                        1: {
                            cellWidth: 30
                        },
                        2: {
                            cellWidth: 35
                        },
                        3: {
                            cellWidth: 35
                        },
                        4: {
                            cellWidth: 60
                        },
                        
                    }
        });
    }
    
    doc.setFontSize(8);
    doc.text('Total de sorteados: ' + listaRankeados1pvm1.length, 20, doc.lastAutoTable.finalY+5,null, null);

}

function informacoesPDF(semente){
    doc.setFontSize(10);
    doc.setFontType("bold");
    doc.autoTable({head:[['Semente: '+ semente]], headStyles :{fillColor : [255, 255, 255], textColor:[0,0,0]}, startY: doc.lastAutoTable.finalY+20, tableWidth: 180});
    // doc.autoTable({head:[['Teste']], headStyles :{fillColor : [255, 255, 255], textColor:[0,0,0]}, startY: doc.lastAutoTable.finalY});
}

function pdfsave(){
    doc.save("a4.pdf");
}
    
