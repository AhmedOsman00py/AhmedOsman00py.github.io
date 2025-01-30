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
        'Predictive Maintenance': 'Maintenance Prédictive',
        'Developed an AI-powered agent': 'Développé un agent alimenté par l\'IA',
        'to automatically generate, execute, and refine unit tests': 'pour générer, exécuter et affiner automatiquement les tests unitaires',
        'in Java for Spring Boot servers': 'en Java pour les serveurs Spring Boot',
        'specifically for TMForum\'s OpenAPIs': 'spécifiquement pour les OpenAPIs de TMForum',
        'This project develops a machine learning-based classifier': 'Ce projet développe un classificateur basé sur l\'apprentissage automatique',
        'to effectively distinguish between intrusive (malicious) and non-intrusive (benign) network traffic': 'pour distinguer efficacement le trafic réseau intrusif (malveillant) du trafic non intrusif (bénin)',
        'Advanced preprocessing and SMOTE are applied': 'Le prétraitement avancé et SMOTE sont appliqués',
        'to improve detection capabilities': 'pour améliorer les capacités de détection',
        'resulting in a highly effective system for identifying attacks': 'résultant en un système très efficace pour identifier les attaques',
        'This project uses SimCLR': 'Ce projet utilise SimCLR',
        'a contrastive learning method': 'une méthode d\'apprentissage contrastif',
        'to train a model on the MNIST dataset with minimal labeled data': 'pour entraîner un modèle sur le dataset MNIST avec un minimum de données étiquetées',
        'By leveraging unsupervised techniques': 'En utilisant des techniques non supervisées',
        'it enhances feature representation': 'il améliore la représentation des caractéristiques',
        'and achieves a 7% improvement in accuracy over traditional models': 'et obtient une amélioration de 7% de la précision par rapport aux modèles traditionnels'
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
                let nodeText = node.nodeValue;
                for (let [key, value] of Object.entries(translations['fr'])) {
                    // Use a regular expression to match the exact phrase with word boundaries
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    nodeText = nodeText.replace(regex, value);
                }
                node.nodeValue = nodeText;
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