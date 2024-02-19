[Do spisu treści](/service/doc/?cid=stol)
## Import części

Importować części do projektu można w rozdziale **Części** w sekcji **Import z pliku tekstowego**.
Lista części może być importowana z pliku tekstowego, w którym dane są zapisane w specjalnym formacie.

### Format formularza zamówienia usług ViYar 

Format składa się z wpisów, w których każdy wiersz zawiera informacje o osobnej części, który z kolei składa się z pól wartości oddzielonych separatorem (przecinkiem lub średnikiem).

Aby uzyskać plik tekstowy w formacie odpowiednim do importu części, można użyć programu do pracy z arkuszami kalkulacyjnymi. W tym celu należy utworzyć tabelę  z kolumnami w określonej kolejności.

1. [A] Długość części (rozmiar piłowania, czyli rozmiar bez uwzględnienia grubości obrzeża);
2. [B] Szerokość części (rozmiar piłowania, czyli rozmiar bez uwzględnienia grubości obrzeża);
3. [C] Ilość;
4. [D] _Pole jest ignorowane_;
5. [E] _Pola jest ignorowane_;
6. [F] Indeks obrzeża lewego (2 - obrzeże o grubości 1 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
7. [G] Indeks obrzeża prawego (2 - obrzeże o grubości 1 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
8. [H] _Pole jest ignorowane_;
9. [I] Nazwa (lub uwaga);
10. [J] _Pole jest ignorowane_

_Przykład tabeli:_.

![](/service/doc/img/viyar-form-stol.png)

[Pobierz szablon do programu Excel](/service/doc/files/viyar.xls)

Utworzoną tabelę należy zapisać w formacie CSV. Wynikiem powinien być plik odpowiedni do importu.

_Przykładowa zawartość pliku w formacie CSV:_.
```
Długość,Szerokość,Ilość,G,D,L,P,Faktura,Nazwa,Krotność łączenia
800,600,1,,,1,1,,Blat,
```

[Do spisu treści](/service/doc/?cid=stol)