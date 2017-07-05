
$(document).ready(function(){
	$("#refreshImage").hide();
	getLatestNews();
	$("#btnRefreshText").click(function(){
		getLatestNews();
	})

	var timeInterval = 60*1000;

	// window.setInterval(function(){
 //  		getLatestNews();
	// }, timeInterval);
	
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

					$('.data-ul').append("<li><div class='news-img'><img src='"+result.articles[i].urlToImage+"'/></div>"+
											"<div class='desc-news'><div class='first-row-div'><div class='title-div'><a target='_blank' href='"+result.articles[i].url+"'>"+result.articles[i].title+"</a></div>"+
											"<div class='published-div'>"+publishedDate.replace(/[TZ]/g,' ')+"</div></div>"+
											"<div class='description-div'>"+result.articles[i].description+"</div>"+
											"<div class='author-div'>-"+result.articles[i].author+"</div></div></li>");
				}
				
				$("#lastUpdateTime").html("<div><div>Last Updated:</div>"+new Date().toLocaleString()+"</div>")
			}
			
		})
}