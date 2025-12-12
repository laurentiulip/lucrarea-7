# Firebase Setup Guide

## Pași de configurare:

### 1. Creează un proiect Firebase
- Mergi la [console.firebase.google.com](https://console.firebase.google.com)
- Click pe "Adaugă proiect"
- Completează numele proiectului și urmează pașii

### 2. Activează Firestore Database
- În meniu, du-te la "Firestore Database"
- Click pe "Crează bază de date"
- Alege: **Start in test mode** (pentru development)
- Alege o locație (ex: europe-west1)
- Click "Crează"

### 3. Obține configurația Firebase
- Mergi la Project Settings (rotița de setări)
- Scroll la "Your apps" și click pe iconul web (`</>`)
- Copiază configurația Firebase

### 4. Actualiza fișierul de configurație
- Deschide `src/app/core/config/firebase.config.ts`
- Înlocuiește valorile din `firebaseConfig` cu datele tale

### 5. Adaugă datele în Firestore
- În Firestore Database, crează o colecție numită `items`
- Adaugă documente cu structura din `assets/data.json`

Exemplu de document:
```json
{
  "id": 1,
  "name": "Inteligență Artificială",
  "description": "Soluții AI avansate",
  "category": "AI",
  "price": 5000,
  "fullDescription": "...",
  "features": [...],
  "technologies": [...],
  "duration": "3-6 luni",
  "team_size": "5-8 persoane"
}
```

### 6. Testează conexiunea
```
npm start
```

Dacă merge tot, ar trebui să vezi datele din Firebase!