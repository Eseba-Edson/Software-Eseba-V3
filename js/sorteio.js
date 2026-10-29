//Autores: Paulo Souza, Pedro Ribeiro
//02/09/2022

//listas de candidatos de todos os períodos, variáveis para lista de sorteados e relatório em CSV e PDF

var listaCandidatos = [];
var listaRankeados = [];

var listaSorteados = [];

var relatorioCSV = "";

//listas globais 1º período
var listaCandidatos1pAC = [];
var listaCandidatos1pDF = [];
var listaCandidatos1pvm1 = [];
var listaCandidatos1pvm2 = [];
var listaCandidatos1pvm3 = [];
var listaCandidatos1pvm4 = [];
var listaCandidatos1pvm5 = [];
var listaCandidatos1pvm6 = [];
var listaCandidatos1pvm7 = [];
var listaCandidatos1pvm8 = [];
var listaCandidatos1pvmAC = [];
//listas globais 2º período
var listaCandidatos2pAC = [];
var listaCandidatos2pDF = [];
var listaCandidatos2pem1 = [];
var listaCandidatos2pem2 = [];
var listaCandidatos2pem3 = [];
var listaCandidatos2pem4 = [];
var listaCandidatos2pem5 = [];
var listaCandidatos2pem6 = [];
var listaCandidatos2pem7 = [];
var listaCandidatos2pem8 = [];
var listaCandidatos2pemAC = [];
//listas globais 1º Ano
var listaCandidatos1aAC = [];
var listaCandidatos1aDF = [];
var listaCandidatos1aem1 = [];
var listaCandidatos1aem2 = [];
var listaCandidatos1aem3 = [];
var listaCandidatos1aem4 = [];
var listaCandidatos1aem5 = [];
var listaCandidatos1aem6 = [];
var listaCandidatos1aem7 = [];
var listaCandidatos1aem8 = [];
var listaCandidatos1aemAC = [];
//listas globais 2º Ano
var listaCandidatos2aAC = [];
var listaCandidatos2aDF = [];
var listaCandidatos2aem1 = [];
var listaCandidatos2aem2 = [];
var listaCandidatos2aem3 = [];
var listaCandidatos2aem4 = [];
var listaCandidatos2aem5 = [];
var listaCandidatos2aem6 = [];
var listaCandidatos2aem7 = [];
var listaCandidatos2aem8 = [];
var listaCandidatos2aemAC = [];
//listas globais 3º Ano
var listaCandidatos3aAC = [];
var listaCandidatos3aDF = [];
var listaCandidatos3aem1 = [];
var listaCandidatos3aem2 = [];
var listaCandidatos3aem3 = [];
var listaCandidatos3aem4 = [];
var listaCandidatos3aem5 = [];
var listaCandidatos3aem6 = [];
var listaCandidatos3aem7 = [];
var listaCandidatos3aem8 = [];
var listaCandidatos3aemAC = [];
//listas globais 4º Ano
var listaCandidatos4aAC = [];
var listaCandidatos4aDF = [];
var listaCandidatos4aem1 = [];
var listaCandidatos4aem2 = [];
var listaCandidatos4aem3 = [];
var listaCandidatos4aem4 = [];
var listaCandidatos4aem5 = [];
var listaCandidatos4aem6 = [];
var listaCandidatos4aem7 = [];
var listaCandidatos4aem8 = [];
var listaCandidatos4aemAC = [];
//listas globais 5º Ano
var listaCandidatos5aAC = [];
var listaCandidatos5aDF = [];
var listaCandidatos5aem1 = [];
var listaCandidatos5aem2 = [];
var listaCandidatos5aem3 = [];
var listaCandidatos5aem4 = [];
var listaCandidatos5aem5 = [];
var listaCandidatos5aem6 = [];
var listaCandidatos5aem7 = [];
var listaCandidatos5aem8 = [];
var listaCandidatos5aemAC = [];
//listas globais 6º Ano
var listaCandidatos6aAC = [];
var listaCandidatos6aDF = [];
var listaCandidatos6aem1 = [];
var listaCandidatos6aem2 = [];
var listaCandidatos6aem3 = [];
var listaCandidatos6aem4 = [];
var listaCandidatos6aem5 = [];
var listaCandidatos6aem6 = [];
var listaCandidatos6aem7 = [];
var listaCandidatos6aem8 = [];
var listaCandidatos6aemAC = [];
//listas globais 7º Ano
var listaCandidatos7aAC = [];
var listaCandidatos7aDF = [];
var listaCandidatos7aem1 = [];
var listaCandidatos7aem2 = [];
var listaCandidatos7aem3 = [];
var listaCandidatos7aem4 = [];
var listaCandidatos7aem5 = [];
var listaCandidatos7aem6 = [];
var listaCandidatos7aem7 = [];
var listaCandidatos7aem8 = [];
var listaCandidatos7aemAC = [];
//listas globais 8º Ano
var listaCandidatos8aAC = [];
var listaCandidatos8aDF = [];
var listaCandidatos8aem1 = [];
var listaCandidatos8aem2 = [];
var listaCandidatos8aem3 = [];
var listaCandidatos8aem4 = [];
var listaCandidatos8aem5 = [];
var listaCandidatos8aem6 = [];
var listaCandidatos8aem7 = [];
var listaCandidatos8aem8 = [];
var listaCandidatos8aemAC = [];
//listas globais 9º Ano
var listaCandidatos9aAC = [];
var listaCandidatos9aDF = [];
var listaCandidatos9aem1 = [];
var listaCandidatos9aem2 = [];
var listaCandidatos9aem3 = [];
var listaCandidatos9aem4 = [];
var listaCandidatos9aem5 = [];
var listaCandidatos9aem6 = [];
var listaCandidatos9aem7 = [];
var listaCandidatos9aem8 = [];
var listaCandidatos9aemAC = [];


//pdf
var doc = new jsPDF();
var data = new Date();
var img ="";


//********************************************************************************************//
// Ao se carregar um arquivo, as funções abaixo serão iniciadas.
//********************************************************************************************//
//inicia pdf a cada sorteio
function docClear(){
	doc = new jsPDF();
	doc.setFontSize(10);
	data = new Date();
	//logo do ministério da educação
	img = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2NkVDRUE0QjI5RTExRTc5NTM0OTIzMTE4QzFCRjQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2NkVDRUE1QjI5RTExRTc5NTM0OTIzMTE4QzFCRjQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODY2RUNFQTJCMjlFMTFFNzk1MzQ5MjMxMThDMUJGNDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODY2RUNFQTNCMjlFMTFFNzk1MzQ5MjMxMThDMUJGNDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
	doc.addImage(img, 'PNG', 15, 10, 15, 15);
	//logo da UFU
	img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwCAMAAADc/0P9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACylBMVEUAAAAIImsIImkKI2kIJmkJImkJImkKIWkKJGsKI2kJImkJI2gJImoJImkJImoJImkIImgIIWkIIWgII2oII2kII2oJImkKImkKImgKImoKIWkJIWgJI2kJI2gJImoJImgIImkIIWkIIWoII2kII2gIImkIImgJImkJImgJIWkJI2kJI2oJImkJImgJImkAAAAIImoIIWkII2gAAIAII2kKImkKImoKImkJImgAAFUJImkAQIAJIWkJI2oJI2kJImgAM2YJImkJImkJImkAJG0IImoIImkAIGAIIWkII2kAHHEKImkKImoJI2kAF3QJImgAK2oJImkJImkAJ2ILIGoJImkKI2kJImkJImkAJG0LIWQJIWoKImkJImkPHmkOHGMJImgJIWkNKGsJImkNJmYJImkIImkJImkMI2gJImoKH2YJImkKHWwIImkJImkJJmgJImkJJG0JImkIIGgJImkIH2wMJG0JImgJImkHJGYJImkHI2oJImgJImkGH2oGJGcJImoMJGsJImkMI2gLImwJImkLIWkJImkJImoKImcQIHAJImkKImoJIWgJImkJIGsJImkJIGkKImkJImkIIWsIIGkIJGgII2oJImkJImkII2gRImYJImkHIWcJImkKImkKImgJImkKIWoJI2kJI2oJIWkAGmYJImkJImkLI2oIImkJImkJImgLIGgLIWcHIWoJJGcKImkJImkJImkIIWkJImkAK1UJImoJImkJI2gJImkJI2oJIWkKJGsJImkJI2kKJGgJIWkLIGoKImoJImkJIWgJImkJIWkJI2oJImkJIWoJI2oJIWgJImkJImgJI2kKImcKI2kJImkJImoJI2kHImsJImoJImkJI2gKIWkKIWkIImkIImgIIWoJImkKIWkJImgKIWoKI2kJI2oKI2gJIWkJIWoJImoJImgJImkJImoJImYJImn///9JM73aAAAA7HRSTlMAQ0QzIv35Tk9Q+lFS/FlaW1xdXl9g/mhpamtsbW5veHl6e3x9fn+IiYqLjI2OjwGYmZoCm5ydnqYDpwSoqaqrBayttAe1tgi3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vGqgPSfxCljqPVi8aqa9J/EKWOo1WLxqqn334xWw1FuweNVcBx/SDq8Sf39RYAGrX/+9/YLJLeuMrw9TB81vBVhzOsACVpFgNfG+Ov6EAbWqu4AFrCLBeui67v/qJ59ECGABS70Hi1fAAhawUsDiFbCABawUsHgFLGABKwUsXgELWMBKAWvEbF4BC1jAygCLV8ACFrBSwOIVsIAFrBSweAUsYAErBaxvNODVKbwCFrDUD7C8r4AFLGDFgLVS9++rqVgAFrCUARavgAUspYDFK2ABSylg8QpYwFIKWLwCFrCUAhavgAUspYDFK2ABSylg8QpYwFIKWLwCFrCUAhavgAUspYDFK2ABSylg8QpYwFIKWLwCFrCUAhavgAUspYDFK2ABSylg8QpYwFIKWI/xCljAUghYj02jALCApQywTuUVsIClFLAeZwCwgCVgCVjAAhawgAUsYAFLwAKWgCVgAQtYwAIWsIAFLAELWAKWgAUsYAELWMACFrAELGAJWAIWsIAFLGABC1jAErCAJWAJWMACFrCABSxgAevFRpwzu7KmAAtYCgXrm9+q7ouYDixgKROsb9fnFbCApVCwavQKWMBSJlhVegUsYCkSrDq9AhawlAhWpV4BC1gKBOvBSr0CFrCUB9ZttXoFLGApD6yTOsACFrAELGABC1jAAhawgAUsYAELWMASsIAFLGABC1jAApaABSxgAUvAAhawgAUsYAELWAIWsIAFLGABC1jAAhawgAUsYAlYwAIWsIAFLGABC1jAAhawgCVgAQtYwAIWsIAFLGABC1jAApaABSxgAQtYwAIWsIAFLGABC1gCFrCABSxgAQtYwAIWsIAFLGAJWMACFrCABSxgAQtYwAIWsIAlYAELWMACFrCABSxgAQtYwAKWgAUsYAELWMACFrCABSxgAQtYAhawgAUsYAELWMASsIAFLGAJWMACFrCABSxgAUvAAhawgAUsYAELWMACFrCABSwBC1jAAhawgAUsYAELWMACFrAELGABC1jAAhawgAUsYAELWMASsIAFLGABC1jAAhawgAUsYAFLwAIWsIAFLGABC1jAAhawgAUsAQtYwAIWsIAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAIWsIAFLGABS8ACFrCABSxgAQtYAhawgAUsAQtYwAIWsIAFLGAJWMACFrCABSxgAQtYwAIWsIAlYAELWMACFrCABSxgAQtYwAKWgAUsYAELWMACFrCABSxgAQtYAhawgAUsYAELWMACFrCABSxgCVjAAhawgAUsYAELWMACFrCAJWABC1jAAhawgAUsYAELWMACloAFLGABC1jAAhawgAUsYAELWAIWsIAFLGABC1jAAhawgAUsYAlYwAIWsIAFLGABS8ACFrCAJWABC1jAAhawgAUsAQtYwAIWsIAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAIWsIAFLGABS8ACFrCABSxgAQtYwAIWsIAFLAELWMACFrCABSxgAQtYwAIWsAQsYAELWMACFrCABSxgAQtYwBKwgAUsYAELWMACFrCABSxgAUvAAhawgAUsYAELWDABFrCABSwBC1jAAhawgAUsYAlYwAIWsAQsYAELWMACFrCAJWABC1jAAhawgAUsYAELWMACloAFLGABC1jAAhawgAUsYAELWAIWsIAFLGABC1jAAhawgAUsYAlYwAIWsIAFLGABC1jAAhawgCVgAQtYwAIWsIAFLGABC1jAApaABSxgAQtYwAIWsIAFLGABC1gCFrCABSxgAQtYwAIWsIAFLGAJWMACFrCABSxgAUvAAhawgCVgAQtYwAIWsIAFLAELWMACloAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAIWsIAFLGABS8ACFrCABSxgAQtYwAIWsIAFLAELWMACFrCABSxgAQtYwAIWsAQsYAELWMACFrCABSxgAQtYwBKwgAUsYAELWMACFrCABSxgAUvAAhawgAUsYAELWMACFrCABSwBC1jAAhawgAUsYAlYwAIWsAQsYAELWMACFrCAJWABC1jAErCABSxgAQtYwAKWgAUsYAELWMACFrCABSxgAQtYAhawgAUsYAELWMACFrCABSxgCVjAAhawgAUsYAELWMACFrCAJWABC1jAAhawgAUsYAELWMACloAFLGABC1jAAhawgAUsYAELWAIWsIAFLGABC1jAAhawgAUsYAlYwAIWsIAFLGABC1jAAhawgCVgAQtYwAIWsIAFLAELWMACloAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAIWsIAFLGABS8ACFrCABSxgAQtYwAIWsIAFLAELWMACFrCABSxgAQtYwAIWsAQsYAELWMACFrCABSxgAQtYwBKwgAUsYAELWMACFrCABSxgAUvAAhawgAUsYAELWMACFrCABSwBC1jAAhawgAUsYAELWMACFrAELGABC1jAAhawgCVgAQtYwBKwgAUsYAELWMACloAFLGABC1jAAhawgAUsYAELWAIWsIAFLGABC1jAAhawgAUsYAlYwAIWsIAFLGABC1jAAhawgCVgAQtYwAIWsIAFLGABC1jAApaABSxgAQtYwAIWsIAFLGABC1gCFrCABSxgAQtYwAIWsIAFLGAJWMACFrCABSxgAQtYwAIWsIAlYAELWMACFrCABSxgAQtYwAKWgAUsYAELWMACFrAELGABC1gCFrCABSxgAQtYwBKwgAUsYAELWMACFrCABSxgAUvAAhawgAUsYAELWMACFrCABSwBC1jAAhawgAUsYAELWMACFrAELGABC1jAAhawgAUsYAELWMASsIAFLGABC1jAAhawgAUsYAFLwAIWsIAFLGABC1jAAhawgAUsAQtYwAIWsIAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAKWgAUsYAFLwAIWsIAFLGABC1gCFrCABSxgAQtYwAIWsIAFLGAJWMACFrCABSxgAQtYwAIWsIAlYAELWMACFrCABSxgAQtYwAKWgAUsYAELWMACFrCABSxgAQtYAhawgAUsYAELWMACFrCABSxgCVjAAhawgAUsYAELWMACFrCAJWABC1jAAhawgAUsYAELWMACloAFLGABC1jAAhawgAUsYAELWAIWsIAFLGABC1jAErCABSxgCVjAAhawgAUsYAFLwAIWsIAFLGABC1jAAhawgAUsAQtYwAIWsIAFLGABC1jAAhawBCxgAQtYwAIWsIAFLGABC1jAErCABSxgAQtYwAIWsIAFLGABS8ACFrCAVWpz7wEWsIDVQN+hSe9b9u4BYAELWMQq1StgAQtYxIrxCljAAhaxYrwCFrCARawYr4AFLGARK8YrYAELWMSK8QpYwAIWsWK8AhawgEWsGK+ABSxgESvGK2ABC1jEivEKWMACFrFivAIWsIBFrBivgAUsYBErxitgAQtYxIrxCljAAhaxYrwCFrCARaw+Nfe+br+GlTvAAhawBtF3eTP876snngQWsIBFrFK9Ahaw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";
	doc.addImage(img, 'JNG', 180, 10, 15, 15);
	doc.setFontSize(8);
	//inserção da data atual
	doc.text(data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear(), 10, 5, null, null);
	doc.setFontType("bold");
	//dados da universidade
	doc.text("UNIVERSIDADE FEDERAL DE UBERLÂNDIA", (doc.internal.pageSize.width/2),20,null, null, 'center');
	doc.setFontType("normal");
	doc.text("Escola de Educação básica", (doc.internal.pageSize.width/2),25,null, null, 'center');
	doc.setFontSize(6);
	doc.text("Av. Adutora São Pedro, 40, Campus Educação Física - Bairro Aparecida, Uberlândia-MG, CEP 38400-785",(doc.internal.pageSize.width/2),28,null, null, 'center' );
	doc.text("Telefone: +55 (34) 3218-2946 - www.eseba.ufu.br - eseba@ufu.br",(doc.internal.pageSize.width/2),31,null, null, 'center' );
	doc.setFontSize(10);
	doc.setFontType("bold");
	//descrição do sorteio - recupera o campo sorteio na aba geral
	doc.text("Sorteio Público - " + document.getElementById('nomecurso').value,(doc.internal.pageSize.width/2),40,null, null, 'center' );
	//doc.text("Sorteio Público - " + data.getFullYear(),(doc.internal.pageSize.width/2),40,null, null, 'center' );
	doc.autoTable({ startY: 45, head: [[""]], headStyles:{fillColor:[255,255,255]}})
}
/** calculateMD5Hash
* @brief Função responsável pela lógica do Hash-MD5
*        Faz uso da biblioteca Spark-MD5
*		 
*		 
*
* @param  (Arquivo, Tamanho do buffer)
* @return def.promise
*
* @bugs Nenhum conhecido
*/
function calculateMD5Hash(file, bufferSize) {
	var def = Q.defer();

	var fileReader = new FileReader();
	var fileSlicer = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
	var hashAlgorithm = new SparkMD5();
	var totalParts = Math.ceil(file.size / bufferSize);
	var currentPart = 0;
	var startTime = new Date().getTime();

	fileReader.onload = function(e) {
		currentPart += 1;

		def.notify({
		currentPart: currentPart,
		totalParts: totalParts
		});

		var buffer = e.target.result;
		hashAlgorithm.appendBinary(buffer);

		if (currentPart < totalParts) {
		processNextPart();
		return;
		}

		def.resolve({
		hashResult: hashAlgorithm.end(),
		duration: new Date().getTime() - startTime
		});
	};

	fileReader.onerror = function(e) {
		def.reject(e);
	};

	function processNextPart() {
		var start = currentPart * bufferSize;
		var end = Math.min(start + bufferSize, file.size);
		fileReader.readAsBinaryString(fileSlicer.call(file, start, end));
	}

	processNextPart();
	return def.promise;
	}
	
