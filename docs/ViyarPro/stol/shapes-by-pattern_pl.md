[Do spisu treści](/service/doc/?cid=stol) | [Dodatkowa obróbka części](/service/doc/?cid=stol&s=detail-additives)
## Wycięcia według szablonu

Ustawić wycięcia według szablonu na części można w rozdziale **Dod. obróbka** w sekcji **Wycięcie według szablonu**.
W tym celu należy wybrać żądany szablon i kolejno wypełnić jego parametry, a następnie kliknąć przycisk **Dodaj**.
Obecnie dostępne są następujące szablony:

- [Wycięcie w kształcie litery U](#uShaped);
- [Wycięcie prostokątne](#rectangular)<!--;
- [Zamek](#lock)-->;
- [Koło](#circle);
- [Łuk](#arc).

<a name="uShaped"/>

### Wycięcie w kształcie litery U

Wprowadzenie wycięcia w kształcie litery U realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

- __Bok__ - określa się pożądane czoło części;
- __Przesunięcie__ (mm):
  - względem osi X - wcięcie po lewej stronie dla wycięć na czole górnym/dolnym,
  - względem osi Y - wcięcie od dołu dla wycięć na czole lewym/prawym;
- __Rozmiar__ (mm):
  - w poziomie - wymiar piłowania wycięcia w poziomie,
  - w pionie - wymiar piłowania wycięcia w pionie;
- __Promień__ - wskazuje się wymagany promień do uzyskania zaokrąglenia wewnątrz wycięcia w kształcie litery U;
- __Dod. obróbka__ - obecność znacznika wyboru na tej pozycji oznacza, że potrzebna jest dodatkowa operacja, aby uzyskać kąt wewnętrzny 90&deg; (patrz rysunek);
- __Obrzeże__ - obrzeże, którym ma być oklejone wycięcie.

![](/service/doc/img/shapeByPattern-uShaped.png)

![](/service/doc/img/shapeByPattern-uShaped-ext.png)

>Ograniczenia:
>
- Minimalne wcięcie do początku wycięcia - 20 mm.
- Minimalny rozmiar wycięcia bez dodatkowej obróbki i bez obrzeża - szerokość = 20 mm, głębokość = 3 mm.
- Minimalny rozmiar wycięcia z dodatkową obróbką - szerokość = 100, głębokość = 10 mm.
- Minimalny rozmiar wycięcia z obrzeżem o grubości do 0,8 mm - szerokość = 200, głębokość = 1<!--2-->0 mm.
- Minimalny rozmiar wycięcia z obrzeżem o grubości od 0,8 mm - szerokość = 300 mm, głębokość = 50 mm.
- Maksymalna głębokość wycięcia z obrzeżem o grubości od 0,8 mm, jeżeli szerokość jest mniejsza niż 450 mm - 450 mm.
- Minimalna grubość obrzeża wymagająca wykorzystania dodatkowej obróbki - 0,8 mm.
>
Przy wycięciu dużej części części konieczne jest zapewnienie wystarczającej przestrzeni do zamocowania części na maszynie.

<a name="rectangular"/>

### Wycięcie prostokątne

Wprowadzenie wycięcia prostokątnego realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

- __Przesunięcie__ (mm):
  - względem osi X - wcięcie po lewej stronie do początku wycięcia,
  - względem osi Y - wcięcie od dołu do początku wycięcia;
- __Rozmiar__ (mm):
  - w poziomie - wymiar piłowania wycięcia w poziomie,
  - w pionie - wymiar piłowania wycięcia w pionie;
- __Dod. obróbka__ - obecność znacznika na tej pozycji oznacza, że potrzebna jest dodatkowa operacja do uzyskania kąta wewnętrznego 90&deg; (patrz rysunek);
- __Obrzeże__ - obrzeże, którym ma być oklejone wycięcie.

![](/service/doc/img/shapeByPattern-rectangular.png)

![](/service/doc/img/shapeByPattern-rectangular-ext.png)

> Ograniczenia:
>
- Minimalne wcięcie do początku wycięcia - 20 mm.
- Minimalny rozmiar wycięcia bez dodatkowej obróbki i bez obrzeża - 30x30 mm.
- Minimalny rozmiar wycięcia z dodatkową obróbką i/lub z obrzeżem - 100x100 mm.
- Maksymalna grubość obrzeża możliwego do oklejania wycięcia - 0,6 mm.
>
Przy wycięciu dużej części części konieczne jest zapewnienie wystarczającej przestrzeni do zamocowania części na maszynie:
>
![](/store/Items/libs/doc_pictures/scrinu/otstol.jpg)
>
<b>Minimalne rozmiary do wycięć okien wzdłuż konturu (z resztą korpusu 3 mm)</b>:
>
- Długość wycięcia do 780 mm przy minimalnym wcięciu 80 (na 150)x80(na 150)x50x50 - frezowanie przelotowe
- Długość wycięcia od 781 mm lub minimalne wcięcie 20x20x20x20 - frezowanie ślepe (<b>reszta korpusu wzdłuż konturu 3 mm</b>)
- Minimalny rozmiar wycięcia - 100x100 mm
- Przesunięcie do początku wycięć i pomiędzy nimi - 6 mm
- Przesunięcie do początku wycięć od czoła z zaokrągleniem promieni - 10 mm.
- Minimalny promień wewnętrzny - 10
- Reszta korpusu - 3 mm (<b>frez przebiega wzdłuż konturu samego wycięcia, a nie po całej płaszczyźnie</b>)
- Przy użyciu tego wycięcia oklejanie obrzeża nie jest dostępne 
- Do wycięć okien wzdłuż konturu zostanie użyte wejście i wyjście frezu o średnicy 20.
>
Wycięcie to wymaga dalszego dokończenia (wybierz resztę korpusu materiału równy 3 mm), które klient wykonuje samodzielnie.
>
![](/store/Items/libs/doc_pictures/scrinu/wycięcie.png)
>
![](/store/Items/libs/doc_pictures/scrinu/wycięcie2.png)

### Zamek

W jednej części blatu wycina się wgłębienie, aby połączyć go pod kątem prostym z drugą częścią blatu.<br>
Domyślna głębokość zamka wynosi 20 mm, więc część wchodząca w zamek musi być dłuższa o 20 mm.<br>
Cięcie blatu w zamek zamawiają wraz z wyżłobieniem otworów pod złącze, gdyż połączenie obu części wykonuje się za pomocą złącza do blatu.

![](/store/Items/libs/doc_pictures/scrinu/zamek.png)

<b>Program NIE dodaje do rozkroju +20 mm do wymiarów całkowitych części wchodzących do zamka!<br>
Musi to być wykonane samodzielnie przez użytkownika programu.<br>
Możesz sprawdzić rozmiar tej lub innej części, patrząc na mapy rozkroju.</b>

### Parametry frezowań pod różne rodzaje złączy (L65, L100, L150)
![](/store/Items/libs/doc_pictures/scrinu/zamok2.jpg)

<!--
<a name="lock"/>

### Zamek

Wprowadzenie zamka realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

- __Rodzaj__ Rodzaj wycięcia zamka. Możliwe wartości:
   - Zewnętrzny,
   - Wewnętrzny;
- __Pozycja__ Pozycja zamka względem części. Możliwe wartości:
   - Lewy,
   - Prawy;
- __Rodzaj mocowania__ - Rodzaj mocowania do łączenia części z zamkami. Możliwe wartości:
   - L65,
   - L100,
   - L150;
- __Ilość mocowań__ - ilość mocowań łączących. Możliwe wartości:
   - 2,
   - 3;
- __Powiązanie do części__ - Pole jest opcjonalne. Łączy dwie części, tworząc zamek na części powiązanej z odpowiednimi wartościami do ich połączenia.

![](/service/doc/img/shapeByPattern-lock.png)

> Ograniczenia:
>
  - Niemożliwe jest wykonanie zamka na części o wysokości większej niż szerokość.
  - Niemożliwe jest wykonanie zamka od boku z przylegającymi obróbkami rogów.
-->

<a name="circle"/>

### Koło

Wprowadzenie wycięcia okrągłego realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

- __Przesunięcie__ (mm):
  - względem osi X - wcięcie po lewej stronie do środka koła,
  - względem osi Y - wcięcia od dołu do środka koła;
- __Promień__ - określa się wymagany promień koła.

![](/service/doc/img/shapeByPattern-circle.png)

> Ograniczenia:
>
- Minimalny rozmiar promienia - 15 mm.
- Minimalny rozmiar promienia z obrzeżem - 100 mm.
- Maksymalna grubość obrzeża możliwego do oklejania wycięciu - 0,8 mm.
>
Przy wycięciu dużej części części konieczne jest zapewnienie wystarczającej przestrzeni do zamocowania części na maszynie.

<a name="arc"/>

### Łuk

Wprowadzenie wycięcia "Łuk" realizowane jest za pomocą specjalnego formularza, w którym należy wpisać następujące dane:

- __Bok__ - określa się wymagane czoło części;
- __Przesunięcie__ - wcięcie od krawędzi podstawowej części do początku łuku;
- __Obrzeże__ - obrzeże, którym ma być oklejone wycięcie.

> Ograniczenia:
>
- Maksymalny rozmiar przesunięcia - połowa rozmiaru krawędzi podstawowej. 


[Do spisu treści](/service/doc/?cid=dsp) | [Dodatkowa obróbka części](/service/doc/?cid=dsp&s=detail-additives)
