# 3 Metode de Importare a Datelor în Firestore

## Metoda 1️⃣: Script Node.js (Cel mai ușor)

```bash
node import-data.js
```

**Avantaje:**
- ✅ Rapid și simplu
- ✅ Se rulează o singură dată
- ✅ Nu necesită UI

**Dezavantaje:**
- Trebuie Node.js instalat

---

## Metoda 2️⃣: Component Angular (Din interfață)

Adaugă componenta în `app.ts`:

```typescript
import { FirebaseImportComponent } from './components/firebase-import/firebase-import.component';

export const routes: Routes = [
  {
    path: 'admin/import',
    component: FirebaseImportComponent
  },
  // ... restul rutelor
];
```

Apoi accesează: `http://localhost:4200/admin/import`

**Avantaje:**
- ✅ Ușor de folosit din UI
- ✅ Poți verifica datele și șterge
- ✅ Feedback în timp real

**Dezavantaje:**
- Necesită o pagină admin

---

## Metoda 3️⃣: Importa Manual (Firebase Console)

1. Mergi la [console.firebase.google.com](https://console.firebase.google.com)
2. Selectează proiectul
3. Mergi la **Firestore Database**
4. Click pe butonul **Start collection**
5. Nume colecție: `items`
6. Adaugă documente manual din `data.json`

**Avantaje:**
- ✅ Nicio dependență
- ✅ Poți vedea datele direct
- ✅ Control total

**Dezavantaje:**
- ⚠️ Lent dacă sunt mulți items (8 produse e ok)

---

## 🎯 Recomandare

Pentru dezvoltare: **Metoda 1** (Script Node.js)
- Rapid, se face o dată
- Fără complexități

Pentru producție: **Metoda 2** (Component Angular)
- Admin panel cu import/export
- Poți adăuga/edita datele din UI

## ⚠️ Reguli Firestore (Test Mode)

În test mode sunt restricții:
```
// Regulă test mode - permite orice
match /{document=**} {
  allow read, write: if true;
}
```

**IMPORTANT:** În producție trebuie reguli de securitate! 🔒
