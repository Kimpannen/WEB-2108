# Beskriv hur du felsökt

Jag testade mig fram steg för steg, använde mig en del av webstorm inbyggda hjälpsystem ifall jag missat något i min kod. 

Av min reduce så kollade jag på hur Carin löste den matematiska biten för att implementera funktionen för det totala värdet och totala kvantiteten samt gratis frakt biten med en turnery.


För att visa de elementen jag har i kundkorgen använde jag turnery som denna
’’’{cartItems.length !== 0 &&’’’


Jag använde mig av {totalPrice.toFixed(0)}kr
För att undvika decimaler.

För att detta ska funka
<button onClick={() => onAdd(item)} className="add">+</button>
<button onClick={() => onRemove(item)} className="remove">-</button>

Har jag detta i min app.js.  På så sätt har komponenter tillgång till funktionaliteterna lägg till och ta bort. Jag kommunicerar med komponenterna och app.js så jag använder mig av props.

# Vad gick bra

Utseendemässigt kanske det inte är den snyggaste sidan, men den är väldigt lätt och konkret. Det får jobbet gjort.  Jag lärde mig hur props och map samt turnery fungerade. 

# Vad gick dåligt

1. Jag försökte implementera global kontext men det var väldigt svårt att förstå och implementera så av den anledningen valde jag att ha min tomma array av produkterna i min app.js. https://www.youtube.com/watch?v=Dorf8i6lCuk&t=279s
2. Jag hade problem med en dropdown meny så jag stadgade mig med en konstant varukorg istället. Jag försökte men tror att det krockar med min CSS på något sätt som gjorde att hela skärmen blev svart, jag hade inte tid att fixa till detta.  

# Vilka möjligheter ser du med de kunskaper du fått under kursen.

Jag har lärt mig väldigt mycket, men har fortfarande en lång väg framför mig. Detta gör det lättare att förstå hur saker hänger ihop, det var lite enklare att förstå än ren vanilla javascript, åtminstone fanns det saker man lätt kunde kolla upp. 