/** calculate
* @brief Função responsável por calcular o hash-md5
*        do arquivo carregado e imprimí-lo no ponto desejado.
*		 
*		 
*
* @param  Nenhum
* @return Nada
*
* @bugs Nenhum conhecido
*/
function calculate() {

	var input = document.getElementById('arquivo');
	if (!input.files.length) {
		return;
	}

	var file = input.files[0];
	var bufferSize = Math.pow(1024, 2) * 10; // 10MB

	var hashmd5 = null;
	var pontoImpressao = document.getElementById('md5');
	

	calculateMD5Hash(file, bufferSize).then(
		function(result) {
		//Successo
		//console.log(result.hashResult);
		
		hashmd5 = result.hashResult;
		
		pontoImpressao.innerHTML = "<b>MD5:</b> <span><input type=\"text\" name=\"idmd5\" id=\"idmd5\" value=\"" + hashmd5 + "\" size=\"32\" readonly></span> <input type=\"button\" value=\"Copiar\" onclick=\"copiarTexto(\'idmd5\');\"><br/>"+
									"<div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">"+
										"<input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\" checked onclick= \"document.getElementById(\'candidatosDiv\').style.display = \'block\';\">"+
										"<label class=\"btn btn-outline-warning\" for=\"btnradio1\">Mostrar Candidatos</label>"+

										"<input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\" onclick = \"document.getElementById(\'candidatosDiv\').style.display = \'none\';\">"+
										"<label class=\"btn btn-outline-warning\" for=\"btnradio2\">Ocultar Candidatos</label>"+
									"</div>"
		// retorna hashmd5;
		},
		function(err) {
		// em caso de erro,
		},
		function(progress) {
		// notificação em console
		//console.log(progress.currentPart, 'of', progress.totalParts, 'Total bytes:', progress.currentPart * bufferSize, 'of', progress.totalParts * bufferSize);
	});
}



