// Edit Your Icons Here:-
let heroFeatureIcon1 = "bi-shield-check";
let heroFeatureIcon2 = "bi-arrow-repeat";
let heroFeatureIcon3 = "bi-globe";

let whyUsIcon1 = "bi-truck";
let whyUsIcon2 = "bi-shield-check";
let whyUsIcon3 = "bi-headset";

let spotlightIcon1 = "bi-cpu";
let spotlightIcon2 = "bi-battery-full";
let spotlightIcon3 = "bi-shield-check";
let spotlightIcon4 = "bi-arrow-repeat";

let footerSocial1 = "bi-facebook";
let footerSocial2 = "bi-twitter-x";
let footerSocial3 = "bi-instagram";
let footerSocial4 = "bi-youtube";

// DON'T EDIT HERE!
function lowercase(text) {
    return text.trim().toLowerCase();
}

heroFeatureIcon1 = lowercase(heroFeatureIcon1);
heroFeatureIcon2 = lowercase(heroFeatureIcon2);
heroFeatureIcon3 = lowercase(heroFeatureIcon3);
whyUsIcon1 = lowercase(whyUsIcon1);
whyUsIcon2 = lowercase(whyUsIcon2);
whyUsIcon3 = lowercase(whyUsIcon3);
spotlightIcon1 = lowercase(spotlightIcon1);
spotlightIcon2 = lowercase(spotlightIcon2);
spotlightIcon3 = lowercase(spotlightIcon3);
spotlightIcon4 = lowercase(spotlightIcon4);
footerSocial1 = lowercase(footerSocial1);
footerSocial2 = lowercase(footerSocial2);
footerSocial3 = lowercase(footerSocial3);
footerSocial4 = lowercase(footerSocial4);

document.getElementById("heroFeatureIcon1").className = `bi ${heroFeatureIcon1} hero-icons`;
document.getElementById("heroFeatureIcon2").className = `bi ${heroFeatureIcon2} hero-icons`;
document.getElementById("heroFeatureIcon3").className = `bi ${heroFeatureIcon3} hero-icons`;
document.getElementById("whyUsIcon1").className = `bi ${whyUsIcon1} why-us-icons`;
document.getElementById("whyUsIcon2").className = `bi ${whyUsIcon2} why-us-icons`;
document.getElementById("whyUsIcon3").className = `bi ${whyUsIcon3} why-us-icons`;
document.getElementById("spotlightIcon1").className = `bi ${spotlightIcon1}`;
document.getElementById("spotlightIcon2").className = `bi ${spotlightIcon2}`;
document.getElementById("spotlightIcon3").className = `bi ${spotlightIcon3}`;
document.getElementById("spotlightIcon4").className = `bi ${spotlightIcon4}`;
document.getElementById("footerSocial1").className = `bi ${footerSocial1}`;
document.getElementById("footerSocial2").className = `bi ${footerSocial2}`;
document.getElementById("footerSocial3").className = `bi ${footerSocial3}`;
document.getElementById("footerSocial4").className = `bi ${footerSocial4}`;
