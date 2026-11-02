# Il Ricettario

Un piccolo catalogo di ricette della tradizione italiana, scritto in **Angular 21** (componenti standalone, signals, nuovo control flow `@if` / `@for`).

Il progetto è **volutamente incompleto**: è un banco di prova per imparare a lavorare con un agente AI (Cline) su una codebase esistente. Per ora l'app:

- è scritta solo in italiano, con testi scritti direttamente nei template e nel codice;
- ha un layout a misure fisse, pensato solo per il desktop (su telefono la pagina si allarga oltre lo schermo).

Il tuo compito, con l'aiuto di Cline, è sistemare queste due cose e provare qualche estensione. Gli esercizi sono in fondo a questo file.

## Cosa fa l'app

- Elenco di 12 ricette con ricerca per titolo, descrizione e ingredienti.
- Filtri per categoria e difficoltà.
- Pagina di dettaglio con ingredienti e procedimento.
- Preferiti salvati nel browser (`localStorage`).
- Pagine "Chi siamo" e "Pagina non trovata".

## Requisiti

- Node.js `^20.19`, `^22.12` o `^24` (richiesto da Angular 21)
- npm (incluso con Node.js)
- Visual Studio Code con l'estensione **Cline** configurata con l'API della scuola (vedi le slide del corso)
- Git

## Come partire

```bash
git clone <URL-DEL-REPOSITORY>
cd ricettario
npm install
npm start
```

Poi apri http://localhost:4200. Ogni modifica ai file ricarica la pagina in automatico.

Altri comandi utili:

```bash
npm run build   # compila il progetto in dist/ e segnala gli errori
```

Se `npm run build` termina senza errori, il tuo codice è almeno compilabile. Eseguilo sempre prima di considerare finito un esercizio.

## Struttura del progetto

```
src/
  index.html                  pagina host (attributo lang, titolo, meta)
  styles.scss                 stili globali, variabili CSS, griglia
  app/
    app.ts / app.html / app.scss   shell: header, navigazione, footer
    app.config.ts             provider (router, locale)
    app.routes.ts             rotte e titoli delle pagine
    models/recipe.ts          tipi Recipe, Category, Difficulty e le etichette
    data/recipes.ts           le 12 ricette di esempio
    services/recipe.service.ts   stato dell'app con signals (ricette, preferiti)
    components/recipe-card/   card di una ricetta
    pages/
      recipe-list/            elenco con ricerca e filtri
      recipe-detail/          dettaglio ricetta
      favorites/              ricette preferite
      about/                  chi siamo
      not-found/              404
```

## Come lavorare con Cline

Qualche regola per ottenere buoni risultati.

1. **Apri la cartella del progetto** in VS Code (File, Apri cartella), non un file singolo. Cline lavora sul workspace aperto.
2. **Un esercizio, un branch.** Prima di iniziare crea un branch (`git switch -c esercizio-1-multilingua`) e fai un commit a ogni passaggio che funziona. Se Cline combina un pasticcio puoi tornare indietro.
3. **Parti sempre in modalità Plan.** Chiedi a Cline di analizzare il progetto e proporre un piano. Leggilo, correggilo, poi passa ad Act.
4. **Indica i file con `@`.** Scrivere `@src/app/app.ts` o `@src/styles.scss` nel prompt dà a Cline il contesto giusto, molto meglio di una descrizione a parole.
5. **Usa i checkpoint.** Se un passaggio va storto, ripristina l'ultimo checkpoint dalla chat di Cline invece di chiedere di "riparare".
6. **Compito troppo lungo?** Quando la conversazione diventa pesante, apri un nuovo task con `/newtask` portando solo il riassunto di quello che serve.
7. **Verifica sempre.** Lancia `npm run build`, guarda l'app nel browser e rileggi il diff di Git. Cline può sbagliare, tu sei responsabile del risultato.

## Esercizi

Ogni esercizio ha un obiettivo, i criteri per capire se è riuscito e un prompt di partenza. I prompt sono solo un esempio: provare a scriverne di tuoi è parte dell'esercizio.

### Esercizio 0 (facoltativo): scrivi le regole del progetto

**Obiettivo.** Creare una cartella `.clinerules/` con le convenzioni del progetto, così Cline le rispetta in tutti i task successivi.

**Spunti per le regole:** stack (Angular 21, componenti standalone, signals, `@if` / `@for`), nomi dei file senza suffisso (`recipe-list.ts`, classe `RecipeList`), stili in SCSS, nessuna nuova dipendenza senza chiedere, eseguire `npm run build` a fine lavoro.

**Prompt di esempio**

```
Analizza il progetto e crea una cartella .clinerules con un file di regole
breve e concreto che descriva stack, convenzioni di naming e comandi utili.
Non modificare altro. Prima mostrami il piano.
```

**Fatto quando:** le regole sono corte (una pagina al massimo), corrispondono a quello che c'è davvero nel codice e Cline le cita nel task successivo.

### Esercizio 1: gestione multilingua

**Obiettivo.** L'app deve funzionare in **italiano e inglese**, con la possibilità di cambiare lingua.

