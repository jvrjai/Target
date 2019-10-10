var cctr = {};

cctr.hotelsearch = {};

cctr.hotelsearch.HotelSearchDTO = function(isCacheable){
    this.isCacheable = isCacheable;
    this.alternateSearch;
    this.brandPreferencs; //list
    this.brandSort;
    this.city;
    this.alternateHotelCode;
    this.showRewardNights;
    this.pastItinerary;
    this.hotelList;
    this.showCitySearchMsg;
    this.fromLocWindow;
    this.saleFcodes;
    this.removeHotelDetail;
    this.guestRoyalAmbassador;
    this.restrictedBrands;
    this.vdnHotelCodeSearch;
    this.citySearchStateCode;
    this.radius;
    this.miles;
    this.brandId;
    this.searchCriteria; //array
    //this.searchValue; //array
    this.viewId; //array
    this.milesFrom;
    this.pcrNumber;
    this.arrivalDate;
    this.departureDate;
    this.roomPreferences; //roomprefobject
    this.hotelPreferences;//list
    this.hotelFeatures;//list
    this.location;
    this.searchType;
    this.lat;
    this.lng;
    this.destinationCode;
    this.hotelMnemonic;
    this.region;
    this.modifyResvCall;
    this.showHotels;
    this.countryName;
    this.selectedCountryCode;
    this.hasPal;
    //this.countryCodes;//list; //this.carribeanSearch; //this.searchTypeValue; //this.message; //this.hotelCodeMsg; //this.sortByDistance; //this.type; //this.arrivalDateHotelChange; //this.departureDateHotelChange; //this.searchTypeHotelsLeft; //this.oRSearchPerformed; //this.stateMatched; //this.singleDestCountry; //this.country; //list //this.amenities; //list //this.countryCode; //this.showAvailability; //this.arrDate; //this.rateType;
    this.searchCriteria = new Array(6); //array
    this.searchValue = new Array(6); //array
    this.paramName = new Array();
    this.paramValue = new Array();

    this.addParam = function(name, value){
        if (value || value == false) {
            value = value + "";
            if( this.paramName.indexOf(name)==-1){
	            this.paramName.push(name);
	            this.paramValue.push(value);
            } else {
            	this.paramValue[this.paramName.indexOf(name)]=value;
            }
        }
    }

    this.getParameters = function(){
        var otherParamName = this.paramName;
        var otherParamValue = this.paramValue;
        this.paramName = new Array();
        this.paramValue = new Array();
        this.addParam("searchReqDTO.selectedCountryCode", this.selectedCountryCode);
        this.addParam("searchReqDTO.countryName", this.countryName);
        this.searchCriteria.sort();
        for (var i = 0; i < this.searchCriteria.length; i++) {
            if (this.searchCriteria[i]) {
                searchData = this.searchCriteria[i].split(',');
                this.addParam("searchReqDTO.searchCriteria[" + i + "]", searchData[0]);
                if (searchData[0] == "4") {
                    this.addParam("searchReqDTO.searchValue[" + i + "]", removeSpaces(searchData[1].toLowerCase()));
                } else {
                    this.addParam("searchReqDTO.searchValue[" + i + "]", searchData[1].toLowerCase());
                }
            }
        }
        this.addParam("searchReqDTO.miles", this.miles);
        this.addParam("searchReqDTO.milesFrom", this.milesFrom);
        this.addParam("searchReqDTO.radius", this.radius);
        this.addParam("searchReqDTO.brandId", this.brandId);
        this.addParam("searchReqDTO.viewId", this.viewId);
        this.addParam("searchReqDTO.region", this.region);
        this.addParam("searchReqDTO.saleFcodes", this.saleFcodes);
        this.addParam("searchReqDTO.searchType", this.searchType);
        this.addParam("searchReqDTO.lat", this.lat);
        this.addParam("searchReqDTO.lng", this.lng);
        this.addParam("searchReqDTO.destinationCode", this.destinationCode);
        this.addParam("searchReqDTO.alternateSearch", this.alternateSearch);
        this.addParam("searchReqDTO.hotelMnemonic", this.hotelMnemonic);
        this.addParam("searchReqDTO.brandPreferencs", this.brandPreferencs); //list
        this.addParam("searchReqDTO.brandSort", this.brandSort);
        this.addParam("searchReqDTO.city", this.city);
        this.addParam("searchReqDTO.citySearchStateCode", this.citySearchStateCode);
        this.addParam("searchReqDTO.vdnHotelCodeSearch", this.vdnHotelCodeSearch);
        this.addParam("searchReqDTO.alternateHotelCode", this.alternateHotelCode);
        this.addParam("searchReqDTO.showRewardNights", this.showRewardNights);
        this.addParam("searchReqDTO.pastItinerary", this.pastItinerary);
        this.addParam("searchReqDTO.hotelList", this.hotelList);
        this.addParam("searchReqDTO.showCitySearchMsg", this.showCitySearchMsg);
        this.addParam("searchReqDTO.fromLocWindow", this.fromLocWindow);
        if (index == 2) {
            this.addParam("searchReqDTO.removeHotelDetail", true);
        } else {
            this.addParam("searchReqDTO.removeHotelDetail", this.removeHotelDetail);
        }
        this.addParam("searchReqDTO.restrictedBrands", this.restrictedBrands);
        this.addParam("searchReqDTO.pcrNumber", this.pcrNumber);
        this.addParam("searchReqDTO.arrivalDate", this.arrivalDate);
        this.addParam("searchReqDTO.departureDate", this.departureDate);
        this.addParam("searchReqDTO.modifyResvCall", this.modifyResvCall);
        this.addParam("searchReqDTO.showHotels", this.showHotels);
		this.addParam("searchReqDTO.singleSearchParam", this.singleSearchParam);
        for (var i = 0; i < otherParamName.length; i++) {
            this.addParam(otherParamName[i], otherParamValue[i]);
        }

        var parameters = new Array(2);
        parameters[0] = this.paramName;
        parameters[1] = this.paramValue;
        return parameters;
    }

    this.getParameterString = function(){
        var parameters = this.getParameters();
        paramName = parameters[0];
        paramValue = parameters[1];
        var paramString = "";
        for (var i = 0; i < paramName.length; i++) {
            paramString = paramString + paramName[i] + "=" + paramValue[i];
            if (!(i == (paramName.length - 1))) {
                paramString = paramString + "&";
            }
        }
        return paramString;
    }

};

cctr.hotelsearch.HotelSearchDTO.getHotelSearchDTO = function(isCacheable){
    return new cctr.hotelsearch.HotelSearchDTO(isCacheable);
}

/*
 Global member variables.
 */

var common_message_new_closed_hotel = "common_message_new_closed_hotel".l();
var closed_hotel_message = "closed_hotel_message".l();
var new_hotel_message = "new_hotel_message".l();

var AD20_part1MSG = "AD20_part1".l();
var AD20_part2MSG = "AD20_part2".l();
var mainSearchList;
var idList;
var parmList = new Array();
var valueList = new Array();
var displayName = new Array();
var brandId;
var viewId;
var lrateflag;
var province = null;
var hotelMnemonicCode = "";
var index = 0;
var resultDiv;
var clarifyListHSDTO = null;
var alternateHotelCode = "";

var radioValue;
var textValue;
var attractionValue;
var searchTypeName = "";
var searchByAttraction = '';
var searchBySubway = '';
var downArrowViewFlag;
var upArrowViewFlag;
var downArrowBrandFlag;
var upArrowBrandFlag;
var cityAutoCompleteVal;
var stateAutoCompleteVal;
var hotelCompare = false;

init_hotelsearch = function(){
    mainSearchList;
    idList;
    parmList = new Array();
    valueList = new Array();
    displayName = new Array();
    brandId;
    viewId;
    lrateflag;
    province = null;
    hotelMnemonicCode = "";
    selectedHotelCode = "";
    resultDiv;
    clarifyListHSDTO = null;
    alternateHotelCode = "";

    radioValue;
    textValue;
    attractionValue;
    searchTypeName = '';
    searchByAttraction = '';
    searchBySubway = '';
    downArrowViewFlag = true;
    upArrowViewFlag = false;
    downArrowBrandFlag = true;
    upArrowBrandFlag = false;
	cityAutoCompleteVal = '';
	stateAutoCompleteVal = '';
}

/*
 sets resultDiv and index value.
 */
setResultDivValue = function(param){
    // Now "index" is used instead of "param". 
    // It is present in argument to keep the signature correct as the calling function passes an argument which called function doesn't expect.
    resultDiv = 'resultDiv_' + index;
    enableSearchHotelDiv();
}

/**
 * Initialize idList element with proper layer ID.
 */
initialize_idList = function(layerIndex){
    idList = new Array('combo1_' + layerIndex, 'combo2_' + layerIndex, 'combo3_' + layerIndex, 'combo4_' + layerIndex);
}

/**
 *  Create AJAX request URI.
 */
getSearchURI = function(){
    // Returns the request parameters to be used in AJAX request as a query string.
    var hotelSearchDTO = cctr.hotelsearch.HotelSearchDTO.getHotelSearchDTO(true);
    var ampSign = false;
    var region = '';
    var ind = 0;
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
	var searchPageParams;
	if(ngSearchExists() && window.iris.angular.search.getSearchPageParams) {
		searchPageParams = window.iris.angular.search.getSearchPageParams();
	}

    if (brandId && brandId != '') {
        hotelSearchDTO.brandId = brandId
    } else {
        var brand = searchPageParams['brandId'];
        if (brand) {
            var val = brand;
            if (!isEmpty(val)) {
                brandId = val;
            }
        }
        hotelSearchDTO.brandId = brandId;
    }
    if (viewId && viewId != '') {
        hotelSearchDTO.viewId = viewId;
    }
    if (region != '') {
        hotelSearchDTO.region = region;
    }

    var pclubNumber = $('gi_pcr').value;
    if (pclubNumber != '') {
        hotelSearchDTO.isCacheable = false;
        hotelSearchDTO.pcrNumber = pclubNumber;
    }

    hotelSearchDTO.addParam('hotelSearchView.divVal', index);
    return hotelSearchDTO.getParameterString();
}

/**
 * Extracts search specific attributes from DTO
 *
 * @param hotelSearchDTO
 * @param val
 */
extractSearchCriteria = function(hotelSearchDTO, val) {
	for(var i=0; i < hotelSearchDTO.searchCriteria.length; i++) {
		if(hotelSearchDTO.searchCriteria[i]) {
			var tokens = hotelSearchDTO.searchCriteria[i].split(",");
			if(tokens.length > 1 && tokens[0] == val) {
				return tokens[1];
			}
		}
	}
	return "";
}

resetHotelSearch = function(){
    selectedHotelCode = "";
    hotelMnemonicCode = "";
    hotelInSession = "";
    isCheckedRate = "false";
    // Clears radio selection from hotel search grid
    if (index == 2 && typeof getMyGridhs_2 == 'function') {
    	clearRowRadio(getMyGridhs_2(), 1);
    } else if (index == 1 && typeof getMyGridhs_1 == 'function') {
    	clearRowRadio(getMyGridhs_1(), 1);
    }

    if (index != 2) {
        viewInventory = "FALSE";
        _2.f_setItemDisabled(menuItem_22, true);
        _2.f_setItemDisabled(menuItem_24, true);
        _2.f_setItemDisabled(menuItem_25, true);
        _2.f_setItemDisabled(menuItem_26, true);
        _2.f_setItemDisabled(menuItem_27, true);
        _2.f_setItemDisabled(menuItem_28, true);

        // Disable hotel arrival and hotel cancel
        _2.f_setItemDisabled(menuItem_210, true);
        _2.f_setItemDisabled(menuItem_211, true);
        if (divValue == 1) {
        	doDisableButton("availabilitybutton");
        }
        expandSearchResult();
        // Close the availability div during new search.
        // $('availabilityresult').innerHTML = "";
		if (ngRnrExists() && window.iris.angular.rnr.hideRnRDiv) {
			window.iris.angular.rnr.hideRnRDiv(true);		
		}
        captureReservationGuestInfo();
        $('reservationdiv').innerHTML = "";
    }


    if (index == 1) {
        $("availabilitybutton").value = "View Availability";
        doDisableButton("availabilitybutton");
    }
}

