function header(){
    var header ="<nav class=\"nav__menu\">\n" +
        "            <div class=\"nav__logo\">\n" +
        "                <a href=\"#\" class=\"nav__logo-link\">\n" +
        "                    Good Foods\n" +
        "                </a>\n" +
        "            </div>\n" +
        "            <ul class=\"nav__list\">\n" +
        "                <li class=\"nav__item\"><a href=\"#\" class=\"nav__item-link\">Home</a></li>\n" +
        "                <li class=\"nav__item\"><a href=\"#\" class=\"nav__item-link\">Foods</a></li>\n" +
        "                <li class=\"nav__item\"><a href=\"#\" class=\"nav__item-link\">Drinks</a></li>\n" +
        "                <li class=\"nav__item\"><a href=\"Cookingrecipe.html\" class=\"nav__item-link\">Cooking recipe</a></li>\n" +
        "                <li class=\"nav__item\"><a href=\"News.html\" class=\"nav__item-link\">News</a></li>\n" +
        "                <li class=\"nav__item\"><a href=\"#\" class=\"nav__item-link\">Contact</a></li>\n" +
        "            </ul>\n" +
        "\n" +
        "            <div class=\"nav__hotline\">\n" +
        "                <a href=\"#\">Hotline: 0366609304</a>\n" +
        "            </div>\n" +
        "            <label class=\"menu-icon\" for=\"nav-mobile-input\">\n" +
        "                <span class=\"icon-list glyphicon glyphicon-th-list\"></span>\n" +
        "            </label>\n" +
        "            <input type=\"checkbox\" hidden name=\"\" class=\"nav-input\" id=\"nav-mobile-input\">\n" +
        "            <label class=\"nav__overlay\" for=\"nav-mobile-input\"></label>\n" +
        "            <div class=\"nav-mobile\">\n" +
        "                <label class=\"nav-mobile-close\" for=\"nav-mobile-input\">\n" +
        "                    <span class=\"glyphicon glyphicon-remove\"></span>\n" +
        "                </label>\n" +
        "                <ul class=\"menu-list\">\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">Home</a></li>\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">Foods</a></li>\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">Drinks</a></li>\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">Cooking recipe</a></li>\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">News</a></li>\n" +
        "                    <li class=\"menu__item\"><a href=\"#\" class=\"menu__item-link\">Contact</a></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </nav>";
    document.getElementById("header").innerHTML=header;
}
header();
function footer(){
    var footer="<div class=\"col-md-3 footer-brand fadeInLeft\">\n" +
        "            <h2>Good Foods</h2>\n" +
        "            <p>Love is put in the dish as a spice to make the dish richer. So when we appreciate the cook's work, we feel better.</p>\n" +
        "            <p>Copyright © 2021 by HelloKilty</p>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-4 footer-nav fadeInUp\">\n" +
        "            <h4>Menu</h4>\n" +
        "            <div class=\"col-md-6\">\n" +
        "                <ul class=\"pages-list\">\n" +
        "                    <li><a href=\"#\">Foods</a></li>\n" +
        "                    <li><a href=\"#\">Drinks</a></li>\n" +
        "                    <li><a href=\"Cookingrecipe.html\">Cooking recipe</a></li>\n" +
        "                    <li><a href=\"News.html\">News</a></li>\n" +
        "                    <li><a href=\"#\">Contact</a></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-6\">\n" +
        "                <ul class=\"function-list\">\n" +
        "                    <li><a href=\"#\">About Us</a></li>\n" +
        "                    <li><a href=\"#\">Contacts</a></li>\n" +
        "                    <li><a href=\"#\">Terms & Condition</a></li>\n" +
        "                    <li><a href=\"#\">Privacy Policy</a></li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-2 footer-social fadeInDown\">\n" +
        "            <h4>Follow Us</h4>\n" +
        "            <ul class=\"social-list\">\n" +
        "                <li><a href=\"#\">Facebook</a></li>\n" +
        "                <li><a href=\"#\">Twitter</a></li>\n" +
        "                <li><a href=\"#\">Instagram</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-3 footer-ns fadeInRight\">\n" +
        "            <h4>Contributions</h4>\n" +
        "            <p>Your comments for us</p>\n" +
        "            <p>\n" +
        "                <div class=\"input-group\">\n" +
        "                    <input type=\"text\" class=\"form-control\" placeholder=\"Fill in...\"/>\n" +
        "                    <span class=\"input-group-btn\">\n" +
        "                        <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-envelope\"></span></button>\n" +
        "                    </span>\n" +
        "                </div>\n" +
        "            </p>\n" +
        "        </div>";
    document.getElementById("footer").innerHTML=footer;
}
footer();