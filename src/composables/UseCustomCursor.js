// src/composables/useCustomCursor.js
export function useCustomCursor() {
    const initCustomCursor = () => {
      document.body.style.cursor = 'none';
  
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.position = 'fixed';
      cursor.style.pointerEvents = 'none';
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.backgroundImage = 'url(/carrot.png)';
      cursor.style.backgroundSize = 'contain';
      cursor.style.backgroundRepeat = 'no-repeat';
      cursor.style.zIndex = '9999';
      // Ajustement final : Pointe en HAUT (translation inversée)
      cursor.style.transform = 'translate(-50%, 0%)';
      document.body.appendChild(cursor);
  
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
  
      document.addEventListener('mouseover', (e) => {
        if (e.target.tagName.toLowerCase() === 'a' || 
            e.target.tagName.toLowerCase() === 'button' ||
            e.target.hasAttribute('role') && e.target.getAttribute('role') === 'button' ||
            e.target.classList.contains('clickable')) {
          // Scale en conservant le point d'ancrage
          cursor.style.transform = 'translate(-50%, 0%) scale(1.2)';
          e.target.style.cursor = 'none';
        }
      });
  
      document.addEventListener('mouseout', (e) => {
        if (e.target.tagName.toLowerCase() === 'a' || 
            e.target.tagName.toLowerCase() === 'button' ||
            e.target.hasAttribute('role') && e.target.getAttribute('role') === 'button' ||
            e.target.classList.contains('clickable')) {
          cursor.style.transform = 'translate(-50%, 0%) scale(1)';
        }
      });
  
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleElement);
    };
    
    return {
      initCustomCursor
    };
  }