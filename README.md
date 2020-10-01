# Test automatici con Angular

## Introduzione
Adottare una strategia di unit test automatici nello sviluppo software permette di ottenere numerosi vantaggi:

- **Incrementa la qualità del codice**

  Obbliga lo sviluppatore a dover creare codice facilmente testabile, creando quindi funzioni più flessibili, mantenibili e riusabili.
- **Aiuta ad inviduare bug prima di andare in produzione e riduce la probabilità di introdurre bug di regressione**

  Maggiore è il numero di test e di codice coperto da test (code coverage), maggiore è la probabilità che scrivendo nuove funzionalità, queste non creino problemi al codice esistente. Inoltre, generando un test per ogni bug che viene riscontrato si risolve quasi completamente il problema degli errori di regressione.
  
- **Permette di modificare più facilmente parti di codice**

  Maggiore è la copertura dei test all'interno del nostro software minore è la paura dello sviluppatore a cambiare codice esistente. Infatti, facendo girare tutti i test, il suo codice verrà automaticamente validato. Senza test ogni minimo cambiamento al codice potrebbe causare una lunga lista di bug.

- **Aiuta ad aggiornare librerie e codice di terze parti**

   	Quando andiamo a utilizzare librerie e codice di terze parti è buona norma creare un wrapper attorno al componente per aiutarne l'utilizzo durante lo sviluppo dell'intera applicazione. Aggiungendo poi una serie di test automatici relativi al wrapper, nel momento in cui andremo ad aggionrare la versione di questa libreria i test ci diranno in modo automatico se la libreria è cambiata e se questi cambiamenti introducono errori.


[CONTINUA LA LETTURA SU UGIdotNet](https://www.ugidotnet.org/articoli/1933/Test-automatici-con-Angular) 