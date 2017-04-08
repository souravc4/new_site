app.controller("jctrl", function($scope) {

	$("#ex1").keyup(function(){
		var a = ($scope.pack1).toLowerCase();
		$.getJSON('https://pypi.python.org/pypi/'+a+'/json', function(data) {
			var name = data.info.name;
			$('#p1name').html(name);
			var ver = data.info.version;
			$('#p1ver').html(ver);
			var hp = data.info.package_url;
			$('#p1url').html(hp);
			var dp = data.info.docs_url;
			$('#p1dp').html(dp);		
		});
	});
	
	$("#ex2").keyup(function(){
		var a = ($scope.pack2).toLowerCase();
		$.getJSON('https://pypi.python.org/pypi/'+a+'/json', function(data) {
			var name = data.info.name;
			$('#p2name').html(name);
			var ver = data.info.version;
			$('#p2ver').html(ver);
			var hp = data.info.package_url;
			$('#p2url').html(hp);
			var dp = data.info.docs_url;
			$('#p2dp').html(dp);		
		});
	});

	$("#ex3").keyup(function(){
		var a = ($scope.pack3).toLowerCase();
		$.getJSON('https://pypi.python.org/pypi/'+a+'/json', function(data) {
			var name = data.info.name;
			$('#p3name').html(name);
			var ver = data.info.version;
			$('#p3ver').html(ver);
			var hp = data.info.package_url;
			$('#p3url').html(hp);
			var dp = data.info.docs_url;
			$('#p3dp').html(dp);		
		});
	});

	$("#ex4").keyup(function(){
		var a = ($scope.pack4).toLowerCase();
		$.getJSON('https://pypi.python.org/pypi/'+a+'/json', function(data) {
			var name = data.info.name;
			$('#p4name').html(name);
			var ver = data.info.version;
			$('#p4ver').html(ver);
			var hp = data.info.package_url;
			$('#p4url').html(hp);
			var dp = data.info.docs_url;
			$('#p4dp').html(dp);		
		});
	});

	$("#ex5").keyup(function(){
		var a = ($scope.pack5).toLowerCase();
		$.getJSON('https://pypi.python.org/pypi/'+a+'/json', function(data) {
			var name = data.info.name;
			$('#p5name').html(name);
			var ver = data.info.version;
			$('#p5ver').html(ver);
			var hp = data.info.package_url;
			$('#p5url').html(hp);
			var dp = data.info.docs_url;
			$('#p5dp').html(dp);		
		});
	});

});