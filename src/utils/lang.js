const translations = {
  tr: {
    home: "Anasayfa",
    about: "Hakkımda",
    projects: "Projeler",
    contact: "İletişim",
    welcomeText: `Ben Enes. Oyun geliştirme tutkum genç yaşta başladı ve programlama ile ilk deneyimlerimle şekillendi. Plasenta Entertainment'ın kurucusu ve baş geliştiricisiyim. Google Oyun ve Uygulama Akademisi de dahil olmak üzere birçok programı tamamladım. Unreal Engine 5 ve C++ kullanarak oyun projeleri aracılığıyla hayal gücümü hayata geçiriyorum. Hedefim, unutulmaz oyun deneyimleri yaratmak ve bu alanda büyük hayallerim var. Bu yolculukta benimle iş birliği yapmak isterseniz, benimle iletişime geçebilirsiniz.`,
    aboutMe: "Hakkımda",
    aboutText: `Merhaba! Ben Enes Hacısağır, 20 yaşındayım ve çocukluğumdan beri oyunlara ve oyun geliştirmeye derin bir ilgi duyuyorum. Bilgisayar oyunlarına olan merakım, bu alanda kendimi geliştirmeye sürekli olarak motive etti. Hayalim, oyun dünyasında adımı duyurmak, yaratıcılığımı yeni zirvelere taşımak ve AAA sınıfı bir oyun ile başarı elde etmek. Bu süreçte, programlama, grafik tasarımı, hikaye anlatımı ve oyun mekaniği gibi çeşitli beceriler öğrenme fırsatım oldu. Teknik ve yaratıcı yönleri dengeleyerek gerçek bir oyun deneyimi yaratma hedefine yaklaşıyorum. Oyun dünyasının dinamik yapısı her zaman beni heyecanlandırdı ve değişimlerini yakından takip etmeye devam ettim. Gelecekte, oyun endüstrisinde kendimi daha da geliştirmeyi ve etkili ve benzersiz oyunlar üretmek için çalışmayı planlıyorum. Bu tutkulu yolculukta, oyunları sadece bir eğlence aracı olarak değil, aynı zamanda bir sanat formu olarak görmeye devam ediyorum.`,
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
    location.reload();
  });
  
  document.getElementById('tr-btn').addEventListener('click', function() {
    changeLanguage('tr');
  });
  