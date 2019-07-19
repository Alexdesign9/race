let sortType = [1, 1, 1, 1, -1]
$('.arrows').hide()
$('#totalUp').show()

$("#1").click(function(){
 sortType[0] *= -1
 if(sortType[0] == 1){
 	$('.arrows').hide()
 	$('#1Down').show()
 }else{
	 	$('.arrows').hide()
	 	$('#1Up').show()
 	}
	let column = $(this).prevAll().length
 sortTable(sortType[0] ,column)
})

$("#2").click(function(){
	sortType[1] *= -1
	if(sortType[1] == 1){
		$('.arrows').hide()
		$('#2Down').show()
	}else{
			$('.arrows').hide()
			$('#2Up').show()
		}
	let column = $(this).prevAll().length
	sortTable(sortType[1] ,column)
})

$("#3").click(function(){
	sortType[2] *= -1
 if(sortType[2] == 1){
		$('.arrows').hide()
		$('#3Down').show()
	}else{
			$('.arrows').hide()
			$('#3Up').show()
		}
	let column = $(this).prevAll().length
	sortTable(sortType[2] ,column)
})

$("#4").click(function(){
 sortType[3] *= -1
 if(sortType[3] == 1){
 	$('.arrows').hide()
 	$('#4Down').show()
 }else{
	 	$('.arrows').hide()
	 	$('#4Up').show()
 	}
 let column = $(this).prevAll().length
 sortTable(sortType[3] ,column)
})

$("#total").click(function(){
 sortType[4] *= -1
 if(sortType[4] == 1){
 	$('.arrows').hide()
 	$('#totalDown').show()
 }else{
	 	$('.arrows').hide()
	 	$('#totalUp').show()
 	}
 let column = $(this).prevAll().length
 sortTable(sortType[4] ,column)
})

$.ajax({
	url:'data_all.php',
	method: 'GET',
	dataType: 'JSON',
	success: function(data){
		for(r=0; r<15; r++){
			let tr = document.createElement("tr")
			$("#tbody").append(tr)
			let td = []
			for(i=0; i<9; i++){
			td[i] = document.createElement("td")
			}
				
			$(td[1]).text(data[r].name)
			$(td[2]).text(data[r].city)
			$(td[3]).text(data[r].car)
			$(td[4]).text(data[r].result[0])
			$(td[5]).text(data[r].result[1])
			$(td[6]).text(data[r].result[2])
			$(td[7]).text(data[r].result[3])
			$(td[8]).text(data[r].result[0] + data[r].result[1] +  data[r].result[2] + data[r].result[3])
			td.forEach(function(td){
			  tr.append(td)
			})
		}

		let column = $('#total').prevAll().length
		sortTable(sortType[4] ,column)
		
		let rows = $('tr')
		for(i=1; i<16; i++){
			$(rows[i]).children('td').eq(0).text(i)
		}

	}
})

function sortTable(sortType,column){
	let rows = $('#mytable tbody  tr').get();
	rows.sort(function(a, b) {
		let A = getVal(a)
		let B = getVal(b)
		if(A < B) {
			return -1*sortType
		}
		if(A > B) {
			return 1*sortType
		}
		return 0
	})

	function getVal(element){
		let tdValue = $(element).children('td').eq(column).text().toUpperCase()
		if($.isNumeric(tdValue)){
			tdValue = parseInt(tdValue,10)
		}
		return tdValue
	}

	$.each(rows, function(index, row) {
		$('#mytable').children('tbody').append(row)
	})

}