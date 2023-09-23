const btn = document.querySelector(".catch-btn");
const title = document.querySelector(".title")
const title_name =document.querySelector(".title-name")
const copy_btn = document.querySelector(".copy-btn")

btn.addEventListener('click', async()=>{
    let[tab] = await chrome.tabs.query({active:true, currentWindow:true})
    console.log(tab)
    console.log(tab.title)
    title.style.display = 'grid'
    console.log(title)
    title_name.innerText=`${tab.title}`
})

copy_btn.addEventListener("click",async ()=>{
    try {
        await navigator.clipboard.writeText(title_name.innerText)
    } catch (error) {
        console.log("error while coping",err)
    }
})