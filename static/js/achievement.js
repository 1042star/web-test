var DataTable = {};

$("#achievement").click(function(data, status){
	$("#content-result").load("static/html/achievement.html");
	console.log("Achievement");
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

