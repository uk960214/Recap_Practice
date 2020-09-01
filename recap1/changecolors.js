var Column = {
	setColor:function(color, id){
		document.getElementbyId(id).style.backgroundColor = color;
	},
}


function changeColor(id){
	if(self.value === 'black'){
		Column.setColor('yellow','id')
		self.value = 'yellow'
	} else if (self.value === 'yellow'){
		Column.setColor('red','id')
		self.value = 'red'
	} else {
		Column.setColor('black','id')
		self.value = 'black'
	}
}
