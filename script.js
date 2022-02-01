/*------ABOUT TABS------*/
const tabContainer=document.querySelector(".about-tabs"),
 aboutSection=document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) =>{
if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target=e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}
});
/*-------portfolio POPUP--------*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("view-project-btn")){
      togglePortfolioPopup();
      portfolioItemDetails(); 
    }
}) 
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);
//hide popup when clicking outside of it
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup");
        portfolioItemDetails(e.target.parentElement);
    }
})
/*By this function the popup page will automatically get the details of different work projects,
 like details , thumbnail and heading 
 so u dont have to make different pages 
 Just add different details and thumbnails in the html file and 
 see the result yourself
 */
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src=portfolioItem.querySelector(".thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML=portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML=portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}

/*--------Toggle Navbar----------*/
const navToggle=document.querySelector(".nav-toggler");
navToggle.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
}) ;
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*----------ACTIVE SECTION----------*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash!==""){

        // activate overlay to avoid multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggle.classList.add("hide");
        
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");

        },500);
    }
});

//LOADER PAGE
window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    /*---------Page Loader---------*/
    document.querySelector(".loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".loader").style.display="none";
    },600);
});

VanillaTilt.init(document.querySelector(".main"), {
    max: 25,
    speed: 400
});