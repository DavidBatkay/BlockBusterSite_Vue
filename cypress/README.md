# Teste E2E cu Cypress

## Echipa

Acest proiect de testare a fost realizat de echipa formată din:

- **Batkay David**
- **Ezechiel Sandru**

## Scopul testelor

Scopul acestor teste este de a verifica funcționalitatea principalelor pagini ale aplicației web, folosind **Cypress**, un framework modern de testare end-to-end. Testele automate ne ajută să ne asigurăm că aplicația funcționează corect, fără erori vizibile pentru utilizator, și că elementele cheie sunt afișate și reacționează corect în funcție de acțiunile utilizatorului.

## Ce fac testele?

Testele sunt împărțite în trei fișiere principale:

### 1. `home.spec.cy.js`

Testează pagina principală a aplicației:

- Verifică dacă URL-ul și titlul sunt corecte.
- Confirmă că elementele importante sunt vizibile: bara laterală, footer-ul și butonul de toggle.
- Verifică afișarea grilei de filme (`#movie-grid`) și numărul corect de filme pentru diverse dimensiuni de ecran (desktop și tabletă).

### 2. `login.spec.cy.js`

Testează pagina de autentificare:

- Verifică încărcarea paginii de login și adresa URL corectă.
- Confirmă prezența formularului de login, inputurilor pentru email și parolă, și a link-ului "Forgot your password?".
- Verifică dacă utilizatorul poate introduce emailul și parola, și dacă butonul de login este afișat corect.

### 3. `myaccount.spec.cy.js`

Testează pagina „Contul Meu” după autentificare:

- Simulează autentificarea cu un utilizator de test și verifică accesul către `/myaccount`.
- Verifică dacă sunt afișate corect detaliile contului: email, planul de abonament și opțiunile de configurare a contului.
- Testează funcționalitatea pentru secțiunile: **Billing Information**, **Parental Controls** și **Account Settings**.
- Confirmă afișarea corectă a secțiunii de știri.

### 4. `all.spec.cy.js`

Acesta este un fișier care importă toate celelalte trei fișiere de test (`home`, `login`, `myaccount`) și rulează toate testele la un loc pentru a permite testarea completă a aplicației dintr-o singură comandă.
