var accordion_page = 1;

function slide(to){
	if (to != accordion_page){
		$("#accordion"+(accordion_page*5-4)).animate({width:'toggle'},800);
		$('#accordion'+(to*5-4)).show(800);

		$("#accordion"+(accordion_page*5-3)).animate({width:'toggle'},800);
		$('#accordion'+(to*5-3)).show(800);

		$("#accordion"+(accordion_page*5-2)).animate({width:'toggle'},800);
		$('#accordion'+(to*5-2)).show(800);

		$("#accordion"+(accordion_page*5-1)).animate({width:'toggle'},800);
		$('#accordion'+(to*5-1)).show(800);

		$("#accordion"+(accordion_page*5)).animate({width:'toggle'},800);
		$('#accordion'+(to*5)).show(800);
		accordion_page = to;
	}
}