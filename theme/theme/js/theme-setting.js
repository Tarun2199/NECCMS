
themeIdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

$(function () {
    if ($.isEmptyObject(themeSettingData)) {
        themeSetting = {
            themeID: 1,
            navbarHeaderColor: 'bg-black',
            navbarCollapseColor: 'bg-white-only',
            asideColor: 'bg-black',
            headerFixed: true,
            asideFixed: false,
            asideFolded: false,
            asideDock: false,
            container: false
        };
    }
    else {
        themeSetting = {
            themeID: themeSettingData.theme_id,
            navbarHeaderColor: themeSettingData.navbar_header_color,
            navbarCollapseColor: themeSettingData.navbar_collapse_color,
            asideColor: themeSettingData.aside_color,
            headerFixed: Boolean(Number(themeSettingData.header_fixed)),
            asideFixed: Boolean(Number(themeSettingData.aside_fixed)),
            asideFolded: Boolean(Number(themeSettingData.aside_folded)),
            asideDock: Boolean(Number(themeSettingData.aside_dock)),
            container: Boolean(Number(themeSettingData.container))
        };
    }
    
    updateThemeColor(themeSetting.themeID);
    updateThemeLayout();

    $('.settings input[name="themeID"]').on('change', function () {
        var themeID = parseInt($(this).val());
        updateThemeColor(themeID);
    });
    
    $('.settings input[name="headerFixed"]').on('change', function () {
        themeSetting.headerFixed = $(this).is(':checked');
        updateThemeLayout();
    });
    
    $('.settings input[name="asideFixed"]').on('change', function () {
        themeSetting.asideFixed = $(this).is(':checked');
        updateThemeLayout();
    });
    
    $('.settings input[name="asideFolded"]').on('change', function () {
        themeSetting.asideFolded = $(this).is(':checked');
        updateThemeLayout();
    });
    
    $('.settings input[name="asideDock"]').on('change', function () {
        themeSetting.asideDock = $(this).is(':checked');
        updateThemeLayout();
    });
    
    $('.settings input[name="container"]').on('change', function () {
        themeSetting.container = $(this).is(':checked');
        updateThemeLayout();
    });

});

function updateThemeColor(themeID) {
    themeID = parseInt(themeID);
    if (!$.inArray(themeID, themeIdList)) {
        themeID = 1;
    }
    themeSetting.themeID = themeID;

    switch (themeID) {
        case 1:
            themeSetting.navbarHeaderColor = 'bg-black';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-black';
            break;
        case 13:
            themeSetting.navbarHeaderColor = 'bg-dark';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-dark'
            break;
        case 2:
            themeSetting.navbarHeaderColor = 'bg-white-only';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-black';
            break;
        case 3:
            themeSetting.navbarHeaderColor = 'bg-primary';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-dark';
            break;
        case 4:
            themeSetting.navbarHeaderColor = 'bg-info';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-black';
            break;
        case 5:
            themeSetting.navbarHeaderColor = 'bg-success';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-dark';
            break;
        case 6:
            themeSetting.navbarHeaderColor = 'bg-danger';
            themeSetting.navbarCollapseColor = 'bg-white-only';
            themeSetting.asideColor = 'bg-dark';
            break;
        case 7:
            themeSetting.navbarHeaderColor = 'bg-black';
            themeSetting.navbarCollapseColor = 'bg-black';
            themeSetting.asideColor = 'bg-white b-r';
            break;
        case 14:
            themeSetting.navbarHeaderColor = 'bg-dark';
            themeSetting.navbarCollapseColor = 'bg-dark';
            themeSetting.asideColor = 'bg-light';
            break;
        case 8:
            themeSetting.navbarHeaderColor = 'bg-info dker';
            themeSetting.navbarCollapseColor = 'bg-info dker';
            themeSetting.asideColor = 'bg-light dker b-r';
            break;
        case 9:
            themeSetting.navbarHeaderColor = 'bg-primary';
            themeSetting.navbarCollapseColor = 'bg-primary';
            themeSetting.asideColor = 'bg-dark';
            break;
        case 10:
            themeSetting.navbarHeaderColor = 'bg-info dker';
            themeSetting.navbarCollapseColor = 'bg-info dk';
            themeSetting.asideColor = 'bg-black';
            break;
        case 11:
            themeSetting.navbarHeaderColor = 'bg-success';
            themeSetting.navbarCollapseColor = 'bg-success';
            themeSetting.asideColor = 'bg-dark';
            break;
        case 12:
            themeSetting.navbarHeaderColor = 'bg-danger dker bg-gd';
            themeSetting.navbarCollapseColor = 'bg-danger dker bg-gd';
            themeSetting.asideColor = 'bg-dark';
            break;
        default:
            break;
    }
    $('#header div.navbar-header').attr('class', 'navbar-header');
    $('#header div.navbar-header').addClass(themeSetting.navbarHeaderColor);
    $('#header div.navbar-collapse').attr('class', 'collapse pos-rlt navbar-collapse box-shadow');
    $('#header div.navbar-collapse').addClass(themeSetting.navbarCollapseColor);
    $('#aside').attr('class', 'app-aside hidden-xs');
    $('#aside').addClass(themeSetting.asideColor);
    $('input[name="themeID"][value="' + themeID + '"]').click();
    
    updateThemeSetting(themeSetting);
}

