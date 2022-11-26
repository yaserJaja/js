/*

DOM: Document Object Module

##############
  Properties:
##############
  * Getting on Element:
    ******************
    body
    title
    images
    forms
    links
    *****************
    children => element
    childNodes
    firstChild
    lastChild
    firstElementChild
    lastElementChild
    *****************
    nextSibling  => sibling mean brother
    previousSibling
    nextElementSibling
    previousElementSibling
    parentElement
    *****************

  * write inside element or replacing its
    inner => HTML | textContent
    outer => HTML | textContent

###########
  Methods:
###########

  * Getting on Element:
    getElementById()
    getElementsByClassName() => arr
    getElementsByTagName() => arr
    querySelector()
    querySelectorAll() => arr
  
  * Control with Attributes
    attribute = vlaue
    getAtteribute()
    setAtteribute()
    hasAttribute()
    hasAttributes()
    removeAttribute()
    createAttribute()

  * Creating new Element:
    createElement()
    createTextNode()
    createComment()
    createAttribute()
    cloneNode(bool)

  * putting Element:
    appendChild()
    append() => last Element
    before()
    after()
    prepend() => first Element

  * ClassList
    length
    add()
    remove()
    toggle()
    contains()
    item()
  
  * CSS:
    element.style.property = 'value'
    element.style.setProperty(, , "important")
    element.style.removeProperty()
    element.style.cssText = `code CSS`
    Document.styleSheet[].rules[].style....

#######
Events:
#######
  * Add Event To Element:
    1. <tagName onEvent="action">
    2. element.onEvent = function () {}
    3. element.onEvent = functionName;
    4. element.addEventListner('event', action);
  
  * Events of Types:
    focus 
    blur
    click
    mouseover
    mouseout
    mousedown
    mouseup
    mousemove
    mouseenter
    contextmenu
    scroll
    keydown
    keyup
    submit
    change
    load
    resize
    unload
    scroll

*/