/*
 Change the view of Table content.
 */
changeHotelSearchView = function(){
    changeTableView(true);
}


/*
 Change the view of Table content.
 */
changeTableView = function(removeHotelDetail){	
	//Disable Hotel Compare button.
	if(hotelCompare && comparedHotelsCodesCnt < minHotelToCompare){
		doDisableButton("HotelCompare_"+index);
	}
    var list = $("viewList_" + index);
    viewId = list.value;
    var brandList = $("brandList_" + index);
    var pointCostViewID = "9";
    isPointCostView = (viewId == pointCostViewID) ? true : false;
    var employeeRateViewID = "10";
    isEmployeeRateView = (viewId == employeeRateViewID) ? true : false;
    if (list.value == "8") {
        changeTableAlternateView(false);
        return;
    } else if (($('alternateMnemonic') && $('alternateMnemonic').value != "") || ($('alternateCity') && $('alternateCity').value != "")) {
        changeTableAlternateView(true);
        return;
    } else {
    	setAlternateViewOption(true);
    }

    //-------------------------------------------------------
    var upperLimit = 3;
    var lowerLimit = 1;
    var valueSelected = list.value;
    valueSelected = parseInt(valueSelected);

    for (var i = 0; i < list.options.length; i++) {
        if (!list.options[i].disabled) {
            upperLimit = list.options[i].value;
        }
    }
    upperLimit = parseInt(upperLimit);

    if (valueSelected == lowerLimit) {
        upArrowViewFlag = false;
        downArrowViewFlag = true;
    } else if (valueSelected == upperLimit) {
        upArrowViewFlag = true;
        downArrowViewFlag = false;
    } else {
        upArrowViewFlag = true;
        downArrowViewFlag = true;
    }
    //-------------------------------------------------------


    var hotelSearchDTO = setParamInRequest();

    hotelSearchDTO.viewId = list.value;
    hotelSearchDTO.brandId = brandList.value;

    if (removeHotelDetail) {
        hotelSearchDTO.isCacheable = false;
        hotelSearchDTO.removeHotelDetail = true;
    }
    if (vdnEntered == true) {
        hotelSearchDTO.isCacheable = false;
        hotelSearchDTO.vdnHotelCodeSearch = true;

    }

    setPreferences(hotelSearchDTO);

    var param = hotelSearchDTO.getParameters();

    var tableDataDivName = "tableData_" + divValue;
    list.disabled = true;
    disableMapViewList(true); // Disable Map tab view drop-down.

    doDisableButton("availabilitybutton");

    //  param[0].push('hotelSearchView.viewChange');
    //  param[1].push('true');
    //HERE TOO SET THE hotel compare.
    if(hotelCompare){
    	param[0].push('searchReqDTO.hotelSearchFromCompare');
    	param[1].push(true);
    }
    // addSingleSearchParameters(hotelSearchDTO);
	
	if(ngSearchExists() && window.iris.angular.search.addSingleSearchParameters){ 
		window.iris.angular.search.addSingleSearchParameters(hotelSearchDTO); 
	}
    invokeAJAX(getHotelSearchMethod(hotelSearchDTO), '', '', enableViewList, param[0], param[1], '', true, '', 'post');
	// invokeAJAX(getHotelSearchMethod(hotelSearchDTO), '', '', enableViewList, param[0], param[1], '', true, '', 'get');
    showLoading(tableDataDivName);

}

enableViewList = function(response){
    replaceDivContent("hotelResultTableContainer_" + divValue, response);
    var combo = $("viewList_" + index);
    combo.disabled = false;
    disableMapViewList(false); // Enable Map tab view drop-down.
}

/*
 Change the view of Table content.
 */
changeTableAlternateView = function(changeView){
    alternateHotelCode = hotelMnemonicCode;
    var modifyResvCallMR = ngRnrExists()?window.iris.angular.rnr.isModifyReservation():"false";
    /*if (($('isFromPClubOrderForm') && $('isFromPClubOrderForm').value == "true") || pastItineraries == "true") {
    	expandSearchResult();
        showPastItineraryAlternate();
    }*/
	if ((window.iris.angular.rnr.getIsFromPClubOrderForm && window.iris.angular.rnr.getIsFromPClubOrderForm()) || pastItineraries == "true") {
    	expandSearchResult();
        showPastItineraryAlternate();
    } else if (('' == modifyResvCallMR || null == modifyResvCallMR) ||
    ('' != modifyResvCallMR && null != modifyResvCallMR && 'true' != modifyResvCallMR)) {
        return showAlternateHotelsList('false', changeView);
    } else {
        //isAvailabilityInProgress --> if true, it means, that there is data in availability grid,
        //the hotel is sold out if isAvailabilityInProgress() is false.
		//stripWhitespace($('adMessagesDiv').innerHTML) == '' replaced
        if (flagForRoomsRatesDisplay && !isAvailabilityInProgress() && !window.iris.angular.rnr.isRnRMessageExists('adMessagesDiv')) {
            flagForRoomsRatesDisplay = false;
            //countClicked = true;
            //DO nothing
        } else {
            flagForRoomsRatesDisplay = false;
            refreshCalendarFrmSession();
            isModifyALternateHotel = 'true';
            ExpandDiv('searchresultmaindiv');
            ExpandDiv('SResult');
            ExpandDiv('tableData_1');
            expandSearchResult();
            var div = $("searchresultpage");
            if (div) {
                x = div.tabber;
                x.defaultTabIndex = 0;
                x.tabShow(0);
                if (typeof x.onLoad == 'function') {
                    x.onLoad({
                        tabber: x
                    });
                }
            }
            resetHotelSearch();
            getMyGridhs_1 = null;
            showLoading("resultDiv_1");
            return showAlternateHotelsList('true', false);//true means, call is from modify, so load all hotel grid.
        }
    }

}
/*
 This function searches alternate hotel list.
 @param isFromModify this flag basically loads the complete hotel grid,
 only the div name changes and the return type of bean name changes to load all grids.
 In normal scenario the div id is determined run time.
 In case of modify, the div id is fixed, because complete hotel grid needs to be loaded.
 */
showAlternateHotelsList = function(isFromModify, changeView){

    // Disable Inventory Menu Item.
    _2.f_setItemDisabled(menuItem_24, true);
    _2.f_setItemDisabled(menuItem_26, true);
    _2.f_setItemDisabled(menuItem_27, true);
    _2.f_setItemDisabled(menuItem_28, true);
    _2.f_setItemDisabled(menuItem_25, true);

    if ($("hotelSearchMsgs"))
        $("hotelSearchMsgs").innerHTML = "";

    var allHotelSoldOut = "";
    var citySearch = "";
    var brandGroupCode = "";
    if ($('allHotelSoldOut') && $('allHotelSoldOut').value == 'true') {
        allHotelSoldOut = $('allHotelSoldOut').value;
    }

    ExpandDiv('tableData_1');
    showLoading("tableData_1");
    paramName = null;
    paramValue = null;
    paramName = new Array();
    paramValue = new Array();
    disableAllHTabs();
    var tableDataDivName = "tableData_" + divValue;

    if ($("viewList_" + index)) {
        var list = $("viewList_" + index);
        if (!changeView) {
            $("viewList_" + index).value = 8;
            viewId = 8;
        }

        setAlternateViewOption(false);
        
        var hsGrid = eval('getMyGridhs_' + divValue + '()');
        var selectedRowId = hsGrid.getSelectedId();
        var latitude = getCellData(hsGrid, selectedRowId, "Lat");
        var longitude = getCellData(hsGrid, selectedRowId, "Lng");
        brandGroupCode = getCellData(hsGrid, selectedRowId, "Brand Group Code");

        var isLMSHotelRequested = getCellData(hsGrid, selectedRowId, "LMS Property Flag");
        if (isLMSHotelRequested == 'true') {
            viewInventoryAlternates = 'FALSE';
        }

        var list = $("brandList_" + index);
        brandId = list.value;

        paramName.push('searchReqDTO.brandId');
        paramValue.push(brandId);

        paramName.push("searchReqDTO.lat");
        paramValue.push(latitude);

        paramName.push("searchReqDTO.lng");
        paramValue.push(longitude);

        paramName.push('searchReqDTO.viewId');
        paramValue.push($("viewList_" + index).value);
    }//close if loop
    if (isPal) {
        var alternateParam;
        if ("MA" != brandGroupCode && isFromModify == 'false') {
            paramName.push('searchReqDTO.alternateSearch');
            paramValue.push(true);
        }
        if (isFromModify == 'true' && $('hotelcode_1') && !isEmpty($('hotelcode_1').value)) {
            if ($('hotelBrandGroupCode'))
                brandGroupCode = $('hotelBrandGroupCode').value;
            if ("MA" != brandGroupCode) {
                paramName.push('searchReqDTO.alternateSearch');
                paramValue.push(true);
                paramName.push("searchReqDTO.searchCriteria[0]");
                paramValue.push('8');
                paramName.push("searchReqDTO.searchValue[0]");
                paramValue.push($('hotelcode_1').value);
            } else {
                paramName.push("searchReqDTO.searchCriteria[0]");
                paramValue.push('8');
                paramName.push("searchReqDTO.searchValue[0]");
                paramValue.push($('hotelcode_1').value);
            }
        } else if (selectedHotelCode != '') {
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('8');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(selectedHotelCode);
        } else if ($('hotelForAlternates') && $('hotelForAlternates').value != '') {
            alternateParam = $('hotelForAlternates').value;
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('8');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(alternateParam);
        } else if ($('alternateCity') && $('alternateCity').value != '') {
            alternateParam = $('alternateCity').value;
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('1');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(alternateParam);
        }
        paramName.push('searchReqDTO.palSearch');
        paramValue.push(true);
        paramName.push('searchReqDTO.palAlternateSearch');
        paramValue.push(true);
    } else {
        paramName.push('searchReqDTO.alternateSearch');
        paramValue.push(true);
    }

    paramName.push('hotelSearchView.viewChange');
    paramValue.push('true');
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
    var rd = searchDataFromAngular['radiusMeasureOption'];
    if (rd === 'km') {
        paramName.push('searchReqDTO.miles');
        paramValue.push('false');
    } else {
        paramName.push('searchReqDTO.miles');
        paramValue.push('true');
    }

    paramName.push('hotelSearchView.divVal');
    paramValue.push(index);

    if ("true" == citySearch) {
        paramName.push('searchReqDTO.showCitySearchMsg');
        paramValue.push(allHotelSoldOut);
    }
    var textValue = "";

	var rateCategory;
	if(ngRnrExists() && window.iris.angular.rnr.getSelectedRateValue()){
		rateCategory = window.iris.angular.rnr.getSelectedRateValue();
	}
    if (rateCategory) {
        // var combo = $("rateTypesList");
        // textValue = combo.options[combo.selectedIndex].value;		
        var isSelectedRateTypeAvailable = false;
		if(ngRnrExists() && window.iris.angular.rnr.isSelectedRateTypeAvailable) {
			isSelectedRateTypeAvailable = window.iris.angular.rnr.isSelectedRateTypeAvailable();
		}
        if (rateCategory == "IVANI" && isSelectedRateTypeAvailable) {
            paramName.push('showRewardNights');
            paramValue.push("true");
        } else {
            paramName.push('searchReqDTO.showRewardNights');
            paramValue.push("false");
        }
    }
    if ($('alternateMnemonic')) {
        var alternateMnemonic = $('alternateMnemonic').value;
        paramName.push("searchReqDTO.alternateHotelCode");
        paramValue.push(alternateMnemonic);
    }

    if (isFromModify == 'true') {
        paramName.push('searchReqDTO.viewId');
        paramValue.push('8');

        paramName.push("searchReqDTO.modifyResvCall");
        paramValue.push(true);
        invokeAJAX('hotelsearch.searchHotelFromModify', '', 'resultDiv_1', '', paramName, paramValue, '', true, '', 'post');
    } else {
        invokeAJAX('hotelsearch.searchHotelWithDates', '', tableDataDivName, '', paramName, paramValue, '', true, '', 'post');
    }
    expandSearchResult();

    var params = getSearchURI();
    selectHotelSearchResultTab();
	if (window.iris.angular.rnr.isRNRExpanded()) {
		window.iris.angular.rnr.expandRNRGrid(false);
    }
    $("availabilitybutton").value = "View Availability";
    doDisableButton("availabilitybutton");
    params = params + "&viewChange=true";
    return params;

}

