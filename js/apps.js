var $ = jQuery.noConflict();
  $(document).ready(function pricefeed() {
    
	$.ajax({
            url: 'http://db.flutx.com/DFIT01/json_goldprice.php',
        	type: "GET",
			
    dataType: "jsonp",
    async:false,
        success: function(data){ 
			
            $('#bullion_ask').text(data[0].data);
            $('#bullion_bid').text(data[1].data);
            $('#ornament_ask').text(data[4].data);
            $('#ornament_bid').text(data[5].data);
            $('#gold_spot').text(data[3].data);
            $('#usdthb').text(data[6].data);
            $('#gold_est').text(data[2].data);
            $('#update').text(data[7].data);
				
			setTimeout(pricefeed, 60*1000);
        },
        error: function(error){
			 ErrorFunction();
        }
    	});
		swiperNested1.reInit();
		swiperNested3.reInit();
  });