document.addEventListener('DOMContentLoaded', function() {
    // Only run on the research page
    if (window.location.pathname.includes('/research/')) {
      // Create the TOC element
      const toc = document.createElement('div');
      toc.className = 'research-toc';
      toc.innerHTML = `
        <div class="toc-inner">
          <h3>Research Areas</h3>
          <ul>
            <li><a href="#perception-aware-planning">Perception-Aware Planning</a></li>
            <li><a href="#optimal-planning-with-user-preferences">Optimal Planning with User Preferences</a></li>
          </ul>
        </div>
      `;
      
      // Add it to the page
      document.body.appendChild(toc);
      
      // Add scroll highlighting functionality
      const sections = document.querySelectorAll('.block');
      const tocLinks = document.querySelectorAll('.research-toc a');
      
      function setActiveLink() {
        let found = false;
        
        sections.forEach((section) => {
          if (section.id) {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= 150 && rect.bottom >= 150 && !found) {
              found = true;
              
              tocLinks.forEach((link) => {
                if (link.getAttribute('href') === '#' + section.id) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              });
            }
          }
        });
      }
      
      window.addEventListener('scroll', setActiveLink);
      setActiveLink(); // Call once on load
    }
  });