/** readFile
* @brief Função responsável pela leitura do arquivo,
*        em caso de sucesso realiza o preenchimento
*		 dos candidatos através da função parseCSV
*		 
*
* @param  (caminho para o arquivo CSV)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function readFile(input) {
	let file = input.files[0];
	//avalia o formato do arquivo
	if (file.name.substring(file.name.length - 4) !== '.csv') {
		alert('Formato inválido!');
		return;
	}

	//no caso de formato válido
	let reader = new FileReader();
	//em caso de arquivo válido, chama a função parseCSV para atribuir os alunos nas variáveis especificadas
	reader.onload = function () {
		parseCSV(reader.result);
	};

	reader.onerror = function () {
		alert("Arquivo inválido!");
	};

	reader.readAsText(file);
}

/** parseCSV
* @brief Função responsável por preencher a lista de candidatos
*        de cada série e em cada modalidade nas variáveis globais,
*		 além de imprimir nos pontos especificados pelo usuário.
*		 Utiliza a função CSVtoArray, imprimirListaCandidatos e
*		 cleanList.
*
* @param  (resultado arquivo CSV lido)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function parseCSV(csv) {
	let lista = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 0, 130, 0); }).filter((item) => item !== null);
	//console.log(lista[4].length);
	var lista2 = cleanList(lista);
	
	//Separando as séries
	let lista1pvm1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 1); }).filter((item) => item !== null);
	lista1pvm1 = cleanList(lista1pvm1);
	let lista1pvm2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 2); }).filter((item) => item !== null);
	lista1pvm2 = cleanList(lista1pvm2);
	let lista1pvm3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 3); }).filter((item) => item !== null);
	lista1pvm3 = cleanList(lista1pvm3);
	let lista1pvm4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 4); }).filter((item) => item !== null);
	lista1pvm4 = cleanList(lista1pvm4);
	let lista1pvm5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 5); }).filter((item) => item !== null);
	lista1pvm5 = cleanList(lista1pvm5);
	let lista1pvm6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 6); }).filter((item) => item !== null);
	lista1pvm6 = cleanList(lista1pvm6);
	let lista1pvm7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 7); }).filter((item) => item !== null);
	lista1pvm7 = cleanList(lista1pvm7);
	let lista1pvm8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 8); }).filter((item) => item !== null);
	lista1pvm8 = cleanList(lista1pvm8);
	let lista1pvmAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 99); }).filter((item) => item !== null);
	lista1pvmAC = cleanList(lista1pvmAC);
	let lista1pAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 0, 0); }).filter((item) => item !== null);
	lista1pAC = cleanList(lista1pAC);
	let lista1pDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 11, 0, 1); }).filter((item) => item !== null);
	lista1pDF = cleanList(lista1pDF);

	//2º período
	let lista2pem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 1); }).filter((item) => item !== null);
	lista2pem1 = cleanList(lista2pem1);
	let lista2pem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 2); }).filter((item) => item !== null);
	lista2pem2 = cleanList(lista2pem2);
	let lista2pem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 3); }).filter((item) => item !== null);
	lista2pem3 = cleanList(lista2pem3);
	let lista2pem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 4); }).filter((item) => item !== null);
	lista2pem4 = cleanList(lista2pem4);
	let lista2pem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 5); }).filter((item) => item !== null);
	lista2pem5 = cleanList(lista2pem5);
	let lista2pem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 6); }).filter((item) => item !== null);
	lista2pem6 = cleanList(lista2pem6);
	let lista2pem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 7); }).filter((item) => item !== null);
	lista2pem7 = cleanList(lista2pem7);
	let lista2pem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 8); }).filter((item) => item !== null);
	lista2pem8 = cleanList(lista2pem8);
	let lista2pemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 99); }).filter((item) => item !== null);
	lista2pemAC = cleanList(lista2pemAC);
	let lista2pAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 0, 0); }).filter((item) => item !== null);
	lista2pAC = cleanList(lista2pAC);
	let lista2pDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 22, 0, 1); }).filter((item) => item !== null);
	lista2pDF = cleanList(lista2pDF);

	//1º ano
	let lista1aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 1); }).filter((item) => item !== null);
	lista1aem1 = cleanList(lista1aem1);
	let lista1aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 2); }).filter((item) => item !== null);
	lista1aem2 = cleanList(lista1aem2);
	let lista1aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 3); }).filter((item) => item !== null);
	lista1aem3 = cleanList(lista1aem3);
	let lista1aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 4); }).filter((item) => item !== null);
	lista1aem4 = cleanList(lista1aem4);
	let lista1aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 5); }).filter((item) => item !== null);
	lista1aem5 = cleanList(lista1aem5);
	let lista1aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 6); }).filter((item) => item !== null);
	lista1aem6 = cleanList(lista1aem6);
	let lista1aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 7); }).filter((item) => item !== null);
	lista1aem7 = cleanList(lista1aem7);
	let lista1aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 8); }).filter((item) => item !== null);
	lista1aem8 = cleanList(lista1aem8);
	let lista1aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 99); }).filter((item) => item !== null);
	lista1aemAC = cleanList(lista1aemAC);
	let lista1aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 0, 0); }).filter((item) => item !== null);
	lista1aAC = cleanList(lista1aAC);
	let lista1aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 1, 0, 1); }).filter((item) => item !== null);
	lista1aDF = cleanList(lista1aDF);

	//2º ano
	let lista2aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 1); }).filter((item) => item !== null);
	lista2aem1 = cleanList(lista2aem1);
	let lista2aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 2); }).filter((item) => item !== null);
	lista2aem2 = cleanList(lista2aem2);
	let lista2aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 3); }).filter((item) => item !== null);
	lista2aem3 = cleanList(lista2aem3);
	let lista2aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 4); }).filter((item) => item !== null);
	lista2aem4 = cleanList(lista2aem4);
	let lista2aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 5); }).filter((item) => item !== null);
	lista2aem5 = cleanList(lista2aem5);
	let lista2aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 6); }).filter((item) => item !== null);
	lista2aem6 = cleanList(lista2aem6);
	let lista2aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 7); }).filter((item) => item !== null);
	lista2aem7 = cleanList(lista2aem7);
	let lista2aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 8); }).filter((item) => item !== null);
	lista2aem8 = cleanList(lista2aem8);
	let lista2aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 99); }).filter((item) => item !== null);
	lista2aemAC = cleanList(lista2aemAC);
	let lista2aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 0, 0); }).filter((item) => item !== null);
	lista2aAC = cleanList(lista2aAC);
	let lista2aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 2, 0, 1); }).filter((item) => item !== null);
	lista2aDF = cleanList(lista2aDF);

	//3º ano
	let lista3aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 1); }).filter((item) => item !== null);
	lista3aem1 = cleanList(lista3aem1);
	let lista3aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 2); }).filter((item) => item !== null);
	lista3aem2 = cleanList(lista3aem2);
	let lista3aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 3); }).filter((item) => item !== null);
	lista3aem3 = cleanList(lista3aem3);
	let lista3aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 4); }).filter((item) => item !== null);
	lista3aem4 = cleanList(lista3aem4);
	let lista3aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 5); }).filter((item) => item !== null);
	lista3aem5 = cleanList(lista3aem5);
	let lista3aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 6); }).filter((item) => item !== null);
	lista3aem6 = cleanList(lista3aem6);
	let lista3aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 7); }).filter((item) => item !== null);
	lista3aem7 = cleanList(lista3aem7);
	let lista3aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 8); }).filter((item) => item !== null);
	lista3aem8 = cleanList(lista3aem8);
	let lista3aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 99); }).filter((item) => item !== null);
	lista3aemAC = cleanList(lista3aemAC);
	let lista3aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 0, 0); }).filter((item) => item !== null);
	lista3aAC = cleanList(lista3aAC);
	let lista3aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 3, 0, 1); }).filter((item) => item !== null);
	lista3aDF = cleanList(lista3aDF);

	//4º ano
	let lista4aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 1); }).filter((item) => item !== null);
	lista4aem1 = cleanList(lista4aem1);
	let lista4aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 2); }).filter((item) => item !== null);
	lista4aem2 = cleanList(lista4aem2);
	let lista4aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 3); }).filter((item) => item !== null);
	lista4aem3 = cleanList(lista4aem3);
	let lista4aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 4); }).filter((item) => item !== null);
	lista4aem4 = cleanList(lista4aem4);
	let lista4aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 5); }).filter((item) => item !== null);
	lista4aem5 = cleanList(lista4aem5);
	let lista4aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 6); }).filter((item) => item !== null);
	lista4aem6 = cleanList(lista4aem6);
	let lista4aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 7); }).filter((item) => item !== null);
	lista4aem7 = cleanList(lista4aem7);
	let lista4aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 8); }).filter((item) => item !== null);
	lista4aem8 = cleanList(lista4aem8);
	let lista4aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 99); }).filter((item) => item !== null);
	lista4aemAC = cleanList(lista4aemAC);
	let lista4aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 0, 0); }).filter((item) => item !== null);
	lista4aAC = cleanList(lista4aAC);
	let lista4aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 4, 0, 1); }).filter((item) => item !== null);
	lista4aDF = cleanList(lista4aDF);

	//5º ano
	let lista5aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 1); }).filter((item) => item !== null);
	lista5aem1 = cleanList(lista5aem1);
	let lista5aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 2); }).filter((item) => item !== null);
	lista5aem2 = cleanList(lista5aem2);
	let lista5aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 3); }).filter((item) => item !== null);
	lista5aem3 = cleanList(lista5aem3);
	let lista5aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 4); }).filter((item) => item !== null);
	lista5aem4 = cleanList(lista5aem4);
	let lista5aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 5); }).filter((item) => item !== null);
	lista5aem5 = cleanList(lista5aem5);
	let lista5aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 6); }).filter((item) => item !== null);
	lista5aem6 = cleanList(lista5aem6);
	let lista5aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 7); }).filter((item) => item !== null);
	lista5aem7 = cleanList(lista5aem7);
	let lista5aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 8); }).filter((item) => item !== null);
	lista5aem8 = cleanList(lista5aem8);
	let lista5aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 99); }).filter((item) => item !== null);
	lista5aemAC = cleanList(lista5aemAC);
	let lista5aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 0, 0); }).filter((item) => item !== null);
	lista5aAC = cleanList(lista5aAC);
	let lista5aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 5, 0, 1); }).filter((item) => item !== null);
	lista5aDF = cleanList(lista5aDF);

	//6º ano
	let lista6aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 1); }).filter((item) => item !== null);
	lista6aem1 = cleanList(lista6aem1);
	let lista6aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 2); }).filter((item) => item !== null);
	lista6aem2 = cleanList(lista6aem2);
	let lista6aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 3); }).filter((item) => item !== null);
	lista6aem3 = cleanList(lista6aem3);
	let lista6aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 4); }).filter((item) => item !== null);
	lista6aem4 = cleanList(lista6aem4);
	let lista6aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 5); }).filter((item) => item !== null);
	lista6aem5 = cleanList(lista6aem5);
	let lista6aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 6); }).filter((item) => item !== null);
	lista6aem6 = cleanList(lista6aem6);
	let lista6aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 7); }).filter((item) => item !== null);
	lista6aem7 = cleanList(lista6aem7);
	let lista6aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 8); }).filter((item) => item !== null);
	lista6aem8 = cleanList(lista6aem8);
	let lista6aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 99); }).filter((item) => item !== null);
	lista6aemAC = cleanList(lista6aemAC);
	let lista6aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 0, 0); }).filter((item) => item !== null);
	lista6aAC = cleanList(lista6aAC);
	let lista6aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 6, 0, 1); }).filter((item) => item !== null);
	lista6aDF = cleanList(lista6aDF);

	//7º ano
	let lista7aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 1); }).filter((item) => item !== null);
	lista7aem1 = cleanList(lista7aem1);
	let lista7aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 2); }).filter((item) => item !== null);
	lista7aem2 = cleanList(lista7aem2);
	let lista7aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 3); }).filter((item) => item !== null);
	lista7aem3 = cleanList(lista7aem3);
	let lista7aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 4); }).filter((item) => item !== null);
	lista7aem4 = cleanList(lista7aem4);
	let lista7aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 5); }).filter((item) => item !== null);
	lista7aem5 = cleanList(lista7aem5);
	let lista7aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 6); }).filter((item) => item !== null);
	lista7aem6 = cleanList(lista7aem6);
	let lista7aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 7); }).filter((item) => item !== null);
	lista7aem7 = cleanList(lista7aem7);
	let lista7aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 8); }).filter((item) => item !== null);
	lista7aem8 = cleanList(lista7aem8);
	let lista7aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 99); }).filter((item) => item !== null);
	lista7aemAC = cleanList(lista7aemAC);
	let lista7aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 0, 0); }).filter((item) => item !== null);
	lista7aAC = cleanList(lista7aAC);
	let lista7aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 7, 0, 1); }).filter((item) => item !== null);
	lista7aDF = cleanList(lista7aDF);

	//8º ano
	let lista8aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 1); }).filter((item) => item !== null);
	lista8aem1 = cleanList(lista8aem1);
	let lista8aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 2); }).filter((item) => item !== null);
	lista8aem2 = cleanList(lista8aem2);
	let lista8aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 3); }).filter((item) => item !== null);
	lista8aem3 = cleanList(lista8aem3);
	let lista8aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 4); }).filter((item) => item !== null);
	lista8aem4 = cleanList(lista8aem4);
	let lista8aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 5); }).filter((item) => item !== null);
	lista8aem5 = cleanList(lista8aem5);
	let lista8aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 6); }).filter((item) => item !== null);
	lista8aem6 = cleanList(lista8aem6);
	let lista8aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 7); }).filter((item) => item !== null);
	lista8aem7 = cleanList(lista8aem7);
	let lista8aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 8); }).filter((item) => item !== null);
	lista8aem8 = cleanList(lista8aem8);
	let lista8aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 99); }).filter((item) => item !== null);
	lista8aemAC = cleanList(lista8aemAC);
	let lista8aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 0, 0); }).filter((item) => item !== null);
	lista8aAC = cleanList(lista8aAC);
	let lista8aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 8, 0, 1); }).filter((item) => item !== null);
	lista8aDF = cleanList(lista8aDF);

	//9º ano
	let lista9aem1 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 1); }).filter((item) => item !== null);
	lista9aem1 = cleanList(lista9aem1);
	let lista9aem2 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 2); }).filter((item) => item !== null);
	lista9aem2 = cleanList(lista9aem2);
	let lista9aem3 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 3); }).filter((item) => item !== null);
	lista9aem3 = cleanList(lista9aem3);
	let lista9aem4 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 4); }).filter((item) => item !== null);
	lista9aem4 = cleanList(lista9aem4);
	let lista9aem5 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 5); }).filter((item) => item !== null);
	lista9aem5 = cleanList(lista9aem5);
	let lista9aem6 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 6); }).filter((item) => item !== null);
	lista9aem6 = cleanList(lista9aem6);
	let lista9aem7 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 7); }).filter((item) => item !== null);
	lista9aem7 = cleanList(lista9aem7);
	let lista9aem8 = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 8); }).filter((item) => item !== null);
	lista9aem8 = cleanList(lista9aem8);
	let lista9aemAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 99); }).filter((item) => item !== null);
	lista9aemAC = cleanList(lista9aemAC);
	let lista9aAC = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 0, 0); }).filter((item) => item !== null);
	lista9aAC = cleanList(lista9aAC);
	let lista9aDF = csv.split("\n").map(function (item) { return CSVtoArray(item.replace("\r", ""), 9, 0, 1); }).filter((item) => item !== null);
	lista9aDF = cleanList(lista9aDF);

	
	//condição a ser avaliada
	if(lista.length == 0) return;

	


	//Imprimir a lista de candidatos nos pontos desejados e com os valores recuperados
	imprimirListaCandidatos("primeiroPManual", "1º período",
		lista1pvm1, lista1pvm2, lista1pvm3, lista1pvm4, lista1pvm5, lista1pvm6, lista1pvm7, lista1pvm8, lista1pvmAC, lista1pAC, lista1pDF,
		'divCandidatos1pvm1', 'divCandidatos1pvm2', 'divCandidatos1pvm3', 'divCandidatos1pvm4', 'divCandidatos1pvm5', 'divCandidatos1pvm6',
		'divCandidatos1pvm7', 'divCandidatos1pvm8', 'divCandidatos1pvmAC', 'divCandidatos1pvAP', 'divCandidatos1pvDF' );

	imprimirListaCandidatos("2manual", "2º período",
		lista2pem1, lista2pem2, lista2pem3, lista2pem4, lista2pem5, lista2pem6, lista2pem7, lista2pem8, lista2pemAC, lista2pAC, lista2pDF,
		'divCandidatos2pem1', 'divCandidatos2pem2', 'divCandidatos2pem3', 'divCandidatos2pem4', 'divCandidatos2pem5', 'divCandidatos2pem6',
		'divCandidatos2pem7', 'divCandidatos2pem8', 'divCandidatos2pemAC', 'divCandidatos2peAP', 'divCandidatos2peDF' );
		
	imprimirListaCandidatos("primeiroAnoManual", "1º ano",
		lista1aem1, lista1aem2, lista1aem3, lista1aem4, lista1aem5, lista1aem6, lista1aem7, lista1aem8, lista1aemAC, lista1aAC, lista1aDF,
		'divCandidatos1aem1', 'divCandidatos1aem2', 'divCandidatos1aem3', 'divCandidatos1aem4', 'divCandidatos1aem5', 'divCandidatos1aem6',
		'divCandidatos1aem7', 'divCandidatos1aem8', 'divCandidatos1aemAC', 'divCandidatos1aeAP', 'divCandidatos1aeDF' );

	imprimirListaCandidatos("segundoAnoManual", "2º ano",
		lista2aem1, lista2aem2, lista2aem3, lista2aem4, lista2aem5, lista2aem6, lista2aem7, lista2aem8, lista2aemAC, lista2aAC, lista2aDF,
		'divCandidatos2aem1', 'divCandidatos2aem2', 'divCandidatos2aem3', 'divCandidatos2aem4', 'divCandidatos2aem5', 'divCandidatos2aem6',
		'divCandidatos2aem7', 'divCandidatos2aem8', 'divCandidatos2aemAC', 'divCandidatos2aeAP', 'divCandidatos2aeDF' );

	imprimirListaCandidatos("terceiroAnoManual", "3º ano",
		lista3aem1, lista3aem2, lista3aem3, lista3aem4, lista3aem5, lista3aem6, lista3aem7, lista3aem8, lista3aemAC, lista3aAC, lista3aDF,
		'divCandidatos3aem1', 'divCandidatos3aem2', 'divCandidatos3aem3', 'divCandidatos3aem4', 'divCandidatos3aem5', 'divCandidatos3aem6',
		'divCandidatos3aem7', 'divCandidatos3aem8', 'divCandidatos3aemAC', 'divCandidatos3aeAP', 'divCandidatos3aeDF' );

	imprimirListaCandidatos("quartoAnoManual", "4º ano",
		lista4aem1, lista4aem2, lista4aem3, lista4aem4, lista4aem5, lista4aem6, lista4aem7, lista4aem8, lista4aemAC, lista4aAC, lista4aDF,
		'divCandidatos4aem1', 'divCandidatos4aem2', 'divCandidatos4aem3', 'divCandidatos4aem4', 'divCandidatos4aem5', 'divCandidatos4aem6',
		'divCandidatos4aem7', 'divCandidatos4aem8', 'divCandidatos4aemAC', 'divCandidatos4aeAP', 'divCandidatos4aeDF' );

	imprimirListaCandidatos("quintoAnoManual", "5º ano",
		lista5aem1, lista5aem2, lista5aem3, lista5aem4, lista5aem5, lista5aem6, lista5aem7, lista5aem8, lista5aemAC, lista5aAC, lista5aDF,
		'divCandidatos5aem1', 'divCandidatos5aem2', 'divCandidatos5aem3', 'divCandidatos5aem4', 'divCandidatos5aem5', 'divCandidatos5aem6',
		'divCandidatos5aem7', 'divCandidatos5aem8', 'divCandidatos5aemAC', 'divCandidatos5aeAP', 'divCandidatos5aeDF' );
	
	imprimirListaCandidatos("sextoAnoManual", "6º ano",
		lista6aem1, lista6aem2, lista6aem3, lista6aem4, lista6aem5, lista6aem6, lista6aem7, lista6aem8, lista6aemAC, lista6aAC, lista6aDF,
		'divCandidatos6aem1', 'divCandidatos6aem2', 'divCandidatos6aem3', 'divCandidatos6aem4', 'divCandidatos6aem5', 'divCandidatos6aem6',
		'divCandidatos6aem7', 'divCandidatos6aem8', 'divCandidatos6aemAC', 'divCandidatos6aeAP', 'divCandidatos6aeDF' );

	imprimirListaCandidatos("setimoAnoManual", "7º ano",
		lista7aem1, lista7aem2, lista7aem3, lista7aem4, lista7aem5, lista7aem6, lista7aem7, lista7aem8, lista7aemAC, lista7aAC, lista7aDF,
		'divCandidatos7aem1', 'divCandidatos7aem2', 'divCandidatos7aem3', 'divCandidatos7aem4', 'divCandidatos7aem5', 'divCandidatos7aem6',
		'divCandidatos7aem7', 'divCandidatos7aem8', 'divCandidatos7aemAC', 'divCandidatos7aeAP', 'divCandidatos7aeDF' );

	imprimirListaCandidatos("oitavoAnoManual", "8º ano",
		lista8aem1, lista8aem2, lista8aem3, lista8aem4, lista8aem5, lista8aem6, lista8aem7, lista8aem8, lista8aemAC, lista8aAC, lista8aDF,
		'divCandidatos8aem1', 'divCandidatos8aem2', 'divCandidatos8aem3', 'divCandidatos8aem4', 'divCandidatos8aem5', 'divCandidatos8aem6',
		'divCandidatos8aem7', 'divCandidatos8aem8', 'divCandidatos8aemAC', 'divCandidatos8aeAP', 'divCandidatos8aeDF' );

	imprimirListaCandidatos("nonoAnoManual", "9º ano",
		lista9aem1, lista9aem2, lista9aem3, lista9aem4, lista9aem5, lista9aem6, lista9aem7, lista9aem8, lista9aemAC, lista9aAC, lista9aDF,
		'divCandidatos9aem1', 'divCandidatos9aem2', 'divCandidatos9aem3', 'divCandidatos9aem4', 'divCandidatos9aem5', 'divCandidatos9aem6',
		'divCandidatos9aem7', 'divCandidatos9aem8', 'divCandidatos9aemAC', 'divCandidatos9aeAP', 'divCandidatos9aeDF' );


	//lista candidatos 1º período
	listaCandidatos = lista;
    if (listaCandidatos[0].includes('id')){
        listaCandidatos.shift()
    }
    
	listaCandidatos1pAC = lista1pAC;
	listaCandidatos1pDF = lista1pDF;
	listaCandidatos1pvm1 = lista1pvm1;
	listaCandidatos1pvm2 = lista1pvm2;
	listaCandidatos1pvm3 = lista1pvm3;
	listaCandidatos1pvm4 = lista1pvm4;
	listaCandidatos1pvm5 = lista1pvm5;
	listaCandidatos1pvm6 = lista1pvm6;
	listaCandidatos1pvm7 = lista1pvm7;
	listaCandidatos1pvm8 = lista1pvm8;
	listaCandidatos1pvmAC = lista1pvmAC;
	//lista candidatos 2º período
	listaCandidatos2pAC = lista2pAC;
	listaCandidatos2pDF = lista2pDF;
	listaCandidatos2pem1 = lista2pem1;
	listaCandidatos2pem2 = lista2pem2;
	listaCandidatos2pem3 = lista2pem3;
	listaCandidatos2pem4 = lista2pem4;
	listaCandidatos2pem5 = lista2pem5;
	listaCandidatos2pem6 = lista2pem6;
	listaCandidatos2pem7 = lista2pem7;
	listaCandidatos2pem8 = lista2pem8;
	listaCandidatos2pemAC = lista2pemAC;
	//lista candidatos 1º ano
	listaCandidatos1aAC = lista1aAC;
	listaCandidatos1aDF = lista1aDF;
	listaCandidatos1aem1 = lista1aem1;
	listaCandidatos1aem2 = lista1aem2;
	listaCandidatos1aem3 = lista1aem3;
	listaCandidatos1aem4 = lista1aem4;
	listaCandidatos1aem5 = lista1aem5;
	listaCandidatos1aem6 = lista1aem6;
	listaCandidatos1aem7 = lista1aem7;
	listaCandidatos1aem8 = lista1aem8;
	listaCandidatos1aemAC = lista1aemAC;
	//lista candidatos 2º ano
	listaCandidatos2aAC = lista2aAC;
	listaCandidatos2aDF = lista2aDF;
	listaCandidatos2aem1 = lista2aem1;
	listaCandidatos2aem2 = lista2aem2;
	listaCandidatos2aem3 = lista2aem3;
	listaCandidatos2aem4 = lista2aem4;
	listaCandidatos2aem5 = lista2aem5;
	listaCandidatos2aem6 = lista2aem6;
	listaCandidatos2aem7 = lista2aem7;
	listaCandidatos2aem8 = lista2aem8;
	listaCandidatos2aemAC = lista2aemAC;
	//lista candidatos 3º ano
	listaCandidatos3aAC = lista3aAC;
	listaCandidatos3aDF = lista3aDF;
	listaCandidatos3aem1 = lista3aem1;
	listaCandidatos3aem2 = lista3aem2;
	listaCandidatos3aem3 = lista3aem3;
	listaCandidatos3aem4 = lista3aem4;
	listaCandidatos3aem5 = lista3aem5;
	listaCandidatos3aem6 = lista3aem6;
	listaCandidatos3aem7 = lista3aem7;
	listaCandidatos3aem8 = lista3aem8;
	listaCandidatos3aemAC = lista3aemAC;
	//lista candidatos 4º ano
	listaCandidatos4aAC = lista4aAC;
	listaCandidatos4aDF = lista4aDF;
	listaCandidatos4aem1 = lista4aem1;
	listaCandidatos4aem2 = lista4aem2;
	listaCandidatos4aem3 = lista4aem3;
	listaCandidatos4aem4 = lista4aem4;
	listaCandidatos4aem5 = lista4aem5;
	listaCandidatos4aem6 = lista4aem6;
	listaCandidatos4aem7 = lista4aem7;
	listaCandidatos4aem8 = lista4aem8;
	listaCandidatos4aemAC = lista4aemAC;
	//lista candidatos 5º ano
	listaCandidatos5aAC = lista5aAC;
	listaCandidatos5aDF = lista5aDF;
	listaCandidatos5aem1 = lista5aem1;
	listaCandidatos5aem2 = lista5aem2;
	listaCandidatos5aem3 = lista5aem3;
	listaCandidatos5aem4 = lista5aem4;
	listaCandidatos5aem5 = lista5aem5;
	listaCandidatos5aem6 = lista5aem6;
	listaCandidatos5aem7 = lista5aem7;
	listaCandidatos5aem8 = lista5aem8;
	listaCandidatos5aemAC = lista5aemAC;
	//lista candidatos 6º ano
	listaCandidatos6aAC = lista6aAC;
	listaCandidatos6aDF = lista6aDF;
	listaCandidatos6aem1 = lista6aem1;
	listaCandidatos6aem2 = lista6aem2;
	listaCandidatos6aem3 = lista6aem3;
	listaCandidatos6aem4 = lista6aem4;
	listaCandidatos6aem5 = lista6aem5;
	listaCandidatos6aem6 = lista6aem6;
	listaCandidatos6aem7 = lista6aem7;
	listaCandidatos6aem8 = lista6aem8;
	listaCandidatos6aemAC = lista6aemAC;
	//lista candidatos 7º ano
	listaCandidatos7aAC = lista7aAC;
	listaCandidatos7aDF = lista7aDF;
	listaCandidatos7aem1 = lista7aem1;
	listaCandidatos7aem2 = lista7aem2;
	listaCandidatos7aem3 = lista7aem3;
	listaCandidatos7aem4 = lista7aem4;
	listaCandidatos7aem5 = lista7aem5;
	listaCandidatos7aem6 = lista7aem6;
	listaCandidatos7aem7 = lista7aem7;
	listaCandidatos7aem8 = lista7aem8;
	listaCandidatos7aemAC = lista7aemAC;
	//lista candidatos 8º ano
	listaCandidatos8aAC = lista8aAC;
	listaCandidatos8aDF = lista8aDF;
	listaCandidatos8aem1 = lista8aem1;
	listaCandidatos8aem2 = lista8aem2;
	listaCandidatos8aem3 = lista8aem3;
	listaCandidatos8aem4 = lista8aem4;
	listaCandidatos8aem5 = lista8aem5;
	listaCandidatos8aem6 = lista8aem6;
	listaCandidatos8aem7 = lista8aem7;
	listaCandidatos8aem8 = lista8aem8;
	listaCandidatos8aemAC = lista8aemAC;
	//lista candidatos 9º ano
	listaCandidatos9aAC = lista9aAC;
	listaCandidatos9aDF = lista9aDF;
	listaCandidatos9aem1 = lista9aem1;
	listaCandidatos9aem2 = lista9aem2;
	listaCandidatos9aem3 = lista9aem3;
	listaCandidatos9aem4 = lista9aem4;
	listaCandidatos9aem5 = lista9aem5;
	listaCandidatos9aem6 = lista9aem6;
	listaCandidatos9aem7 = lista9aem7;
	listaCandidatos9aem8 = lista9aem8;
	listaCandidatos9aemAC = lista9aemAC;
	

}

/** CSVtoArray
* @brief Função responsável pela leitura do arquivo,
*        em caso de sucesso realiza o preenchimento
*		 dos candidatos através da função parseCSV
*		 adaptada do software anterior do IFES
*
* @param  (Texto com dados,
*			cod_serie:
*						11 – 1º Período da educação infantil; 
*						22 - 2º Período da educação infantil;
*						1 – 1º Ano do ensino fundamental;
*						2 – 2º Ano do ensino fundamental;
*						3 – 3º Ano do ensino fundamental;
*						4 – 4º Ano do ensino fundamental;
*						5 – 5º Ano do ensino fundamental;
*						6 – 6º Ano do ensino fundamental;
*						7 – 7º Ano do ensino fundamental;
*						8 – 8º Ano do ensino fundamental;
*						9 – 9º Ano do ensino fundamental;,
*			 pse – Indica a modalidade do candidato:
*						0 – Ampla concorrência e Pessoa com deficiência;
*						1 – Modalidade M1;
*						2 – Modalidade M2;
*						3 – Modalidade M3;
*						4 – Modalidade M4;
*						5 – Modalidade M5;
*						6 – Modalidade M6;
*						7 – Modalidade M7;
*						8 – Modalidade M8;
*						99 – Modalidade Ampla Concorrência, 
*			código de deficiencia: 0 – não; 1 – sim)
* @return Lista dos alunos 
*
* @bugs Nenhum conhecido
*/
function CSVtoArray(text, ano, modalidade, deficiencia) {
	var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^;'"\s\\]*(?:\s+[^;'"\s\\]+)*)\s*(?:;\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^;'"\s\\]*(?:\s+[^;'"\s\\]+)*)\s*)*$/;
	var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^;'"\s\\]*(?:\s+[^;'"\s\\]+)*))\s*(?:;|$)/g;

	// Return NULL if input string is not well formed CSV string.
	if (!re_valid.test(text)) return null;

	var a = []; // Initialize array to receive values.
	var b = [];
	text.replace(re_value, // "Walk" the string using replace with callback.
		function (m0, m1, m2, m3) {

			// Remove backslash from \' in single quoted values.
			if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));

			// Remove backslash from \" in double quoted values.
			else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
			else if (m3 !== undefined) a.push(m3);
			
			return ''; // Return empty string.
		});

	// Handle special case of empty last value.
	if (/,\s*$/.test(text)) a.push('');
	
	if (!(a.length > 0)) return null;
	
	//parte implementada pela equipe para separar de acordo com os códigos (modularizar e otimizar futuramente)
	if(a[10]==ano && a[11] == modalidade && modalidade != 0){
		b.push(a[0],a[2],a[1],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
	}else if (a[10]==ano && modalidade == 99){
		b.push(a[0],a[2],a[1],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
	}else if (a[10]==ano && modalidade == 0){
		if(deficiencia == 1 && a[7] == 1){
			b.push(a[0],a[2],a[1],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
		}
		if(deficiencia == 0 && modalidade == 0 && a[7] == 0){
			b.push(a[0],a[2],a[1],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
		}
	}

    
    if(modalidade==130){
        b.push(a[0],a[2],a[1],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
    }
    



	//retorna a lista separada pelos códigos
	return b;
}

/** cleanList
* @brief Função responsável por reduzir a lista para os candidatos
*        que foram considerados pela parseCSV,
*		 excluindo os candidatos com dados vazios
*		
*
* @param  (Lista de candidatos filtrados)
* @return (Lista com candidatos com dados não vazios)
*
* @bugs Nenhum conhecido
*/
function cleanList(lista){
	const lista2 = [];
	for(i = 0; i < lista.length; i++){
		if(lista[i].length != 0){
			lista2.push(lista[i]);
		}
	}
	return lista2;
}

/** imprimirListaCandidatos
* @brief Função responsável por imprimir a lista para os candidatos
*        dados os parâmetros de identificação, série,
*		 variáveis das modalidades e ids do HTML.
*		 A função avalia se o componente de modalidades está ativo
*		 e imprime de acordo com a seleção da checkbox.
*
* @param  (input name para verificação, nome da série, lista da modalidade 1, 2, 3,4,5,6,7,8,9 ampla concorrência, AC, DF
*			id da div para impressão da lista 1, 2,3,4,5,6,7,8,9AC, AC, DF)
* @return (Lista com candidatos com dados não vazios)
*
* @bugs Nenhum conhecido
*/
function imprimirListaCandidatos(PManual, periodo,
	listavm1, listavm2, listavm3, listavm4, listavm5, listavm6, listavm7, listavm8, listavmAC, listaAC, listaDF,
	divCandidatosvm1, divCandidatosvm2, divCandidatosvm3, divCandidatosvm4, divCandidatosvm5, divCandidatosvm6,
	divCandidatosvm7, divCandidatosvm8, divCandidatosvmAC, divCandidatosvAP, divCandidatosvDF ){
		if(document.querySelector('[name= \''+PManual+'\']').checked){
			printHTML(listavm1, divCandidatosvm1, periodo+' - M1');
			printHTML(listavm2, divCandidatosvm2, periodo+' - M2');
			printHTML(listavm3, divCandidatosvm3, periodo+' - M3');
			printHTML(listavm4, divCandidatosvm4, periodo+' - M4');
			printHTML(listavm5, divCandidatosvm5, periodo+' - M5');
			printHTML(listavm6, divCandidatosvm6, periodo+' - M6');
			if(document.querySelector('[name="habilitarM7"]').checked){
				printHTML(listavm7, divCandidatosvm7, periodo+' - M7');
			}
			if(document.querySelector('[name="habilitarM8"]').checked){
				printHTML(listavm8, divCandidatosvm8, periodo+' - M8');
			}
			printHTML(listavmAC, divCandidatosvmAC, periodo+' - AC');
		}else{
			printHTML(listaAC, divCandidatosvAP, periodo+' - AC');
			printHTML(listaDF, divCandidatosvDF, periodo+' - PCD');
		}
}
	
//********************************************************************************************//
//Dada a lista carregada, ao se clicar no botão sorteio, as funções abaixo serão iniciadas.
//********************************************************************************************//

/** sorteioListas
* @brief Função responsável por realizar o sorteio 
*        com a chamada de diversas outras funções,
*		 incluindo o rankeamento dos candidatos e
*		 o preparo das listas para impressão.
*
* @param  Nenhum
* @return Nada
*
* @bugs Nenhum conhecido
*/
function sorteioListas(){
	//inicia vazio a cada sorteio
	listaSorteados = [];
	var semente;
	//verifica se há semente inserida, caso contrário cria com base no horário atual
	if (document.sorteio.sementeManual.checked) {
		semente = parseInt(document.sorteio.semente.value);
	} else {
		semente = new Date().getTime();
	}
	
	//habilita a visibilidade dos blocos para apresentar o resultado
	const visibilidade = document.querySelectorAll('.fundocor');
	visibilidade.forEach(visivel => {
		visivel.style.display = 'block';
	});

	//vagas 1 período 
	var vagas1vAP = parseInt(document.getElementById('1vac').value);
	var vagas1vDF = parseInt(document.getElementById('1vdf').value);
	var vagas1vm1 = parseInt(document.getElementById('1vm1').value);
	var vagas1vm2 = parseInt(document.getElementById('1vm2').value);
	var vagas1vm3 = parseInt(document.getElementById('1vm3').value);
	var vagas1vm4 = parseInt(document.getElementById('1vm4').value);
	var vagas1vm5 = parseInt(document.getElementById('1vm5').value);
	var vagas1vm6 = parseInt(document.getElementById('1vm6').value);
	//caso a caixa de modalidade extra não esteja ativada e o valor default esteja setado para valores maiores que zero
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas1vm7 = parseInt(document.getElementById('1vm7').value);
	}else{var vagas1vm7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas1vm8 = parseInt(document.getElementById('1vm8').value);
	}else{var vagas1vm8 = 0;}
	var vagas1vmAC = parseInt(document.getElementById('1vmAC').value);
	//vagas em espera
	var vagas1eAP = parseInt(document.getElementById('1eac').value);
	var vagas1eDF = parseInt(document.getElementById('1edf').value);
	var vagas1em1 = parseInt(document.getElementById('1em1').value);
	var vagas1em2 = parseInt(document.getElementById('1em2').value);
	var vagas1em3 = parseInt(document.getElementById('1em3').value);
	var vagas1em4 = parseInt(document.getElementById('1em4').value);
	var vagas1em5 = parseInt(document.getElementById('1em5').value);
	var vagas1em6 = parseInt(document.getElementById('1em6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas1em7 = parseInt(document.getElementById('1em7').value);
	}else{var vagas1em7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas1em8 = parseInt(document.getElementById('1em8').value);
	}else{var vagas1em8 = 0;}
	var vagas1emAC = parseInt(document.getElementById('1emAC').value);


    listaRankeados = ResultadoRank(listaCandidatos, semente);
    // console.log(listaRankeados)
    //29-02-2024
    //18-06-2025
	//rankeados 1 período

    var listaRankeados1pAP = listaRankeados.filter((item) => item[10] == 11 & item[7] == 0);
	var listaRankeados1pDF = listaRankeados.filter((item) => item[10] == 11 & item[7] == 1);
    var listaRankeados1pvmAC = listaRankeados.filter((item) => item[10] == 11);
    // console.log(listaRankeados1pAPT)
    var listaRankeados1pvm1 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 1);
	var listaRankeados1pvm2 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 2);
	var listaRankeados1pvm3 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 3);
	var listaRankeados1pvm4 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 4);
	var listaRankeados1pvm5 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 5);
	var listaRankeados1pvm6 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 6);
	var listaRankeados1pvm7 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 7);
	var listaRankeados1pvm8 = listaRankeados.filter((item) => item[10] == 11 & item[11] == 8);

	//rankeados 1 período espera
	var listaRankeados1eAP = listaRankeados.filter((item) => item[10] == 11 & item[7] == 0);
	var listaRankeados1eDF = listaRankeados.filter((item) => item[10] == 11 & item[7] == 1);
	var listaRankeados1pem1 = listaRankeados1pvm1;
	var listaRankeados1pem2 = listaRankeados1pvm2;
	var listaRankeados1pem3 = listaRankeados1pvm3;
	var listaRankeados1pem4 = listaRankeados1pvm4;
	var listaRankeados1pem5 = listaRankeados1pvm5;
	var listaRankeados1pem6 = listaRankeados1pvm6;
	var listaRankeados1pem7 = listaRankeados1pvm7;
	var listaRankeados1pem8 = listaRankeados1pvm8;
	var listaRankeados1pemAC = listaRankeados1pvmAC;

	//vagas 2 período Espera
	var vagas2eAP = parseInt(document.getElementById('2eac').value);
	var vagas2eDF = parseInt(document.getElementById('2edf').value);
	var vagas2em1 = parseInt(document.getElementById('2em1').value);
	var vagas2em2 = parseInt(document.getElementById('2em2').value);
	var vagas2em3 = parseInt(document.getElementById('2em3').value);
	var vagas2em4 = parseInt(document.getElementById('2em4').value);
	var vagas2em5 = parseInt(document.getElementById('2em5').value);
	var vagas2em6 = parseInt(document.getElementById('2em6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas2em7 = parseInt(document.getElementById('2em7').value);
	}else{var vagas2em7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas2em8 = parseInt(document.getElementById('2em8').value);
	}else{var vagas2em8 = 0;}
	var vagas2emAC = parseInt(document.getElementById('2emAC').value);
	//rankeados 2 período

    var listaRankeados2eAC = listaRankeados.filter((item) => item[10] == 22 & item[7] == 0);
	var listaRankeados2eDF = listaRankeados.filter((item) => item[10] == 22 & item[7] == 1);
	var listaRankeados2pem1 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 1);
	var listaRankeados2pem2 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 2);
	var listaRankeados2pem3 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 3);
	var listaRankeados2pem4 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 4);
	var listaRankeados2pem5 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 5);
	var listaRankeados2pem6 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 6);
	var listaRankeados2pem7 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 7);
	var listaRankeados2pem8 = listaRankeados.filter((item) => item[10] == 22 & item[11] == 8);
	var listaRankeados2pemAC = listaRankeados.filter((item) => item[10] == 22);
	
	//vagas 1 ano
	var vagas1aeAP = parseInt(document.getElementById('1anoeac').value);
	var vagas1aeDF = parseInt(document.getElementById('1anoedf').value);
	var vagas1aem1 = parseInt(document.getElementById('1anoem1').value);
	var vagas1aem2 = parseInt(document.getElementById('1anoem2').value);
	var vagas1aem3 = parseInt(document.getElementById('1anoem3').value);
	var vagas1aem4 = parseInt(document.getElementById('1anoem4').value);
	var vagas1aem5 = parseInt(document.getElementById('1anoem5').value);
	var vagas1aem6 = parseInt(document.getElementById('1anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas1aem7 = parseInt(document.getElementById('1anoem7').value);
	}else{var vagas1aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas1aem8 = parseInt(document.getElementById('1anoem8').value);
	}else{var vagas1aem8 = 0;}
	var vagas1aemAC = parseInt(document.getElementById('1anoemAC').value);
	//rankeados 1 ano

    var listaRankeados1aAC = listaRankeados.filter((item) => item[10] == 1 & item[7] == 0);
	var listaRankeados1aDF = listaRankeados.filter((item) => item[10] == 1 & item[7] == 1);
	var listaRankeados1aem1 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 1);
	var listaRankeados1aem2 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 2);
	var listaRankeados1aem3 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 3);
	var listaRankeados1aem4 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 4);
	var listaRankeados1aem5 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 5);
	var listaRankeados1aem6 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 6);
	var listaRankeados1aem7 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 7);
	var listaRankeados1aem8 = listaRankeados.filter((item) => item[10] == 1 & item[11] == 8);
	var listaRankeados1aemAC = listaRankeados.filter((item) => item[10] == 1);

	//vagas 2º ano
	var vagas2aeAP = parseInt(document.getElementById('2anoeac').value);
	var vagas2aeDF = parseInt(document.getElementById('2anoedf').value);
	var vagas2aem1 = parseInt(document.getElementById('2anoem1').value);
	var vagas2aem2 = parseInt(document.getElementById('2anoem2').value);
	var vagas2aem3 = parseInt(document.getElementById('2anoem3').value);
	var vagas2aem4 = parseInt(document.getElementById('2anoem4').value);
	var vagas2aem5 = parseInt(document.getElementById('2anoem5').value);
	var vagas2aem6 = parseInt(document.getElementById('2anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas2aem7 = parseInt(document.getElementById('2anoem7').value);
	}else{var vagas2aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas2aem8 = parseInt(document.getElementById('2anoem8').value);
	}else{var vagas2aem8 = 0;}
	var vagas2aemAC = parseInt(document.getElementById('2anoemAC').value);
	//rankeados 2º ano

    var listaRankeados2aAC = listaRankeados.filter((item) => item[10] == 2 & item[7] == 0);
	var listaRankeados2aDF = listaRankeados.filter((item) => item[10] == 2 & item[7] == 1);
	var listaRankeados2aem1 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 1);
	var listaRankeados2aem2 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 2);
	var listaRankeados2aem3 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 3);
	var listaRankeados2aem4 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 4);
	var listaRankeados2aem5 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 5);
	var listaRankeados2aem6 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 6);
	var listaRankeados2aem7 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 7);
	var listaRankeados2aem8 = listaRankeados.filter((item) => item[10] == 2 & item[11] == 8);
	var listaRankeados2aemAC = listaRankeados.filter((item) => item[10] == 2);

	//vagas 3º ano
	var vagas3aeAP = parseInt(document.getElementById('3anoeac').value);
	var vagas3aeDF = parseInt(document.getElementById('3anoedf').value);
	var vagas3aem1 = parseInt(document.getElementById('3anoem1').value);
	var vagas3aem2 = parseInt(document.getElementById('3anoem2').value);
	var vagas3aem3 = parseInt(document.getElementById('3anoem3').value);
	var vagas3aem4 = parseInt(document.getElementById('3anoem4').value);
	var vagas3aem5 = parseInt(document.getElementById('3anoem5').value);
	var vagas3aem6 = parseInt(document.getElementById('3anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas3aem7 = parseInt(document.getElementById('3anoem7').value);
	}else{var vagas3aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas3aem8 = parseInt(document.getElementById('3anoem8').value);
	}else{var vagas3aem8 = 0;}
	var vagas3aemAC = parseInt(document.getElementById('3anoemAC').value);
	//rankeados 3º ano

    var listaRankeados3aAC = listaRankeados.filter((item) => item[10] == 3 & item[7] == 0);
	var listaRankeados3aDF = listaRankeados.filter((item) => item[10] == 3 & item[7] == 1);
	var listaRankeados3aem1 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 1);
	var listaRankeados3aem2 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 2);
	var listaRankeados3aem3 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 3);
	var listaRankeados3aem4 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 4);
	var listaRankeados3aem5 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 5);
	var listaRankeados3aem6 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 6);
	var listaRankeados3aem7 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 7);
	var listaRankeados3aem8 = listaRankeados.filter((item) => item[10] == 3 & item[11] == 8);
	var listaRankeados3aemAC = listaRankeados.filter((item) => item[10] == 3);

	//vagas 4º ano
	var vagas4aeAP = parseInt(document.getElementById('4anoeac').value);
	var vagas4aeDF = parseInt(document.getElementById('4anoedf').value);
	var vagas4aem1 = parseInt(document.getElementById('4anoem1').value);
	var vagas4aem2 = parseInt(document.getElementById('4anoem2').value);
	var vagas4aem3 = parseInt(document.getElementById('4anoem3').value);
	var vagas4aem4 = parseInt(document.getElementById('4anoem4').value);
	var vagas4aem5 = parseInt(document.getElementById('4anoem5').value);
	var vagas4aem6 = parseInt(document.getElementById('4anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas4aem7 = parseInt(document.getElementById('4anoem7').value);
	}else{var vagas4aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas4aem8 = parseInt(document.getElementById('4anoem8').value);
	}else{var vagas4aem8 = 0;}
	var vagas4aemAC = parseInt(document.getElementById('4anoemAC').value);
	//rankeados 4º ano

    var listaRankeados4aAC = listaRankeados.filter((item) => item[10] == 4 & item[7] == 0);
	var listaRankeados4aDF = listaRankeados.filter((item) => item[10] == 4 & item[7] == 1);
	var listaRankeados4aem1 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 1);
	var listaRankeados4aem2 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 2);
	var listaRankeados4aem3 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 3);
	var listaRankeados4aem4 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 4);
	var listaRankeados4aem5 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 5);
	var listaRankeados4aem6 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 6);
	var listaRankeados4aem7 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 7);
	var listaRankeados4aem8 = listaRankeados.filter((item) => item[10] == 4 & item[11] == 8);
	var listaRankeados4aemAC = listaRankeados.filter((item) => item[10] == 4);


	//vagas 5º ano
	var vagas5aeAP = parseInt(document.getElementById('5anoeac').value);
	var vagas5aeDF = parseInt(document.getElementById('5anoedf').value);
	var vagas5aem1 = parseInt(document.getElementById('5anoem1').value);
	var vagas5aem2 = parseInt(document.getElementById('5anoem2').value);
	var vagas5aem3 = parseInt(document.getElementById('5anoem3').value);
	var vagas5aem4 = parseInt(document.getElementById('5anoem4').value);
	var vagas5aem5 = parseInt(document.getElementById('5anoem5').value);
	var vagas5aem6 = parseInt(document.getElementById('5anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas5aem7 = parseInt(document.getElementById('5anoem7').value);
	}else{var vagas5aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas5aem8 = parseInt(document.getElementById('5anoem8').value);
	}else{var vagas5aem8 = 0;}
	var vagas5aemAC = parseInt(document.getElementById('5anoemAC').value);
	//rankeados 5º ano

    var listaRankeados5aAC = listaRankeados.filter((item) => item[10] == 5 & item[7] == 0);
	var listaRankeados5aDF = listaRankeados.filter((item) => item[10] == 5 & item[7] == 1);;
	var listaRankeados5aem1 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 1);
	var listaRankeados5aem2 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 2);
	var listaRankeados5aem3 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 3);
	var listaRankeados5aem4 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 4);
	var listaRankeados5aem5 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 5);
	var listaRankeados5aem6 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 6);
	var listaRankeados5aem7 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 7);
	var listaRankeados5aem8 = listaRankeados.filter((item) => item[10] == 5 & item[11] == 8);
	var listaRankeados5aemAC = listaRankeados.filter((item) => item[10] == 5);

	//vagas 6º ano
	var vagas6aeAP = parseInt(document.getElementById('6anoeac').value);
	var vagas6aeDF = parseInt(document.getElementById('6anoedf').value);
	var vagas6aem1 = parseInt(document.getElementById('6anoem1').value);
	var vagas6aem2 = parseInt(document.getElementById('6anoem2').value);
	var vagas6aem3 = parseInt(document.getElementById('6anoem3').value);
	var vagas6aem4 = parseInt(document.getElementById('6anoem4').value);
	var vagas6aem5 = parseInt(document.getElementById('6anoem5').value);
	var vagas6aem6 = parseInt(document.getElementById('6anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas6aem7 = parseInt(document.getElementById('6anoem7').value);
	}else{var vagas6aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas6aem8 = parseInt(document.getElementById('6anoem8').value);
	}else{var vagas6aem8 = 0;}
	var vagas6aemAC = parseInt(document.getElementById('6anoemAC').value);
	//rankeados 6º ano

    var listaRankeados6aAC = listaRankeados.filter((item) => item[10] == 6 & item[7] == 0);
	var listaRankeados6aDF = listaRankeados.filter((item) => item[10] == 6 & item[7] == 1);
	var listaRankeados6aem1 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 1);
	var listaRankeados6aem2 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 2);
	var listaRankeados6aem3 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 3);
	var listaRankeados6aem4 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 4);
	var listaRankeados6aem5 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 5);
	var listaRankeados6aem6 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 6);
	var listaRankeados6aem7 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 7);
	var listaRankeados6aem8 = listaRankeados.filter((item) => item[10] == 6 & item[11] == 8);
	var listaRankeados6aemAC = listaRankeados.filter((item) => item[10] == 6);

	//vagas 7º ano
	var vagas7aeAP = parseInt(document.getElementById('7anoeac').value);
	var vagas7aeDF = parseInt(document.getElementById('7anoedf').value);
	var vagas7aem1 = parseInt(document.getElementById('7anoem1').value);
	var vagas7aem2 = parseInt(document.getElementById('7anoem2').value);
	var vagas7aem3 = parseInt(document.getElementById('7anoem3').value);
	var vagas7aem4 = parseInt(document.getElementById('7anoem4').value);
	var vagas7aem5 = parseInt(document.getElementById('7anoem5').value);
	var vagas7aem6 = parseInt(document.getElementById('7anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas7aem7 = parseInt(document.getElementById('7anoem7').value);
	}else{var vagas7aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas7aem8 = parseInt(document.getElementById('7anoem8').value);
	}else{var vagas7aem8 = 0;}
	var vagas7aemAC = parseInt(document.getElementById('7anoemAC').value);
	//rankeados 7º ano

    var listaRankeados7aAC = listaRankeados.filter((item) => item[10] == 7 & item[7] == 0);
	var listaRankeados7aDF = listaRankeados.filter((item) => item[10] == 7 & item[7] == 1);
	var listaRankeados7aem1 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 1);
	var listaRankeados7aem2 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 2);
	var listaRankeados7aem3 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 3);
	var listaRankeados7aem4 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 4);
	var listaRankeados7aem5 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 5);
	var listaRankeados7aem6 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 6);
	var listaRankeados7aem7 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 7);
	var listaRankeados7aem8 = listaRankeados.filter((item) => item[10] == 7 & item[11] == 8);
	var listaRankeados7aemAC = listaRankeados.filter((item) => item[10] == 7);

	//vagas 8º ano
	var vagas8aeAP = parseInt(document.getElementById('8anoeac').value);
	var vagas8aeDF = parseInt(document.getElementById('8anoedf').value);
	var vagas8aem1 = parseInt(document.getElementById('8anoem1').value);
	var vagas8aem2 = parseInt(document.getElementById('8anoem2').value);
	var vagas8aem3 = parseInt(document.getElementById('8anoem3').value);
	var vagas8aem4 = parseInt(document.getElementById('8anoem4').value);
	var vagas8aem5 = parseInt(document.getElementById('8anoem5').value);
	var vagas8aem6 = parseInt(document.getElementById('8anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas8aem7 = parseInt(document.getElementById('8anoem7').value);
	}else{var vagas8aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas8aem8 = parseInt(document.getElementById('8anoem8').value);
	}else{var vagas8aem8 = 0;}
	var vagas8aemAC = parseInt(document.getElementById('8anoemAC').value);
	//rankeados 8º ano


    var listaRankeados8aAC = listaRankeados.filter((item) => item[10] == 8 & item[7] == 0);
	var listaRankeados8aDF = listaRankeados.filter((item) => item[10] == 8 & item[7] == 1);
	var listaRankeados8aem1 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 1);
	var listaRankeados8aem2 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 2);
	var listaRankeados8aem3 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 3);
	var listaRankeados8aem4 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 4);
	var listaRankeados8aem5 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 5);
	var listaRankeados8aem6 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 6);
	var listaRankeados8aem7 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 7);
	var listaRankeados8aem8 = listaRankeados.filter((item) => item[10] == 8 & item[11] == 8);
	var listaRankeados8aemAC = listaRankeados.filter((item) => item[10] == 8);

	//vagas 9º ano
	var vagas9aeAP = parseInt(document.getElementById('9anoeac').value);
	var vagas9aeDF = parseInt(document.getElementById('9anoedf').value);
	var vagas9aem1 = parseInt(document.getElementById('9anoem1').value);
	var vagas9aem2 = parseInt(document.getElementById('9anoem2').value);
	var vagas9aem3 = parseInt(document.getElementById('9anoem3').value);
	var vagas9aem4 = parseInt(document.getElementById('9anoem4').value);
	var vagas9aem5 = parseInt(document.getElementById('9anoem5').value);
	var vagas9aem6 = parseInt(document.getElementById('9anoem6').value);
	if(document.querySelector('[name="habilitarM7"]').checked){
		var vagas9aem7 = parseInt(document.getElementById('9anoem7').value);
	}else{var vagas9aem7 = 0;}
	if(document.querySelector('[name="habilitarM8"]').checked){
		var vagas9aem8 = parseInt(document.getElementById('9anoem8').value);
	}else{var vagas9aem8 = 0;}
	var vagas9aemAC = parseInt(document.getElementById('9anoemAC').value);
	//rankeados 9º ano

    var listaRankeados9aAC = listaRankeados.filter((item) => item[10] == 9 & item[7] == 0);
	var listaRankeados9aDF = listaRankeados.filter((item) => item[10] == 9 & item[7] == 1);
	var listaRankeados9aem1 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 1);
	var listaRankeados9aem2 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 2);
	var listaRankeados9aem3 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 3);
	var listaRankeados9aem4 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 4);
	var listaRankeados9aem5 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 5);
	var listaRankeados9aem6 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 6);
	var listaRankeados9aem7 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 7);
	var listaRankeados9aem8 = listaRankeados.filter((item) => item[10] == 9 & item[11] == 8);
	var listaRankeados9aemAC = listaRankeados.filter((item) => item[10] == 9);


	var pontoImpressao = "";

	preparoListas("primeiroPManual", 'visibilidade1pAC', 'visibilidade1pModalidades', "1º Período", semente,
	listaRankeados1pvm1, listaRankeados1pvm2, listaRankeados1pvm3, listaRankeados1pvm4, listaRankeados1pvm5, listaRankeados1pvm6, listaRankeados1pvm7, listaRankeados1pvm8, listaRankeados1pvmAC,
	vagas1vm1, vagas1vm2, vagas1vm3, vagas1vm4, vagas1vm5, vagas1vm6, vagas1vm7, vagas1vm8, vagas1vmAC,
	listaRankeados1pem1, listaRankeados1pem2, listaRankeados1pem3, listaRankeados1pem4, listaRankeados1pem5, listaRankeados1pem6, listaRankeados1pem7, listaRankeados1pem8, listaRankeados1pemAC,
	vagas1em1, vagas1em2, vagas1em3, vagas1em4, vagas1em5, vagas1em6, vagas1em7, vagas1em8, vagas1emAC,
	"resultado1pvm1", "resultado1pvm2", "resultado1pvm3", "resultado1pvm4", "resultado1pvm5", "resultado1pvm6", "resultado1pvm7", "resultado1pvm8", "resultado1pvmAC",
	"resultado1pem1", "resultado1pem2", "resultado1pem3", "resultado1pem4", "resultado1pem5", "resultado1pem6", "resultado1pem7", "resultado1pem8", "resultado1pemAC",
	listaRankeados1pDF, listaRankeados1pAP, vagas1vDF, vagas1vAP, listaRankeados1eDF, listaRankeados1eAP, vagas1eAP, vagas1eDF,
	"resultado1peAP", "resultado1peDF", "resultado1pvAP", "resultado1pvDF", "Período: 1º Período da Educação Infantil", "1p");

	preparoListasEspera('2manual', 'visibilidade2pAC', 'visibilidade2pModalidades', "2º Período", semente,
	listaRankeados2pem1, listaRankeados2pem2, listaRankeados2pem3, listaRankeados2pem4, listaRankeados2pem5, listaRankeados2pem6, listaRankeados2pem7, listaRankeados2pem8, listaRankeados2pemAC,
	vagas2em1, vagas2em2, vagas2em3, vagas2em4, vagas2em5, vagas2em6, vagas2em7, vagas2em8, vagas2emAC,
	"resultado2pem1", "resultado2pem2", "resultado2pem3", "resultado2pem4", "resultado2pem5", "resultado2pem6", "resultado2pem7", "resultado2pem8", "resultado2pemAC",
	listaRankeados2eDF, listaRankeados2eAC, vagas2eAP, vagas2eDF,
	"resultado2peAC", "resultado2peDF", "Período: 2º Período da Educação Infantil", "2p");

	preparoListasEspera('primeiroAnoManual', 'visibilidade1aAC', 'visibilidade1aModalidades', "1º Ano", semente,
	listaRankeados1aem1, listaRankeados1aem2, listaRankeados1aem3, listaRankeados1aem4, listaRankeados1aem5, listaRankeados1aem6, listaRankeados1aem7, listaRankeados1aem8, listaRankeados1aemAC,
	vagas1aem1, vagas1aem2, vagas1aem3, vagas1aem4, vagas1aem5, vagas1aem6, vagas1aem7, vagas1aem8, vagas1aemAC,
	"resultado1aem1", "resultado1aem2", "resultado1aem3", "resultado1aem4", "resultado1aem5", "resultado1aem6", "resultado1aem7", "resultado1aem8", "resultado1aemAC",
	listaRankeados1aDF, listaRankeados1aAC, vagas1aeAP, vagas1aeDF,
	"resultado1aeAC", "resultado1aeDF", "Período: 1º Ano do ensino fundamental", "1a");

	preparoListasEspera('segundoAnoManual', 'visibilidade2aAC', 'visibilidade2aModalidades', "2º Ano", semente,
	listaRankeados2aem1, listaRankeados2aem2, listaRankeados2aem3, listaRankeados2aem4, listaRankeados2aem5, listaRankeados2aem6, listaRankeados2aem7, listaRankeados2aem8, listaRankeados2aemAC,
	vagas2aem1, vagas2aem2, vagas2aem3, vagas2aem4, vagas2aem5, vagas2aem6, vagas2aem7, vagas2aem8, vagas2aemAC,
	"resultado2aem1", "resultado2aem2", "resultado2aem3", "resultado2aem4", "resultado2aem5", "resultado2aem6", "resultado2aem7", "resultado2aem8", "resultado2aemAC",
	listaRankeados2aDF, listaRankeados2aAC, vagas2aeAP, vagas2aeDF,
	"resultado2aeAC", "resultado2aeDF", "Período: 2º Ano do ensino fundamental", "2a");

	preparoListasEspera('terceiroAnoManual', 'visibilidade3aAC', 'visibilidade3aModalidades', "3º Ano", semente,
	listaRankeados3aem1, listaRankeados3aem2, listaRankeados3aem3, listaRankeados3aem4, listaRankeados3aem5, listaRankeados3aem6, listaRankeados3aem7, listaRankeados3aem8, listaRankeados3aemAC,
	vagas3aem1, vagas3aem2, vagas3aem3, vagas3aem4, vagas3aem5, vagas3aem6, vagas3aem7, vagas3aem8, vagas3aemAC,
	"resultado3aem1", "resultado3aem2", "resultado3aem3", "resultado3aem4", "resultado3aem5", "resultado3aem6", "resultado3aem7", "resultado3aem8", "resultado3aemAC",
	listaRankeados3aDF, listaRankeados3aAC, vagas3aeAP, vagas3aeDF,
	"resultado3aeAC", "resultado3aeDF", "Período: 3º Ano do ensino fundamental", "3a");

	preparoListasEspera('quartoAnoManual', 'visibilidade4aAC', 'visibilidade4aModalidades', "4º Ano", semente,
	listaRankeados4aem1, listaRankeados4aem2, listaRankeados4aem3, listaRankeados4aem4, listaRankeados4aem5, listaRankeados4aem6, listaRankeados4aem7, listaRankeados4aem8, listaRankeados4aemAC,
	vagas4aem1, vagas4aem2, vagas4aem3, vagas4aem4, vagas4aem5, vagas4aem6, vagas4aem7, vagas4aem8, vagas4aemAC,
	"resultado4aem1", "resultado4aem2", "resultado4aem3", "resultado4aem4", "resultado4aem5", "resultado4aem6", "resultado4aem7", "resultado4aem8", "resultado4aemAC",
	listaRankeados4aDF, listaRankeados4aAC, vagas4aeAP, vagas4aeDF,
	"resultado4aeAC", "resultado4aeDF", "Período: 4º Ano do ensino fundamental", "4a");

	preparoListasEspera('quintoAnoManual', 'visibilidade5aAC', 'visibilidade5aModalidades', "5º Ano", semente,
	listaRankeados5aem1, listaRankeados5aem2, listaRankeados5aem3, listaRankeados5aem4, listaRankeados5aem5, listaRankeados5aem6, listaRankeados5aem7, listaRankeados5aem8, listaRankeados5aemAC,
	vagas5aem1, vagas5aem2, vagas5aem3, vagas5aem4, vagas5aem5, vagas5aem6, vagas5aem7, vagas5aem8, vagas5aemAC,
	"resultado5aem1", "resultado5aem2", "resultado5aem3", "resultado5aem4", "resultado5aem5", "resultado5aem6", "resultado5aem7", "resultado5aem8", "resultado5aemAC",
	listaRankeados5aDF, listaRankeados5aAC, vagas5aeAP, vagas5aeDF,
	"resultado5aeAC", "resultado5aeDF", "Período: 5º Ano do ensino fundamental", "5a");

	preparoListasEspera('sextoAnoManual', 'visibilidade6aAC', 'visibilidade6aModalidades', "6º Ano", semente,
	listaRankeados6aem1, listaRankeados6aem2, listaRankeados6aem3, listaRankeados6aem4, listaRankeados6aem5, listaRankeados6aem6, listaRankeados6aem7, listaRankeados6aem8, listaRankeados6aemAC,
	vagas6aem1, vagas6aem2, vagas6aem3, vagas6aem4, vagas6aem5, vagas6aem6, vagas6aem7, vagas6aem8, vagas6aemAC,
	"resultado6aem1", "resultado6aem2", "resultado6aem3", "resultado6aem4", "resultado6aem5", "resultado6aem6", "resultado6aem7", "resultado6aem8", "resultado6aemAC",
	listaRankeados6aDF, listaRankeados6aAC, vagas6aeAP, vagas6aeDF,
	"resultado6aeAC", "resultado6aeDF", "Período: 6º Ano do ensino fundamental", "6a");

	preparoListasEspera('setimoAnoManual', 'visibilidade7aAC', 'visibilidade7aModalidades', "7º Ano", semente,
	listaRankeados7aem1, listaRankeados7aem2, listaRankeados7aem3, listaRankeados7aem4, listaRankeados7aem5, listaRankeados7aem6, listaRankeados7aem7, listaRankeados7aem8, listaRankeados7aemAC,
	vagas7aem1, vagas7aem2, vagas7aem3, vagas7aem4, vagas7aem5, vagas7aem6, vagas7aem7, vagas7aem8, vagas7aemAC,
	"resultado7aem1", "resultado7aem2", "resultado7aem3", "resultado7aem4", "resultado7aem5", "resultado7aem6", "resultado7aem7", "resultado7aem8", "resultado7aemAC",
	listaRankeados7aDF, listaRankeados7aAC, vagas7aeAP, vagas7aeDF,
	"resultado7aeAC", "resultado7aeDF", "Período: 7º Ano do ensino fundamental", "7a");

	preparoListasEspera('oitavoAnoManual', 'visibilidade8aAC', 'visibilidade8aModalidades', "8º Ano", semente,
	listaRankeados8aem1, listaRankeados8aem2, listaRankeados8aem3, listaRankeados8aem4, listaRankeados8aem5, listaRankeados8aem6, listaRankeados8aem7, listaRankeados8aem8, listaRankeados8aemAC,
	vagas8aem1, vagas8aem2, vagas8aem3, vagas8aem4, vagas8aem5, vagas8aem6, vagas8aem7, vagas8aem8, vagas8aemAC,
	"resultado8aem1", "resultado8aem2", "resultado8aem3", "resultado8aem4", "resultado8aem5", "resultado8aem6", "resultado8aem7", "resultado8aem8", "resultado8aemAC",
	listaRankeados8aDF, listaRankeados8aAC, vagas8aeAP, vagas8aeDF,
	"resultado8aeAC", "resultado8aeDF", "Período: 8º Ano do ensino fundamental", "8a");

	preparoListasEspera('nonoAnoManual', 'visibilidade9aAC', 'visibilidade9aModalidades', "9º Ano", semente,
	listaRankeados9aem1, listaRankeados9aem2, listaRankeados9aem3, listaRankeados9aem4, listaRankeados9aem5, listaRankeados9aem6, listaRankeados9aem7, listaRankeados9aem8, listaRankeados9aemAC,
	vagas9aem1, vagas9aem2, vagas9aem3, vagas9aem4, vagas9aem5, vagas9aem6, vagas9aem7, vagas9aem8, vagas9aemAC,
	"resultado9aem1", "resultado9aem2", "resultado9aem3", "resultado9aem4", "resultado9aem5", "resultado9aem6", "resultado9aem7", "resultado9aem8", "resultado9aemAC",
	listaRankeados9aDF, listaRankeados9aAC, vagas9aeAP, vagas9aeDF,
	"resultado9aeAC", "resultado9aeDF", "Período: 9º Ano do ensino fundamental", "9a");

	//salva o PDF
	//pdfsave();
	informacoesPDF(semente);

	document.getElementsByName("semente")[0].value = semente;
	var conteudo = "";
	conteudo += "<b>Semente utilizada:</b> <span><input type=\"text\" name=\"texto\" id=\"texto\" value=\"" + semente + "\" size=\"14\" readonly></span> <input type=\"button\" value=\"Copiar\" onclick=\"copiarTexto(\'texto\');\"><br/>";
	pontoImpressao = document.getElementById('idsemente');
	pontoImpressao.innerHTML = conteudo;
	conteudo = "";
	conteudo = gereVisualDeInformacoesTecnicas(semente);
	pontoImpressao = document.getElementById('informacoes');
	pontoImpressao.innerHTML = conteudo;
	// download(document.sorteio.nomeCurso.value.replace(" ", "-").replace(/[^a-zÀ-úA-Z0-9\-]/gi, '') + ".csv", relatorioCSV);
}

