name:          Quips
description:   Displays a random Quip every page load.
author:        Christopher Froehlich
version:       1.0.0.3
date:          1/9/2012

js:

(function() {
   //Change these to match your environment
   var quipsWikiId = '466';
   var quipsTableId = 'ChemSW_Quips_Div';
   var messageBarTableId = 'CswQuipsTableBody';
   //A table to display in the messageBar div.
   var $quipsDiv = $('<div class="messageBar"><table class="Basic messageBar"><tbody id="' + messageBarTableId + '"><tr><td>&nbsp;</td></tr></tbody></table></div>')
                       .appendTo('#tbFull');
   //get the Table body we just created
   var $randomQuip = $quipsDiv.find('#' + messageBarTableId);
   var $tempDiv = $('<div />');   
   //load the wiki page. This hasn't been appended to the DOM yet, so it's OK that we have the entire page content.
   
   $tempDiv.load('default.asp?pg=pgWiki&ixWikiPage=' + quipsWikiId + '#' + quipsTableId, function(wikiPage) { 
       //Get the quips table body
       var $quipTable = $(wikiPage).find('#' + quipsTableId);
       makeRandomQuip($quipTable, $randomQuip);
   });
   
   function makeRandomQuip($quipTable, $randomQuip) {
       //get a random row from the table
       var quip = $quipTable.find('tr').get().sort(function(){ 
           return Math.round(Math.random())-0.5
       }).slice(0,1);
       //create an add new cell
       $(quip).append($('<td>&nbsp;<a href="default.asp?pg=pgWiki&ixWikiPage=' + quipsWikiId + '&command=edit">Add new quip&nbsp;</a></td>'));
       //empty and append
       $randomQuip.empty();
       $randomQuip.append( quip ); 
   }    
}());


css:

/* body { background-color: red !important; } */