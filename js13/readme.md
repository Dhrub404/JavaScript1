DOM(Document Object Model) ==>
it is used on window on browser (use document on console window to opoen complete html document)
    Accessing/Fetching HTML -->
        -> basis of tagname
        ->className
        ->ID
        
        use ==> document.getElementById("id")
                document.getElementByClassName("className")
                document.getElementByTagName("TagName")

        ::As we know -->class is represented by (.) dot
                        id by #
                        tag by tag name itself
        
        we can use  document.querySelector('#id')
                    document.querySelector('.ClassName')
                    document.querySelector('TAGNAME')
            (BUT THIS QUERY SELECTOR only display first element  )
        
        So we use   document.querySelectorAll('#id')
                    document.querySelectorAll('.ClassName')
                    document.querySelectorAll('TAGNAME')


    Updating Existing Element --> step one : define the page by using let button/(any tag) = $0 ,, then 
        |-->innerHTML 
        |-->outerHTML
        |-->textContent
        |-->innerText

        innerHTML  ==>  button.innerHTML :- it shows the html used inside that tag
                        to change it use --> button.innerHTML="<p>change kro</p>"

        outerHTML  ==>  button.outterHTML :- it is used to change the tag 
                        to change it use --> button.innerHTML="<div>changing the tag</div>"  

        textContent ==> create a html page (created in this folder) t, then run it
                        now on console, let element =document.querySelector("#fdiv")

                        element.textContent ==>element Shows the content accoring to Html page 

        innerText  ==>  element.innerText   ==> it shows user interface html 


    ADD ELEMENT --> steps:
                        let fHeading = document.createElement('h1')
                        fHeading.textContent= "This is JS"
                        fHeading
                        <h1>​This is JS​</h1>​ //output
                        let bodyTag = document.querySelector('body')
                        bodyTag.appendChild(fHeading)
                        <h1>​This is JS​</h1>​ //output

        ADD element at any position 
            let mydiv=document.querySelector('#mydiv')
            mydiv
            let newElement=document.createElement('span')
            newElement
            <span></span>
            newElement.textContent="This is my NEW ELEMENT"
            mydiv.insertAdjacentElement('beforebegin',newElement)   

            there are 4 positions --> beforebegin,afterbegin,beforeend,afterend

            mydiv.insertAdjacentElement('afterbegin',newElement)
            mydiv.insertAdjacentElement('afterend',newElement)
            mydiv.insertAdjacentElement('beforeend',newElement)
        

    REMOVE ELEMENT IS IN index.js