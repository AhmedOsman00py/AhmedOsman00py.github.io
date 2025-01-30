// Store translations
const translations = {
    'fr': {
        'Projects': 'Projets',
        'Read more →': 'Lire la suite →',
        'Interactive plots': 'Graphiques interactifs',
        'Links': 'Liens',
        'visualization': 'visualisation',
        'Project presentation →': 'Présentation du projet →',
        'Animated presentation': 'Présentation animée',
        'Github repository': 'Dépôt Github',
        'Read report': 'Lire le rapport',
        'Based in France': 'Basé en France',
        'AI Engineer': 'Ingénieur IA',
        'As a passionate Data Scientist': 'En tant que Data Scientist passionné',
        'Contact me': 'Contactez-moi',
        'This project integrates two key components': 'Ce projet intègre deux composants clés',
        'Relevant Alarm Detection': 'Détection d\'Alarmes Pertinentes',
        'Predictive Maintenance': 'Maintenance Prédictive'
    }
};

// Get current language
let currentLang = 'en';

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    translatePage();
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'FR' : 'EN';
}

// Function to translate the page
function translatePage() {
    if (currentLang === 'en') {
        location.reload(); // Reload to get original English content
        return;
    }

    // Get all text nodes
    const elements = document.getElementsByTagName('*');
    for (let element of elements) {
        for (let node of element.childNodes) {
            if (node.nodeType === 3) { // Text node
                for (let [key, value] of Object.entries(translations['fr'])) {
                    if (node.nodeValue.includes(key)) {
                        node.nodeValue = node.nodeValue.replace(key, value);
                    }
                }
            }
        }
    }

    // Update button text
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(button => {
        const text = button.textContent.trim();
        if (translations['fr'][text]) {
            button.textContent = translations['fr'][text];
        }
    });
}