/** ResultadoRank
* @brief Função responsável por realizar por chamar a
*		 de embaralhar a lista e a de lista de selecionados
*		 com base no tamanho da lista passada.
*
* @param  (listaDeCandidatos, semente para embaralhar)
* @return lista com candidatos selecionados
*
* @bugs Nenhum conhecido
*/
function ResultadoRank(lista, semente) {
	relatorioCSV = "";
	var inscritos = lista.length;
	
	var embaralhada = gereListaEmbaralhada(inscritos, semente);
	var listaSelecionados = ListaDeSelecionados(embaralhada, lista, lista.length);


	return listaSelecionados;
}

/** gereListaEmbaralhada
* @brief Função responsável por embaralhar
*		 com base no total de candidatos inscritos
*		 e semente fornecida. Faz uso da biblioteca
*		 seedrandom.
*
* @param  (número de candidatos inscritos, semente)
* @return lista com posições ranqueadas dos candidatos
*
* @bugs Nenhum conhecido
*/
function gereListaEmbaralhada(inscritos, semente) {
	Math.seedrandom(semente);
	var consumida = new Array(inscritos);
	var resultado = new Array(inscritos);
	for (var i = 0; i < inscritos; i++) {
		consumida[i] = 1 + i;
		resultado[i] = 0;
	}

	for (var i = 0; i < inscritos; i++) {
		var aleatorio = Math.floor(Math.random() * inscritos);
		while (consumida[aleatorio] == 0) {
			aleatorio = (1 + aleatorio) % inscritos;
		}
		resultado[i] = consumida[aleatorio];
		consumida[aleatorio] = 0;
	}

	return resultado;

}

