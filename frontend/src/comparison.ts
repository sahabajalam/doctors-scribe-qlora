import './style.css';
import { renderNavbar } from './components/Navbar';
import { renderDetailedComparisonSection } from './components/Results';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div id="navbar"></div>
  <main style="padding-top: 70px;">
    <div id="comparison-results"></div>
  </main>
  
`;

// Render components
const navbarContainer = document.querySelector('#navbar') as HTMLElement;
const resultsContainer = document.querySelector('#comparison-results') as HTMLElement;

if (navbarContainer) renderNavbar(navbarContainer);
if (resultsContainer) renderDetailedComparisonSection(resultsContainer);
