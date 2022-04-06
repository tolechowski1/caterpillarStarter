$(function() {
    $("#restore").hide();
    $("#transform").on('click',function() {
        $('#restore').show();
        $('#transform').hide();
        $("#p1").html("The is a <strong>butterfly</strong> in its natural habitat:");
        $("title").text("The changing butterfly");
        $("h1").text('The butterfly');
        $("p").css("background", "yellow");
        $("h2").addClass("butterfly");
        $("img").attr("src",'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');
        $("a").attr("href", 'https://en.wikipedia.org/wiki/Butterfly');
        $("a").text('Butterfly');
        
        $('#p1').addClass('butterfly');
        $('a').after('<ul>');
        $("ul").append('<li> Many species make use of camouflage, mimicry, and aposematism to evade their predators.</li>');
        $("ul").append('<li>Butterflies have over 12,000 eyes.</li>');
        $("ul").append('<li> When metamorphosis is complete, the pupal skin splits, the adult insect climbs out, and after its wings have expanded and dried, it flies off.</li>');
    });
    $("#restore").on("click", function(){
        location.reload(true);
    });
});