/** ListaDeSelecionados
* @brief Função responsável por atribuir
*		 os candidatos para as posições ranqueadas.
*		 
* @param  (número de candidatos inscritos, semente)
* @return lista com candidatos ranqueados
*
* @bugs Nenhum conhecido
*/
function ListaDeSelecionados(embaralhada,lista, ultimaPosicao) {

	var listaValores = [];
	for (var i = 0; i < ultimaPosicao; i++) {
		listaValores.push(lista[embaralhada[i]-1]);
		
	}

	return listaValores;
}

/** preparoListas
* @brief Função responsável por preparar as listas com resultados,
*		 implementa a lógica do sorteio, verificando se há vagas
*		 restantes e preparando a lista final dos sorteados
*		 
* @param  (
*	input name da checkbox,
*	id da div a ser impressa caso AC e Deficientes,
*	id da div a ser impressa caso modalidades,
*	nome da série,
*	semente,
*	lista dos ranqueados vagas M1,
*	lista dos ranqueados vagas M2,
*	lista dos ranqueados vagas M3,
*	lista dos ranqueados vagas M4,
*	lista dos ranqueados vagas M5,
*	lista dos ranqueados vagas M6,
*	lista dos ranqueados vagas M7,
*	lista dos ranqueados vagas M8,
*	lista dos ranqueados vagas MAC,
*	vagas M1,
*	vagas M2,
*	vagas M3,
*	vagas M4,
*	vagas M5,
*	vagas M6,
*	vagas M7,
*	vagas M8,
*	vagas MAC,
*	lista dos ranqueados espera M1,
*	lista dos ranqueados espera M2,
*	lista dos ranqueados espera M3,
*	lista dos ranqueados espera M4,
*	lista dos ranqueados espera M5,
*	lista dos ranqueados espera M6,
*	lista dos ranqueados espera M7,
*	lista dos ranqueados espera M8,
*	lista dos ranqueados espera MAC,
*	vagas para espera M1,
*	vagas para espera M2,
*	vagas para espera M3,
*	vagas para espera M4,
*	vagas para espera M5,
*	vagas para espera M6,
*	vagas para espera M7,
*	vagas para espera M8,
*	vagas para espera MAC,
*	Id para impressão resultados vagas M1,
*	Id para impressão resultados vagas M2,
*	Id para impressão resultados vagas M3,
*	Id para impressão resultados vagas M4,
*	Id para impressão resultados vagas M5,
*	Id para impressão resultados vagas M6,
*	Id para impressão resultados vagas M7,
*	Id para impressão resultados vagas M8,
*	Id para impressão resultados vagas MAC,
*	Id para impressão resultados espera M1,
*	Id para impressão resultados espera M2,
*	Id para impressão resultados espera M3,
*	Id para impressão resultados espera M4,
*	Id para impressão resultados espera M5,
*	Id para impressão resultados espera M6,
*	Id para impressão resultados espera M7,
*	Id para impressão resultados espera M8,
*	Id para impressão resultados espera MAC,
*	Lista dos ranqueados sem modalidade vagas DF,
*	Lista dos ranqueados sem modalidade vagas AC,
*	vagas para DF,
*	vagas para AC,
*	Lista dos ranqueados sem modalidade espera DF,
*	Lista dos ranqueados sem modalidade espera AC,
*	vagas espera para DF,
*	vagas espera para AC,
*	Id para impressão resultados espera AC,
*	Id para impressão resultados espera DF,
*	Id para impressão resultados vagas AC,
*	Id para impressão resultados vagas DF,
*	String identificando o nome da série,
*	String sigla da série
)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function preparoListas(periodoPManual, visibilidadeAC, visibilidadeModalidades, periodo, semente,
	listaRankeadosvm1, listaRankeadosvm2, listaRankeadosvm3, listaRankeadosvm4, listaRankeadosvm5, listaRankeadosvm6, listaRankeadosvm7, listaRankeadosvm8, listaRankeadosvmAC,
	vagasvm1, vagasvm2, vagasvm3, vagasvm4, vagasvm5, vagasvm6, vagasvm7, vagasvm8, vagasvmAC,
	listaRankeadosem1, listaRankeadosem2, listaRankeadosem3, listaRankeadosem4, listaRankeadosem5, listaRankeadosem6, listaRankeadosem7, listaRankeadosem8, listaRankeadosemAC,
	vagasem1, vagasem2, vagasem3, vagasem4, vagasem5, vagasem6, vagasem7, vagasem8, vagasemAC,
	resultadovm1, resultadovm2, resultadovm3, resultadovm4, resultadovm5, resultadovm6, resultadovm7, resultadovm8, resultadovmAC, 
	resultadoem1, resultadoem2, resultadoem3, resultadoem4, resultadoem5, resultadoem6, resultadoem7, resultadoem8, resultadoemAC,
	listaRankeadosDF, listaRankeadosAP, vagasvDF, vagasvAP, listaRankeadoseDF, listaRankeadoseAP, vagaseAP, vagaseDF,
	resultadoeAP, resultadoeDF, resultadovAP, resultadovDF, descricaoPeriodo, sigla){

	if(document.getElementsByName(periodoPManual)[0].checked){

		document.getElementById(visibilidadeAC).style.display = 'none';
		document.getElementById(visibilidadeModalidades).style.display = 'block';

        //alteração 16-02-2024
        //vagas da ampla concorrência inicial - parte 1
        
        vagasTotaisAC = vagasvmAC; //vagas totais iniciais
		valores = calculaRestantes(listaRankeadosvmAC, vagasvmAC, 0);
		vagasvmAC = valores[2];
		listaRankeadosvmAC_p1 = valores[1];
        vagasExtras = listaRankeadosvmAC_p1.length - vagasTotaisAC; //vaga extra gerada por gêmos sorteados na última posição
        //-------------------------------------------------------------

		if(vagasvm1){
			valores = calculaRestantes(listaRankeadosvm1, vagasvm1, vagasvmAC);
			vagasvm1 = valores[0];	
			listaRankeadosvm1 = valores[1];
			vagasvmAC = valores[2];
		}else{listaRankeadosvm1 = [];}
		//IMPORTANTE - a ordem deve ser respeitada
		//vagas da modalidade 2 passam para a modalidade 3
		if(vagasvm2){
			valores = calculaRestantes(listaRankeadosvm2, vagasvm2, vagasvm3);
			vagasvm2 = valores[0];
			listaRankeadosvm2 = valores[1];
			vagasvm3 = valores[2];
		}else{listaRankeadosvm2 = [];}

		//vagas da modalidade 3 passam para a modalidade AC
		if(vagasvm3){
			valores = calculaRestantes(listaRankeadosvm3, vagasvm3, vagasvmAC);
			vagasvm3 = valores[0];
			listaRankeadosvm3 = valores[1];
			vagasvmAC = valores[2];
		}else{listaRankeadosvm3 = [];}

		//vagas da modalidade 4 passam para a modalidade 6
		if(vagasvm4){
			valores = calculaRestantes(listaRankeadosvm4, vagasvm4, vagasvm6);
			vagasvm4 = valores[0];
			listaRankeadosvm4 = valores[1];
			vagasvm6 = valores[2];
		}else{listaRankeadosvm4 = [];}

		//vagas da modalidade 5 passam para a modalidade 6
		if(vagasvm5){
			valores = calculaRestantes(listaRankeadosvm5, vagasvm5, vagasvm6);
			vagasvm5 = valores[0];
			listaRankeadosvm5 = valores[1];
			vagasvm6 = valores[2];
		}else{listaRankeadosvm5 = [];}

		//vagas da modalidade 6 passam para a modalidade AC
		if(vagasvm6){
			valores = calculaRestantes(listaRankeadosvm6, vagasvm6, vagasvmAC);
			vagasvm6 = valores[0];
			listaRankeadosvm6 = valores[1];
			vagasvmAC = valores[2];
		}else{listaRankeadosvm6 = [];}

		//vagas da modalidade 7 passam para a modalidade AC
		if(vagasvm7){
			valores = calculaRestantes(listaRankeadosvm7, vagasvm7, vagasvm7);
			vagasvm7 = valores[0];
			listaRankeadosvm7 = valores[1];
			// vagasvmAC = valores[2];
		}else{listaRankeadosvm7 = [];}

		//vagas da modalidade 8 passam para a modalidade AC
		if(vagasvm8){
			valores = calculaRestantes(listaRankeadosvm8, vagasvm8, vagasvm8);
			vagasvm8 = valores[0];
			listaRankeadosvm8 = valores[1];
			// vagasvmAC = valores[2];
		}else{listaRankeadosvm8 = [];}

    
		//vagas da ampla concorrência - parte 2
        if((vagasvmAC - vagasExtras) >= 0){
            vagasvmAC = vagasvmAC - vagasExtras;
        }
		valores = calculaRestantes(listaRankeadosvmAC, vagasvmAC, 0);
		vagasvmAC = listaRankeadosvmAC_p1.length + valores[0];
		listaRankeadosvmAC_p2 = valores[1];
        listaRankeadosvmAC = listaRankeadosvmAC_p1.concat(listaRankeadosvmAC_p2);

        
        //-----------------------------------------------------------------------


		//vagas para a lista de espera
        vagasTotaisemAC = vagasemAC; //vagas totais iniciais
        //alternativa
        //listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaSorteados.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvmAC.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm1.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm2.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm3.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm4.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm5.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm6.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm7.includes(item))
        listaRankeadosemAC = listaRankeadosemAC.filter(item => !listaRankeadosvm8.includes(item))
		valores = calculaRestantes(listaRankeadosemAC, vagasemAC, 0, espera=1);
		vagasemAC = valores[2];
		listaRankeadosemAC_p1 = valores[1];
        vagasExtras = listaRankeadosemAC_p1.length - vagasTotaisemAC; 


        listaRankeadosem1 = listaRankeadosem1.filter(item => !listaRankeadosvm1.includes(item))
        listaRankeadosem1 = listaRankeadosem1.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem1){
			valores = calculaRestantes(listaRankeadosem1, vagasem1, vagasem1, espera=1);
			vagasem1 = valores[0];
			listaRankeadosem1 = valores[1];
		}else{listaRankeadosem1 = [];}

        listaRankeadosem2 = listaRankeadosem2.filter(item => !listaRankeadosvm2.includes(item))
        listaRankeadosem2 = listaRankeadosem2.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem2){
			valores = calculaRestantes(listaRankeadosem2, vagasem2, vagasem2, espera=1);
			vagasem2 = valores[0];
			listaRankeadosem2 = valores[1];
		}else{listaRankeadosem2 = [];}

        listaRankeadosem3 = listaRankeadosem3.filter(item => !listaRankeadosvm3.includes(item))
        listaRankeadosem3 = listaRankeadosem3.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem3){
			valores = calculaRestantes(listaRankeadosem3, vagasem3, vagasem3, espera=1);
			vagasem3 = valores[0];
			listaRankeadosem3 = valores[1];
		}else{listaRankeadosem3 = [];}

        listaRankeadosem4 = listaRankeadosem4.filter(item => !listaRankeadosvm4.includes(item))
        listaRankeadosem4 = listaRankeadosem4.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem4){
			valores = calculaRestantes(listaRankeadosem4, vagasem4, vagasem4, espera=1);
			vagasem4 = valores[0];
			listaRankeadosem4 = valores[1];
		}else{listaRankeadosem4 = [];}

        listaRankeadosem5 = listaRankeadosem5.filter(item => !listaRankeadosvm5.includes(item))
        listaRankeadosem5 = listaRankeadosem5.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem5){
			valores = calculaRestantes(listaRankeadosem5, vagasem5, vagasem5, espera=1);
			vagasem5 = valores[0];
			listaRankeadosem5 = valores[1];
		}else{listaRankeadosem5 = [];}

        listaRankeadosem6 = listaRankeadosem6.filter(item => !listaRankeadosvm6.includes(item))
        listaRankeadosem6 = listaRankeadosem6.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem6){
			valores = calculaRestantes(listaRankeadosem6, vagasem6, vagasem6, espera=1);
			vagasem6 = valores[0];
			listaRankeadosem6 = valores[1];
		}else{listaRankeadosem6 = [];}

        listaRankeadosem7 = listaRankeadosem7.filter(item => !listaRankeadosvm7.includes(item))
        listaRankeadosem7 = listaRankeadosem7.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem7){
			valores = calculaRestantes(listaRankeadosem7, vagasem7, vagasem7, espera=1);
			vagasem7 = valores[0];
			listaRankeadosem7 = valores[1];
		}else{listaRankeadosem7 = [];}

        listaRankeadosem8 = listaRankeadosem8.filter(item => !listaRankeadosvm8.includes(item))
        listaRankeadosem8 = listaRankeadosem8.filter(item => !listaRankeadosvmAC.includes(item))
		if(vagasem8){
			valores = calculaRestantes(listaRankeadosem8, vagasem8, vagasem8, espera=1);
			vagasem8 = valores[0];
			listaRankeadosem8 = valores[1];
		}else{listaRankeadosem8 = [];}

        //vagas da ampla concorrência espera - parte 2
        if((vagasemAC - vagasExtras) >= 0){
            vagasemAC = vagasemAC - vagasExtras;
        }
		valores = calculaRestantes(listaRankeadosemAC, vagasemAC, 0, espera=1);
		vagasemAC = listaRankeadosemAC_p1.length + valores[0];
		listaRankeadosemAC_p2 = valores[1];
        listaRankeadosemAC = listaRankeadosemAC_p1.concat(listaRankeadosemAC_p2);
        console.log(listaRankeadosemAC);

		// if(vagasemAC){
		// 	valores = calculaRestantes(listaRankeadosemAC, vagasemAC, vagasemAC);
		// 	vagasemAC = valores[0];
		// 	listaRankeadosemAC = valores[1];
		// }else{listaRankeadosemAC = [];}
        
        pontoImpressao = document.getElementById(resultadovmAC);
		imprimaResultado(periodo + ' - AC', semente, listaRankeadosvmAC, vagasvmAC, pontoImpressao, 'tabela'+sigla+'vAC');

		pontoImpressao = document.getElementById(resultadovm1);
		imprimaResultado(periodo + ' - M1', semente, listaRankeadosvm1, vagasvm1, pontoImpressao, 'tabela'+sigla+'vm1');

		pontoImpressao = document.getElementById(resultadovm2);
		imprimaResultado(periodo + ' - M2', semente, listaRankeadosvm2, vagasvm2, pontoImpressao, 'tabela'+sigla+'vm2');

		pontoImpressao = document.getElementById(resultadovm3);
		imprimaResultado(periodo + ' - M3', semente, listaRankeadosvm3, vagasvm3, pontoImpressao, 'tabela'+sigla+'vm3');

		pontoImpressao = document.getElementById(resultadovm4);
		imprimaResultado(periodo + ' - M4', semente, listaRankeadosvm4, vagasvm4, pontoImpressao, 'tabela'+sigla+'vm4');

		pontoImpressao = document.getElementById(resultadovm5);
		imprimaResultado(periodo + ' - M5', semente, listaRankeadosvm5, vagasvm5, pontoImpressao, 'tabela'+sigla+'vm5');

		pontoImpressao = document.getElementById(resultadovm6);
		imprimaResultado(periodo + ' - M6', semente, listaRankeadosvm6, vagasvm6, pontoImpressao, 'tabela'+sigla+'vm6');

		if(document.querySelector('[name="habilitarM7"]').checked){
			pontoImpressao = document.getElementById(resultadovm7);
			imprimaResultado(periodo + ' - M7', semente, listaRankeadosvm7, vagasvm7, pontoImpressao, 'tabela'+sigla+'vm7');
		}
		if(document.querySelector('[name="habilitarM8"]').checked){
			pontoImpressao = document.getElementById(resultadovm8);
			imprimaResultado(periodo + ' - M8', semente, listaRankeadosvm8, vagasvm8, pontoImpressao, 'tabela'+sigla+'vm8');
		}

		// pontoImpressao = document.getElementById(resultadovmAC);
		// imprimaResultado(periodo + ' - AC', semente, listaRankeadosvmAC, vagasvmAC, pontoImpressao, 'tabela'+sigla+'vAC');

        pontoImpressao = document.getElementById(resultadoemAC);
		imprimaResultado(periodo+' - AC - Espera', semente, listaRankeadosemAC, vagasemAC, pontoImpressao, 'tabela'+sigla+'eAC');

		pontoImpressao = document.getElementById(resultadoem1);
		imprimaResultado(periodo+' - M1 - Espera', semente, listaRankeadosem1, vagasem1, pontoImpressao, 'tabela'+sigla+'em1');

		pontoImpressao = document.getElementById(resultadoem2);
		imprimaResultado(periodo+' - M2 - Espera', semente, listaRankeadosem2, vagasem2, pontoImpressao, 'tabela'+sigla+'em2');

		pontoImpressao = document.getElementById(resultadoem3);
		imprimaResultado(periodo+' - M3 - Espera', semente, listaRankeadosem3, vagasem3, pontoImpressao, 'tabela'+sigla+'em3');

		pontoImpressao = document.getElementById(resultadoem4);
		imprimaResultado(periodo+' - M4 - Espera', semente, listaRankeadosem4, vagasem4, pontoImpressao, 'tabela'+sigla+'em4');

		pontoImpressao = document.getElementById(resultadoem5);
		imprimaResultado(periodo+' - M5 - Espera', semente, listaRankeadosem5, vagasem5, pontoImpressao, 'tabela'+sigla+'em5');

		pontoImpressao = document.getElementById(resultadoem6);
		imprimaResultado(periodo+' - M6 - Espera', semente, listaRankeadosem6, vagasem6, pontoImpressao, 'tabela'+sigla+'em6');

		if(document.querySelector('[name="habilitarM7"]').checked){
			pontoImpressao = document.getElementById(resultadoem7);
			imprimaResultado(periodo+' - M7 - Espera', semente, listaRankeadosem7, vagasem7, pontoImpressao, 'tabela'+sigla+'em7');
		}
		if(document.querySelector('[name="habilitarM8"]').checked){
			pontoImpressao = document.getElementById(resultadoem8);
			imprimaResultado(periodo+' - M8 - Espera', semente, listaRankeadosem8, vagasem8, pontoImpressao, 'tabela'+sigla+'em8');
		}

		// pontoImpressao = document.getElementById(resultadoemAC);
		// imprimaResultado(periodo+' - AC - Espera', semente, listaRankeadosemAC, vagasemAC, pontoImpressao, 'tabela'+sigla+'eAC');


		//insere os dados no PDF
		salvaPeriodo(descricaoPeriodo + " - vagas", 5);
        salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvmAC);
		salvaModalidade("Modalidade 1 - Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm1);
		salvaModalidade("Modalidade 2 - Negros/as (Pretos/as e Pardos/as) ou Indígenas e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm2);
		salvaModalidade("Modalidade 3 - Negros/as (Pretos/as e Pardos/as) ou Indígenas", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm3);
		salvaModalidade("Modalidade 4 - Pessoa com Deficiência e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm4);
		salvaModalidade("Modalidade 5 - Pessoa com Deficiência e Negra (preta e parda) ou Indígena", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm5);
		salvaModalidade("Modalidade 6 - Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosvm6);
		if(document.querySelector('[name="habilitarM7"]').checked){
			salvaModalidade("Modalidade 7 - ", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosvm7);
		}
		if(document.querySelector('[name="habilitarM8"]').checked){
			salvaModalidade("Modalidade 8 - ", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosvm8);
		}
		// salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+15);
		// salvaDados(listaRankeadosvmAC);
		//dados pdf 1 período espera
        salvaPeriodo(descricaoPeriodo  + " - Espera", 15);
        salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+25);
		salvaDados(listaRankeadosemAC);
		salvaModalidade("Modalidade 1 - Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem1);
		salvaModalidade("Modalidade 2 - Negros/as (Pretos/as e Pardos/as) ou Indígenas e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem2);
		salvaModalidade("Modalidade 3 - Negros/as (Pretos/as e Pardos/as) ou Indígenas", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem3);
		salvaModalidade("Modalidade 4 - Pessoa com Deficiência e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem4);
		salvaModalidade("Modalidade 5 - Pessoa com Deficiência e Negra (preta e parda) ou Indígena", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem5);
		salvaModalidade("Modalidade 6 - Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosem6);
		if(document.querySelector('[name="habilitarM7"]').checked){
			salvaModalidade("Modalidade 7 - ", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem7);
		}
		if(document.querySelector('[name="habilitarM8"]').checked){
			salvaModalidade("Modalidade 8 - ", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem8);
		}
		// salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+15);
		// salvaDados(listaRankeadosemAC);

		//caso a semente seja diferente
		//informacoesPDF(semente);

	}else{

		document.getElementById(visibilidadeModalidades).style.display = 'none';
		document.getElementById(visibilidadeAC).style.display = 'block';

		valores = calculaRestantes(listaRankeadosDF, vagasvDF, vagasvAP);
		vagasvDF = valores[0];
		listaRankeadosDF = valores[1];
		vagasvAP = valores[2];

		valores = calculaRestantes(listaRankeadosAP, vagasvAP, vagasvAP);
		vagasvAP = valores[0];
		listaRankeadosAP = valores[1];

		valores = calculaRestantes(listaRankeadoseDF, vagaseDF, vagaseDF);
		vagaseDF = valores[0];
		listaRankeadoseDF = valores[1];

		valores = calculaRestantes(listaRankeadoseAP, vagaseAP, vagaseAP);
		vagaseAP = valores[0];
		listaRankeadoseAP = valores[1];



		pontoImpressao = document.getElementById(resultadoeAP);
		imprimaResultado(periodo+' - Ampla Concorrência - Espera', semente, listaRankeadoseAP, vagaseAP, pontoImpressao, 'tabela'+sigla+'eAC');

		pontoImpressao = document.getElementById(resultadoeDF);
		imprimaResultado(periodo+' - Deficiência - Espera', semente, listaRankeadoseDF, vagaseDF, pontoImpressao, 'tabela'+sigla+'eDF');

		pontoImpressao = document.getElementById(resultadovAP);
		imprimaResultado(periodo+' - Ampla Concorrência', semente, listaRankeadosAP, vagasvAP, pontoImpressao, 'tabela'+sigla+'vAP');

		pontoImpressao = document.getElementById(resultadovDF);
		imprimaResultado(periodo+' - Deficiência', semente, listaRankeadosDF, vagasvDF, pontoImpressao, 'tabela'+sigla+'vDF');

		//insere os dados no PDF
		salvaPeriodo(descricaoPeriodo + " - vagas", 5);
		salvaModalidade("Ampla Concorrência", doc.lastAutoTable.finalY+20);
		salvaDados(listaRankeadosAP);
		salvaModalidade("Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadosDF);
		//pdf 1 período espera pdf sem modalidades
		salvaPeriodo(descricaoPeriodo  + " - Espera", 15);
		salvaModalidade("Ampla Concorrência", doc.lastAutoTable.finalY+25);
		salvaDados(listaRankeadoseAP);
		salvaModalidade("Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
		salvaDados(listaRankeadoseDF);
		//informacoesPDF(semente);



	}

}

/** calculaRestantes
* @brief Função responsável por verificar
*		 as vagas restantes que não foram preenchidas
*		 e atribuir a outra modalidade selecionada.
*		
*
* @param  (lista dos candidatos, número de vagas modalidade atual, variável de número vagas da nova modalidade)
* @return [vagas, lista atualizada, vagas excedentes]
*
* @bugs Nenhum conhecido
*/
function calculaRestantes(lista, vagas, vagasExcedentes, espera=0){
	var valores =[];
	var restantes = 0;
    //teste - modificado 27-06-2023------------------
    flag_vagas = vagas;
    flag_excedentes = vagasExcedentes;
    //-----------------------------------------------
    //teste - modificado 16-02-2024------------------
    if(flag_vagas == 0 & flag_excedentes == 0){
        return [flag_vagas, [], flag_excedentes]; //lista vazia
    }
    //--------------------------------------------
    
	valores = vagasRestantes(lista, vagas, espera);
	restantes = valores[0];
	lista = valores[1];
	//atualiza o valor das vagas incluindo possíveis gêmeos
	vagas = lista.length;
    
	//verifica 
	if(restantes > 0){
		vagasExcedentes = vagasExcedentes + restantes;
	}

    // //teste - modificado 27-06-2023------------------
    // if(flag_vagas == 0 & flag_excedentes == 0){
    //     return [flag_vagas, lista, flag_excedentes];
    // }
    // //--------------------------------------------

	return [vagas, lista, vagasExcedentes];
}

