/*
# Asynchronous vs Synchronous
-Synchronous
-- Operations Runs in Sequence
-- Each Operation Must Wait For The Previous One To Complete
-Asynchronous
-- Operations Runs In Parallel
-- This Means That An Operation Can Occur while Another One Is Still Being Processed

# Call Stack
# Event Loop
# Call Back Queue

# AJAX
- Asynchronous JavaScript And XML
- Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
- You Can Fetch Data Or Send Data Without Page Refresh
- Examples:
--- Youtube Studio
--- Google Drive
--- Upload Article Photo
--- Form Check Name

- Ready State => Status Of The Request
[0] Request Not Initialized
[1] Server Connection Established
[2] Request Received
[3] Processing Request
[4] Request Is Finished And Response Is Ready
- Status
[200] Response Is Successful
[404] Not Found

Declaretion Request:
  let async = new XMLHttpRequest();
  async.open("GET", "https://api.github.com/users/elzerowebschool/repos");
  async.send();
  async.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      this.responseText
    }
  };
*/
