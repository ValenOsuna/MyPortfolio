const translations = {
  es: {
    projectTitle: "✈️ Sistema de Gestión de Aerolínea",
    projectIntro: "Aplicación fullstack para la gestión integral de vuelos, destinos, aeronaves y pasajeros. Construida con un modelo relacional que permite un manejo eficiente y consistente de los datos. Incluye operaciones CRUD completas y validaciones de negocio críticas, como control de capacidad de aeronaves y peso permitido de equipajes. El sistema facilita la administración de la disposición de asientos y optimiza la experiencia operativa con una interfaz clara y fácil de usar.",
    featuresTitle: "Funcionalidades:",
    featureList: '<li>CRUD de vuelos, aviones, aerolíneas, pasajeros y equipajes.</li><li >Validación de reglas de negocio como capacidad del avión y peso del equipaje.</li><li>Mantenimiento y reglas de disposición de asientos.</li><li>Interfaz clara e intuitiva.</li>',
    techTitle: "Tecnologías utilizadas:",
    imgTitle: '📸 Capturas del Proyecto:'
  },
  en: {
    projectTitle: "✈️ Airline Management System",
    projectIntro: "Fullstack application for comprehensive management of flights, destinations, aircraft, and passengers. Built on a relational model enabling efficient and consistent data handling. Includes complete CRUD operations and critical business validations such as aircraft capacity control and luggage weight limits. The system supports seat arrangement management and optimizes operational workflow with a clear and user-friendly interface.",
    featuresTitle: "Features:",
    featureList: '<li>CRUD for flights, planes, airlines, passengers, and luggage.</li><li>Business rule validation, including aircraft capacity and luggage weight limits.</li><li>Seat layout management and assignment rules.</li><li>Clear and intuitive interface.</li>',
    techTitle: "Technologies used:",
    imgTitle: '📸 Project Screenshots:'
  }
};


    let paragraphArray = [
  "projectTitle",
  "projectIntro",
  "featuresTitle",
  "featureList",
  "techTitle",
  "imgTitle"
];

  let currentLang = localStorage.getItem('lang') || 'es';
   document.getElementById('langToggle').addEventListener('click', function (e) {
      toggleLanguage()
    });

    document.addEventListener("DOMContentLoaded", () => {
      mapLang();  }) 



    function toggleLanguage() {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem("lang", currentLang);
      
      mapLang();
    }

    function mapLang(){
      document.getElementById('langToggle').checked = currentLang === "en"
      
      for(let i = 0; i < paragraphArray.length; i++)
        document.getElementById(paragraphArray[i]).innerHTML = translations[currentLang][paragraphArray[i]];
    }