/** vagaslaRestantes
* @brief Função responsável por avaliar
*		 quantas vagas serão excedentes com base
*		 nos candidatos que já foram sorteados.
*		 Caso contrário, adiciona à lista global.
*
* @param  (lista dos candidatos, número de vagas modalidade atual, variável de número vagas da nova modalidade)
* @return [vagas excedentes, Lista atualizada]
*
* @bugs Nenhum conhecido
*/
function vagasRestantes (lista, vagas, espera=0){
	
	var listaNova = [];
	var vagasRemanescentes = 0;
	var inscritos = 0;
	var gemeos = 0;
	//verifica a quantidade de gêmeos para incrementar o número de inscritos
	for(var i = 0; i < lista.length; i++){
		inscritos = inscritos + parseInt(lista[i][3])+1;
		
	}
	//ajusta valores das vagas, e vagas remanescentes
	if(vagas > inscritos){
		vagasRemanescentes = vagas - inscritos;
		vagas = inscritos;
	}
	
	for(var i = 0; i < lista.length; i++){
		
		//verifica se o candidato já foi sorteado previamente e está na lista
		var adiciona = true;

        //24-06-25 Solicitação: -Candidato pode ficar em diferentes posições na lista de espera (tanto ampla e cota)
        if(espera == 0){
            for(var j = 0; j < listaSorteados.length; j++){
                if((listaSorteados[j][0] == lista[i][0])){
                    adiciona = false;
                    break;
                }
            }
        }
		if(adiciona == true){
			
			//adiciona o candidato à lista de sorteado
			listaSorteados.push(lista[i]);
			listaNova.push(lista[i]);
			vagas--;
			//embora o adicione na lista de selecionados para representar os gêmeos
			gemeos = 0;
			while(parseInt(lista[i][3]) > gemeos){
				listaNova.push(lista[i]);
				vagas--;
				gemeos++;
			}
			//adiciona todos os gêmeos, incluindo vagas pros sorteados em última vaga, criando as vagas extras.
			if(vagas <= 0){
				break;
			}
		}
		
	}
		
	vagasRemanescentes = vagasRemanescentes + vagas;
	
	return [vagasRemanescentes, listaNova];
}

