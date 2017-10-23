var $submit = $('#submit');
var $pokemonName = $('#area');
var $pokemon = $('#name');
var $min_level = $('#min-level');
var $firstEvo = $('#first-evo');
var $secondEvo = $('#second-evo');
var $additionalData = $('#words');
var $spans = $('span');
var $textArea = $('#textArea');

$submit.on("click",function(){
$.ajax({
  url: "https://pokeapi.co/api/v2/evolution-chain/"+$pokemonName.val()+"/",
  success: function(result){
		$pokemon.text(result.chain.species.name);
		$spans.text('');
		$textArea.addClass('bg-dark container col-lg-4 p-3');
		if(result.chain.evolves_to[0]==undefined){return;};
		if(result.chain.evolves_to[0].evolution_details[0].min_level){
			$min_level.text("Evolves at level " + result.chain.evolves_to[0].evolution_details[0].min_level + " into ")
			$firstEvo.text(result.chain.evolves_to[0].species.name + '.');
		}
		if(result.chain.evolves_to[0].evolves_to[0]==undefined){return;};
		if(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level){
			$additionalData.text(" This Pokemon may evolve again at level " + result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level + " into ");
			$secondEvo.text(result.chain.evolves_to[0].evolves_to[0].species.name + ".");
		}
  },
  error: function(){
	  $pokemon.text("Try the Pokemon's ID number instead.");
  }
})
  $pokemonName.val('');
})



