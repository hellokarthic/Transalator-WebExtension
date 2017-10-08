browser.contextMenus.onClicked.addListener(contextMenuAction);
function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findLang(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "French",
  title: "French",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "Spanish",
  title: "Spanish",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "Hindi",
  title: "Hindi",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "Tamil",
  title: "Tamil",
  contexts: ["selection"]
});



// Find the Search Engine query url to form the url for new tab
function findLang(LangText){

        if(LangText == 'French'){
                return 'https://translate.google.co.in/#auto/fr/';
        }
        else if(LangText == 'Spanish'){
                return 'https://translate.google.co.in/#auto/es/';
        }
        else if(LangText == 'Hindi'){
                return 'https://translate.google.co.in/#auto/hi/';
        }
        else if(LangText == 'Tamil'){
                return 'https://translate.google.co.in/#auto/ta/';
        }
        return '';
}

