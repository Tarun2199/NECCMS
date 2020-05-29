
var curr_url = $('#current_url_full').val();
curr_url = curr_url.replace("index", '');
var base_path = $('#base_url').val() + curr_url;

$("#payout_dash li a").click(function () {
    var id = this.id;
    var external_path = base_path + '/ajax_payout/' + id;
    $("#payout_dash li").removeClass("active");
    $.ajax({
        type: 'POST',
        url: external_path,
        success: function (data) {
            $('#total_payout').html(data);
            $('#' + id).closest('li').addClass('active');
        }
    });
});

$("#sales_dash li a").click(function () {
    var id = this.id;
    var external_path = base_path + '/ajax_sales/' + id;
    $("#sales_dash li").removeClass("active");
    $.ajax({
        type: 'POST',
        url: external_path,
        success: function (data) {
            $('#sales_total').html(data);
            $('#' + id).closest('li').addClass('active');
        }
    });
});


$("#mail_dash li a").click(function () {
    var id = this.id;
    var external_path = base_path + '/ajax_mail/' + id;
    $("#mail_dash li").removeClass("active");
    $.ajax({
        type: 'POST',
        url: external_path,
        dataType: 'json',
        success: function (data) {
            $('#mail_total').html(data['mail_total']);
            $('#' + id).closest('li').addClass('active');
        }
    });
});

