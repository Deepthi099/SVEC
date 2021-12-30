### Front-end Technologies

- HTML
- CSS
- Java Script
- Bootstrap framework
- Angular framework
- ReactJs

### Back-end Technologies

- Node.js
      - express.js
      - nodemoon
      - cors
      - ditenv
- PHP
- C#
- Java
- Python

### DataBases

- MogoDb
- Myseql
- SQLite
- Firebase
- Postgrassql
- Oracle

-VCS or (Source course mnagement)
       - Distributed VCS
              -Git,Mercurial
       - Remote (Central) VCS
              -Github, Bitbucket


### task
===
   -audio
-video

### css
 - cascading style sheets
 -Types of css
    - inline css
    - internal css
    - external css

+  syntax of css
```
  selector{
         css properties
  }
```


### selectors
+ simple selectors
    - by element name
- grouping selector(,)
-class selector
- id selector

+ combinations
+ descendent selector()
+ child selector(>)
+ adjacent sibling selector(+)
+ general  
### box Model
+ margin
+ border
+ padding
   - padding :10px(for alladjacent sides)
   - padding :10px 30px (10px for top and bottom;30px for left and right)
   - padding :10px 300px 50px (10px for top;300px for left and right;50px for bottom)
   -width
   1rem=16px
### flex-box

+ dispaly
    - none
    - inline
    - block
    - 
+ positions
   - static 
   - relative
   - fixed
   -sticky
+ align-content
+ align-items
+ align-self

### task2
 - index.html
 - register.html
 - login.html

### media Quries

  - Extra small devices (mobiles)
     - max-width(600px)
  - small devices (large phones)
     - min-width(600px)
     - max-width(768px)
  - Medium devices(small laptops)
     - min-width:(768px)
  - Large Devices(Large laptops)
     - min width:(992px)
  - extra large devices
     - min-width:(1200px)

  ### Reference links
  - flaticons



```
@media only screen(max-width:320px) and
(max-width:500z){
   css code
}
```

### Bootstrap4.6

- it is a css frame work

Task3:
=====

  - navbar with responsive

- module (collection of functions and classes)
- package(colelction of modules)
- library(collection of packages)
- frame work(collection of librabies)

+ module-->package-->library-->Frame work
+ types of modes
  - online 
     - CDN links
  - offline
+ background-colour - bg
+ text-whit

+ margin in bootstrap(m-*(0-5))
 - 0 --> 0rem
 - 1 --> 0.25rem(4px)
 - 2 --> 0.5rem(8px)
 - 3 --> 1 rem(16px)
 - 4 --> 1.5rem(24px)
 - 5 --> 3rem(48px)
 - m (margin in all directions)
 - m2-5(margin-left)
 - mt(margin-top)
 - mb(margin-bottom)
 - mr(margin-right)
 - ml(margin-left)
+ padding(padding-left--> p1-5)

+ colour
  - primary
  - secondary
  - info
  - success
  - warning
  - danger
  - light
  - dark
  - white

+ we can use colour classes for
   - buttons(btn btn-primary)
   - text( text-white)
   - backround(bg-scondary)
   - alerts( alert alert-primary)
   
+grid system
  - col-sm-12
  - sm (small devices)
  - lg (large devices)
  -xl (extra large devices)

+ modal
+ table

### Jva script

+ in 1995 'breden Eich' introduced java script(Es-262)
+ Java script loosely toupled and dynamic language
+ text based progrmming lanuage and we can use  in client-side and sever-side (Node.js) for dynamic web applications
- ECMA (ES-6)
  - let & const
  - map()
  - arrow function
  - classes

+ datatypes
    - number
    - BigInt(2^53-1)
    - string 
    - boolean
    - undefine
    - null
    - object
    - array
+ variables
  - var let and const
  - scope
    - function level --> var
    - block level -->let &const
  - redefine -->var,let
  - redeclare --> var
  'typeof()'
  + object

  '''
  {
     name:"deepthi"
  }
  '''

  + Arrays

  ### alerts

+ to generate notifications
  - alert
  - prompt(to take input from the user)
  - cofirm

+ console statements
  - 'console.log()'
  - 'console.info()'
  - 'console.warn()'
  - 'console.error()'

+ Spread operator
   
   - to change array elements from one array to another array(swap)

 '''
    '''variableName
 '''
 + rest parameter
  + to handle function parameters
  
 '''
 
 '''parameter

 ''' 

 + destructing of array and objects

 + functions
  - function with function-name
  '''
  function demo(x,y){
     retuen x+y

  }
  demo()
  '''
  - anonymous function
  '''
  let demo=function(x,y)
  {
     retuen x+y
  }
  '''
  - arrow function
  '''
  let demo= (x,y) => {
     retuen x*y
  }
  demo(3,4)
  '''

  + for in
    - to get index values of an array
   + for of
    - to get elements in an array

   + forEach()--> (ES-5)
   + map() --> (ES-6)

   ### DOM

   - Document Object Model
   - document
   - history
   - window
   - navigator
+ DOM methods
  -'getElementById()'
  -'getElementByClassName()'
  - 'querySelector()'
  - 'innerText'
  - 'textContent'
  - 'append'
  - 'appendChild'
  - 'innerHTML'
  - 'setAttribute'
  - 'classList'
  - 'style'
  - 'src'

  ### JSON
  + JavaScript Object Notation
    - To exchange information between application and server
    '''
    {
      "name":"sai deepthi",
      "salary":"5.0lpa",
      "designation":"MERN DEVELOPER",
      "mobile":67809000000
    }
    '''
    + Ajax call or promices(fetch Api
    ) or axios