$(document).ready(function () {
    
// ---------------------Vehicle API -----------------------------

    var getVehicles = $.ajax({
        type: 'GET',
        url: 'https://findfalcone.herokuapp.com/vehicles'
    });
    
// ---------------------Planet API -----------------------------

    var getPlanets = $.ajax({
        type: 'GET',
        url: 'https://findfalcone.herokuapp.com/planets'
    });

    $("#result").hide();
     $("#box1,#box2,#box3,#box4").on("click", function(){
        $("#result").show();
    });
    function myFunction() {
        document.getElementById("myForm").reset();
    }
    $("#resetBtn").click(function(){
        /* Single line Reset function executes on click of Reset Button */
        $("#reset")[0].reset();
        });
        $('#resetBtn').click(function() {
            location.reload();
        });

//------Getting the planets and showing in the select-option-------

    getPlanets.done(function(planets) {
        let output = ``;
        $.each(planets, function (index, planet) {
            $('#box1').append(`
                        <option value="${planet.distance}">${planet.name}</option>
                        `);
            $('#box2').append(`
                        <option value="${planet.distance}">${planet.name}</option>
                        `);
            $('#box3').append(`
                        <option value="${planet.distance}">${planet.name}</option>
                        `);
            $('#box4').append(`
                        <option value="${planet.distance}">${planet.name}</option>
                        `);
        });
    });
    
    //-------showing the selected the items from Select option--------

    $("select#box1").change(function () {
        var selectedplanets = $("#box1 option:selected").val();
        let firstPlanet = $('h3#planetName1').html($("#box1 option:selected").text());
        if (firstPlanet) {
            getVehicles.done(function (vehicles) {
                let output = ``;
                $('#vehicleSelect1').html("");
                $('#timeTaken1').html("");
                $.each(vehicles, function (index,vehicle) {
                    console.log(selectedplanets);
                    distance = selectedplanets / vehicle.speed;
                    $("#name1").val("");
                    $("#value1").val("");
                    if (vehicle.max_distance >= selectedplanets) {
                        $('#vehicleSelect1').append(`
                    <input type="radio"  class='${vehicle.name.replace(/\s/g,'-')}' onchange="printDistance('timeTaken1','${distance}',1,'${vehicle.name}','${vehicle.name.replace(/\s/g,'-')}','${vehicle.total_no}','name1','value1')" name="list1"  value="${vehicle.total_no}"><label  class='label${vehicle.name.replace(/\s/g,'-')}' >${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    } else {
                        $('#vehicleSelect1').append(`
                     <input type="radio"  value="${vehicle.total_no}" disabled><label>${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    }
                    printDistance('timeTaken1', distance, 0, vehicle.name, vehicle.name.replace(/\s/g, '-'), vehicle.total_no);
                });
            });
        }
    });

    $("select#box2").change(function () {
        var selectedplanets = $("#box2 option:selected").val();
        var secondPlanet = $('h3#planetName2').html($("#box2 option:selected").text());
        if (secondPlanet) {
            getVehicles.done(function (vehicles) {
                let output = ``;
                $('#vehicleSelect2').html("");
                $('#timeTaken2').html("");
                $.each(vehicles, function (index, vehicle) {
                    distance = selectedplanets / vehicle.speed;
                    $("#name2").val("");
                    $("#value2").val("");
                    if (vehicle.max_distance >= selectedplanets) {
                        $('#vehicleSelect2').append(`
                    <input type="radio"  class='${vehicle.name.replace(/\s/g,'-')}' onchange="printDistance('timeTaken2','${distance}',1,'${vehicle.name}','${vehicle.name.replace(/\s/g,'-')}','${vehicle.total_no}','name2','value2')" name="list2" value="${vehicle.total_no}"><label  class='label${vehicle.name.replace(/\s/g,'-')}' >${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    } else {
                        $('#vehicleSelect2').append(`
                        <input type="radio"  value="${vehicle.total_no}" disabled><label>${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    }
                    printDistance('timeTaken2', distance, 0, vehicle.name, vehicle.name.replace(/\s/g, '-'), vehicle.total_no);
                });
            });
        }
    });

    $("select#box3").change(function () {
        var selectedplanets = $("#box3 option:selected").val();
        var thirdPlanet = $('h3#planetName3').html($("#box3 option:selected").text());
        if (thirdPlanet) {
            getVehicles.done(function (vehicles) {
                let output = ``;
                $('#vehicleSelect3').html("");
                $('#timeTaken3').html("");
                $.each(vehicles, function (index, vehicle) {
                    $("#name3").val("");
                    $("#value3").val("");
                    distance = selectedplanets / vehicle.speed;
                    if (vehicle.max_distance >= selectedplanets) {
                        $('#vehicleSelect3').append(`
                    <input type="radio"  class='${vehicle.name.replace(/\s/g,'-')}' onchange="printDistance('timeTaken3','${distance}',1,'${vehicle.name}','${vehicle.name.replace(/\s/g,'-')}','${vehicle.total_no}','name3','value3')" name="list3" value="${vehicle.total_no}"><label  class='label${vehicle.name.replace(/\s/g,'-')}' >${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    } else {
                        $('#vehicleSelect3').append(`
                        <input type="radio"  value="${vehicle.total_no}" disabled><label>${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    }
                    printDistance('timeTaken3', distance, 0, vehicle.name, vehicle.name.replace(/\s/g, '-'), vehicle.total_no);
                });
            });
        }
    });
    $("select#box4").change(function () {
        var selectedplanets = $("#box4 option:selected").val();
        var fouthPlanet = $('h3#planetName4').html($("#box4 option:selected").text());
        if (fouthPlanet) {
            getVehicles.done(function (vehicles) {
                let output = ``;
                $('#vehicleSelect4').html("");
                $('#timeTaken4').html("");
                $.each(vehicles, function (index, vehicle) {
                    $("#name4").val("");
                    $("#value4").val("");
                    distance = selectedplanets / vehicle.speed;
                    if (vehicle.max_distance >= selectedplanets) {
                        $('#vehicleSelect4').append(`
                    <input type="radio"  class='${vehicle.name.replace(/\s/g,'-')}' onchange="printDistance('timeTaken4','${distance}',1,'${vehicle.name}','${vehicle.name.replace(/\s/g,'-')}','${vehicle.total_no}','name4','value4')" name="list4" value="${vehicle.total_no}"><label  class='label${vehicle.name.replace(/\s/g,'-')}' >${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    } else {
                        $('#vehicleSelect4').append(`
                    <input type="radio"  value="${vehicle.total_no}" disabled><label>${vehicle.name} - ${vehicle.total_no} </label ><br>
                    `);
                    }
                    printDistance('timeTaken4', distance, 0, vehicle.name, vehicle.name.replace(/\s/g, '-'), vehicle.total_no);
                });
            });
        }
    });

    //option for not selecting the selected items from the options

    $('select').change(function () {
        if ($(this).attr('id') == 'box' && $(this).val() == 'Default') {
            $('select').not(this).prop('disabled', true).val('Disabled');
        } else {
            $('select').not(this).removeProp('disabled');

            $('select option').removeProp('disabled');
            $('select').each(function () {
                var val = $(this).val();
                if (val != 'Default' || val != 'Disabled') {
                    $('select option[value="' + val + '"]').not(this).prop('disabled', true);
                }
            });
        }
    });

    //-------------------generatingToken and findingVehicle---------------------------------------------

    $('#submit').on('click', function () {
        $.ajax({
            type: 'POST',
            url: 'https://findfalcone.herokuapp.com/token',
            headers: {
                'Accept': 'application/json'
            }
        }).done(function (token) {
            console.log(token.token);
            // var token = `${token.token}`;
            reqData = '{"token": "' + token.token + '","planet_names": ["' + $("#box1 option:selected").text() + '","' + $("#box2 option:selected").text() + '","' + $("#box3 option:selected").text() + '","' + $("#box4 option:selected").text() + '"],"vehicle_names": ["' + $('#name1').val().replace('-', ' ') + '","' + $('#name2').val().replace('-', ' ') + '","' + $('#name3').val().replace('-', ' ') + '","' + $('#name4').val().replace('-', ' ') + '"]}';
            console.log(reqData);
            $.ajax({
                type: 'POST',
                url: 'https://findfalcone.herokuapp.com/find',
                dataType: 'json',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                data: reqData,
            }).done(function (response) {
               // console.log(response)
               if(response.status == "success"){
                     $('#pop').html(`<script>
                     swal("Planet Found : ${response.planet_name}", "Time Taken : ${totalTime}", "success")
                     </script>`
                    )
               }
               else {
                $('#pop').html(`<script>swal({
                    title: "Oh No....!",
                    text: "Please try again",
                    imageUrl: 'http://pluspng.com/img-png/png-thumbs-down-thumbs-down-icon-1600.png'
                  });
                     </script>
                     `)
               }
            });
        });
    });
});


function printDistance(id, distance, onchange, txt, labelClass, total_no, textBox1, textBox2) {
    totalSelected = $('.' + labelClass + ':checked').length;
    console.log(id + distance + txt + total_no + totalSelected + labelClass + textBox1 + textBox2);
    if (onchange) {
        $('#' + id).html(distance);
    }

    total_no = total_no - totalSelected;
    if (total_no == 0) {
        $('.' + labelClass).prop('disabled', true);
    }
    $(".label" + labelClass).html(txt + ' - ' + total_no);
    if ($("#" + textBox1).val() != "") {
        $(".label" + $("#" + textBox1).val()).html($("#" + textBox1).val() + ' - ' + (parseInt($("#" + textBox2).val()) + 1));
        $('.' + $("#" + textBox1).val()).prop('disabled', false);
    }

    $("#" + textBox1).val(labelClass);
    $("#" + textBox2).val(total_no);
    // console.log(parseFloat($("#timeTaken1").html()));
    timeTaken1 = parseFloat($("#timeTaken1").html()) || 0;
    timeTaken2 = parseFloat($("#timeTaken2").html()) || 0;
    timeTaken3 = parseFloat($("#timeTaken3").html()) || 0;
    timeTaken4 = parseFloat($("#timeTaken4").html()) || 0;
    totalTime =timeTaken1 + timeTaken2 + timeTaken3 + timeTaken4
    $("#totalTimeTaken").html(totalTime );

}
