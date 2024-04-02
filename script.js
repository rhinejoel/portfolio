function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
			
// SELECT SPECIFIC PROJECTS
$(document).on("click", ".project-filter li", function () {
    $(this)
    .addClass("project-filter-active")
    .siblings()
    .removeClass("project-filter-active");
});

$(document).ready(function () {
    $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
        $(".project-article").show();
    } else {
        console.log(value);
        $(".project-article")
        .not("." + value)
        .hide();
        $(".project-article")
        .filter("." + value)
        .show();
    }
    });
});