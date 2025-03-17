//projects
const projectCards=document.querySelectorAll(".project-card"),projectsPerPage=3;let currentPage=1;function showProjects(page){const startIndex=3*(page-1),endIndex=startIndex+3;projectCards.forEach((card,index)=>{card.style.display="block",card.style.opacity="0",card.style.transform="translateY(30px)",index>=startIndex&&index<endIndex?(card.style.display="block",setTimeout(()=>{card.style.opacity="1",card.style.transform="translateY(0)"},index%3*100)):card.style.display="none"}),updatePaginationButtons()}function updatePaginationButtons(){const totalPages=Math.ceil(projectCards.length/3),paginationContainer=document.querySelector(".pagination");if(paginationContainer){paginationContainer.innerHTML="";const prevBtn=document.createElement("button");prevBtn.classList.add("pagination-btn","prev-btn"),prevBtn.innerHTML="&larr;",prevBtn.disabled=1===currentPage,prevBtn.setAttribute("aria-label","Previous page"),prevBtn.addEventListener("click",()=>{currentPage>1&&(currentPage--,showProjects(currentPage))}),paginationContainer.appendChild(prevBtn);for(let i=1;i<=totalPages;i++){const pageBtn=document.createElement("button");pageBtn.classList.add("pagination-btn","page-num"),i===currentPage&&pageBtn.classList.add("active"),pageBtn.textContent=i,pageBtn.addEventListener("click",()=>{currentPage=i,showProjects(currentPage)}),paginationContainer.appendChild(pageBtn)}const nextBtn=document.createElement("button");nextBtn.classList.add("pagination-btn","next-btn"),nextBtn.innerHTML="&rarr;",nextBtn.disabled=currentPage===totalPages,nextBtn.setAttribute("aria-label","Next page"),nextBtn.addEventListener("click",()=>{currentPage<totalPages&&(currentPage++,showProjects(currentPage))}),paginationContainer.appendChild(nextBtn)}}const observerOptions={threshold:.2,rootMargin:"0px 0px -100px 0px"},projectObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{entry.isIntersecting&&(entry.target.classList.contains("projects-container")&&!document.querySelector(".pagination .active")&&showProjects(currentPage),observer.unobserve(entry.target))})},observerOptions),projectsContainer=document.querySelector(".projects-container");projectsContainer&&projectObserver.observe(projectsContainer),projectCards.forEach(card=>{card.addEventListener("mouseenter",()=>{const projectImg=card.querySelector("img");projectImg&&(projectImg.style.transform="scale(1.05)")}),card.addEventListener("mouseleave",()=>{const projectImg=card.querySelector("img");projectImg&&(projectImg.style.transform="scale(1)")})});const projectBtns=document.querySelectorAll(".project-btn");projectBtns.forEach(btn=>{btn.addEventListener("click",e=>{if("#"===btn.getAttribute("href")){e.preventDefault();const card=btn.closest(".project-card"),description=card.querySelector(".project-description");description&&description.classList.add("show")}})});const closeButtons=document.querySelectorAll(".close-description");function startFSASlideshow(){const fsaImage=document.querySelector('.project-card img[alt="FSA"]');if(!fsaImage)return;const imageSources=["/public/assets/projects/project2-0.webp","/public/assets/projects/project2-1.webp","/public/assets/projects/project2-2.webp"];let currentIndex=0;setInterval(()=>{currentIndex=(currentIndex+1)%imageSources.length,fsaImage.style.opacity="0",setTimeout(()=>{fsaImage.src=imageSources[currentIndex],fsaImage.style.opacity="1"},100)},1e4)}function animateWebsiteButtons(){const websiteBtns=document.querySelectorAll(".website-btn"),websitesSection=document.querySelector(".websites-section");if(!websiteBtns.length||!websitesSection)return;const websiteObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{entry.isIntersecting&&(websiteBtns.forEach((btn,index)=>{setTimeout(()=>{btn.style.opacity="1",btn.style.transform="translateY(0)"},150*index)}),websiteObserver.unobserve(entry.target))})},{threshold:.2});websiteObserver.observe(websitesSection),websiteBtns.forEach(btn=>{btn.style.opacity="0",btn.style.transform="translateY(30px)",btn.style.transition="all 0.6s ease"})}closeButtons.forEach(button=>{button.addEventListener("click",()=>{const description=button.closest(".project-description");description.classList.remove("show")})}),document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",e=>(e.preventDefault(),!1)),document.body.style.userSelect="none",document.body.style.webkitUserDrag="none",document.body.style.MozUserSelect="none",document.addEventListener("dragstart",e=>(e.preventDefault(),!1)),document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&("c"===e.key||"C"===e.key))return e.preventDefault(),!1}),startFSASlideshow(),animateWebsiteButtons()});
//skills
document.addEventListener("DOMContentLoaded",(function(){const skills=[{name:"Unreal Engine",level:5,description:"Game mechanics, level design, blueprints, C++ integration"},{name:"C++",level:4,description:"Game development with Unreal Engine, data structures, algorithms"},{name:"Python",level:4,description:"Automation, data analysis, GUI applications with Tkinter"},{name:"JavaScript",level:3,description:"Web development, interactive features, DOM manipulation"},{name:"HTML/CSS",level:4,description:"Responsive design, modern layouts, animations"},{name:"Unity",level:3,description:"Game prototyping, mobile development, C# integration"},{name:"Git",level:4,description:"Version control, collaboration, project management"},{name:"SQL",level:2,description:"Database design, queries, data management"}],skillsContainer=document.querySelector(".skills-container");skills.forEach(skill=>{const skillCard=document.createElement("div");skillCard.className="skill-card";const skillHeader=document.createElement("div");skillHeader.className="skill-header";const skillName=document.createElement("div");skillName.className="skill-name",skillName.textContent=skill.name;const skillLevel=document.createElement("div");skillLevel.className="skill-level";for(let i=1;i<=5;i++){const dot=document.createElement("div");dot.className=i<=skill.level?"dot filled":"dot",skillLevel.appendChild(dot)}const skillInfo=document.createElement("div");skillInfo.className="skill-info",skillInfo.textContent=skill.description,skillHeader.appendChild(skillName),skillHeader.appendChild(skillLevel),skillCard.appendChild(skillHeader),skillCard.appendChild(skillInfo),skillsContainer.appendChild(skillCard)})}));
//certificates
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', initCertificates);
    
    function initCertificates() {
        const certificatesGroup = document.querySelector('.certificates-group');
        
        if (!certificatesGroup) return;
        
        const clonedGroup = certificatesGroup.cloneNode(true);
        const certificatesTrack = document.querySelector('.certificates-track');
        
        if (!certificatesTrack) return;
        
        const existingClone = certificatesTrack.querySelector('.certificates-group:nth-child(2)');
        if (existingClone) {
            existingClone.remove();
        }
        certificatesTrack.appendChild(clonedGroup);
        
        const trackWidth = certificatesGroup.offsetWidth;
        
        let isDown = false;
        let startX;
        let scrollLeft;
        let animationId;
        let speed = 0.5;
        let currentTranslate = 0;
        
        function startAutoScroll() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            
            function autoScroll() {
                currentTranslate -= speed;
                
                if (Math.abs(currentTranslate) >= trackWidth && trackWidth > 0) {
                    currentTranslate = 0;
                }
                
                certificatesTrack.style.transform = `translateX(${currentTranslate}px)`;
                animationId = requestAnimationFrame(autoScroll);
            }
            
            autoScroll();
        }
        
        startAutoScroll();
        
        const scrollContainer = document.querySelector('.certificates-scroll-container');
        
        if (!scrollContainer) return;
        
        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            startX = e.pageX - certificatesTrack.offsetLeft;
            scrollLeft = currentTranslate;
            
            cancelAnimationFrame(animationId);
        });
        
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            startAutoScroll();
        });
        
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            startAutoScroll();
        });
        
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - certificatesTrack.offsetLeft;
            const walk = (x - startX) * 2;
            currentTranslate = scrollLeft + walk;
            
            if (trackWidth > 0 && Math.abs(currentTranslate) >= trackWidth) {
                currentTranslate = currentTranslate % trackWidth;
                scrollLeft = currentTranslate;
                startX = e.pageX - certificatesTrack.offsetLeft;
            }
            
            certificatesTrack.style.transform = `translateX(${currentTranslate}px)`;
        });
        
        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach(card => {
            card.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                if (url && url !== "#" && url !== "undefined") {
                    window.open(url, '_blank');
                }
            });
            
            card.addEventListener('mouseenter', function() {
                cancelAnimationFrame(animationId);
                this.style.boxShadow = '0 15px 35px rgba(100, 100, 255, 0.4), 0 0 20px rgba(100, 100, 255, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                startAutoScroll();
                this.style.boxShadow = '';
            });
        });
        
        scrollContainer.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - certificatesTrack.offsetLeft;
            scrollLeft = currentTranslate;
            cancelAnimationFrame(animationId);
        }, { passive: false });
        
        scrollContainer.addEventListener('touchend', () => {
            isDown = false;
            startAutoScroll();
        });
        
        scrollContainer.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - certificatesTrack.offsetLeft;
            const walk = (x - startX) * 2;
            currentTranslate = scrollLeft + walk;
            
            if (trackWidth > 0 && Math.abs(currentTranslate) >= trackWidth) {
                currentTranslate = currentTranslate % trackWidth;
                scrollLeft = currentTranslate;
                startX = e.touches[0].pageX - certificatesTrack.offsetLeft;
            }
            
            certificatesTrack.style.transform = `translateX(${currentTranslate}px)`;
            
            e.preventDefault();
        }, { passive: false });
        
        function updateScrollSpeed() {
            speed = window.innerWidth > 1200 ? 1 : 0.5;
        }
        
        window.addEventListener('resize', () => {
            updateScrollSpeed();
            const updatedTrackWidth = certificatesGroup.offsetWidth;
            if (updatedTrackWidth > 0) {
                if (Math.abs(updatedTrackWidth - trackWidth) > 100) {
                    currentTranslate = 0;
                    certificatesTrack.style.transform = `translateX(0px)`;
                }
            }
        });
        
        updateScrollSpeed();
    }
});
