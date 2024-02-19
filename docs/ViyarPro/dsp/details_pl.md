[Do spisu treści](/service/doc/?cid=dsp)
## Części

Wprowadzenie części realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

+ <a name="caption">**Nazwa części** &ast; - nazwa części jest OPCJONALNA;</a>
+ <a name="length">**Długość** &ast;&ast; (mm) - długość części (wymiar całkowity);</a>
+ <a name="width">**Szerokość** &ast;&ast; (mm) - szerokość części (wymiar całkowity);</a>
+ <a name="multiplicity">**Krotność** &ast;&ast;&ast; - ilość warstw materiału w części;</a>
+ <a name="count">**Ilość** &ast;&ast;&ast;&ast; - wymagana ilość części;</a>
+ <a name="texture">**Uwzględniaj fakturę według długości/szerokości** - obecność znacznika wyboru na tej pozycji gwarantuje rozmieszczenie ​​linii dekoracyjnych (włókien imitujących naturalne drewno na powierzchni płyty wiórowej/pilśniowej) zawsze WZDŁUŻ DŁUGOŚCI części (WZDŁUŻ SZEROKOŚCI w przypadku materiałów o fakturze poprzecznej). Jeśli ten znacznik wyboru jest NIEAKTYWNY, w tym przypadku faktura na części będzie losowa (aby zoptymalizować mapę rozkroju).</a>

> &ast; Podczas procesu wytwarzania części papierowa etykieta oznaczająca każdą część w naszym przedsiębiorstwie będzie zawierała Twoją nazwę części.
Obecność tej funkcji może mieć pewną wygodę podczas montażu mebli.


> &ast;&ast;&ast; W niektórych przypadkach przy projektowaniu mebli powstaje potrzeba w częściach o grubości większej od wszystkich innych części.
Części takie składają się z kilku warstw płyty wiórowej o mniejszej grubości sklejonych klejem dwuskładnikowym,
część taka może być następnie oklejana materiałem obrzeżowym i poddana dodatkowej obróbce (wierceniu, frezowaniu itp.).
Na przykład, część o grubości 36 mm może być uzyskana poprzez sklejenie ze sobą dwóch części o grubości 18 mm.
Części takie mogą zawierać maksymalnie trzy warstwy, pod warunkiem, że całkowita grubość części nie przekracza 60 mm.

> &ast;&ast;&ast;&ast; Jeśli część składa się z kilku warstw, to należy wpisać całkowitą ilość części, a nie ilość wszystkich warstw.

> &ast;&ast;&ast;&ast; Jeśli np. istnieją TAKIE SAME względem rozmiarów części, ale RÓŻNIĄ SIĘ względem dod. obróbki, to te części muszą być tworzone oddzielnie.

W sekcji **"Informacja"** można znaleźć ogólne informacje o wszystkich częściach. Tutaj podano całkowitą ilość części, całkowitą powierzchnię części, a także ogólne informacje o dodatkowych obróbkach na wszystkich częściach.

Ustawić w razie konieczności dodatkową obróbkę można w rozdziale [Dodatkowa obróbka części] (/service/doc/?cid=dsp&s=detail-additives).

