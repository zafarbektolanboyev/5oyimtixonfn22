document.addEventListener("DOMContentLoaded", function() {
    // Modal va tugmalarni tanlash
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("backetBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", (e) =>{
        e.preventDefault(e)
    })
    // Modalni ochish
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Modalni yopish
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Modal tashqarisini bosganda yopish
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
