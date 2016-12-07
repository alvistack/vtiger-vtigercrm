/*+***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is: vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 *************************************************************************************/

Users_Edit_Js("Settings_Users_PreferenceEdit_Js",{
	
	/**
	 * Function to register change event for currency seperator
	 */
	registerChangeEventForCurrencySeperator : function(){
		var form = jQuery('form');
		jQuery('[name="currency_decimal_separator"]',form).on('change',function(e){
			var element = jQuery(e.currentTarget);
			var selectedValue = element.val();
			var groupingSeperatorValue = jQuery('[name="currency_grouping_separator"]',form).data('selectedValue');
			if(groupingSeperatorValue == selectedValue){
				var message = app.vtranslate('JS_DECIMAL_SEPERATOR_AND_GROUPING_SEPERATOR_CANT_BE_SAME');
				app.helper.showErrorNotification({
                  'message': message
				});
				var previousSelectedValue = element.data('selectedValue');
				element.find('option').removeAttr('selected');
				element.find('option[value="'+previousSelectedValue+'"]').attr('selected','selected');
				element.trigger("liszt:updated");
			}else{
				element.data('selectedValue',selectedValue);
			}
		})
		jQuery('[name="currency_grouping_separator"]',form).on('change',function(e){
			var element = jQuery(e.currentTarget);
			var selectedValue = element.val();
			var decimalSeperatorValue = jQuery('[name="currency_decimal_separator"]',form).data('selectedValue');
			if(decimalSeperatorValue == selectedValue){
				var message = app.vtranslate('JS_DECIMAL_SEPERATOR_AND_GROUPING_SEPERATOR_CANT_BE_SAME');
				app.helper.showErrorNotification({
                  'message': message
				});
				var previousSelectedValue = element.data('selectedValue');
				element.find('option').removeAttr('selected');
				element.find('option[value="'+previousSelectedValue+'"]').attr('selected','selected');
				element.trigger("liszt:updated");
			}else{
				element.data('selectedValue',selectedValue);
			}
		})
	},
        
    registerNameFieldChangeEvent : function() {
        var form = jQuery('form');
        var specialChars = /[<\>\"\,]/;
        jQuery('[name="first_name"]',form).on('change',function(e){
            var firstNameEle = jQuery(e.currentTarget);
            var firstName = firstNameEle.val();
            var firstNameOldVal = firstNameEle.parent().find('.fieldname').data('prev-value');
            if(specialChars.test(firstName)) {
                Vtiger_Helper_Js.showPnotify(app.vtranslate('JS_COMMA_NOT_ALLOWED_USERS'));
                firstNameEle.val(firstNameOldVal);
            }
        });
        jQuery('[name="last_name"]',form).on('change',function(e){
            var lastNameEle = jQuery(e.currentTarget);
            var lastName = lastNameEle.val();
            var lastNameOldVal = lastNameEle.parent().find('.fieldname').data('prev-value');
            if(specialChars.test(lastName)) {
                Vtiger_Helper_Js.showPnotify(app.vtranslate('JS_COMMA_NOT_ALLOWED_USERS'));
                lastNameEle.val(lastNameOldVal);
            }
        });
    }
},{

	registerNameFieldChangeEvent: function () {
		var form = jQuery('form');
		jQuery('[name="first_name"]', form).on('change', function (e) {
			var firstNameEle = jQuery(e.currentTarget);
			var firstName = firstNameEle.val();
			var firstNameOldVal = firstNameEle.parent().find('.fieldname').data('prev-value');
			if (firstName.indexOf(',') !== -1) {
				Vtiger_Helper_Js.showPnotify(app.vtranslate('JS_COMMA_NOT_ALLOWED_USERS'));
				firstNameEle.val(firstNameOldVal);
			}
		});
		jQuery('[name="last_name"]', form).on('change', function (e) {
			var lastNameEle = jQuery(e.currentTarget);
			var lastName = lastNameEle.val();
			var lastNameOldVal = lastNameEle.parent().find('.fieldname').data('prev-value');
			if (lastName.indexOf(',') !== -1) {
				Vtiger_Helper_Js.showPnotify(app.vtranslate('JS_COMMA_NOT_ALLOWED_USERS'));
				lastNameEle.val(lastNameOldVal);
			}
		});
	}
}, {
	
	/**
	 * register Events for my preference
	 */
	registerEvents : function(){
		this._super();
		Users_PreferenceEdit_Js.registerChangeEventForCurrencySeperator();
	}
});