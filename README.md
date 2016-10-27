# poll-vote
Basic solution to cast votes in a web application

Once a vote is cast a cookie is set, if the client revisits the page they will be informed that they have already voted. 

The file sends data via ajax to a php file, which will increment a counter and write to a text file. 
