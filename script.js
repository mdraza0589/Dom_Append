        // function addLanguage(langName){
        //     const list=document.createElement('li')
        //     list.innerHTML=`${langName}`
        //     document.querySelector('.language').appendChild(list)
        // }
        // addLanguage('python')
        // addLanguage('cpp')

        // but we should less use of innerHTML
        // we can use appendChild beside of innerHTML

        function addLnaguageInHtml(langName){
            const list = document.createElement('li')
            list.appendChild(document.createTextNode(langName))
            document.querySelector('.language').appendChild(list)
        }
        addLnaguageInHtml('cpp')
        addLnaguageInHtml('c')
        addLnaguageInHtml('php')



        // replace the langName from list
        const secondLang=document.querySelector('li:nth-child(2)')
        // secondLang.innerHTML="mojo"
        
        
        // replace the langName from list
        // const secondLanguage=document.querySelector('li:nth-child(2)')  //there should not be any space in nth-child
        // const newli=document.createElement('li')
        // newli.textContent="c++"
        // secondLanguage.replaceWith(newli)
        
        
        // replace the langName from list
        const firstLang=document.querySelector('li:nth-child(1)')
        firstLang.outerHTML='<li>type   script</li>'


        // remove the list 
        const data=document.querySelector('li:nth-child(2)')
        data.remove()

