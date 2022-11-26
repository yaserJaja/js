/*
Mechanism آلية 
Track يتتبع
Reached وصل
Detect يكشف
Handle يتعامل

Call Back
Call Stack
API
Event Loop

* First:
[1] Callback Stack
    --- Mechanism To Make Interpreter Track Your Calls
    --- When You Call A Function Its Added To The Stack
    --- When Function Executed Its Removed From The Stack
    --- The Interpreter Continue Calling From The Last Point Reached
    --- Call Stack Detect Web API And Leave It To The Browser To Handle It
[2] Web API
    --- Methods Available From Environment => Browser
    --- When Complete It Add The Callback To The Callback Queue
[3] Event Loop
    --- Wait The Call Stack To Finish
    --- Get Callback From Callback Queue
    --- Add Callback To Call Stack
[4] Callback Queue

* Second: 
  JS: is single thread it's not multi thread

[1] Synchronous:
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete

[2] Asynchronous:
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
*/

/*
AJAX:
- Asynchronous JavaScript And XML
- Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
- It Use "XMLHttpRequest" Object To Interact With The Server
- You Can Fetch Data Or Send Data Without Page Refresh

-- Status
[200] Response Is Successful
[404] Not Found

---- Create Connection 

let async = new XMLHttpRequest()
async.open('Method', 'target Link')
async.send()
async.onreadystatechange = () => {
  if (this.readyState === 4 && this.status === 200) {
    this.responsText
  }
}
*/