**Criteri di accettazione**

- Nell'header c'è un selettore di lingua (IT / EN).
- Cambiando lingua cambiano tutti i testi visibili: navigazione, titoli, pulsanti, filtri, messaggi di stato vuoto, footer, pagina "Chi siamo", pagina 404.
- Cambiano anche i contenuti delle ricette (titolo, descrizione, ingredienti, procedimento), le etichette di categoria e difficoltà e il titolo della scheda del browser.
- Plurali e frasi con numeri sono corretti in entrambe le lingue (esempio: "1 ricetta trovata" / "1 recipe found", "3 ricette trovate" / "3 recipes found").
- Le date seguono la lingua scelta (esempio: "15 marzo 2025" / "March 15, 2025").
- L'attributo `lang` del tag `<html>` si aggiorna.
- La lingua scelta resta salvata dopo il ricaricamento della pagina.
- `npm run build` termina senza errori.

**Prompt di esempio**

```
Voglio aggiungere la gestione multilingua (italiano e inglese) a questa app.
Analizza @src/app e proponi in Plan mode due o tre approcci possibili, con
vantaggi e svantaggi (per esempio @angular/localize, una libreria runtime
come ngx-translate o Transloco, oppure un servizio semplice basato su signals).
Non scrivere codice finché non scelgo io.
```

Dopo aver scelto l'approccio:

```
Implementa l'approccio scelto a piccoli passi. Parti dalla shell
(@src/app/app.html) e dal selettore di lingua, poi traduci una pagina
alla volta. Dopo ogni pagina esegui npm run build e fermati.
```

**Suggerimenti**

- Non fare tradurre tutto in un colpo: una pagina alla volta è più facile da controllare.
- Occhio ai testi nascosti nel codice TypeScript (titoli delle rotte, `resultsLabel`, `CATEGORY_LABELS`, `aria-label`).
- Chiedi a Cline di cercare nel progetto le stringhe italiane rimaste non tradotte alla fine.
- Per i dati delle ricette, ragiona su dove conviene tenere le traduzioni (un file per lingua, un campo per lingua dentro ogni ricetta...) e fatti proporre le alternative.

### Esercizio 2: renderla responsive

**Obiettivo.** L'app deve essere usabile da telefono, tablet e desktop.

**Criteri di accettazione**

- Nessuno scroll orizzontale a partire da **360 px** di larghezza.
- Sotto i circa 768 px il menu di navigazione diventa un menu compatto (hamburger) che si apre e si chiude, ed è utilizzabile anche da tastiera.
- La griglia delle ricette ha **3 colonne** su desktop, **2** su tablet e **1** su telefono.
- Barra di ricerca e filtri si dispongono in verticale su schermi piccoli.
- La pagina di dettaglio passa a una sola colonna su schermi piccoli.
- Larghezze e altezze fisse (`px`) sono sostituite da unità e tecniche fluide (`max-width`, `%`, `rem`, `grid`, `clamp()`).
- Testo leggibile e bottoni facili da toccare (almeno 44 px di altezza).
- Il layout desktop attuale non peggiora.

**Come verificare.** Apri gli strumenti per sviluppatori del browser (F12) e attiva la modalità dispositivo (icona del telefono, o `Ctrl+Shift+M`). Prova 360, 390, 768 e 1280 px.

**Prompt di esempio**

```
Questa app non è responsive: su telefono la pagina esce dallo schermo.
Leggi @src/styles.scss, @src/app/app.scss e gli scss delle pagine e delle
card. Elenca i punti con larghezze fisse e proponi un piano per renderla
responsive con un approccio mobile first. Non modificare nulla finché
non approvo il piano.
```

**Suggerimenti**

- Chiedi di partire dal file `styles.scss` e dalla shell (`app.scss`), poi di passare alle singole pagine.
- Se hai l'esercizio 1 già fatto, controlla che i testi inglesi, più lunghi o più corti, non rompano il layout.

### Extra (se avanzi tempo)

- **Tema scuro** con le variabili CSS già presenti in `styles.scss`, rispettando `prefers-color-scheme` e con un pulsante per cambiare.
- **Ordinamento** dell'elenco (per tempo di preparazione, difficoltà, data).
- **Form "aggiungi ricetta"** con Reactive Forms, validazioni e salvataggio nel browser.
- **Test**: aggiungi test unitari al servizio `RecipeService` e ai componenti principali.
- **Accessibilità**: controlla navigazione da tastiera, contrasto dei colori e attributi ARIA.
- **Refactor**: chiedi a Cline di rivedere il progetto e di segnalare problemi o codice migliorabile, senza modificare nulla, e valuta tu cosa accettare.

## Consegna e buone pratiche

- Un commit per ogni passaggio completato, con un messaggio chiaro.
- Controlla il diff di Git prima di ogni commit: se non capisci una modifica, chiedi a Cline di spiegarla.
- Non incollare mai la tua API key nel codice o in un file del repository.

## Nota

Il progetto ha scopo didattico: le ricette sono di esempio e non è collegato a nessun servizio reale.
