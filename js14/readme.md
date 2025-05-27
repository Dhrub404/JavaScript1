DOM manipulating CSS-->
    .style tag changes-->
        let paraElement=document.getElementById('spara') //SET
        console.log(paraElement.style)  //GET
        Element.style.backgroundColor='cyan'  //MAKING CHANGES
        (DRAWBACK  = style can only change one property at a time)

    
    .cssText--> (In this we can access multiple styles/properties at once)
        let secondElement  = document.getElementById('sdiv')
        secondElement.style.cssText; //to verify the let statement
        secondElement.style.cssText = " background-color : green ; padding: 1.2rem; color : white";


     .setAttribute-->(Used to set values like class to a tag like div, etc)
        this property overwrites the previous data in the respective class/style/etc.
        let firstElement=document.querySelector('#fdiv')
        firstElement.setAttribute('class','divClass')
        firstElement.setAttribute('style','background-color: blue')  


    .className--> (Used to insert single or multiple classes)
        let fpara= $0;  //SET
        fpara  //GET
        fpara.classList='HOGA Ash';  //CHANGES (it will override the previous classes)


    .classList--> (GET in array/list format)
        |-:add class
        |-:remove class
        |-: toggle class(if a class is present it will remove it and after again toggle it will add it again)
        |-: contains(check if the searched class is present or not)

        let fpara = document.querySelector('#fpara'); //SET​
        fpara.classList //GET

        fpara.classList.add('thirdClass')

        fpara.classList.remove("Firstclass")

        fpara.classList.toggle("Secondclass")
        false
        fpara.classList.toggle("Secondclass")
        true
        fpara.classList.contains("thirdClass") 
        true
