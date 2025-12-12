// Script pentru a importa datele JSON în Firestore
// Rulează: node import-data.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, writeBatch, doc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurația Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCy-QzZYZjShXUExpzPvFJkcgDJltNQR_o',
  authDomain: 'test-mode-3ea34.firebaseapp.com',
  projectId: 'test-mode-3ea34',
  storageBucket: 'test-mode-3ea34.appspot.com',
  messagingSenderId: '702470923534',
  appId: '1:702470923534:web:b7cf698d5824ec3925e35f'
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importData() {
  try {
    // Citește fișierul JSON
    const dataPath = path.join(__dirname, 'src', 'assets', 'data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(jsonData);

    console.log(`📥 Se importă ${items.length} produse în Firestore...`);

    const batch = writeBatch(db);
    const itemsCollection = collection(db, 'items');

    items.forEach((item) => {
      // Creează o referință la document cu ID-ul din JSON
      const docRef = doc(itemsCollection, item.id.toString());
      batch.set(docRef, item);
    });

    // Execută batch-ul
    await batch.commit();
    console.log('✅ Datele au fost importate cu succes!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Eroare la import:', error);
    process.exit(1);
  }
}

importData();