/** preparoListasEspera
* @brief Função responsável por preparar as listas com resultados,
*		 implementa a lógica do sorteio, verificando se há vagas
*		 restantes e preparando a lista final dos sorteados
*		 
* @param  (
*	input name da checkbox,
*	id da div a ser impressa caso AC e Deficientes,
*	id da div a ser impressa caso modalidades,
*	nome da série,
*	semente,
*	lista dos ranqueados espera M1,
*	lista dos ranqueados espera M2,
*	lista dos ranqueados espera M3,
*	lista dos ranqueados espera M4,
*	lista dos ranqueados espera M5,
*	lista dos ranqueados espera M6,
*	lista dos ranqueados espera M7,
*	lista dos ranqueados espera M8,
*	lista dos ranqueados espera MAC,
*	vagas para espera M1,
*	vagas para espera M2,
*	vagas para espera M3,
*	vagas para espera M4,
*	vagas para espera M5,
*	vagas para espera M6,
*	vagas para espera M7,
*	vagas para espera M8,
*	vagas para espera MAC,
*	Id para impressão resultados espera M1,
*	Id para impressão resultados espera M2,
*	Id para impressão resultados espera M3,
*	Id para impressão resultados espera M4,
*	Id para impressão resultados espera M5,
*	Id para impressão resultados espera M6,
*	Id para impressão resultados espera M7,
*	Id para impressão resultados espera M8,
*	Id para impressão resultados espera MAC,
*	Lista dos ranqueados sem modalidade espera DF,
*	Lista dos ranqueados sem modalidade espera AC,
*	vagas espera para DF,
*	vagas espera para AC,
*	Id para impressão resultados espera AC,
*	Id para impressão resultados espera DF,
*	String identificando o nome da série,
*	String sigla da série
)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function preparoListasEspera(periodoPManual, visibilidadeAC, visibilidadeModalidades, periodo, semente,
	listaRankeadosem1, listaRankeadosem2, listaRankeadosem3, listaRankeadosem4, listaRankeadosem5, listaRankeadosem6, listaRankeadosem7, listaRankeadosem8, listaRankeadosemAC,
	vagasem1, vagasem2, vagasem3, vagasem4, vagasem5, vagasem6, vagasem7, vagasem8, vagasemAC,
	resultadoem1, resultadoem2, resultadoem3, resultadoem4, resultadoem5, resultadoem6, resultadoem7, resultadoem8, resultadoemAC,
	listaRankeadoseDF, listaRankeadoseAP, vagaseAP, vagaseDF,
	resultadoeAP, resultadoeDF, descricaoPeriodo, sigla){

		if(document.getElementsByName(periodoPManual)[0].checked){

			document.getElementById(visibilidadeAC).style.display = 'none';
			document.getElementById(visibilidadeModalidades).style.display = 'block';

            //vagas para a lista de espera
            vagasTotaisemAC = vagasemAC; //vagas totais iniciais
            valores = calculaRestantes(listaRankeadosemAC, vagasemAC, 0, espera=1);
            vagasemAC = valores[2];
            listaRankeadosemAC_p1 = valores[1];
            vagasExtras = listaRankeadosemAC_p1.length - vagasTotaisemAC; 

			//vagas para a lista de espera
			if(vagasem1){
				valores = calculaRestantes(listaRankeadosem1, vagasem1, vagasem1, espera = 1);
				vagasem1 = valores[0];
				listaRankeadosem1 = valores[1];
			}else{listaRankeadosem1 = [];}

			if(vagasem2){
				valores = calculaRestantes(listaRankeadosem2, vagasem2, vagasem2, espera = 1);
				vagasem2 = valores[0];
				listaRankeadosem2 = valores[1];
			}else{listaRankeadosem2 = [];}

			if(vagasem3){
				valores = calculaRestantes(listaRankeadosem3, vagasem3, vagasem3, espera = 1);
				vagasem3 = valores[0];
				listaRankeadosem3 = valores[1];
			}else{listaRankeadosem3 = [];}

			if(vagasem4){
				valores = calculaRestantes(listaRankeadosem4, vagasem4, vagasem4, espera = 1);
				vagasem4 = valores[0];
				listaRankeadosem4 = valores[1];
			}else{listaRankeadosem4 = [];}

			if(vagasem5){
				valores = calculaRestantes(listaRankeadosem5, vagasem5, vagasem5, espera = 1);
				vagasem5 = valores[0];
				listaRankeadosem5 = valores[1];
			}else{listaRankeadosem5 = [];}

			if(vagasem6){
				valores = calculaRestantes(listaRankeadosem6, vagasem6, vagasem6, espera = 1);
				vagasem6 = valores[0];
				listaRankeadosem6 = valores[1];
			}else{listaRankeadosem6 = [];}

			if(vagasem7){
				valores = calculaRestantes(listaRankeadosem7, vagasem7, vagasem7, espera = 1);
				vagasem7 = valores[0];
				listaRankeadosem7 = valores[1];
			}else{listaRankeadosem7 = [];}

			if(vagasem8){
				valores = calculaRestantes(listaRankeadosem8, vagasem8, vagasem8, espera = 1);
				vagasem8 = valores[0];
				listaRankeadosem8 = valores[1];
			}else{listaRankeadosem8 = [];}


            //vagas da ampla concorrência espera - parte 2
            if((vagasemAC - vagasExtras) >= 0){
                vagasemAC = vagasemAC - vagasExtras;
            }
            valores = calculaRestantes(listaRankeadosemAC, vagasemAC, 0, espera=1);
            vagasemAC = listaRankeadosemAC_p1.length + valores[0];
            listaRankeadosemAC_p2 = valores[1];
            listaRankeadosemAC = listaRankeadosemAC_p1.concat(listaRankeadosemAC_p2);
            console.log(listaRankeadosemAC);
            
			// if(vagasemAC){
			// 	valores = calculaRestantes(listaRankeadosemAC, vagasemAC, vagasemAC);
			// 	vagasemAC = valores[0];
			// 	listaRankeadosemAC = valores[1];
			// }else{listaRankeadosemAC = [];}

            pontoImpressao = document.getElementById(resultadoemAC);
			imprimaResultado(periodo+' - AC - Espera', semente, listaRankeadosemAC, vagasemAC, pontoImpressao, 'tabela'+sigla+'eAC');

			pontoImpressao = document.getElementById(resultadoem1);
			imprimaResultado(periodo+' - M1 - Espera', semente, listaRankeadosem1, vagasem1, pontoImpressao, 'tabela'+sigla+'em1');

			pontoImpressao = document.getElementById(resultadoem2);
			imprimaResultado(periodo+' - M2 - Espera', semente, listaRankeadosem2, vagasem2, pontoImpressao, 'tabela'+sigla+'em2');

			pontoImpressao = document.getElementById(resultadoem3);
			imprimaResultado(periodo+' - M3 - Espera', semente, listaRankeadosem3, vagasem3, pontoImpressao, 'tabela'+sigla+'em3');

			pontoImpressao = document.getElementById(resultadoem4);
			imprimaResultado(periodo+' - M4 - Espera', semente, listaRankeadosem4, vagasem4, pontoImpressao, 'tabela'+sigla+'em4');

			pontoImpressao = document.getElementById(resultadoem5);
			imprimaResultado(periodo+' - M5 - Espera', semente, listaRankeadosem5, vagasem5, pontoImpressao, 'tabela'+sigla+'em5');

			pontoImpressao = document.getElementById(resultadoem6);
			imprimaResultado(periodo+' - M6 - Espera', semente, listaRankeadosem6, vagasem6, pontoImpressao, 'tabela'+sigla+'em6');

			if(document.querySelector('[name="habilitarM7"]').checked){
				pontoImpressao = document.getElementById(resultadoem7);
				imprimaResultado(periodo+' - M7 - Espera', semente, listaRankeadosem7, vagasem7, pontoImpressao, 'tabela'+sigla+'em7');
			}
			if(document.querySelector('[name="habilitarM8"]').checked){
				pontoImpressao = document.getElementById(resultadoem8);
				imprimaResultado(periodo+' - M8 - Espera', semente, listaRankeadosem8, vagasem8, pontoImpressao, 'tabela'+sigla+'em8');
			}

			// pontoImpressao = document.getElementById(resultadoemAC);
			// imprimaResultado(periodo+' - AC - Espera', semente, listaRankeadosemAC, vagasemAC, pontoImpressao, 'tabela'+sigla+'eAC');


	
			//dados pdf 1 período espera
			salvaPeriodo(descricaoPeriodo  + " - Espera", 15);
            salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+25);
			salvaDados(listaRankeadosemAC);
			salvaModalidade("Modalidade 1 - Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem1);
			salvaModalidade("Modalidade 2 - Negros/as (Pretos/as e Pardos/as) ou Indígenas e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem2);
			salvaModalidade("Modalidade 3 - Negros/as (Pretos/as e Pardos/as) ou Indígenas", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem3);
			salvaModalidade("Modalidade 4 - Pessoa com Deficiência e Perfil Socioeconômico", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem4);
			salvaModalidade("Modalidade 5 - Pessoa com Deficiência e Negra (preta e parda) ou Indígena", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem5);
			salvaModalidade("Modalidade 6 - Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadosem6);
			if(document.querySelector('[name="habilitarM7"]').checked){
				salvaModalidade("Modalidade 7 - ", doc.lastAutoTable.finalY+15);
				salvaDados(listaRankeadosem7);
			}
			if(document.querySelector('[name="habilitarM8"]').checked){
				salvaModalidade("Modalidade 8 - ", doc.lastAutoTable.finalY+15);
				salvaDados(listaRankeadosem8);
			}
			// salvaModalidade("Modalidade - Ampla Concorrência", doc.lastAutoTable.finalY+15);
			// salvaDados(listaRankeadosemAC);

			//informacoesPDF(semente);

		}else{

			document.getElementById(visibilidadeModalidades).style.display = 'none';
			document.getElementById(visibilidadeAC).style.display = 'block';

			valores = calculaRestantes(listaRankeadoseDF, vagaseDF, vagaseDF);
			vagaseDF = valores[0];
			listaRankeadoseDF = valores[1];

			valores = calculaRestantes(listaRankeadoseAP, vagaseAP, vagaseAP);
			vagaseAP = valores[0];
			listaRankeadoseAP = valores[1];



			pontoImpressao = document.getElementById(resultadoeAP);
			imprimaResultado(periodo+' - Ampla Concorrência - Espera', semente, listaRankeadoseAP, vagaseAP, pontoImpressao, 'tabela'+sigla+'eAC');

			pontoImpressao = document.getElementById(resultadoeDF);
			imprimaResultado(periodo+' - Deficiência - Espera', semente, listaRankeadoseDF, vagaseDF, pontoImpressao, 'tabela'+sigla+'eDF');

			

			//insere os dados no PDF
			//pdf 1 período espera pdf sem modalidades
			salvaPeriodo(descricaoPeriodo  + " - Espera", 15);
			salvaModalidade("Ampla Concorrência", doc.lastAutoTable.finalY+25);
			salvaDados(listaRankeadoseAP);
			salvaModalidade("Pessoa com Deficiência", doc.lastAutoTable.finalY+15);
			salvaDados(listaRankeadoseDF);
			//informacoesPDF(semente);



		}

}


//**********************************************************************//
// funções para impressão final
//**********************************************************************//

