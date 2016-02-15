# Catz

This Zendesk app displays cat gifs in the ticket sidebar. It uses the [Google Custom Search API](https://developers.google.com/custom-search/) to make a request to images on imgur.com with the query 'animated cat gif'. The API has a limit of 100 results per query, so a random integer from 0 to 99 is assigned at the time of the request to randomize the results

The user can click the button to load another image within the app. Additional buttons allow the user to search for funny, happy, or sad images.

Errors are handled by serving a stock error gif,  the status code and status message of the error are shown, as well as a link to prompt the user to submit an issue if the error persists.

Please [submit an issue here](https://github.com/niallcolfer/catz/issues/new) if you find any errors. Pull requests are welcome.
