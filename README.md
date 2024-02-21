# SYS - Gruppe J

## Produktidé

Vi har valgt at lave en "Saas," som er et bookingsystem.
Ideen er, at vi, som udbyder, sælger en software, som kan skræddersyes til kunden. Softwaren består oprindeligt af et generisk bookingsystem. 

## Roller

- Global Admin
- Lokal Admin
- Manager
- Bruger / Booker

## Usecase
[UseCase Dokument](https://docs.google.com/document/d/1xxmISS68Xoby0AoRGuLd3un52yQZHQYerZO2AStOcio/edit?usp=sharing)

### Klassediagram
![image](https://github.com/TheRealJackiBoi/SYS/blob/main/Class%20Diagram%20(GBS).svg)


## Domænemodel
todo

## Eksempel

En skole har købt vores GBS (Generic Booking Service).
Skolen udnævner nogen, som skal være ansvarlige for softwaren. Dette kunne være en IT-afdeling hos kunden.
Vi som udbyder (Global Admin) udsteder den Lokale Admin-rolle til de IT-asvarlige.
Den lokale admin kan nu sætte softwaren op som ønsket. Dette indebærer ingen programmering, men skal derimod kunne gøres brugervenligt i en GUI som er udviklet af os på forhånd.

Den lokale admin kan oprette **ressourcer** som kan bookes. 

Eksempel på ressourcer:
- Lokaler
- Grej (Computere, iPad's, Smartboards)
- Fagpersoner

De lokale admins opretter nu auditorier, klasselokaler, lånecomputere i systemet.