// Created new function for  user stories US67988
alternateHotelForLeftHotels = function(leftHotelDetails){
    // Disable Inventory Menu Item.
    _2.f_setItemDisabled(menuItem_24, true);
    _2.f_setItemDisabled(menuItem_26, true);
    _2.f_setItemDisabled(menuItem_27, true);
    _2.f_setItemDisabled(menuItem_28, true);
    _2.f_setItemDisabled(menuItem_25, true);

    if ($("hotelSearchMsgs")){
        $("hotelSearchMsgs").innerHTML = "";
    }
    
    var allHotelSoldOut = "";
    var citySearch = "";
    var brandGroupCode = "";
    paramName = new Array();
    paramValue = new Array();
    
    ExpandDiv('tableData_1');
    showLoading("tableData_1");
    disableAllHTabs();
    
    if ($('allHotelSoldOut') && $('allHotelSoldOut').value == 'true') {
        allHotelSoldOut = $('allHotelSoldOut').value;
    }
  
    var tableDataDivName = "tableData_" + divValue;

    if ($("viewList_" + index)) {
        var list = $("viewList_" + index);
        $("viewList_" + index).value = 8;
        viewId = 8;
        setAlternateViewOption(false);
    }    
        paramName.push('searchReqDTO.brandId');
        paramValue.push(leftHotelDetails.brandFamily);
        //TODO//changes here for lat lang
        paramName.push("searchReqDTO.lat");
        paramValue.push(leftHotelDetails.lat);
        //TODO changes here to pick lat lang
        paramName.push("searchReqDTO.lng");
        paramValue.push(leftHotelDetails.lng);
        paramName.push('searchReqDTO.viewId');
        paramValue.push('8');
    
    if (isPal) {
        var alternateParam;
        if ("MA" != brandGroupCode && isFromModify == 'false') {
            paramName.push('searchReqDTO.alternateSearch');
            paramValue.push(true);
        }
        if (isFromModify == 'true' && $('hotelcode_1') && !isEmpty($('hotelcode_1').value)) {
            if ($('hotelBrandGroupCode'))
                brandGroupCode = $('hotelBrandGroupCode').value;
            if ("MA" != brandGroupCode) {
                paramName.push('searchReqDTO.alternateSearch');
                paramValue.push(true);
                paramName.push("searchReqDTO.searchCriteria[0]");
                paramValue.push('8');
                paramName.push("searchReqDTO.searchValue[0]");
                paramValue.push($('hotelcode_1').value);
            } else {
                paramName.push("searchReqDTO.searchCriteria[0]");
                paramValue.push('8');
                paramName.push("searchReqDTO.searchValue[0]");
                paramValue.push($('hotelcode_1').value);
            }
        } else if (selectedHotelCode != '') {
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('8');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(selectedHotelCode);
        } else if ($('hotelForAlternates') && $('hotelForAlternates').value != '') {
            alternateParam = $('hotelForAlternates').value;
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('8');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(alternateParam);
        } else if ($('alternateCity') && $('alternateCity').value != '') {
            alternateParam = $('alternateCity').value;
            paramName.push("searchReqDTO.searchCriteria[0]");
            paramValue.push('1');
            paramName.push("searchReqDTO.searchValue[0]");
            paramValue.push(alternateParam);
        }
        paramName.push('searchReqDTO.palSearch');
        paramValue.push(true);
        paramName.push('searchReqDTO.palAlternateSearch');
        paramValue.push(true);
    } else {
        paramName.push('searchReqDTO.alternateSearch');
        paramValue.push(true);
    }

    paramName.push('hotelSearchView.viewChange');
    paramValue.push(true);
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
    var rd = searchDataFromAngular['radiusMeasureOption'];
    if (rd === 'km') {
        paramName.push('searchReqDTO.miles');
        paramValue.push('false');
    } else {
        paramName.push('searchReqDTO.miles');
        paramValue.push('true');
    }

    paramName.push('hotelSearchView.divVal');
    paramValue.push(index);
    
    if ("true" == citySearch) {
        paramName.push('searchReqDTO.showCitySearchMsg');
        paramValue.push(allHotelSoldOut);
    }

    paramName.push("searchReqDTO.alternateHotelCode");
    paramValue.push(leftHotelDetails.hotelCode);
    
    invokeAJAX('hotelsearch.searchHotelWithDates', '', tableDataDivName, '', paramName, paramValue, '', true, '', 'post');
    expandSearchResult();

    var params = getSearchURI();
    selectHotelSearchResultTab();
	if (window.iris.angular.rnr.isRNRExpanded()) {
		window.iris.angular.rnr.expandRNRGrid(false);
    }
    $("availabilitybutton").value = "View Availability";
    doDisableButton("availabilitybutton");
    params = params + "&viewChange=true";
    return params;
}

alternateResponseMessage = function() {
    if ($("viewList_" + index) && $("viewList_" + index).value == "8") {
        if (isPal && $("hotelSearchMsgs")) {
            $("hotelSearchMsgs").innerHTML = $("hsAgentMsg").value;
            return;
        }

        var msg = "";
        var alternateCity = $("alternateCity").value;
        var alternateDirection = $("alternateDirection").value;
        var alternateDistance = $("alternateDistance").value;
        var alternateHotelName = $("alternateHotelName").value;
        var alternateBrandName = $("alternateBrandName").value;
        var alternateMnemonic = $("alternateMnemonic").value;
        
        var hotelCodeVariable = "";
        var hotelStatusCodeVariable = "";
        var isHotelStatusNewOrClose=false;
        if(divValue == 9 && doesResSummaryExist() && $("alternateList") && $("alternateList").value != "0"){
        	setDivValue('1');
        }
        var hsGrid = eval('getMyGridhs_' + divValue + '()');
        if (hsGrid) {
    		hotelCodeVariable = getCellData(hsGrid, 0, "Code");
    		hotelStatusCodeVariable = getCellData(hsGrid, 0, "Hotel Status Code");
    		if(!isEmpty(hotelStatusCodeVariable) && hotelStatus[hotelStatusCodeVariable]){
    			isHotelStatusNewOrClose=true;
    		}
        }
        
        if ($('addStayValue') && $('addStayValue').value == "true") {
            //This is for Retain Reservation
            var originHotelCode = $("hotelForAlternates").value;
            var alternateHotelsGrid = getMyGridhs_1();
			var isAvailable = getCellData(alternateHotelsGrid, 0, "available");
			if ($("alternateList").value == "0" && !convertStringToBoolean(isAvailable) && $("hotelSearchMsgs")) {
                msg = msg + "AD16_part1".l();
                msg = msg + " " + originHotelCode + " ";
                msg = msg + "AD16_part2".l();
                $("hotelSearchMsgs").innerHTML = msg;
            } else if(!convertStringToBoolean(isAvailable) && $("hotelSearchMsgs")) {
				msg = msg + "AD15_part1".l();
                msg = msg + " " + originHotelCode + " ";
                msg = msg + "AD15_part2".l();
                $("hotelSearchMsgs").innerHTML = msg;
            }
        } else {
            if ($('increaseRadiusSearch') && $('increaseRadiusSearch').value == "true" && $("hotelSearchMsgs")) {
                message = "AD100_part1".l() + "AD100_part2".l();
                message = message + alternateCity;
                message = message + "AD100_part3".l()
                $("hotelSearchMsgs").innerHTML = message;
                // collapseTabberDiv('#searchTab');
				if(window.iris && window.iris.angular.search.toggleHoteSearch){
					window.iris.angular.search.toggleHoteSearch(true);
				}
                $('text5_1').focus();

            } else if (ngRnrExists() && window.iris.angular.rnr.getRoomsCount) {
				var roomsCount = window.iris.angular.rnr.getRoomsCount();
				var isAvailWaitList = false;
				if(window.iris.angular.rnr.getIsAvailWaitList) {
					isAvailWaitList = window.iris.angular.rnr.getIsAvailWaitList();
				}
                if (roomsCount == 0 || roomsCount == "") {
                    if (isAvailWaitList) {
                        
                    	message = "AD27_part1".l();
                        message = message + " " + alternateHotelName;
                        message = message + "AD27_part2".l();
                        $("hotelSearchMsgs").innerHTML = message;
                        
                    } else if ($('showCitySearchMsg') && $('showCitySearchMsg').value == "true") {
                        
                    	message = "AD26_part1".l() + alternateCity + " ";
                        message = message + "AD26_part2".l() + alternateDistance + "/" + alternateDirection + " ";
                        message = message + "AD26_part3".l();
                        $("hotelSearchMsgs").innerHTML = message;
                        
                    } else if(!isEmpty(alternateMnemonic) && !isEmpty(hotelCodeVariable) && alternateMnemonic==hotelCodeVariable && isHotelStatusNewOrClose && "TERMINATED"==hotelStatusCodeVariable){
                    	
                    	message = common_message_new_closed_hotel + alternateBrandName + " " + alternateHotelName + " ";
                        message = message + closed_hotel_message + alternateDistance + "/" + alternateDirection + " ";
                        message = message + "AD25_part3".l();
                        $("hotelSearchMsgs").innerHTML = message;
                    	
                    } else if(!isEmpty(alternateMnemonic) && !isEmpty(hotelCodeVariable) && alternateMnemonic==hotelCodeVariable && isHotelStatusNewOrClose && "RECEIVED"==hotelStatusCodeVariable){
                    	
                    	message = common_message_new_closed_hotel + alternateBrandName + " " + alternateHotelName + " ";
                        message = message + new_hotel_message + alternateDistance + "/" + alternateDirection + " ";
                        message = message + "AD25_part3".l();
                        $("hotelSearchMsgs").innerHTML = message;
                    }	else if ($('alternateSoldOut') && $('alternateSoldOut').value == "true") {
                        
                    	message = "alternateSoldOut_part1".l();
                        message = message + " " + alternateHotelName + " ";
                        message = message + "alternateSoldOut_part2".l();
                        $("hotelSearchMsgs").innerHTML = message;
                        
                    } else{	
                    	
                        message = "AD25_part1".l() + alternateBrandName + " " + alternateHotelName + " ";
                        message = message + "AD25_part2".l() + alternateDistance + "/" + alternateDirection + " ";
                        message = message + "AD25_part3".l();
                        $("hotelSearchMsgs").innerHTML = message;
                    }
                } else {
                    if ($('alternateRateCode') && $('alternateRateCode').value != "") {
                        $('alternateRateDiv').innerHTML = "<table><tr><td class='SectionHdr' width='20%'>Rate: </td><td class='SectionHdr'>" + $('alternateRateCode').value + "</td></tr></table>";
                    }
                }
            } else if ($('showCitySearchMsg') && $('showCitySearchMsg').value == "true") {
            	
                message = "AD26_part1".l() + alternateCity + " ";
                message = message + "AD26_part2".l() + alternateDistance + " / " + alternateDirection + " ";
                message = message + "AD26_part3".l();
                $("hotelSearchMsgs").innerHTML = message;
            }
        }
    }
}

/*
 Sort the div content.
 */
changeSortOrder = function(divId){
    paramName = null;
    paramValue = null;

    var list = $("brandList_" + index);
    brandId = list.value;
    var viewlist = $("viewList_" + index);

    if (viewlist.value == "8" || ($('alternateMnemonic') && $('alternateMnemonic').value != "") || ($('alternateCity') && $('alternateCity').value != "")) {
        changeTableAlternateView(true);
        return;
    }

    //-------------------------------------------------------
    if (brandId == '') {
        upArrowBrandFlag = false;
        downArrowBrandFlag = true;
    } else if (brandId == 'IN') {
        upArrowBrandFlag = true;
        downArrowBrandFlag = false;
    } else {
        upArrowBrandFlag = true;
        downArrowBrandFlag = true;
    }
    //-------------------------------------------------------

    var hotelSearchDTO = setParamInRequest();

    if (brandId != "") {
        hotelSearchDTO.brandSort = true;
    }

    hotelSearchDTO.viewId = viewlist.value;
    hotelSearchDTO.brandId = brandId;


    if (vdnEntered == true) {
        hotelSearchDTO.isCacheable = false;
        hotelSearchDTO.vdnHotelCodeSearch = true;
    }

    setPreferences(hotelSearchDTO);

    var param = hotelSearchDTO.getParameters();

    var tableDataDivName = "tableData_" + divValue;
    list.disabled = true;

    doDisableButton("availabilitybutton");

    invokeAJAX(getHotelSearchMethod(hotelSearchDTO), '', '', enableBrandList, param[0], param[1], '', true, '', 'post');
    showLoading(tableDataDivName);
    disableAllHTabs();
}