$(function() {
    var top_recruiter_height = $('#right_section').outerHeight() - $('#right_section_new_member').outerHeight();
    if ($('.wrapper_index').length > 0) {
        top_recruiter_height += parseFloat($('.wrapper_index > .region').css('margin-top'));
    }
    else {
        top_recruiter_height -= 50;
    }
    $('#right_section_top_recruiter').outerHeight(top_recruiter_height - 5);

    $('#section_top_earners').outerHeight($('#section_social_media').outerHeight());
    if ($('#demo_footer').length == 0 && $('.wrapper_index').length == 0) {
        $('#section_top_earners').addClass('m-b-xxl');
    }
    if ($('#demo_footer').length == 0 && $('.wrapper_index').length > 0) {
        $('.wrapper_index > div.panel').addClass('m-b-xxl');
    }
    var country_graph_height = $('#section_tile').outerHeight() - 15 - parseFloat($('#section_country_graph').css('margin-bottom')) - parseFloat($('#section_tile').find('[id^=section_tile]:last').find('.panel').css('margin-bottom'));
    // var country_graph_height = $('#section_tile').outerHeight() + $('.wrapper').outerHeight() - ($('#section_tile').find('[id^=section_tile]:last').outerHeight() - $('#section_tile').find('[id^=section_tile]:last').find('.panel').outerHeight());
    $('#country_graph').outerHeight(country_graph_height);
    
    // country vector graph
    var country_graph = $('#country_graph');
    var country_graph_max = Math.max.apply(null, Object.keys(country_map_data).map(function (key) { return country_map_data[key]; }));
    var country_graph_options = [{
        map: 'world_mill_en',
        backgroundColor: '#fff',
        regionStyle: {
            initial: {
                fill: '#c7dde0'
            },
            hover: {
                fill: '#7266ba'
            },
        },
        series: {
            regions: [{
                values: country_map_data,
                scale: ['#bfe2e8', '#7266ba'],
                normalizeFunction: 'polynomial',
            }]
        },
        onRegionTipShow: function (e, el, code) {
            el.html(el.html() + ' (' + $('#join').html() +' - ' + country_map_data[code] + ')');
        },
    }];
    if (country_graph_max == 0) {
        country_graph_options[0].series.regions[0].max = 1;
    }
    uiLoad.load(jp_config['vectorMap']).then(function () {
        country_graph['vectorMap'].apply(country_graph, country_graph_options);
    });

    // joining graph
    var joining_graph = $('#joining_graph_div');
    var mlm_plan = $('#mlm_plan').val();
    var external_path = base_path + '/ajax_joinings_chart/';
    uiLoad.load(jp_config['plot']).then(function () {
        $('#joinings_graph li a#monthly_joining_graph').click();
    });

    $('#joinings_graph li a').on('click', function () {
        var id = this.id;
        $("#joinings_graph li").removeClass("active");
        $.ajax({
            type: 'POST',
            url: external_path + id,
            dataType: "JSON",
            success: function (response_data) {
                var joining_graph_data;
                var xaxis_label = [];
                var yaxis_top = 0;
                if (mlm_plan == 'Binary') {
                    var left_data = [];
                    var right_data = [];
                    for (i = 0; i < response_data.length; i++) {
                        left_data.push([response_data[i].x, response_data[i].y]);
                        right_data.push([response_data[i].x, response_data[i].z]);
                        xaxis_label.push([response_data[i].x, response_data[i].x_label]);
                        if (response_data[i].y > yaxis_top || response_data[i].z > yaxis_top) {
                            yaxis_top = response_data[i].y;
                            if (response_data[i].z > response_data[i].y) {
                                yaxis_top = response_data[i].z;
                            }
                        }
                    }
                    joining_graph_data = [
                        {
                            data: left_data,
                            label: $('#left_join').html(),
                            points: {show: true, radius: 1},
                            splines: {show: true, tension: 0.4, lineWidth: 1, fill: 0.8}
                        },
                        {
                            data: right_data,
                            label: $('#right_join').html(),
                            points: {show: true, radius: 1},
                            splines: {show: true, tension: 0.4, lineWidth: 1, fill: 0.8}
                        }
                    ];
                }
                else {
                    var data = [];
                    for (i = 0; i < response_data.length; i++) {
                        data.push([response_data[i].x, response_data[i].y]);
                        xaxis_label.push([response_data[i].x, response_data[i].x_label]);
                        if (response_data[i].y > yaxis_top) {
                            yaxis_top = response_data[i].y;
                        }
                    }
                    joining_graph_data = [
                        {
                            data: data,
                            label: $('#join').html(),
                            points: {show: true, radius: 1},
                            splines: {show: true, tension: 0.4, lineWidth: 1, fill: 0.8}
                        }
                    ];
                }
                var joining_graph_options = [
                    joining_graph_data,
                    {
                        colors: ['#23b7e5', '#7266ba'],
                        series: { shadowSize: 3 },
                        xaxis: { 
                            font: { color: '#a1a7ac' },
                            ticks: xaxis_label
                        },
                        yaxis: { 
                            font: { color: '#a1a7ac' }, 
                            max: yaxis_top + 1 
                        },
                        grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#242424' },
                        tooltip: true,
                        tooltipOpts: { 
                            content: function (label, xval, yval) {
                                var content = label + " on " + response_data[xval].x_label + " - " + yval;
                                return content;
                            },
                            defaultTheme: false, shifts: { x: 10, y: -25 } 
                        },
                    },
                ];
                joining_graph['plot'].apply(joining_graph, joining_graph_options);
            },
        });
    });

    // pie chart - todo-list
    var todo_picked = $('#todo_picked');
    var todo_shipped = $('#todo_shipped');
    var todo_out = $('#todo_out');
    var todo_delivered = $('#todo_delivered');
    var todo_picked_options = [{
    	percent: $('#todo_picked_percent').val(),
        lineWidth: 4,
        trackColor: '#e8eff0',
        barColor: '#7266ba',
        scaleColor: false,
        size: 118,
        rotate: 180,
        lineCap: 'butt'
    }];
    var todo_shipped_options = [{
        percent: $('#todo_shipped_percent').val(),
        lineWidth: 4,
        trackColor: '#e8eff0',
        barColor: '#7266ba',
        scaleColor: false,
        size: 118,
        rotate: 180,
        lineCap: 'butt'
    }];
    var todo_out_options = [{
    	percent: $('#todo_out_percent').val(),
        lineWidth: 4,
        trackColor: '#e8eff0',
        barColor: '#7266ba',
        scaleColor: false,
        size: 118,
        rotate: 180,
        lineCap: 'butt'
    }];
    var todo_delivered_options = [{
    	percent: $('#todo_delivered_percent').val(),
        lineWidth: 4,
        trackColor: '#e8eff0',
        barColor: '#7266ba',
        scaleColor: false,
        size: 118,
        rotate: 180,
        lineCap: 'butt'
    }];
    uiLoad.load(jp_config['easyPieChart']).then(function () {
        todo_picked['easyPieChart'].apply(todo_picked, todo_picked_options);
        todo_shipped['easyPieChart'].apply(todo_shipped, todo_shipped_options);
        todo_out['easyPieChart'].apply(todo_out, todo_out_options);
        todo_delivered['easyPieChart'].apply(todo_delivered, todo_delivered_options);
    });

});