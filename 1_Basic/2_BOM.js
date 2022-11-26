/*

BOM: Browser Object Module

########
Methods:
########
* setTimeour(function, milisecond)
* clearTimeout(setTimeour)
* setInterval(function, every milisecond)
* clearIntervale(setInterval)
* print()
* focus()
* stop()
* open(url[, target, css])
* close()


#######
Scroll:
#######
* properties:
    scrollX
    scrollY
* Methods: 
    scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
    scroll(x, y);
    scrollTo(x, y);
    scrollBy(x, y);

#######
Screen:
#######
* Properties:
    width
    height
    availWidth
    availHeight
    colorDepth
    piexlDepth
    orientation.type

#########
Lcoation:
#########
href = protocol + hostName + pathName => url
* Properties:
  href
  protocol
  hostName
  port
  host
  pathName
  hash

* Methods:
  reload()
  assign() => back and save Data
  replace() 

########
History:
########
* Properties
  length

* Methods: 
  back()
  forward()
  go(delte)


// Storage => Adding Removing Readding
#############
localStorage: 
  size: 5mb - 10mb
#############
  key and vlaue is a string
#############
sessionStorage: 
  size: 5mb
#############

* Adding Data
    Tips: if your data isn't a string put inside JSON.stringify(your data)
    1. localStorage.setItem(key, value)
    2. localStorage.key = value
* Readding Data
    Tips: if your data isn't a string put inside JSON.parse(your data)
    1. localStorage.getItem(key)
    2. localStorage.key
    Tips: if you want return keyName use key(index)
* Removing Data
    1. localStorage.removeItem(key)
    2. localStorage.clear()

*/