Ograniczenia produkcyjne dotyczące wytwarzania części można zobaczyć w rozdziale ["Ograniczenia produkcyjne"](/service/doc/?cid=dsp&s=limitations#detail-size-limits).

## Krotność (Łączenie)
+ <a name="multiplicity">**Krotność (łączenie)** &ast;&ast;&ast; - parametr określający ilość warstw materiału w części;</a>
+ są dwie cechy 
+ w kolumnie "Ilość" wpisujesz ilość części, a nie ilość prefabrykatów.
+ nie musisz dodawać +20 mm na przycięcie po sklejeniu, a tworząc mapę rozkroju zobaczysz, że miałeś jedną część a 2 prefabrykaty, i są one powiększone o 20-22 mm.

## Projektowanie "Łączenia" z różnych dekorów i grubości.
### Aby stworzyć łączenie z różnych materiałów, należy wykonać trzy kroki.
> &ast;1.	Utwórz jeden plik z materiałem "A" z prefabrykatami części bez obrzeżowania, aby zaprojektować łączenie. Jednocześnie ustaw krotność równą "1".
> 
> &ast;&ast;a) Dodaj 20 mm do rozmiaru piłowania (łączenia) po 20 mm do długości i szerokości (w celu przycięcia do rozmiaru netto po jej łączeniu) (jedne czoło jest przycinane o 10 mm);
> 
> &ast;&ast;b) Jeśli na czoła łączenia ma być nakładane obrzeże, dodaj do boku, na którym będzie obrzeże, kolejny 1 mm na fugowanie. Na przykład, jeśli część ma być obrzeżona wzdłuż obwodu, do rozmiaru szerokości i długości prefabrykatu należy dodać łącznie po 22 mm.
> &nbsp;
> 

> &ast;2.Utwórz drugi plik z materiałem "B". Jeśli wymagane jest obrzeżowanie, z prefabrykatami części obrzeżonymi szerokim obrzeżem pasującym do łącznej grubości łączenia. Jednocześnie ustaw krotność równą "1".
> 
> &ast;&ast;a) Dodaj do wymiaru całkowitego (łączenia) + 20 mm do długości i szerokości części (dla przycięcia do rozmiaru netto po łączeniu) (jedne czoło jest przycinane o 10 mm);
> 
> &ast;&ast;b) Dodaj również kolejne 0,5 mm na każdy obrzeżony bok (w przeciwieństwie do pierwszego pliku, gdzie dodaliśmy 1 mm na fugowanie, bo kolejne 0,5 mm projektant sam automatycznie doda do rozkroju. Ze względu na to, że nałożyłeć obrzeże na prefabrykaty). W tym pliku, na wzór obrzeżonego łączenia wzdłuż obwodu, dodajesz do rozmiaru szerokości i długości prefabrykatu łącznie po 21 mm.
>
>Na przykładzie części łączenia o wymiarach całkowitych 500x500 mm obrzeżowanej wzdłuż obwodu obrzeżem o grubości 2 mm, prefabrykaty w rozkroju powinny mieć rozmiary 518x518 mm. 518-20 (przycinanie) - 2 fugowanie = 496x496 mm + 4 mm (obrzeże) = 500x500 mm.
>
> &ast;Jeśli czoło nie jest obrzeżowane, nie należy w ogóle dodawać do niego rozmiaru fugowania (0,5 mm).
> 

> 

> &ast;3.Jeśli na części wymagane jest nakładanie dodatkowych obróbek, to tworzymy trzeci plik używając "Materiał klienta" i określamy grubość przyszłego łączenia, które jest sumą grubości materiału "A" i "B", ze standardowym projektowaniem wymaganych części łączeń w wymiarze całkowitym (z obrzeżem) i z niezbędnymi dodatkowymi obróbkami/wierceniami (w celu uzyskania programów maszynowych). 
>
> &ast;&ast;a) Tworząc listę części w trzecim pliku, podajemy wymiar CAŁKOWITY (bez uwzględnienia współczynnika do odpiłowania i fugowania)
>
> &ast;&ast;b) Nakładamy obrzeże jak również wszystkie wymagane dodatkowe obróbki.
> 
> &ast;Koniecznie dołącz rysunek wymaganych gotowych łączeń z informacją:

> Na rysunku podaj:
> 
> - materiał - przód/tył;
> 
> - boki, które mają być obrzeżowane, z podaniem grubości obrzeża;
> 
> - wymiar całkowity gotowych łączeń (z podaniem, ze jest to wymiar całkowity);
>
> &ast;Po tym dwa/trzy pliki wysyłasz jak wygodnie, albo wnioskami, albo plikami na pocztę do swojego menedżera, pisząc odpowiednie uwagi o wysłanych dwóch/trzech plikach dla łączeń z różnych dekorów/grubości.

[Do spisu treści](/service/doc/?cid=dsp)
