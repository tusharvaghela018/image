
    const addItem = async(item) => {
        await randomDelay()

        let div = document.createElement("div")
        div.innerHTML = item
        document.body.append(div)
    }

    function randomDelay(){
        return new Promise((resolve,reject)=>{
            let timeout = 1+ Math.random()*7
            setTimeout(() => {
                resolve()
            }, timeout*1000);
        })
    }


    async function main(){
    
        setInterval(() => {
            let last = document.body.getElementsByTagName("div")

            last = last[last.length-1]

            if(last.innerHTML.endsWith("...")){
                last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
            }

            else{
                last.innerHTML  = last.innerHTML + "."
            }
        }, 200);
    
    let text = ["> initialized hacking and reading your data",
    "> reading your files",

    "> password files detected",

    "> sending all password and personal files to the server",

    "> cleaning up"]

    console.log(text)

    for (const item of text) {
        await addItem(item)
    }

    }

    main()