const translations = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      welcomeText: `I'm Enes. My passion for game development started at a young age and was shaped by my early experiences with programming. I'm the founder and lead developer of Plasenta Entertainment. I've completed several prestigious programs, including the Google Game and App Academy. Using Unreal Engine 5 and C++, I bring my imagination to life through game projects. My goal is to create unforgettable gaming experiences, and I have big dreams in this field. If you'd like to collaborate with me on this journey, feel free to get in touch.`,
      aboutMe: "About Me",
      aboutText: `Hello! I am Enes Hacısağır, 20 years old, and I am known for my deep interest in games and game development since my childhood. My curiosity about computer games has consistently motivated me to improve myself in this field. My dream is to make a name for myself in the gaming world, elevate my creativity to new heights, and achieve success with a AAA-class game. Throughout this process, I have had the opportunity to learn various skills such as programming, graphic design, storytelling, and game mechanics. By balancing technical and creative aspects, I am getting closer to my goal of creating a real gaming experience. The dynamic nature of the gaming world has always excited me, and I have continued to closely follow its changes. In the future, I plan to further develop myself in the gaming industry and work diligently to produce impactful and unique games. In this passionate journey, I continue to view games not only as a means of entertainment but also as an art form.`,
      myProjects: "My Projects",
      contactMe: "Contact Me",
      formTitle: "Contact Form",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      footerMenu: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      footerText: "© 2024 Enesehs | All Rights Reserved",
    },
    tr: {
      home: "Anasayfa",
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
      welcomeText: `Ben Enes. Oyun geliştirme tutkusu genç yaşta başladı ve programlama ile ilk deneyimlerimle şekillendi. Plasenta Entertainment'in kurucusu ve baş geliştiricisiyim. Google Oyun ve Uygulama Akademisi de dahil olmak üzere birçok prestijli programı tamamladım. Unreal Engine 5 ve C++ kullanarak oyun projeleri aracılığıyla hayal gücümü hayata geçiriyorum. Hedefim, unutulmaz oyun deneyimleri yaratmak ve bu alanda büyük hayallerim var. Bu yolculukta benimle işbirliği yapmak isterseniz, benimle iletişime geçebilirsiniz.`,
      aboutMe: "Hakkımda",
      aboutText: `Merhaba! Ben Enes Hacısağır, 20 yaşındayım ve çocukluğumdan beri oyunlara ve oyun geliştirmeye derin bir ilgiyle tanınıyorum. Bilgisayar oyunlarına olan merakım, bu alanda kendimi geliştirmeye sürekli olarak motive etti. Hayalim, oyun dünyasında adımı duyurmak, yaratıcılığımı yeni zirvelere taşımak ve AAA sınıfı bir oyun ile başarı elde etmek. Bu süreçte, programlama, grafik tasarımı, hikaye anlatımı ve oyun mekaniği gibi çeşitli beceriler öğrenme fırsatım oldu. Teknik ve yaratıcı yönleri dengeleyerek gerçek bir oyun deneyimi yaratma hedefine yaklaşıyorum. Oyun dünyasının dinamik yapısı her zaman beni heyecanlandırdı ve değişimlerini yakından takip etmeye devam ettim. Gelecekte, oyun endüstrisinde kendimi daha da geliştirmeyi ve etkili ve benzersiz oyunlar üretmek için çalışmayı planlıyorum. Bu tutkulu yolculukta, oyunları sadece bir eğlence aracı olarak değil, aynı zamanda bir sanat formu olarak görmeye devam ediyorum.`,
      myProjects: "Projelerim",
      contactMe: "İletişim",
      formTitle: "İletişim Formu",
      name: "İsim",
      email: "E-posta",
      message: "Mesaj",
      submit: "Gönder",
      footerMenu: {
        home: "Anasayfa",
        about: "Hakkımda",
        projects: "Projeler",
        contact: "İletişim",
      },
      footerText: "© 2024 Enesehs | Tüm Hakları Saklıdır",
    }
  };
  
  function changeLanguage(language) {
    document.querySelector('nav ul li:nth-child(1) a').textContent = translations[language].home;
    document.querySelector('nav ul li:nth-child(2) a').textContent = translations[language].about;
    document.querySelector('nav ul li:nth-child(3) a').textContent = translations[language].projects;
    document.querySelector('nav ul li:nth-child(4) a').textContent = translations[language].contact;
    document.querySelector('#text').textContent = translations[language].welcomeText;
    document.querySelector('.about h1').textContent = translations[language].aboutMe;
    document.querySelector('.about p').textContent = translations[language].aboutText;
    document.querySelector('.projects h1').textContent = translations[language].myProjects;
    document.querySelector('.contact-me h2').textContent = translations[language].contactMe;
    
    document.querySelector('.contact-form h2').textContent = translations[language].formTitle;
    document.querySelector('label[for="name"]').textContent = translations[language].name;
    document.querySelector('label[for="email"]').textContent = translations[language].email;
    document.querySelector('label[for="message"]').textContent = translations[language].message;
    document.querySelector('input[type="submit"]').value = translations[language].submit;
  
    document.querySelector('.footer-menu li:nth-child(1) a').textContent = translations[language].footerMenu.home;
    document.querySelector('.footer-menu li:nth-child(2) a').textContent = translations[language].footerMenu.about;
    document.querySelector('.footer-menu li:nth-child(3) a').textContent = translations[language].footerMenu.projects;
    document.querySelector('.footer-menu li:nth-child(4) a').textContent = translations[language].footerMenu.contact;
    
    document.querySelector('.footer-menu p').textContent = translations[language].footerText;
  }
  
  document.getElementById('en-btn').addEventListener('click', function() {
    changeLanguage('en');
  });
  
  document.getElementById('tr-btn').addEventListener('click', function() {
    changeLanguage('tr');
  });
  