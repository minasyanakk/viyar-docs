[Do spisu treści](/service/doc/?cid=dsp)
## Dodatkowa obróbka części

W rozdziale **Dod. obróbka** można dodać wykonanie dodatkowych operacji na części, takich jak:

- [Obróbka czół](/service/doc/?cid=dsp&s=edges)
- [Przycinanie do rozmiaru](/service/doc/?cid=dsp&s=clipping)
- [Wiercenie](/service/doc/?cid=dsp&s=drilling)
- [Rowkowanie](/service/doc/?cid=dsp&s=grooving)
- [Żłobienie  ćwierci](/service/doc/?cid=dsp&s=rabbeting)
- [Obróbka rogów](/service/doc/?cid=dsp&s=corners)
- [Wycięcia według szablonu](/service/doc/?cid=dsp&s=shapes-by-pattern)
<!-- - [Wycięcia](/service/doc/?cid=dsp&s=shapes) -->

W tym rozdziale znajduje się również wizualizacja części i zastosowanych na niej operacji.
Do powiększenia rysunku części można użyć kółka myszy trzymając wciśnięty klawisz **[Ctrl]**.
Powiększony rysunek można przesuwać, przytrzymując lewy przycisk myszy i wciskając klawisz **[Ctrl]**. 
Aby przywrócić rysunek do pierwotnego widoku należy kliknąć przycisk **Centrować**, który znajduje się nad rysunkiem części. 


### Obliczenia arytmetyczne przy wprowadzaniu wartości

Przy wprowadzaniu wartości parametrów dodatkowych obróbek można stosować obliczenia arytmetyczne (dodawanie, odejmowanie, mnożenie i dzielenie).

Możliwe jest również użycie zmiennych, które odnoszą się do parametrów części:

- **L** - długość części z uwzględnieniem grubości obrzeża (wymiar całkowity);
- **l** - długość części bez uwzględnienia grubości obrzeża (wymiar piłowania);
- **W** - szerokość części z uwzględnieniem grubości obrzeża (wymiar całkowity);
- **w** - szerokość części bez uwzględnienia grubości obrzeża (wymiar piłowania);
- **H** lub **h** - grubość części.

![](/service/doc/img/detail-sizes.png)

Przykład (połowa grubości części):

```
h/2
```


### Tryb podglądu "Tył"

Gdy tryb podglądu "Tył" jest włączony, w obszarze wyświetlania graficznego rysunku w rzeczywistości wyświetlany jest NIE tył części, ale jej WIDOK z góry, patrząc na tył przez przód.
Takie podejście ułatwia orientację w pozycjach dodatkowych obróbek, ponieważ nie ma obracania części.

W tym trybie ukrywane są również otwory (w tym przelotowe), rowki i ćwierci zaznaczone na innych bokach.

> Włączenie trybu "Tył" NIE zmienia aktywnego boku roboczego, który jest używany podczas dodawania dodatkowych operacji.

Aby wybrać tył podczas dodawania dodatkowych operacji, należy go wybrać na odpowiedniej liście w sekcji dodatkowej operacji.

<a name="osie"/>

### Układ współrzędnych

Do zaznaczenia parametrów pozycji operacji dla każdego boku części używany jest własny układ współrzędnych, 
ale głównym punktem odniesienia dla całej części jest jej **lewy dolny róg**, patrząc na przód części. 
Na rysunku boki (czoła) są zaznaczone w taki sposób, aby najbliższa krawędź rzutu czoła do rzutu boku przedniego była płaszczyzną przednią.

![](/service/doc/img/axes.png)


### Dodatkowe operacje

Możliwe jest również wykonywanie dodatkowych operacji za pomocą przycisków umieszczonych pod rysunkiem:

* ![](/service/doc/img/button-copy.png) - kopiowanie bieżącej części ze wszystkimi nałożonymi operacjami;
* ![](/service/doc/img/operation-flip-h.png) - wyświetlenie nałożonych na część operacji w poziomie;
* ![](/service/doc/img/operation-flip-v.png) - wyświetlenie nałożonych na część operacji w pionie;
* ![](/service/doc/img/operation-rotate-90.png) - obrót części bez obracania faktury o 90 stopni;
* ![](/service/doc/img/operation-rotate-180.png) - obrót części o 180 stopni.

[Do spisu treści](/service/doc/?cid=dsp)