function updateThemeLayout() {
    // aside dock and fixed must set the header fixed.
    if (themeSetting.asideDock && themeSetting.asideFixed) {
        themeSetting.headerFixed = true;
        $('.settings input[name="headerFixed"]').prop('checked', true);
    }

    // for box layout, add background image
    if (themeSetting.container) {
        $('html').addClass('bg');
    }
    else {
        $('html').removeClass('bg');
    }

    if (themeSetting.headerFixed) {
        $('.app').addClass('app-header-fixed');$('.settings input[name="headerFixed"]').prop('checked', true);
    }
    else {
        $('.app').removeClass('app-header-fixed');
    }
    
    if (themeSetting.asideFixed) {
        $('.app').addClass('app-aside-fixed');
    }
    else {
        $('.app').removeClass('app-aside-fixed');
    }
    
    if (themeSetting.asideFolded) {
        $('.app').addClass('app-aside-folded');
    }
    else {
        $('.app').removeClass('app-aside-folded');
    }
    
    if (themeSetting.asideDock) {
        $('.app').addClass('app-aside-dock');
    }
    else {
        $('.app').removeClass('app-aside-dock');
    }
    
    if (themeSetting.container) {
        $('.app').addClass('container');
    }
    else {
        $('.app').removeClass('container');
    }

    $('.settings input[name="headerFixed"]').prop('checked', themeSetting.headerFixed);
    $('.settings input[name="asideFixed"]').prop('checked', themeSetting.asideFixed);
    $('.settings input[name="asideFolded"]').prop('checked', themeSetting.asideFolded);
    $('.settings input[name="asideDock"]').prop('checked', themeSetting.asideDock);
    $('.settings input[name="container"]').prop('checked', themeSetting.container);

    updateThemeSetting(themeSetting);
}

function updateThemeSetting(themeSetting) {
    var user_type = getUserType();
    if (user_type == 'employee') {
        user_type = 'admin';
    }
    var base_url = $('#base_url').val();
    var data = themeSetting;
    data.headerFixed = (data.headerFixed) ? 1 : 0;
    data.asideFixed = (data.asideFixed) ? 1 : 0;
    data.asideFolded = (data.asideFolded) ? 1 : 0;
    data.asideDock = (data.asideDock) ? 1 : 0;
    data.container = (data.container) ? 1 : 0;
    $.ajax({
        type: "post",
        url: base_url + user_type + '/home/update_theme_setting',
        data: data,
        dataType: "text",
        success: function (response) {
            
        }
    });
}
