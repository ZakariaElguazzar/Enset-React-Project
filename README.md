
# 📌 Auth Dashboard - React & Backend  

Ce repository contient deux projets :  

- **Backend Server** – Un serveur JSON simulant une API pour l'authentification et la gestion des utilisateurs.  
- **Frontend React** – Une application développée avec **React.js** et **TailwindCSS** pour une interface utilisateur moderne et interactive.  

---

## 📂 Structure du Projet  

```
auth-dashboard-react/
│── backend-server/      # Serveur JSON (Fake API)
│── react-dashboard/     # Application React
│── README.md            # Documentation
```

---

## 🚀 Comment Exécuter le Projet ?  

### 🖥️ 1. Démarrer le Backend Server (JSON Server)  

#### 📌 Installation des dépendances  
Assurez-vous d'avoir **Node.js** installé, puis exécutez :  

```bash
cd backend-server
npm install -g json-server  # Installe JSON Server globalement (si ce n'est pas déjà fait)
```

#### 📌 Lancer le serveur  

```bash
json-server --watch db.json --port 5000
```

🔹 **Accès API** : `http://localhost:5000/`  

---

### 🖥️ 2. Démarrer l'application React  

#### 📌 Installation des dépendances  

```bash
cd react-dashboard
npm install
```

#### 📌 Lancer le serveur React  

```bash
npm run dev
```

🔹 **Accès à l'application** : `http://localhost:3000/` (ou un autre port si déjà utilisé)  

---

## 🛠️ Technologies Utilisées  

- **Backend** : JSON Server (Fake API)  
- **Frontend** : React.js + Vite + TailwindCSS  
- **Base de données** : JSON (simulé avec JSON Server)  

---

## 📌 Fonctionnalités  

✅ **Authentification** : Connexion et inscription avec gestion des sessions.  
✅ **Tableau de bord** : Interface utilisateur dynamique et responsive.  
✅ **Navigation interactive** : Sidebar et Navbar avec affichage dynamique.  
✅ **Gestion des utilisateurs** : Ajout, suppression et modification des utilisateurs via l'API JSON Server.  

---

## 📜 À propos  

Ce projet est une démonstration d'une architecture **React + Backend JSON Server**, intégrant des fonctionnalités d'authentification et de gestion des utilisateurs.  

Si vous avez des suggestions ou des améliorations, n'hésitez pas à contribuer ! 🚀  

---

💡 **Besoin d'aide ?** Contactez-moi ! 😊
