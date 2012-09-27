/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$('#page-home').live('pageinit', function(event){
    $('.api-div').hide();
    $('.api-div#api-project').show();
    $('ul.ui-listview li').first().addClass('buttonHover');
    
    $('#intro').click(function() {
        $('#username').value('');
        $('#password').value('');
        $.mobile.silentScroll(0);            
    });
    
    
    $(function() {
        var project = jQuery('#api-project');
    	var gebouw = jQuery('#api-gebouw');
    	 var verdieping = jQuery('#api-verdieping');
    	 var i=0;
        for(i=0; i<10; i++)
    	    {
            var projectdiv = jQuery(' <div id="div'+i+'"  data-role="button" class="textLeft ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c" 				 							data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c"><span class="ui-btn-inner 						 							ui-btn-corner-all"><span class="ui-btn-text">Project '+i+' </span></span></div>');
    		project.append(projectdiv);
    		
           $('.api-div#api-project div#div'+i).click(function() {
            $('.api-div').hide();
            $('.api-div#api-gebouw').show();
    		$('ul.ui-listview').find('li.ui-btn').each(function(){
    			$(this).removeClass('buttonHover');
    		});
    		  $('ul.ui-listview li#gebouw').addClass('buttonHover');
           
        });
        }
    	
    	 for(i=0; i<10; i++)
    	    { var gebouwdiv = jQuery(' <div id="div'+i+'" data-role="button" class="textLeft ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c" 				 							data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c"><span class="ui-btn-inner 						 							ui-btn-corner-all"><span class="ui-btn-text">Building '+i+' </span></span></div>');
    		 gebouw.append(gebouwdiv);
    		 	
           $('.api-div#api-gebouw div#div'+i).click(function() {
            $('.api-div').hide();
            $('.api-div#api-verdieping').show();
    		$('ul.ui-listview').find('li.ui-btn').each(function(){
    			$(this).removeClass('buttonHover');
    		});
    		  $('ul.ui-listview li#verdieping').addClass('buttonHover');
           
        });
        }
    	
    	 for(i=0; i<10; i++)
    	    {
           var verdiepingdiv = jQuery(' <div id="div'+i+'" data-role="button" class="textLeft ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c" 				 							data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c"><span class="ui-btn-inner 						 							ui-btn-corner-all"><span class="ui-btn-text">Floor '+i+' </span></span></div>');
    		verdieping.append(verdiepingdiv);
        
        }
    	
    });
    
    
    
    
    
    
    
        
    $('div ul li a').click(function(event) {
        event.preventDefault();
     
        //alert('clicked : ' + $(this).attr('id'));
        var attrId = $(this).attr('id');

        if (attrId.indexOf("click") !== 0) {
            return;
        }
        
        var api = '#api' + attrId.substring(attrId.indexOf('-'));
        $('ul.ui-listview').find('li.ui-btn').each(function(){
			$(this).removeClass('buttonHover');
		});
        // hide all div's, show only this one
        $('.api-div').hide();
        $(api).show();
        $(this).parent().parent().parent().removeClass('ui-btn-up-b').addClass('buttonHover');
        // if small screen and portrait - close after tap
        var disp = $('ul #listdivider').css("display");
        //alert(disp + ' : ' + api);
        if (disp === 'none') {
            $('div.ui-collapsible').trigger("collapse");
        } else {
            $.mobile.silentScroll(0);            
        }
    }); 
    
    $('#listdivider').click(function(event) {
        event.preventDefault();
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    });
});


