# Animated Day/Night Toggle Button

This repository demonstrates how to implement JavaScript logic for the animated day/night toggle button from UIverse.io. All files in this repository are ready to use and have been pre-configured with the necessary modifications.

## Quick Start Options

You have two ways to get started:

**Option 1: Using Files from This Repository:**
- All required files are available in the `/toggle` directory.
- All files are pre-configured and ready to use.

**Option 2: Building from UIverse.io:**
1. **Visit** [the toggle component](https://uiverse.io/RiccardoRapelli/jolly-chicken-91)

2. **Copy** ` toggle.html` and ` toggle.css` from [UIverse.io](https://uiverse.io/RiccardoRapelli/jolly-chicken-91)

3. **Modify HTML**
   - Remove the `checked="darkTheme"` attribute from the `<input>` element.

4. **Handle Dark Mode CSS**
   - Add the following CSS at the top of `toggle.css`:
   ```css
   body {
       background-color: #fff;
       transition: background-color 0.4s;
   }

   .dark-theme {
       background-color: #222;
   }
   ```

5. **Select the Appropriate JavaScript File**
   - For testing/development: Use `simpleToggle.js`
   ```Javascript
   document
   .getElementById("input")
   .addEventListener("change", () =>
      document.body.classList.toggle("dark-theme")
   );
   ```
   - For production: Use `robustToggle.js` (Recommended)
   ```Javascript
   document.addEventListener('DOMContentLoaded', function() {
      const themeToggle = document.getElementById('input');

      // Load saved theme preference
      if (localStorage.getItem('darkTheme') === 'true') {
         themeToggle.checked = true;
         document.body.classList.add('dark-theme');
      } else {
         themeToggle.checked = false;
         document.body.classList.remove('dark-theme');
      }

      // Listen for toggle changes
      themeToggle.addEventListener('change', function() {
         if (this.checked) {
               document.body.classList.add('dark-theme');
               localStorage.setItem('darkTheme', 'true');
         } else {
               document.body.classList.remove('dark-theme');
               localStorage.setItem('darkTheme', 'false');
         }
      });
   });

   ```


## Available Files

1. `toggle.html` - Base toggle button structure
2. `toggle.css` - Animations and styling
3. `simpleToggle.js` - Basic theme switching (development only)
4. `robustToggle.js` - Production-ready implementation (Verify the code before deploying to production).

### Simple vs Robust Toggle

**Simple Toggle (`simpleToggle.js`)**
- Minimal implementation
- No theme persistence—this version does not store the theme preference in localStorage.
- Single event listener without any error handling.
- Good for Testing

**Robust Toggle (`robustToggle.js`)**
- Production-ready
- Persists user preferences using localStorage
- Handles initial theme loading
- Better error handling

## Video Tutorials

Learn how to implement this toggle button through our video guides:

**English Tutorial**
[![English Tutorial](Coming soon!)]()

**Hindi Tutorial**
[![Hindi Tutorial](Coming soon!)]()

## Credits

This toggle button was created by RiccardoRapelli and is sourced from [UIverse.io](https://uiverse.io/RiccardoRapelli/jolly-chicken-91). The original component is available under the MIT License.

- Original Component: [View on UIverse](https://uiverse.io/RiccardoRapelli/jolly-chicken-91)
- Creator: [RiccardoRapelli](https://uiverse.io/profile/RiccardoRapelli)
- Creator's GitHub: [RiccardoRapelli on GitHub](https://github.com/RiccardoRapelli)

## License

This implementation is based on a [UIverse.io](https://uiverse.io/RiccardoRapelli/jolly-chicken-91) component licensed under the MIT License. You are free to:
- Use commercially
- Modify
- Distribute
- Use privately

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

See the [MIT License](https://opensource.org/licenses/MIT) for full details.