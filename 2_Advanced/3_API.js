// API: Application Programming Interface

/*
How To Work Website With API?
  # Browser Send Request To Server
  # Server Retrieve Data To Data Base
  # Data Base Send Data To Server
  # Server Build API And Send Response(API) To Browser
  # Browser Read API From Response And Fill UI Element With Data
*/

/*
Components Of Request:
  # Type Method: [GET, POST, PUT, PATCH, DELETE]
  # URL
  # Params: [
    PATH: write inside url without ?key=value
    Query: write inside url with ?key=value
    Body: write outside url as json
  ]
  # headers: group of information write as key and value
*/

/*
HTTP Response Status:
  # Informational responses (100–199)
  # Successful responses (200–299)
  # Redirection messages (300–399)
  # Client error responses (400–499)
  # Server error responses (500–599)
*/

/*
Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
*/

/*
XMLHttpRequest class:

  # Properties:
    * onload => event
    * onreadystatechange => event
    * status
    * responseType = 'json'
    * responseText
    * response

  # Methods:
    * open('type', 'url')
    * send('Body Params') | send()
    * setRequestHeader('key', 'value')
    * 
*/

/*
Type Operation On Data [CRUDS: Create Read Update Delete Search]:
  
  # Create:
    * Type Method: POST
    * URL
    * Header
    * Body Params
  
  # Read:

    1. All Data:
      * Type Method: GET
      * URL

    2. Specific Data:
      * Type Method: GET
      * URL/Path Parms
  
  # Search:
    * Type Method: GET
    * URL/Query Params
  
  # Update:
    
    1. All Data:
      * Type Method: PUT
      * URL/Path Params
      * Headers
      * Body Params
    
    2. Part of Data
      * Type Method: PATCH
      * URL/Path Params
      * Headers
      * Body Params
    
    # Delete:
      * Type Method: DELETE
      * URL/Path Data
    
    # Authentication:
*/