enableBrandList = function(response){
    replaceDivContent("tableData_" + divValue, response);
    var combo = $("brandList_" + index);
    combo.disabled = false;
}

/*
 Show the hotel search result tab
 */
showHotelsTab = function(){
	resultDiv = 'resultDiv_' + index;
    hotelMnemonicCode = "";
    var div = $("searchresultpage");
    if (div) {
        x = div.tabber;
        x.defaultTabIndex = 0;
        x.tabShow(0);
        if (typeof x.onLoad == 'function') {
            x.onLoad({
                tabber: x
            });
        }
    }
    showLoading(resultDiv);
    changeInventoryButtonStatus();
}

/*Open new popup window.*/
popupwindow = function(url){
    var irisWinName = window.name;
    var url = url + "&IRIS=" + irisWinName;
    
    newwindow = window.open(url, 'name', 'height=250,width=350,top=200,left=300');
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}

/*
 Sets focus to Brand combo.
 */
focusBrand = function(){
    var brandCombo = $("brandList_" + index);
    brandCombo.focus();

}

/*
 Sets focus to HotelPref tab.
 */
focusHotelPref = function(){
  /*  var div = $("searchTab");
    x = div.tabber;
    x.tabs[2].div.rendered = false;
    x.tabShow("2");

    x.defaultTabIndex = "2";
    if (typeof x.onClick == 'function') {
        x.onClick({
            'tabber': x,
            'index': x.defaultTabIndex
        });
    } */
	if(ngSearchExists() && window.iris.angular.search.selectSearchTab){
		window.iris.angular.search.toggleHoteSearch(false);
		window.iris.angular.search.selectSearchTab(2);
	}

}


/*
 Reset all search field criteria.
 */
function clearAllHotelSearch() {
    //resetHotelSearchButton();;
    // setRadioButton(index);
	if(ngSearchExists() && window.iris.angular.search.clearHotelSearchErrors){
		window.iris.angular.search.clearHotelSearchErrors();
		window.iris.angular.search.setRadiusMeasureOption();
	}
    refreshHotelSearch();
}

/*
 Method selectValue.
 */
selectValue = function(id){
    var textBox = $(id);
    //TD:13343
    // if(textBox){
    //    textBox.select();
    //  }
}

/*
 Check for postal code, it should be alphanumeric only
 */
checkPostalCode = function(comb, txt){
    var cmbValue = $(comb).value;
    var txtValue = $(txt).value;
    if (cmbValue == 4) {
        if (txtValue != "" && !txtValue.match(expression)) {
            alert('hotelsearch_postalcode'.l());
            $(txt).value = '';
        }
    }

}

/**
 * Enable/Disable Hotel Search button.
 */
function resetHotelSearchButton() {
	// var countryCode = ($('selectedCountry_' + index).value).split("_")[0];
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
	var countrySelectValue = searchDataFromAngular['country'].selectValue ? searchDataFromAngular['country'].selectValue : window.iris.angular.search.getDefaultSelectedCountry();
	countryCode = (countrySelectValue).split("_")[0];
	var isAnySearchFieldNotEmpty;
	if(ngSearchExists() && window.iris.angular.search.isAnySearchFieldNotEmpty) {
		isAnySearchFieldNotEmpty = window.iris.angular.search.isAnySearchFieldNotEmpty();
	}	
	if ((countryCode == '' || countryCode == 'USA' || countryCode == 'CAN') && !isAnySearchFieldNotEmpty) {
		// $('searchbutton_' + index).disabled = true;
		if(ngSearchExists() && window.iris.angular.search.enableDisableSearchBtn) {
			window.iris.angular.search.enableDisableSearchBtn(true);
		}		
	} else {
		// $('searchbutton_' + index).disabled = false;
		if(ngSearchExists() && window.iris.angular.search.enableDisableSearchBtn) {
			window.iris.angular.search.enableDisableSearchBtn(false);
		}
	}
}

/**
 * Boolean - whether to enable/disable search button - migrated to angular
 */
isAnySearchFieldNotEmpty = function(){
	if(trim($("destinationText_1").value) != '' || trim($("hotelspecificText_1").value) != ''){
    	return true;
	}
    return false;
}

/*
 * Show tool tips of text box.
 */
showTextToolTips = function(elementId){
    var textField = $(elementId);
    if (null != textField && '' != textField) {
        var val = textField.value;
        var tt = $('tooltipRuler');
        var len = val.length;
        if (len > 100) {
            var modifiedToolTip = val.substring(0, 95) + "...";
            tt.innerHTML = modifiedToolTip;
        } else {
            tt.innerHTML = textField.value;
        }

        textField.title = "";
        if (trim(val) != "") {
            if (tt.offsetWidth > textField.offsetWidth) {
                textField.title = textField.value;
            }
        }
    }

}

/*
 Show tool tips of combo box
 */
showComboToolTips = function(elementId){
    var combo = $(elementId);
    try {
        $(elementId).title = combo.options[combo.selectedIndex].text;
    } catch (e) {
    }
}

/*
 Set some attribute for enabling and disabling view list combo
 */
setLowestRateFlag = function(){
    var cityflag = "true";
    var arrivalDate = $('arrday').value;
    for (var i = 0; i < 4; i++) {
        var val = $('text' + (i + 1) + '_' + index);
        var comb = $('combo' + (i + 1) + '_' + index);
        if (comb && val && val.value && !isWhitespace(val.value)) {
            if ((comb.value == '5' || comb.value == '6' || comb.value == '7') && arrivalDate == '') {
                cityflag = "false";
            }
        }
    }

    if (cityflag == "true" && arrivalDate != '')
        lrateflag = '1';
    else if (arrivalDate != '')
        lrateflag = '2';
    else
        lrateflag = '0';
}

getAirportViewFlag = function(){
    if (typeof getMyGridhs_1 == 'function') {
        var hsGridObj = getMyGridhs_1();
        var userCountry = getCellData(hsGridObj, 0, "Country Code");
        if (userCountry == 'USA/CAN') {
            return true;
        } else if (userCountry == 'AUS/NZL') {
            return false;
        } 
    }
    return false;
}

/*
 It will enable or disable the options of View List combo
 */
function enableLowestRate(){
    var criteriaList = new Array();
    var combo = $("viewList_" + index);
    var brandCombo = $("brandList_" + index);
    var opt = new Option("Select One", "");
    var brandList = new Array();
    var rflag = 0;
    var aflag = 0;
    var j = 0;
    var arrivalDate = $('arrday').value;

    if (combo) {
        var enableAirportView = getAirportViewFlag();
        for (var i = 0; i < combo.length; i++) {
            if ((combo.options[i].value == '2') && (enableAirportView == false)) {
                combo.options[i].disabled = true;
            } else if ((combo.options[i].value == '7') && arrivalDate != '') {
                combo.options[i].disabled = false;
                rflag = i;
            } else if ((combo.options[i].value == '8') && (lrateflag == '2' || lrateflag == '1')) {
                combo.options[i].disabled = false;
                aflag = i;
            }
        }

        if ($('enableAlternate') == "true") {
            combo.options[7].disabled = true
        } else {
            combo.options[7].disabled = false
        }

        if (rflag == 0)
            combo.options[6].disabled = true;
        if (aflag == 0)
            combo.options[7].disabled = true;

        /*var combo1 = $('combo1_' + index);
        if(combo1){
        	var k = 0;
        	if (trim($('text1_' + index).value) != '') {
                criteriaList[k++] = combo1.options[combo1.selectedIndex];
            }
            if (trim($('text2_' + index).value) != '') {
            	var combo2 = $('combo2_' + index);
                criteriaList[k++] = combo2.options[combo1.selectedIndex];
            }
            if (trim($('text3_' + index).value) != '') {
            	var combo3 = $('combo3_' + index);
                criteriaList[k++] = combo3.options[combo1.selectedIndex];
            }
            if (trim($('text4_' + index).value) != '') {
            	var combo4 = $('combo4_' + index);
                criteriaList[k++] = combo4.options[combo1.selectedIndex];
            }	
        }*/

        combo.options[3].disabled = true;
		if("interstate"!=(window.iris.angular.search.getSearchData())['searchOption']){
			combo.options[4].disabled=true;
		}
		combo.options[5].disabled = true;

        /*for (var c = 0; c < criteriaList.length; c++) {
            if (criteriaList[c].value == '5') {
                combo.options[4].disabled = false;
            }
            if (criteriaList[c].value == '6') {
                combo.options[5].disabled = false;
            }
            if (criteriaList[c].value == '7') {
                combo.options[3].disabled = false;
            }
        }*/

        /* BrandList populated with Select One value */
        brandList[j++] = opt;
        for (var i = 0; i < brandCombo.length; i++)
            brandList[j++] = brandCombo.options[i];
        for (var i = 0; i < brandList.length; i++)
            brandCombo.options[i] = new Option(brandList[i].text, brandList[i].value);
        if ($('sSortBrandId_' + index) && $('sSortBrandId_' + index).value.length > 0) {
            brandCombo.value = $('sSortBrandId_' + index).value;
        }


        /* TD : 58313
         hs_1: When search result is more than 1, disable alterate from drop down: CD
         */
        if (typeof getMyGridhs_1 == 'function') {
            var hsGridObj = getMyGridhs_1();
            var rowsLen = hsGridObj.rowsCol.length;
            var isAvail = getCellData(hsGridObj, 0, "available");
            if (rowsLen == 1) {
                for (var j = 0; j < combo.length; j++) {
                    if (combo.options[j].value == '8' && isAvail == "true") {
                        combo.options[j].disabled = true;
                    }
                }
            }
            if (rowsLen > 1) {
                for (var j = 0; j < combo.length; j++) {
                    if (combo.options[j].value == '8') {
                        combo.options[j].disabled = true;
                    }
                }
            }
        }
        /* hs_2: opened from Hotel Layer, Alternates cannot be enabled from layer: CD
         Disable it in all situations.
         */
        if (typeof getMyGridhs_2 == 'function') {
            var hsGridObj = getMyGridhs_2();
            if (null != hsGridObj && '' != hsGridObj)
                for (var j = 0; j < combo.length; j++) {
                    if (combo.options[j].value == '8') {
                        combo.options[j].disabled = true;
                    }
                }
        }
        enableSearchResultView();
    }
}

//Point Cost and Employee Rate views will be enabled only on date selection.
function enableSearchResultView() {
	var searchResultsViewList = $("viewList_" + index);
	if(searchResultsViewList){
		var LOWEST_RATE = 6, POINT_COST = 8, EMPLOYEE_RATE = 9;
		if("true" == isDateEntered() || isModify == "true"){
			searchResultsViewList.options[LOWEST_RATE].disabled = false;
			searchResultsViewList.options[POINT_COST].disabled = false;
			searchResultsViewList.options[EMPLOYEE_RATE].disabled = false;
	    } else {
	    	searchResultsViewList.options[LOWEST_RATE].disabled = true;
	    	searchResultsViewList.options[POINT_COST].disabled = true;
	    	searchResultsViewList.options[EMPLOYEE_RATE].disabled = true;
	    }
	}
    // Only in case of base layer copy hotels tab view drop-down options into map tab view drop-down.
    if(index == "1"){
    	copyHotelsViewSelectOptionsInMap();
    }
}

/* Highted the text of text box on onfocus event*/
selectText = function(id){
    $(id).select();
}

/*  Location */

/* Member Variable */


/*
 Open Location layer.
 */
