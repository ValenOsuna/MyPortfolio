const translations = {
  es: {
    projectTitle: "🛒 Sistema de Gestión Mayorista",
    projectIntro: "Plataforma fullstack para la administración de operaciones mayoristas en supermercados. El sistema permite la gestión completa de productos, ventas, stock, clientes y cuentas de usuario. Incorpora autenticación y login seguros, con división de roles como administrador, vendedor y cliente, cada uno con su panel personalizado. La lógica de negocio incluye control de inventario en tiempo real, seguimiento de ventas y validaciones según permisos asignados.",
    featuresTitle: "Funcionalidades:",
    featureList: '<li>CRUD de productos, clientes, ventas y stock.</li><li>Roles diferenciados con paneles personalizados.</li><li>Control de stock e historial de ventas.</li><li>Validación de lógica de negocio integrada.</li><li>Autenticación de usuarios y control de acceso.</li>',
    techTitle: "Tecnologías utilizadas:",
    imgTitle: "📸 Capturas del Proyecto:"
  },
  en: {
    projectTitle: "🛒 Wholesale Management System",
    projectIntro: "Fullstack platform for managing wholesale operations in supermarkets.The system enables complete management of products, sales, stock, clients, and user accounts. It incorporates secure authentication and login, with role-based access for administrators, sellers, and clients, each with a personalized dashboard. Business logic includes real-time inventory control, sales tracking, and validations based on assigned permissions.",
    featuresTitle: "Features:",
    featureList: '<li>CRUD for products, clients, sales, and stock.</li><li>Role-based access with personalized dashboards.</li><li>Stock control and sales history.</li><li>Integrated business logic validation.</li><li>User authentication and access control.</li>',
    techTitle: "Technologies used:",
    imgTitle: "📸 Project Screenshots:"
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
