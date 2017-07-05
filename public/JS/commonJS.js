
$(document).ready(function(){
	$("#refreshImage").hide();
	getLatestNews();
	$("#btnRefreshText").click(function(){
		getLatestNews();
	})

	var timeInterval = 60*1000;

	window.setInterval(function(){
  		getLatestNews();
	}, timeInterval);
	
})

function getLatestNews()
{
	$("#refreshImage").show()
	$.ajax({
			url:'http://'+window.location.host+'/news',
			type:'get',
			success :function(data){
				$("#refreshImage").hide();
				var result = JSON.parse(data);
				$('.data-ul').html('');

				for(var i =0; i<result.articles.length;i++)
				{
					var publishedDate = result.articles[i].publishedAt;

					$('.data-ul').append("<li>"+result.articles[i].title+"</li>"+
										"<li>"+result.articles[i].description+"</li>"+
										"<li><a href='"+result.articles[i].url+"' target='_blank'>Browse link</a></li>"+
										"<li><img class='newsheaderImg' src='"+result.articles[i].urlToImage+"'/></li>"+
										"<li>"+publishedDate.replace(/[TZ]/g,' ')+"</li>");
				}
				
				$("#lastUpdateTime").html("<div><div>Last Updated:</div>"+new Date().toLocaleString()+"</div>")
			}
			
		})
}