createLocationLayer = function(){
    // Returns the request parameters to be used in AJAX request as a query string.
    var param = "";
	// var searchType = getSelectedRadiobyName("singleSearchType");
	var searchType;
	var searchData;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchData = window.iris.angular.search.getSearchData();
	}
	searchType = searchData['searchOption'];
    // var conCombo = $(searchType + "Country_" + index);
	var conCombo = searchData['country'];
    // var countryIsoCode = ($("selectedCountry_" + index).value).split("_");
	var countrySelectValue = searchData['country'].selectValue ? searchData['country'].selectValue : window.iris.angular.search.getDefaultSelectedCountry();
	var countryIsoCode = countrySelectValue.split("_");
    //var countryIsoCode = (conCombo.options[conCombo.selectedIndex].value).split("_");
    var conVal = countryIsoCode[0];

    var ampSign = false;
    parmList = new Array();
    valueList = new Array();
    displayName = new Array();
    paramName = null;
    paramValue = null;

    var paramName = new Array();
    var paramValue = new Array();

    var paramSearch = new Array();


    var ind = 0;
    if (conCombo && conCombo.label && conCombo.label != "-1") {
        param = "searchReqDTO.selectedCountryCode=" + conVal;
        parmList[ind] = 'searchReqDTO.selectedCountryCode';

        paramName.push('searchReqDTO.selectedCountryCode');
        paramValue.push(conVal);

        // displayName[ind] = $("selectedCountry_" + index).text; Search TODO
		displayName[ind] = conCombo.label;
        valueList[ind++] = conVal;
        ampSign = true
    }

	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}

    param = param + "&divVal=" + index;

    if ($('sLat_' + index)) {
        if ($('sLat_' + index) != null && $('sLat_' + index).value.length > 0) {

            paramName.push('searchReqDTO.searchType');
            paramValue.push('9');

            paramName.push('searchReqDTO.lat');
            paramValue.push($('sLat_' + index).value);

            paramName.push('searchReqDTO.lng');
            paramValue.push($('sLng_' + index).value);

            param = param + "&searchReqDTO.searchType=9&searchReqDTO.lat=" + $('sLat_' + index).value + "&searchReqDTO.lng=" + $('sLng_' + index).value;
        }
    }

    paramSearch[0] = paramName;
    paramSearch[1] = paramValue;

    openLayer('hotelsearch.location', 'locationLayer', 'location_div', '', '340', 'Filter Search by Location', paramName, paramValue, false, '', '', '', 'post');

}


/*
 Sets value to member variable.
 */
filterSearchResultByLocation = function(){
    var radioObj = document.getElementsByName('location:locRadio');
    var combo = $('location:combo1');
    textValue = $('location:attraction_text').value;
    attractionValue = combo.options[combo.selectedIndex].value;
    var len = radioObj.length;
    var radioName = '';
    while (len) {
        var i = len - 1;
        if (radioObj[i].checked) {
            radioValue = radioObj[i].value;
            radioName = document.getElementsByTagName('LABEL')[i].textContent;
            break;
        }
        len--;
    }
    setAdvanceFilterValue(radioValue, textValue, attractionValue, radioName);
    radioValue = null;
    closeLayer('locationLayer');
}

/*
 Sets advance hotel search parameter.
 */
