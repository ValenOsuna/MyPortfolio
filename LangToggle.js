
    const translations = {
      es: {
        'mainSubtitle': 'Junior Python Developer · Estudiante de Analista en Sistemas',
        'aboutTitle': '🧠 Sobre mí',
        'aboutText': 'Curioso, proactivo y dedicado. Me encanta aprender nuevas habilidades a través del <span class="highlight">trabajo práctico</span>. Disfruto los desafíos y los veo como oportunidades para crecer.',
        'techTitle': '🛠️ Tecnologías',
        'techText': '<span class="highlight">Python</span>, <span class="highlight">Flask</span>, <span class="highlight">MySQL</span>, <span class="highlight">React</span>, <span class="highlight">Docker</span> y <span class="highlight">AWS</span>.',
        'contactTitle': '📬 Contacto',
        'projectsTitle': "🧪 Mis Proyectos",
        'project1Title': "✈️ Sistema de gestión de aerolínea",
        'project1Text': "Sistema fullstack con modelo relacional para gestionar vuelos, destinos, aeronaves, pasajeros, equipajes y boletería. Ofrece CRUD completo, validaciones clave (capacidad de aviones, peso de equipajes) y gestión de asientos, todo desde una interfaz intuitiva para una administración eficiente y centralizada. <a href='templates/airlane.html'>ver mas..",
        'project2Title': "🛒 Gestión mayorista de supermercados",
        'project2Text': "Sistema administrativo web para gestionar ventas, stock, productos y usuarios con control de acceso por roles. Cada usuario dispone de paneles personalizados que facilitan la gestión según sus permisos. <a href='templates/warehouse.html'>ver mas..</a>",
        'resumeText' : "Curriculum"

      },
      en: {
        'mainSubtitle': 'Junior Python Developer · System Analyst Student',
        'aboutTitle': '🧠 About Me',
        'aboutText': 'Curious, proactive and dedicated. I love learning new skills through <span class="highlight">hands-on work</span>. I enjoy challenges and see them as opportunities to grow.',
        'techTitle': '🛠️ Stacks',
        'techText': '<span class="highlight">Python</span>, <span class="highlight">Flask</span>, <span class="highlight">MySQL</span>, <span class="highlight">React</span>, <span class="highlight">Docker</span> and <span class="highlight">AWS</span>.',
        'contactTitle': '📬 Contact Me',
        'projectsTitle': "🧪 My Projects",
        'project1Title': "✈️ Airline Management System",
        'project1Text': "Fullstack system with a relational model to manage flights, destinations, aircraft, passengers, luggage, and ticketing. Provides complete CRUD, key validations (aircraft capacity, luggage weight), and seat management, all through an intuitive interface for efficient and centralized administration. <a href='templates/airlane.html'>See more..</a>",
        'project2Title': "🛒 Wholesale Supermarket Manager",
        'project2Text': "Web-based admin system to manage sales, inventory, products, and users with role-based access control. Each user has a personalized dashboard tailored to their permissions. <a href='templates/warehouse.html'>See more..</a>",
        'resumeText' : "Resume"

      }
    };

    let currentLang = localStorage.getItem('lang') || 'es';

    let paragraphArray = ['mainSubtitle', 'aboutTitle', 'aboutText', "techTitle", 
      "contactTitle", 'projectsTitle','project1Title', 'project2Title', 'project1Text','project2Text', 'resumeText']

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

    
      
      
     