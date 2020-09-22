var DataTable = {};

$.get("/achievement", function(data, status){
	$("#content-result").load("static/html/achievement.html");
});

function postAchievement() {
	$.ajax({
		  type: "POST"
		, url: "/achievement"
		, data: $("#frm").serializeArray()
		, success: function(data) {
			DataTable["achievement"] = data;
			console.log(DataTable);
		}
	});
}