setAdvanceFilterValue = function(location, searchVal, searchCri, locationName){

    var doSearch = false;

    var hotelSearchDTO = window.iris.angular.search.getSearchParam();
    var params = getSearchURI();
    if (trim(location)) {
        var LatLng = location.split("_");

        hotelSearchDTO.searchType = '9';

        if (LatLng[0] && LatLng[0] != null) {
            hotelSearchDTO.lat = LatLng[0];
        }

        if (LatLng[1] && LatLng[1] != null) {
            hotelSearchDTO.lng = LatLng[1];
        }

        if (LatLng[2] && LatLng[2] != null) {
            hotelSearchDTO.radius = LatLng[2];
        }

        if (LatLng[3] && LatLng[3] != null) {
            if (LatLng[3] == 'MI') {
                hotelSearchDTO.miles = true;
            } else {
                hotelSearchDTO.miles = false;
            }

        }

        doSearch = true;
        location = '';
        LatLng = null;
    } else {
        resetHotelSearch();

        hotelSearchDTO.searchCriteria[5] = trim(searchCri) + "," + trim(searchVal);

        if ($('sCountry_' + index)) {
            if ($('sCountry_' + index) != null && $('sCountry_' + index).value.length > 0) {
                var combo = $('countryList_' + index);
                var countryIsoCode = (combo.options[combo.selectedIndex].value).split("_");
                var countryCode = countryIsoCode[0];
                hotelSearchDTO.selectedCountryCode = countryCode;
            }
        }
        if (searchVal && searchVal.length > 0) {
            if (trim(searchVal) != '') {
                doSearch = true;
            }
        }

    }

    hotelSearchDTO.fromLocWindow = true;

    setPreferences(hotelSearchDTO);

    var param = hotelSearchDTO.getParameters();
    
    if (doSearch) {
        var resultDiv = 'resultDiv_' + index;
        location = null;
        doDisableButton("availabilitybutton");
        showLoading(resultDiv);
        changeInventoryButtonStatus();
        invokeAJAX(getHotelSearchMethod(hotelSearchDTO), '', resultDiv, '', param[0], param[1], '', true, '', 'post');
        var ua= navigator.userAgent, tem,
        browserversion= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(browserversion[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(browserversion[1]=== 'Chrome'){
            tem= ua.match(/\bOPR\/(\d+)/);
            if(tem!= null) return 'Opera '+tem[1];
        }
        browserversion= browserversion[2]? [browserversion[1], browserversion[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) browserversion.splice(1, 1, tem[1]);
        var locationSearchText = '';
        if (searchVal != ""){
        	locationSearchText = hotelSearchDTO.searchCriteria[0];
        } else{
        	locationSearchText = locationName;
        }
        postHotelSearchStats(hotelSearchDTO.searchType, "", "", locationSearchText, hotelSearchDTO.radius, "", hotelSearchDTO.lat, hotelSearchDTO.lng, "NO",browserversion.join(' '));
    }
}

/*
 Populate The Attraction List.
 */
populateCombo = function(){
    var combo = $('location:combo1');
    if (combo) {
        var len = combo.length;
        var tempArray = new Array();
        var j = 0;
        while (len) {
            var i = len - 1;
            var id = combo.options[i].value;
            if ((id == '7') || (id == '6') || (id == '5') || (id == '4')) {
                tempArray[j] = combo.options[i];
                j = j + 1;
            }
            len = len - 1;
        }
        $('location:combo1').options.length = 0;
        len = tempArray.length;
        while (len) {
            var i = len - 1;
            var opt = new Option(tempArray[i].text, tempArray[i].value);
            $('location:combo1').options[i] = opt;
            len = len - 1;
        }

        $('location:combo1').selectedIndex = 0;
    }
}

/*
 Enable the filter button and check the radio button.
 */
checkRadio = function(){
    var textVal = $('location:attraction_text').value;
    var radioObj = document.getElementsByName('location:locRadio');
    var len = radioObj.length;

    while (len) {
        len--;
        if (radioObj[len].checked) {
            $('location:attraction_text').value = "";
            $('location:button1').disabled = false;
            $('location:button1').className = "FrmButton";
            break;
        }
    }

}

/*
 Enable the filter button and uncheck the radio button.
 */
uncheckRadio = function(){
    var textVal = $('location:attraction_text').value;
    var radioObj = document.getElementsByName('location:locRadio');
    var len = radioObj.length;

    if (textVal == undefined || textVal == '') {
    } else {
        var len2 = len;
        while (len2) {
            len2--;
            radioObj[len2].checked = false;
        }
    }

    if (textVal != '' && textVal != undefined) {
        $('location:button1').disabled = false;
        $('location:button1').className = "FrmButton";
    } else {
        $('location:button1').disabled = true;
        $('location:button1').className = "FrmButtonDisable";
    }
}

/* Method OpenInNewWindow */
function OpenInNewWindow(url){
    go(url);
}

/* Method go */
function go(url){
    window.open(url, "_self");
}

/*Method reqTest*/
reqTest = function(){
    return "";
}
/**
 * Checks for valid numeric string.
 */
function IsNumeric(strString){
    var strValidChars = "0123456789.";
    var strChar;
    var blnResult = true;

    if (strString.length == 0)
        return true;

    //  test strString consists of valid characters listed above
    for (i = 0; i < strString.length && blnResult == true; i++) {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1) {
            blnResult = false;
        }
    }
    return blnResult;
}

/**
 * Select Hotel from Grid
 */
selectHotel = function(rowId){

    clarifyListHSDTO = cctr.hotelsearch.HotelSearchDTO.getHotelSearchDTO(true);

    var gridObj = this;
    searchTypeName = '';

    var rows = gridObj.getCheckedRows(0)
    var a
    for (i = 0; i < rows.length; i++) {
        a = gridObj.cells(rows[i], 0);
        if (a) {
            a.setChecked(false);
        }
    }
    a = gridObj.cells(rowId, 0);
    a.setChecked(true);

    this.selectRow(this.getRowIndex(rowId), true, false);

    var selectedRowId = gridObj.getSelectedId();
    // GRS Single Search clarify List Functionality.
 	if (getCellData(gridObj, selectedRowId, "Destination")) {
        clarifyListHSDTO.singleSearchParam = getCellData(gridObj, selectedRowId, "Destination");
    }
     // GRS Single Search clarify List Functionality.
    if (getCellData(gridObj, selectedRowId, "Attraction")) {
    	clarifyListHSDTO.singleSearchParam = getCellData(gridObj, selectedRowId, "Attraction");
    }

    if (getCellData(gridObj, selectedRowId, "Subway Station")) {
        searchTypeName = getCellData(gridObj, selectedRowId, "Subway Station");
    }

    if (getCellData(gridObj, selectedRowId, "Lng")) {
        lng = getCellData(gridObj, selectedRowId, "Lng");
        if (lng == '&nbsp;') {
            lng = '';
        }

        if (lng != '') {
            clarifyListHSDTO.searchType = '9';
            clarifyListHSDTO.lng = lng;
        }
    }
    if (getCellData(gridObj, selectedRowId, "Lat")) {
        lat = getCellData(gridObj, selectedRowId, "Lat");
        if (lat == '&nbsp;') {
            lat = '';
        }

        if (lat != '') {
            clarifyListHSDTO.lat = lat;
        }

    }
   //PAL
    var destinationCode = getCellData(gridObj, selectedRowId, "Destination Code");
    if (destinationCode) {

        if (destinationCode == '&nbsp;') {
            destinationCode = '';
        }
        if (destinationCode != '') {
            clarifyListHSDTO.destinationCode = destinationCode;
        }
    }

    var city = '';
    if (getCellData(gridObj, selectedRowId, "City")) {
        city = getCellData(gridObj, selectedRowId, "City");
        if (city == '&nbsp;') {
            city = '';
        }

        clarifyListHSDTO.searchCriteria[0] = '1,' + city;
    }

    var countrycode = '';
    if (getCellData(gridObj, selectedRowId, "Country")) {
        countrycode = getCellData(gridObj, selectedRowId, "Country Code");
        if (countrycode == '&nbsp;') {
            countrycode = '';
        }
        if (countrycode != '') {
            clarifyListHSDTO.selectedCountryCode = countrycode;
        }
    }
    if (countrycode == '') {
        var combo = $('countryList_' + index);
        if (combo) {
        	var countryIsoCode = (combo.options[combo.selectedIndex].value).split("_");
            countrycode = countryIsoCode[0];
            if (countrycode != '') {
                clarifyListHSDTO.selectedCountryCode = countrycode;
            }	
        }
    }
    var stateCode = '';
    if (getCellData(gridObj, selectedRowId, "State")) {
        stateCode = getCellData(gridObj, selectedRowId, "State Code");
        if (stateCode != escape("&nbsp;")) {
            if (stateCode == '&nbsp;') {
                stateCode = '';
            }

            if (stateCode.length > 0) {
                clarifyListHSDTO.citySearchStateCode = stateCode;
                clarifyListHSDTO.searchCriteria[1] = '2,' + stateCode;
            }
        }

    }

    if (stateCode == '') {
        for (var i = 0; i < 4; i++) {
            var val = $('text' + (i + 1) + '_' + index);
            var comb = $('combo' + (i + 1) + '_' + index);
            if (comb) {
                if (comb.value == '2' && $('AUTOCOMPLETE_STATE_' + index) &&
                $('AUTOCOMPLETE_STATE_' + index).value.length > 0) {
                    stateCode = $('AUTOCOMPLETE_STATE_' + index).value;
                    break;
                } else if (comb.value == '2' && val && val.value && !isWhitespace(val.value)) {
                    stateCode = val.value;
                    break;
                }
            }
        }

        if (stateCode.length > 0) {
            clarifyListHSDTO.citySearchStateCode = stateCode;
            clarifyListHSDTO.searchCriteria[1] = '2,' + stateCode;
        }
    }

    enableViewHotelButton();
}


/* view detail method */
viewHotels = function(){
    var attraction = false;
    var subway = false;
    var interstate = false;
	
    var comb = document.getElementById('combo5_' + index);
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}

    var rd = searchDataFromAngular['radiusMeasureOption'];
    clarifyListHSDTO.miles = rd === 'mi';

    var sortByDistance = "false";

    for (var i = 0; i < 4; i++) {
        var val = document.getElementById('text' + (i + 1) + "_" + index);
        var comb = document.getElementById('combo' + (i + 1) + "_" + index);
        if (val && comb && val.value && !isWhitespace(val.value)) {
            if (comb.value == '6' || comb.value == '7') {
                sortByDistance = "true";
            }
            if (comb.value == '5') {
                clarifyListHSDTO.searchCriteria[2] = '5,' + val.value;
                interstate = true;
            }

            if (comb.value == '6' && searchTypeName != '') {
                clarifyListHSDTO.searchCriteria[3] = '6,' + searchTypeName;
                subway = true;
            }

            if (comb.value == '7' && searchTypeName != '') {
                clarifyListHSDTO.searchCriteria[4] = '7,' + searchTypeName;
                attraction = true;
            }

            if (comb.value == '3') {
                clarifyListHSDTO.region = val.value;
            }
        }
    }

    clarifyListHSDTO.sortByDistance = sortByDistance;
    clarifyListHSDTO.viewId = '1';
    var salesFcode = '';
   // salesFcode = getSaleFeatures();
	if(ngSearchExists() && window.iris.angular.search.getSaleFeatures) {
		salesFcode = window.iris.angular.search.getSaleFeatures();
	}
    if (salesFcode != '') {
        clarifyListHSDTO.saleFcodes = salesFcode;
    }
    clarifyListHSDTO.addParam('hotelSearchView.showHotels', true);
    clarifyListHSDTO.addParam('hotelSearchView.divVal', index);
	
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
    var radiusField = searchDataFromAngular['radius'];
    if (radiusField && radiusField != '') {
        clarifyListHSDTO.radius = radiusField;
    }

    setPreferences(clarifyListHSDTO);
    //Hotel compare param added.
    if(hotelCompare){
    	clarifyListHSDTO.addParam('searchReqDTO.hotelSearchFromCompare', true);
    }
    var param = clarifyListHSDTO.getParameters();
    invokeAJAX(getHotelSearchMethod(clarifyListHSDTO), '', resultDiv, '', param[0], param[1], '', true, '', 'post');	
    showLoading('hotelslistdiv_' + index);
    var clGrid = "getMyGridcl_" + index;
    clGrid = null;
    doEnableButton('hotelleft');
    doEnableButton('hotelopening');
}

/* Sets the index value.*/
setIndexValue = function(param){
    index = param;
}

/* Check For Enter key hit.*/
checkEnteronLocation = function(e){
    var characterCode;
    characterCode = e.keyCode;
    if (characterCode == 13) {
        filterSearchResultByLocation();
    } else {
        return false;
    }
}

/* Selects the first hotel in case single hotel is returned */
selectFirstHotel = function(){
    if (index == 2)//if find hotel is a pop-up, return
        return;
    if (typeof getMyGridhs_1 == 'function') {
        var hsGrid = getMyGridhs_1();
        var isOverride = $('override').value;
        var isAvail = getCellData(hsGrid, 0, "available");
        var isTPICompP2 = getCellData(hsGrid, 0, "TPI Compliance P2");
        var isRestricted = getCellData(hsGrid, 0, "Restricted Hotel");
        if (hsGrid.rowsCol.length == 1) {
            // Defect 67796 fixed.
            if (isAvail != "true" && isOverride == 'false') {
                return;
            }
            if (isTPICompP2 == "true" || isRestricted == "true") {
                return;
            }

            var a = hsGrid.cells(0, 1);
            a.setChecked(true);
            var chkRows = hsGrid.getCheckedRows(1);
            hotelMnemonicCode = getRowMnemonic(hsGrid, parseInt(chkRows, 10));

            $("availabilitybutton").value = "View Availability for " + hotelMnemonicCode;

            // Check if dates are entered. If not, show message otherwise show availability.
            if (isDateEntered() == 'false' && divValue == 1) {
                $('hotelSearchMsgs').innerHTML = "hoteldetails_hotelsearchings".l();
                if(!doesResSummaryExist()){
                	$('arrday').focus();
                }
                return;
            }

            doEnableButton("availabilitybutton");
            //ChangeParentforTabber();

            if (isEGVDN) {
                searchHotelAvailability("Easy Groups", "", "", "true");
            } else if (isAddStayFromPALRes != 'true') {
            	//Open Package Rate popup
            	if(isLMSProperty){
            		setPckgRateOkBtnActionValue('SearchHotelAvailability');
            		return;
            	}//END
                searchHotelAvailability(rateTypeForVDN, "", "", "true");
            }
        }
    }
}

//Need to remove method and call to this method
/** Method used to set Travel Type and Stay Part values on Add Stay If Same Rate is selected**/
setPALRYCDetails = function(){
    if ($("visitTypeOfficial") && $("pal_stayPartOfCGYes")) {
        if (null != globalVisitTypeVal && !isEmpty(globalVisitTypeVal)) {
            setVisitTypeVal(globalVisitTypeVal);
            palVisitType = $("visitTypeOfficial").value;
            globalVisitTypeVal = "";
        }
        if (null != globalStayPartVal && !isEmpty(globalStayPartVal)) {
            setStayPart(globalStayPartVal);
            palStayPartOfGroup = $("pal_stayPartOfCGYes").value;
            globalStayPartVal = "";
        }
    }
}

/**
 * Will just focus on arrival date field.
 */
checkAnotherDate = function(){
    isFirstLoad = 1;
    var theDiv = $('calendarModuleClosed');
    if (theDiv.style.display.toUpperCase() == "BLOCK") {
        ToggleCalendarDiv('SCalendar');
        ToggleCalendarDiv('calendarModuleClosed');
    }
    setTimeout("$('arrday').focus()", 5);
}


changeViewSelectHotel = function(){
    if (selectedHotelCode != "") {
        var resGrid = eval("getMyGridhs_" + divValue + "()");
        var count = eval("getMyGridTotalRowCounths_" + divValue + "()");
        if (resGrid.rowsCol.length != count) {
            setTimeout("changeViewSelectHotel()", 20);
        }

        var a = resGrid.rowsCol[0].cells;
        var index = 0;
        //iterate over all the columns of grid and get the value of code.
        for (var i = 0; i < a.length; i++) {
            var headerStr = resGrid.getHeaderCol(i);
            if (headerStr == "Hotel Code") {
                index = i;
                break;
            }
        }

        for (var i = 0; i < resGrid.rowsCol.length; i++) {
            var str1 = resGrid.rowsCol[i].cells[index].innerHTML;
            if (str1 == selectedHotelCode) {
                a = resGrid.cells(i, 1);
                if (a) {
                    a.setChecked(true);
                    rowToSelect = resGrid.getRowByIndex(i);
                    resGrid.selectCell(rowToSelect, 1);
                    resGrid.moveToVisible(rowToSelect.cells[1]);
                    performHotelSelectedTask(i);
                    displayHotelDetails(resGrid, i);
                    resGrid.objBox.scrollTop = 0;
                }
                break;
            }
        }
    }
}

/* Function to be called when row gets added to the city pick list grid */
hotelCityListRowAdded = function(rowId){
    var pastStay = getCellData(this, rowId, "Stay");

    if (pastStay != '&nbsp;' && pastStay != '' && pastStay != 0) {
        var cell = getCell(this, rowId, "City Name");
        var Msg_PastStay = "hotelsearch_paststay".l();

        cell.innerHTML = cell.innerHTML + "  - <font color='BLUE'>(" + pastStay + " " + Msg_PastStay + ")</font>";
    }
}

/**
 Transfer text from original text box to state list box
 */
showOldText = function(obj){
}

/*
 * Show message if search did not find any hotel
 within the specified radius.
 */
showMessage = function(){
    if ($('showMessage') && $('showMessage').value.length > 0) {
        var message = ($('showMessage').value).split('_');
        $("hotelSearchMsgs").innerHTML = "AD100_part1".l() + "AD100_part3".l();
    }
}

/*
 * Show Message to Agent
 */
showAgentMessage = function(){
    if ($('agentMessage') && $('agentMessage').value == 'search_timeout') {
        openLayer('hotelsearch.getSearchTimeOut', 'cotinueSearchLayer', 'continuesearch_div', '', '400', 'Time Out', '', '', false, '', '', '', 'post');
        return;
    }
    if ($('agentMessage') && $('agentMessage').value.length > 0 && $('agentMessage').value != 'search_timeout') {
        $("hotelSearchMsgs").innerHTML = $('agentMessage').value;
    } else if (index == '1' && $("hotelSearchMsgs")) {
        $("hotelSearchMsgs").innerHTML = "";
    }
    if ($('hoteCodeMatchMsg') && $('hoteCodeMatchMsg').value.length > 0) {
        $("hotelCodeMsg").innerHTML = $('hoteCodeMatchMsg').value;
    }
}

/** Disable view hotel button */
disableViewHotelButton = function(){
    var button = $("view_hotel_" + index);
    if (button) {
        button.className = "FrmButtonDisable";
        button.disabled = true;
    }
}

/** Enable View Hotel  button */
enableViewHotelButton = function(){
    var button = $("view_hotel_" + index);
    if (button) {
        button.className = "FrmButton";
        button.disabled = false;
        //button.focus();
    }
}


/**
 * Set Param in Request
 */
setParamInRequest = function(){

    var hotelSearchDTO = getGenericHotelRequest();

    hotelSearchDTO.addParam('hotelSearchView.showHotels', false);

    hotelSearchDTO.addParam('hotelSearchView.viewChange', true);

    return hotelSearchDTO;

}

getGenericHotelRequest = function(){

    var hotelSearchDTO = cctr.hotelsearch.HotelSearchDTO.getHotelSearchDTO(true);
    var gridObj = eval('getMyGridhs_' + divValue + '()');

    if (getCellData(gridObj, 0, "Subway")) {
        searchBySubway = getCellData(gridObj, 0, "Subway");
    }
    if (getCellData(gridObj, 0, "Attraction")) {
        searchByAttraction = getCellData(gridObj, 0, "Attraction");
    }

    if ($('sCity_' + index)) {
        if ($('sCity_' + index) != null && $('sCity_' + index).value.length > 0) {
            hotelSearchDTO.searchCriteria[0] = '1,' + $('sCity_' + index).value;
        }

    }
    if ($('sState_' + index)) {
        if ($('sState_' + index) != null && $('sState_' + index).value.length > 0) {
            hotelSearchDTO.citySearchStateCode = $('sState_' + index).value;
            hotelSearchDTO.searchCriteria[1] = '2,' + $('sState_' + index).value;
        }
    }
    if ($('sCode_' + index)) {
        if ($('sCode_' + index) != null && $('sCode_' + index).value.length > 0) {
            hotelSearchDTO.searchCriteria[2] = '8,' + $('sCode_' + index).value;
        }
    }
    if ($('sCountry_' + index)) {
        if ($('sCountry_' + index) != null && $('sCountry_' + index).value.length > 0) {
            hotelSearchDTO.selectedCountryCode = $('sCountry_' + index).value;
        }
    }
    if ($('isSortByDistance_' + index)) {
        hotelSearchDTO.sortByDistance = $('isSortByDistance_' + index).value;
    }

    for (var i = 0; i < 4; i++) {
        var val = $('text' + (i + 1) + "_" + index);
        var comb = $('combo' + (i + 1) + "_" + index);
        if (val && comb && val.value && !isWhitespace(val.value)) {
            if (comb.value == "4") {
                hotelSearchDTO.searchCriteria[3] = comb.value + ',' + val.value;
            }
            if (comb.value == "5" || comb.value == "6") {
                if (comb.value == "5") {
                    hotelSearchDTO.searchCriteria[4] = comb.value + ',' + val.value;
                }
                if (comb.value == "6" && searchBySubway != '') {
                    hotelSearchDTO.searchCriteria[4] = comb.value + ',' + searchBySubway;
                }
            }
            if (comb.value == "7" && searchByAttraction != '') {
                hotelSearchDTO.searchCriteria[5] = comb.value + ',' + searchByAttraction;
            }
            if (comb.value == '3') {
                hotelSearchDTO.region = val.value;
            }
        }
    }

    if ($('sLat_' + index)) {
        if ($('sLat_' + index) != null && $('sLat_' + index).value.length > 0) {
            hotelSearchDTO.searchType = '9';
            hotelSearchDTO.lat = $('sLat_' + index).value;
            hotelSearchDTO.lng = $('sLng_' + index).value;
        }
    }
	var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
    var val = searchDataFromAngular['radius'];
    var comb = $('combo5_' + index);
    if (comb) {		
        var rd = searchDataFromAngular['radiusMeasureOption'];
        hotelSearchDTO.miles = (rd === 'mi');
        hotelSearchDTO.milesFrom = comb.value;
        if (val != '') {
            hotelSearchDTO.radius = val;
        }
    }

    var salesFcode = '';
	if(ngSearchExists() && window.iris.angular.search.getSaleFeatures) {
		salesFcode = window.iris.angular.search.getSaleFeatures();
	}
    if (salesFcode != '') {
        hotelSearchDTO.saleFcodes = salesFcode;
    }

    hotelSearchDTO.addParam('hotelSearchView.divVal', index);

    return hotelSearchDTO;
}


/**
 * Get Sales Features
 */
function getSaleFeatures() {
	var salesFcode = '';
	if (typeof getMyGridhotelFeatures == 'function') {
		var gridObj = getMyGridhotelFeatures();
		if (gridObj) {
			for ( var i = 0; i < gridObj.rowsCol.length; i++) {
				var prefIdCell = gridObj.cells(i, 0);
				var prefIdCellVal = prefIdCell.getValue();
				var checkCell = gridObj.cells(i, 1);
				if (checkCell.isChecked()) {
					salesFcode = salesFcode + prefIdCellVal + ',';
				}
			}
		}
	}
	return salesFcode;
}

/**
 * View hotels when alternate for hotel opening is click
 **/
viewHotelsAgainstOpening = function(){
    var paramName = new Array();
    var paramValue = new Array();
    var parameter = new Array();
    var param = '';

    if ($('oCity')) {
        if ($('oCity') != null && $('oCity').value.length > 0) {

            paramName.push('searchReqDTO.searchCriteria[0]');
            paramValue.push('1');

            paramName.push('searchReqDTO.searchValue[0]');
            paramValue.push($('oCity').value);
        }

    }
    if ($('oState')) {
        if ($('oState') != null && $('oState').value.length > 0) {
            paramName.push('searchReqDTO.citySearchStateCode');
            paramValue.push($('oState').value);

            paramName.push('searchReqDTO.searchCriteria[1]');
            paramValue.push('2');

            paramName.push('searchReqDTO.searchValue[1]');
            paramValue.push($('oState').value);

        }
    }

    if ($('oCountry')) {
        if ($('oCountry') != null && $('oCountry').value.length > 0) {
            paramName.push('searchReqDTO.selectedCountryCode');
            paramValue.push($('oCountry').value);
        }

    }

    if ($('oLat')) {
        if ($('oLat') != null && $('oLat').value.length > 0) {

            paramName.push('searchReqDTO.lat');
            paramValue.push($('oLat').value);

            paramName.push('searchReqDTO.lng');
            paramValue.push($('oLng').value);
        }
    }
	
    var searchDataFromAngular;
	if(ngSearchExists() && window.iris.angular.search.getSearchData) {
		searchDataFromAngular = window.iris.angular.search.getSearchData();
	}
    /* var val = searchDataFromAngular['radius'];
    var comb = $('combo5_' + index);
    if (comb) {
        var rd = searchDataFromAngular['radiusMeasureOption'];
        if (rd === 'km') {
            paramName.push('searchReqDTO.miles');
            paramValue.push('false');
        } else {
            paramName.push('searchReqDTO.miles');
            paramValue.push('true');
        }

        if (val != '') {
            paramName.push('searchReqDTO.radius');
            paramValue.push(val);
        }
    } */

    paramName.push('hotelSearchView.showHotels');
    paramValue.push(true);

    paramName.push('hotelSearchView.divVal');
    paramValue.push(index);

	 var salesFcode = '';
	if(ngSearchExists() && window.iris.angular.search.getSaleFeatures) {
		salesFcode = window.iris.angular.search.getSaleFeatures();
	}
    if (salesFcode != '') {
        paramName.push('searchReqDTO.saleFcodes');
        paramValue.push(salesFcode);
    }
    doDisableButton("btnOKForOpening");

    showLoading('hotelsAgainstOpening');
    invokeAJAX('hotelsearch.searchAlternateForHotelsOpening', '', 'hotelsAgainstOpening', '', paramName, paramValue, '', true, '', 'post');
}

/**
 * Change view of hotel if any of the arrow key is pressed.
 */
function getView(evt){
    var code = evt.charCode ? evt.charCode : evt.keyCode;
    if (code == "37" || code == "39" || code == "38" || code == "40") {
        if ((code == "37" || code == "38") && upArrowViewFlag != false) {
            changeTableView(true);
        }
        if ((code == "39" || code == "40") && downArrowViewFlag != false) {
            changeTableView(true);
        }
    } else {
        return false;
    }
}

/**
 * Change view of hotel if any of arrow key is pressed.
 */
function getBrandSortList(evt){
    var code = evt.charCode ? evt.charCode : evt.keyCode;
    if (code == "37" || code == "39" || code == "38" || code == "40") {
        if ((code == "37" || code == "38") && upArrowBrandFlag != false) {
            changeSortOrder();
        }
        if ((code == "39" || code == "40") && downArrowBrandFlag != false) {
            changeSortOrder();
        }
    } else {
        return false;
    }

}

setPreferences = function(hotelSearchDTO){
	var searchPageParams;
	if(ngSearchExists() && window.iris.angular.search.getCommonSearchPageParams) {
		searchPageParams = window.iris.angular.search.getCommonSearchPageParams();
	}	
    var restrictedBrands = searchPageParams['restrictedBrands'];
    if (restrictedBrands && restrictedBrands != "") {
        hotelSearchDTO.restrictedBrands = restrictedBrands;
    }
}

setMoreResultLink = function(){
    if ($("moreResultLinkDiv")) {
        if ($("isMoreResults") && $("isMoreResults").value == "true") {
            $("moreResultLinkDiv").innerHTML = $("moreResultLinkDataDiv").innerHTML;
        } else {
            $("moreResultLinkDiv").innerHTML = "";
        }
    }
}

function setPalResultLink() {
	var palResultLinkDiv = $("palResultLinkDiv");
	if (palResultLinkDiv) {
		palResultLinkDiv.innerHTML = "";
		if ($("isPalResults") && $("isPalResults").value == "true") {
			palResultLinkDiv.innerHTML = $("palResultLinkDataDiv").innerHTML;
		}
	}
}

getHotelSearchMethod = function(hotelSearchDTO){
    if (hotelSearchDTO.isCacheable && isDateEntered() == "false" &&
    !doesResSummaryExist() &&
    !isPCREntered) {
        return 'hotelsearch.searchHotel';
    } else {
        return 'hotelsearch.searchHotelWithDates';
    }
}

var cityTabOutFlag = true;
var stateTabOutFlag = true;

resetTabOutFlags = function(){
    cityTabOutFlag = true;
    stateTabOutFlag = true;
}

resetAutoComplete = function(){
    resetTabOutFlags();
}

/**
 * Returns the index value of the combo box.
 */
getSelectedIndexFromCombo = function(comboObj){
    var selectedOption = comboObj.options[comboObj.selectedIndex];
    return selectedOption.value;
}

/**
 * Remove Hotel Brand MA from Brand drop-down(Hotel Search Result) when non pal vdn is entered.
 */
removeMABrandForNonPalVDN = function(){
    var comboBrand = $("brandList_" + index);
    if (!isPal) {
        for (var i = 0; i < comboBrand.options.length; i++) {
            if ("MA" == comboBrand.options[i].text) {
                comboBrand.remove(i);
                break;
            }
        }
    }
}

/**
 * If PAL and no result found for city search then show the pop up.
 */
showPalEmptyResultMessage = function(){
    if (isPal) {
        var alertMessage = PALNOInstallationMessage + ' <a href="javascript:hideLayer(\'' + alertWindowLayerId + '\');javascript:showPALInstallations();">here</a>';
        var messageHTML = '<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="height: 100%;"><tbody><tr style="height: 70%;"><td valign="top" align="center"><table width="97%" cellspacing="0" cellpadding="3" border="0" align="center"><tbody><tr><td width="10%"></td><td width="85%">' + alertMessage + '</td><td width="5%"/></tr></tbody></table></td></tr><tr style="height: 25%;"></tr></tbody></table>'
        showAlertWindow(messageHTML, alertWindowLayerId, 400, 'Alert', true, false, true);
        return;
    }
}

/* selects hotel search tab in results tabber*/
selectHotelSearchResultTab = function(){
    var div = $("searchresultpage");
    resultTabs = div.tabber;
    resultTabs.tabShow(0);
}

/* This method return hotel search criteria parameter for hotel details */
getHotelSearchCriteriaParams = function(){
    var searchParams = "";
    var searchCriteriaArr = getElementValueArray("searchCriteria");
    for (var i = 0; i < searchCriteriaArr.length; i++) {
        searchParams = searchParams + "&searchCriteria[" + i + "]=" + searchCriteriaArr[i];
    }
    var searchValueArr = getElementValueArray("searchvalue");
    for (var i = 0; i < searchValueArr.length; i++) {
        searchParams = searchParams + "&searchValue[" + i + "]=" + searchValueArr[i];
    }
    var countryCode = $("countryCode");
    if (countryCode != "" && countryCode != null) {
        searchParams = searchParams + "&countryCode=" + countryCode.value;
    }
    return searchParams;
}

var localStorageSupport = (typeof(Storage)!=="undefined") ? true:false;
var countryCityHash = null;  //store key(=country), value(=cityList).
var countryStateHash = null; //store key(=country), value(=stateList).
var countryStateWithCodeHash = null; //store key(=country), value(=StateWithstateCode).
var allPALCitiesForUS = null; //stores all PAL cities.

/**
 * Fetches All States for all countries if it is not already populated in the
 * localStorage variable: localStorage.allStatesWithCountry
 */
getStatesForAllCountries = function(){
	if( localStorageSupport ){
		// Yes! localStorage and sessionStorage support from HTML 5!
		if(isEmpty(localStorage.allStatesWithCountry)){
			invokeAJAX('hotelsearch.getStatesForAllCountries', '', '', mapStatesWithCountry, '', '', '', '', '', 'post');
		}else{
			//localStorage.allCitiesWithCountry is populated with the country city list.
			mapStatesWithCountry(localStorage.allStatesWithCountry);
		}
	}else{
		invokeAJAX('hotelsearch.getStatesForAllCountries', '', '', mapStatesWithCountry, '', '', '', '', '', 'post');
	}
}

/**
 * Fetches All States along with their code for all countries if it is not
 * already populated in the localStorage variable: localStorage.allStatesWithCode.
 * This is used for City SS when State is present in the search criteria.
 */
getAllStatesForClientCitySS = function(){
	if( localStorageSupport ){
		if(isEmpty(localStorage.allStatesWithCode)){
			invokeAJAX('hotelsearch.getAllStatesForClientCitySS', '', '', mapAllStatesWithCode, '', '', '', '', '', 'post');
		}else{
			//localStorage.allCitiesWithCountry is populated with the country city list.
			mapAllStatesWithCode(localStorage.allStatesWithCode);
		}
	}else{
		invokeAJAX('hotelsearch.getAllStatesForClientCitySS', '', '', mapAllStatesWithCode, '', '', '', '', '', 'post');
	}
}

/**
 * This method fetches all the Cities in All the Countries if it is not
 * already populated in the localStorage variable: localStorage.allCitiesWithCountry.
 */
getCitiesForAllCountries = function(){
	if( localStorageSupport ){
		// Yes! localStorage and sessionStorage support from HTML 5!
		if(isEmpty(localStorage.allCitiesWithCountry)){
			invokeAJAX('hotelsearch.getCitiesForAllCountries', '', '', mapCitiesWithCountry, '', '', '', '', '', 'post');
		}else{
			//localStorage.allCitiesWithCountry is populated with the country city list.
			mapCitiesWithCountry(localStorage.allCitiesWithCountry);
		}
	}else{
		invokeAJAX('hotelsearch.getCitiesForAllCountries', '', '', mapCitiesWithCountry, '', '', '', '', '', 'post');
	}
}

/**
 * This method populates a Global HashMap variable:"countryStateWithCodeHash"
 * from the data in "localStorage.allStatesWithCode". It stores list (','
 * separated)of all StateName_StateCode for every country where states are
 * available. This is used in the City SS when State is present while using the
 * Client SS logic.
 */
mapAllStatesWithCode = function(response){
	if(response == null || response == ''){
		return;
	}

	if(localStorageSupport){
		if(isEmpty(localStorage.allStatesWithCode)){
			localStorage.allStatesWithCode = response;
		}else{
			//localStorage.allStatesWithCode is populated with the country city list.
		}
	}
	splitArr = response.split("**");
	countryStateWithCodeHash = new Hashtable();
	for (i = 0; i < splitArr.length; i++) {
		tmpSplitArr = splitArr[i].split(":");
		countryStateWithCodeHash.put(tmpSplitArr[0],tmpSplitArr[1]);
	}
}

/**
 * This method populates a Global HashMap variable:"countryStateHash" from the
 * data in "localStorage.allStatesWithCountry". It stores list (',' separated)
 * of all States for every country where states are available. This is used in
 * the State SS using the Client SS logic.
 */
mapStatesWithCountry = function(response){
	if(response == null || response == ''){
		return;
	}

	if(localStorageSupport){
		if(isEmpty(localStorage.allStatesWithCountry)){
			localStorage.allStatesWithCountry = response;
		}else{
			//localStorage.allStatesWithCountry is populated with the country city list.
		}
	}
	splitArr = response.split("**");
	countryStateHash = new Hashtable();
	for (i = 0; i < splitArr.length; i++) {
		tmpSplitArr = splitArr[i].split(":");
		countryStateHash.put(tmpSplitArr[0],tmpSplitArr[1]);
	}
}


/**
 * This method populates a Global HashMap variable:"countryCityHash" from the
 * data in "localStorage.allCitiesWithCountry". It stores list (',' separated)
 * of all Cities for every country. This is used in the State SS using the
 * Client SS logic.
 */
mapCitiesWithCountry = function(response){
	if(response == null || response == ''){
		return;
	}

	if(localStorageSupport){
		if(isEmpty(localStorage.allCitiesWithCountry)){
			localStorage.allCitiesWithCountry = response;
		}else{
			//localStorage.allCitiesWithCountry is populated with the country city list.
		}
	}
	splitArr = response.split("**");
	countryCityHash = new Hashtable();
	for (i = 0; i < splitArr.length; i++) {
		tmpSplitArr = splitArr[i].split(":");
		countryCityHash.put(tmpSplitArr[0],tmpSplitArr[1]);
	}
}

resetShowMore = function(){
	if($('alternateList')){
		if( $('alternateList').value < 9 ) {
			$("showMoreLessHotelsDiv_" + index).style.display = "none";
		} else {
			$("showMoreLessHotelsDiv_" + index).style.display = "block";
			$("showLessHotelsSpan_" + index).style.display = "none";
			$("showMoreHotelsSpan_" + index).style.display = "block";
		}
	}
	/*if(hotelCompare){ //TODO - remove this
		$("searchResultBeginDiv_" + index).setAttribute("class","compareHotelList");
	}*/
}

showMoreHotelSearchResult = function(){
	$("showMoreHotelsSpan_" + index).style.display = "none";
	$("showLessHotelsSpan_" + index).style.display = "block";
	$("searchResultBeginDiv_" + index).setAttribute("class","moreHotel");
}

showLessHotelSearchResult = function(){
	$("showLessHotelsSpan_" + index).style.display = "none";
	$("showMoreHotelsSpan_" + index).style.display = "block";
	$("searchResultBeginDiv_" + index).setAttribute("class","lessHotel");
}

hotelsTabCallbackFn = function() {
    var button = $("availabilitybutton");
    if (button) {
    	button.onclick = viewAvailability;
    }
}

/**
 * Refresh/Reset the size of Grid in Hotel tab in Search Result Section if available.
 */
refreshHotelsTabGridInSearchResult = function(){
	if(typeof getMyGridhs_1 == 'function'){
		getMyGridhs_1().setSizes();
	}
}

showHotelDetails = function(_tabIndex) {
	if(_tabIndex == 0){
		refreshHotelsTabGridInSearchResult();
	}

	if($('hotelDetailsDiv_Map') ){
		if( _tabIndex == 0 && $('hotelDetailsDiv_Map').innerHTML != "") {
			$('hotelResultTableContainer_1').parentNode.appendChild($('hotelDetailsDiv_1'));
			if(typeof getMyGridhs_1 == 'function') {
				var grid = getMyGridhs_1();
				if(grid) {
					var rows = grid.getCheckedRows(1);
					if(rows && rows.length > 0){
						$('myGridhs_1').parentNode.parentNode.scrollTop = grid.rowsCol[rows[0]].offsetTop;
					}
				}
			}
		} else if(_tabIndex == mapTabIndex && isTabRendered('searchresultpage', mapTabIndex)){
			$('hotelDetailsDiv_Map').appendChild($('hotelDetailsDiv_1'));
		}
	}
}


isTabRendered = function(divId, tabIndex) {
    var div = $(divId);
    x = div.tabber;
    return x.tabs[tabIndex].div.rendered != false;
}

collapseSearchResult = function() {
	if (isTabberOpen('#searchresultpage')) {		
		collapseTabberDiv('#searchresultpage');
		switch (getActiveTab('searchresultpage')) {
			case 1:
				showShortDetailsDiv(getRowDataForPastItinerary(), $("piHotelDetailsTabDiv"));
				break;
			case reservationTabIndex:
				var searchResButtonsContainer = $('searchResButtonsDiv');
		    	if(searchResButtonsContainer && searchResButtonsContainer.style.display == "block") {
		    		searchResButtonsContainer.style.display = "none";
		    	}
				break;				
			case 0:
			case ratesTabIndex:
			case mapTabIndex:
				showShortDetailsDiv(getFormattedRowData(), $("hotelDetailsTabDiv"));
				break;
		}
	}
}

expandSearchResult = function() {
	if (!isTabberOpen('#searchresultpage')) {
		expandTabberDiv('#searchresultpage');
		switch (getActiveTab('searchresultpage')) {
			case 1:
				hideShortDetailsDiv($("piHotelDetailsTabDivParent"), $("piHotelDetailsTabDiv"));
				break;
			case reservationTabIndex:
				var searchResButtonsContainer = $('searchResButtonsDiv');
		    	if(searchResButtonsContainer && searchResButtonsContainer.style.display == "none") {
		    		searchResButtonsContainer.style.display = "block";
		    	}
				break;				
			case 0:
			case ratesTabIndex:
			case mapTabIndex:
				hideShortDetailsDiv($("hotelDetailsTabDivParent"), $("hotelDetailsTabDiv"));
				var availButtonsContainer = $('availButtonsDiv');
		    	if(availButtonsContainer && availButtonsContainer.style.display == "none") {
		    		availButtonsContainer.style.display = "block";
		    	}
		    	break;
		}
	}
}

changeSearchResultTabState = function() {
	if(isTabberOpen('#searchresultpage')) {
		collapseSearchResult();
	} else {
		expandSearchResult();
	}
}

showShortDetailsDiv = function(_selectedHotelRowData, _detailsDiv){
	if(_selectedHotelRowData == '') {
		return false;
	}
    var sShortDetailDiv = $("SShortDetail");
    if (isPal && checkTravelType()) {
        return false;
    } else {
        if (sShortDetailDiv) {
        	sShortDetailDiv.innerHTML = "";
            if (_selectedHotelRowData) {
                sShortDetailDiv.innerHTML = _selectedHotelRowData;
            }
            if (_detailsDiv) {
                sShortDetailDiv.appendChild(_detailsDiv);            	
            }
            sShortDetailDiv.style.display = "block";
        }
    }
}

hideShortDetailsDiv = function(_detailsParentDiv, _detailsDiv){
    var sShortDetailDiv = $("SShortDetail");
    if (isPal && checkTravelType()) {
        return false;
    } else if (sShortDetailDiv) {
		_detailsParentDiv.appendChild(_detailsDiv);
    	sShortDetailDiv.style.display = "none";
    }
}



function showMessageHTMLPopHelperCal(messageText) {
	var messageHTML = '<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="height: 100%;"><tbody><tr style="height: 70%;"><td valign="top" align="center"><table width="97%" cellspacing="0" cellpadding="3" border="0" align="center"><tbody><tr><td width="10%"></td><td width="85%">' 
    	+ messageText + 
    	'</td><td width="5%"/></tr><tr><td width="10%"></td><td width="85%" valign="top" align="center" class="popButton"><input type="button" name="displayOk" id="displayOk" value="OK" tabindex="1" class="FrmButton" style="width:50px;" onclick="hideLayer(\'' 
    	+ alertWindowLayerId + 
    	'\');" /></td><td width="5%"/></tr></tbody></table></td></tr><tr style="height: 25%;"></tr></tbody></table>'
    	var bookingMaxDate = maxValidDate();
	var a ='Available through:'+bookingMaxDate;
    	showMessageHTMLPopCal(messageHTML,a);
	
}

/**
 * This method checks for the view inventory preference to popup the inventory
 * list for the sold out hotels.
 */
function showInventoryPopUpForAlternates() {
	if (typeof getMyGridhs_1 == 'function') {
		var alternateHotelsGrid = getMyGridhs_1();
		var isAvailable = getCellData(alternateHotelsGrid, 0, "available");
		var newHotelCode = getCellData(alternateHotelsGrid, 0, "Code");
		var newHotelName = getCellData(alternateHotelsGrid, 0, "Hotel Name");
		var hotelStatusCode = getCellData(alternateHotelsGrid, 0, "Hotel Status Code");
		var isHotelStatusNewOrClose=false;
		
		if(!isEmpty(hotelStatusCode) && hotelStatus[hotelStatusCode]){
			isHotelStatusNewOrClose=true;
		}
		if (isEmpty(alternateHotelCode) || alternateHotelCode != newHotelCode) {
			alternateHotelCode = newHotelCode;
		}
		if (isEmpty(priHotelMnemonicCode)) {
			priHotelMnemonicCode = newHotelCode;
		}
		if (isEmpty(inventoryAvailHotelName) || inventoryAvailHotelName != newHotelName) {
			inventoryAvailHotelName = newHotelName;
		}
		if(isHotelStatusNewOrClose){
			return false;
		}
		if ($("viewList_" + index).value == "8" && isAvailable == "false"
				&& viewInventoryAlternates != undefined
				&& viewInventoryAlternates.toUpperCase() == "TRUE") {
				getInventoryAvailability(alternateHotelCode, inventoryAvailHotelName);
		}
	}
}


function stopEventBubbling(event) {
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble=true;
	}
}

//Proactively Educate Guests About New Hotels message will display in Notification Center
displayNewHotelMessageInNotificationCenter = function() {
	if ($("isNewHotelFromResults")) {
		var searchResultsList = convertStringToBoolean($("isNewHotelFromResults").value);
		if (searchResultsList) {
			var messageValue = "newHotelMsgKey".l() + ":"
					+ "newHotelMsgValue".l();
			ngNotificationExists()
					&& iris.angular.notification
							.pushMessagesToNotificationCenter([ messageValue ]);
		}
	}
}
