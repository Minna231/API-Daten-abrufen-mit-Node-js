// Datei: apiFetcher.js

const axios = require('axios');

// Die Funktion, die die API-Anfrage durchführt
async function datenVonAPIabrufen() {
    // 1. Definieren Sie die API-URL (GET-Endpunkt)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    
    console.log(`Versuche, Daten von ${apiUrl} abzurufen...`);

    try {
        // 2. Führen Sie die GET-Anfrage mit Axios durch
        const antwort = await axios.get(apiUrl);
        
        // 3. Extrahieren Sie die Daten aus der Antwort
        const daten = antwort.data;
        
        // 4. Protokollieren Sie den Status und die Daten
        console.log('✅ Erfolgreich Daten empfangen!');
        console.log('--- Statuscode ---');
        console.log(antwort.status); // Z.B. 200 (OK)
        
        console.log('--- Abgerufene Daten (JSON) ---');
        console.log(daten);
        
        // Sie können auf einzelne Felder zugreifen, z.B. den Titel:
        console.log(`\nTitel des Posts: ${daten.title}`);

    } catch (fehler) {
        // 5. Fehlerbehandlung
        console.error('❌ Fehler beim Abrufen der API-Daten:', fehler.message);
    }
}

// Rufen Sie die Hauptfunktion auf
datenVonAPIabrufen();
