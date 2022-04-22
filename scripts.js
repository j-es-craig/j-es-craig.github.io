document.querySelectorAll('a[href^="#"]').forEach(ancor => {
    anchor.addEventListner("click", function(e){
        //e.preventDefaulty();
        document.querySelectorAll(this.getAttribute("href")).scrollIntoView({
            behaviour: "smooth"
        });
    });
});