$(document).ready(function(){
			var padre= $(".panel-info");
		var hijo = $(".panel-body");
		var elementos = $(".result");
		elementos.css("background-color","red").addClases("active").hide();
		});
		$(document).ready(function(){
		});	*/
		$(document).ready(function(){
			$("#send").click(function(e){
				e.preventDefault();  //previene el evento click , q se detenga
				var texto = $("#my-input").val();
				var miPrimerMensaje = $("<p class="mensaje"></p>").text(texto); //etiquetas al vuelo
				$(".resultado").append(miPrimerMensaje);
			}); 
		});