/** imprimiResultado
* @brief Função responsável por imprimir o
*		 resultado com os parâmetros passados.
*		 
*		
*
* @param  (Nome da série, semente, lista de candidatos selecionados, vagas, id da div para impressão, id tabela a ser gerada)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function imprimaResultado(nomeCurso, semente, lista, vagas, pontoImpressao, tabela) {
	var conteudo = "";
	conteudo += gereVisualDeCabecalhoDaLista(nomeCurso, semente);
	conteudo += VisualDeListaDeSelecionados(lista, vagas, tabela);
	pontoImpressao.innerHTML = conteudo;
}

/** gereVisualDeCabecalhoDaLista
* @brief Função responsável por imprimir o
*		 cabeçalho da lista, incluindo horário do sorteio.
*		 
*		
*
* @param  (Nome da série, semente)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function gereVisualDeCabecalhoDaLista(nomeCurso, semente) {
	var data = new Date(semente);
	relatorioCSV += "Horário do sorteio: " + data.getDate() + "/" + (pad(data.getMonth() + 1)) + "/" + pad(data.getFullYear()) + ", " + pad(data.getHours()) + ":" + pad(data.getMinutes()) + ":" + pad(data.getSeconds()) + "\nSemente: " + semente + "\n" + nomeCurso + "\n\nPosição;Número Sorteio;Dados Candidato 1;Dados Candidato 2;Dados Candidato 3;Dados Candidato 4;Dados Candidato 5;\n";
	return "Horário do sorteio: " + data.getDate() + "/" + (pad(data.getMonth() + 1)) + "/" + pad(data.getFullYear()) + ", " + pad(data.getHours()) + ":" + pad(data.getMinutes()) + ":" + pad(data.getSeconds()) + "," + pad(data.getMilliseconds()) + " (UTC-03:00) Brasília" + ".<H3>Selecionados - " + nomeCurso + "</H3>";
}

/** VisualDeListaDeSelecionados
* @brief Função responsável por imprimir o
*		 resultado da lista de selecionados.
*		 
*		
*
* @param  (lista dos selecionados, número de vagas, nome para gerar id da tabela)
* @return Nada
*
* @bugs Nenhum conhecido
*/
function VisualDeListaDeSelecionados(lista, ultimaPosicao, tabela) {
	var conteudo = "<table id="+ tabela + " class=\"table table-striped\"><th>Posição</th><th>Inscrição</th><th>Candidato</th> <th>Nascimento</th><th>CPF Resp. Legal</th></tr>";
	//var listaValores = [];
	
	if(lista.length > 0){
		for (var i = 0; i < ultimaPosicao; i++) {
			relatorioCSV += (i + 1) + ";" + lista[i][0] + ";" + lista[i][1].toUpperCase() + ";" + lista[i][6] + ";" + lista[i][8] + ";" + "\n";
			conteudo += "<tr><td class='npos'>" + (i + 1) + "º</td>" + "<td style=\"color:blue;text-align:center;\"><b>" + lista[i][0] +"</b></td>"  +
				"<td style=\"color:black;text-align:center;\">" + lista[i][1].toUpperCase() +"</td>" + "<td style=\"color:black;text-align:center;\">" + lista[i][6] +"</td>" + "<td style=\"color:black;text-align:center;\">" + lista[i][8] +"</td>" + "</tr>";
		}
	}

	return conteudo + '</table>';
}

/** gereVisualDeInformacoesTecnicas
* @brief Função responsável por imprimir o
*		 botão para o download do relatório em PDF e CSV.
*		 
*		
*
* @param  (semente)
* @return String com HTML formatado
*
* @bugs Nenhum conhecido
*/
function gereVisualDeInformacoesTecnicas(semente) {
	var conteudo = "<H3>Informações técnicas</H3>";
	
	conteudo += "<b>Semente utilizada:</b> <span><input type=\"text\" name=\"texto\" id=\"texto\" value=\"" + semente + "\" size=\"14\" readonly></span> <input type=\"button\" value=\"Copiar\" onclick=\"copiarTexto(\'texto\');\"><br/>";
	// conteudo += "<b>Semente utilizada:</b> <span><input type=\"text\" name=\"texto\" id=\"texto\" value=\"" + semente + "\" size=\"14\" readonly></span> <input type=\"button\" value=\"Copiar\" onclick=\"copiarTexto(\'texto\');\"><br/>";
	// conteudo += "<b>platform:</b> " + navigator.platform + "<br/>";
	// conteudo += "<b>appName:</b> " + navigator.appName + "<br/>";
	// conteudo += "<b>appVersion:</b> " + navigator.appVersion + "<br/>";
	// conteudo += "<b>userAgent:</b> " + navigator.userAgent + "<br/>";
	conteudo += "Versão: 1.0<br/><br/>"
	conteudo += "<td><input type=\"button\" class=\"btn btn-dark\" value=\"Baixar Resultado\" style=\"padding:10px 30px;\"onclick=\"pdfsave(); \"></td>"
	conteudo += "<td><input type=\"button\" class=\"btn btn-light\" value=\"Baixar Planilha\" style=\"padding:10px 30px;\"onclick=\"download(\'Sorteio.csv\', relatorioCSV); \"></td>"
	
	return conteudo;
}


//**********************************************************************//
// funções importadas do IFES
//**********************************************************************//
function pad(number) {
	return (number < 10 ? '0' : '') + number;

}

function padSpaces(atual, maximo) {
	var conteudo = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	var espacosExtras = (maximo + "").length - (atual + "").length;

	for (var i = 1; i <= espacosExtras; i++) {
		conteudo += "&nbsp;";
	}

	return conteudo;
}

//Alterações
function printHTML(lista, id, nomeModalidade){
	
	if(lista.length == 0) return;
	let html = '<p>Total de candidatos '+ nomeModalidade + ': <b>' + lista.length + '</b></p>';
	var i = 0;
    // html = html + '<table class="table table-striped"><tr><th>#</th><th>Inscrição</th><th colspan=' + lista[0].length + '>Candidato</th> <th>Nascimento</th></tr>' + lista.map(function (linha) {

	html = html + '<table class="table table-striped"><tr><th>#</th><th>Inscrição</th><th>Candidato</th> <th>Nascimento</th> <th>CPF Resp. Legal</th></tr>' + lista.map(function (linha) {
		
		return '<tr><td class="nsort">' + (++i) + '</td>' + '<td style= text-align:center;>' + linha[0]+ '</td>' +
			'<td style= text-align:center;>' + linha[1].toUpperCase()+ '</td>' + '<td style= text-align:center;>' + linha[6] + '<td style= text-align:center;>' + linha[8]+ '</td>'
		+ '</tr>\n';
	}).join("") + '</table>';

	document.getElementById(id).innerHTML = html;
}

function download(filename, text) {
	var universalBOM = "\uFEFF"; //adicionado para salvar em utf-8
	var pom = document.createElement('a');
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(universalBOM+text));//utf-8 save
	pom.setAttribute('download', filename);

	if (document.createEvent) {
		var event = document.createEvent('MouseEvents');
		event.initEvent('click', true, true);
		pom.dispatchEvent(event);
	}
	else {
		pom.click();
	}
}

function copiarTexto(id) {
	//console.log(id);
	
	var textoCopiado = document.getElementById(id);
	textoCopiado.select();
	document.execCommand("copy");	
}


//**********************************************************************//
// funções adicionais - habilitar modalidades - mudar logo do programa
//**********************************************************************//
function habilitarModalidade(idCM,idSM, checked){
	if((document.getElementById(idCM).style.display == 'none') == checked){
		document.getElementById(idCM).style.display = 'block';
		document.getElementById(idSM).style.display = 'none'} 
		if((document.getElementById(idCM).style.display == 'block') == !checked){
		document.getElementById(idCM).style.display = 'none';
		document.getElementById(idSM).style.display = 'block';
	};
}

function habilitarModalidadeExtras(idM, checked){
	if(checked){
		document.getElementsByName(idM)
			.forEach((input) => {
				input.style.display = 'block';
			});
	}else if (!checked){
		document.getElementsByName(idM)
			.forEach((input) => {
				input.style.display = 'none';
			});
	}
}

function mudaAno(ano){
	document.getElementById("logoano").src = "images/"+ano+".png";
}