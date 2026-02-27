# 🪚 Tacchini Nicolas Menuiserie - React + Vite

Site web moderne et professionnel pour l'entreprise de menuiserie Tacchini Nicolas, développé avec **React** et **Vite**.

## ✨ Caractéristiques

### Technologies
- ⚛️ **React 18** - Bibliothèque UI moderne
- ⚡ **Vite** - Build tool ultra-rapide
- 🎨 **CSS3** avec variables CSS personnalisées
- 📱 **Responsive Design** - Optimisé pour tous les appareils
- 🔤 **Google Fonts** - Playfair Display + Poppins
- 🎯 **Font Awesome 6** - Icônes professionnelles

### Composants React
- **Navbar** - Navigation sticky avec effet scroll
- **Hero** - Section d'accueil impactante avec animations
- **About** - Histoire avec compteurs animés
- **Services** - Grille de services avec cartes interactives
- **Gallery** - Galerie avec lightbox modal
- **Team** - Présentation de l'équipe
- **Testimonials** - Carrousel de témoignages
- **Contact** - Formulaire avec validation
- **Footer** - Footer complet avec liens
- **BackToTop** - Bouton retour en haut

### Fonctionnalités
- ✅ Navigation smooth scroll
- ✅ Menu mobile hamburger
- ✅ Compteurs animés avec IntersectionObserver
- ✅ Carrousel de témoignages automatique
- ✅ Lightbox pour les images
- ✅ Formulaire de contact avec validation
- ✅ Notifications toast
- ✅ Bouton "Retour en haut" intelligent
- ✅ Animations au scroll

## 🚀 Installation

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

## 💻 Commandes

### Développement
Lance le serveur de développement avec hot reload:
```bash
npm run dev
```
Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Production
Créer une build optimisée pour la production:
```bash
npm run build
```

### Aperçu de la build
Prévisualiser la build de production localement:
```bash
npm run preview
```

## 🌐 Déploiement sur Vercel

### Méthode 1: Via Vercel CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

### Méthode 2: Via GitHub
1. Pousser le code sur GitHub
2. Se connecter à [Vercel](https://vercel.com)
3. Importer le projet depuis GitHub
4. Vercel détectera automatiquement la configuration Vite

### Configuration Vercel
Le fichier `vercel.json` est déjà configuré avec:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrites pour SPA (Single Page Application)

## 📁 Structure du Projet

```
tacchini-react/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles globaux
│   ├── index.css       # Reset CSS
│   └── main.jsx        # Point d'entrée
├── dist/               # Build de production (généré)
├── vercel.json         # Configuration Vercel
├── index.html          # Template HTML
├── package.json        # Dépendances npm
└── vite.config.js      # Configuration Vite
```

## 🎨 Personnalisation

### Modifier les couleurs
Les couleurs sont définies comme variables CSS dans `App.css`:
```css
:root {
    --primary-color: #8B4513;
    --primary-dark: #654321;
    --accent-color: #D4AF37;
    --secondary-color: #2C3E50;
    /* ... */
}
```

### Modifier le contenu
Le contenu de chaque section se trouve dans son composant respectif dans `src/components/`.

## 📝 Licence

© 2024 Tacchini Nicolas Menuiserie. Tous droits réservés.

## 🛠️ Support

Pour toute question ou assistance, contactez:
- Email: contact@tacchini-menuiserie.ch
- Téléphone: +41 00 000 00 00

---

Développé avec ❤️ et React
