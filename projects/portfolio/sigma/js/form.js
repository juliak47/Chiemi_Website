/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
const nameA = [];
const valA = [];
function moveIt(){
		$("#jForm").animate({"left": "+=200px"},2000,"swing");
		$("#jForm input").each(function(){
			$(this).attr("disabled", "disabled");
			if($(this).attr("type")!="submit"){
				nameA.push($(this).attr("name"));
				valA.push($(this).val());
			}			
		});
		console.log(nameA);
		console.log(valA);
	}
$(document).ready(function(){
	$("#favColor").on("change",function(){
        $("body").css("backgroundColor", $("#favColor").val());  
    });
    $("#favColor").val("#448899");
    $("#website").val("http://www.");
	//$("#email").val(" ");
    $("#over18").on("focusin",function(){
        $("#firstName").val("Cool_person");
        $("#firstName").on("focusout", function() {
            $("#firstName").val("Cool_person");
        });
    });
    $("body").on("click",function(){
        if($("#firstName").val().length>0 && $("#lastName").val().length>0 && $("#email").val().length>0){
            $("#email").css({"position": "relative"});
            $("#email").animate({left: "+=100"},1000,"swing",function(){
                $("#email").css("display", "none");
                $("body").off("click");
            });
        }
    });   
    $('#jForm').validate({
		rules: {
			firstName: {
                required: true
            },
			email: {
				required: true,
				email: true
			},
			bonus: {
				required: true
			},
			over18: {
				require: true,
				min: 18
			}
		}, 
		messages: {
			firstName: {
                required: "This is required!!!"
            },
			email: {
				required: "You must add yer email!",
				email: "That ain't a email!"
			},
			bonus: {
				required: "Hey this worked"
			},
			over18: {
				required: "What's your age again?",
				min: "Are you really not 18?"
			}
		}, 
		errorPlacement: function(error, element) {
            if(element.is(":radio") || element.is(":checkbox")) {
                element.parent().append(error);
            } else {
                element.after(error);
            }//end else
        }
	});
    $("#submit").on("click", function(){
        console.log($("#firstName").hasClass("error"));
        if($("#firstName").hasClass(".error")){          
            $("#body").css("background-color" ,  "#FF0000");
        }
    });
	$("#box1").on("click",function(){
		$(".boxie").prop("checked", false).removeClass("chosenBox");
		$("#opt1").prop("checked", true);
		$(this).addClass("chosenBox");
		console.log("option 1");
	});
	$("#box2").on("click",function(){
		$(".boxie").prop("checked", false).removeClass("chosenBox");
		$("#opt2").prop("checked", true);
		$(this).addClass("chosenBox");
		console.log("option 2");
	});
	$("#box3").on("click",function(){
		$(".boxie").prop("checked", false).removeClass("chosenBox");
		$("#opt3").prop("checked", true);
		$(this).addClass("chosenBox");
		console.log("option 3");
	});
});












