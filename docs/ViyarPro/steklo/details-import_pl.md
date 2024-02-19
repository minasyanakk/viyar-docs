[Do spisu treści](/service/doc/?cid=steklo)
## Import części

Importować części do projektu można w rozdziale **Części** w sekcji **Import z pliku tekstowego**.
Lista części może być importowana z pliku tekstowego, w którym dane są zapisane w specjalnym formacie.

### Format formularza zamówienia usług ViYar 

Format składa się z wpisów, w których każdy wiersz zawiera informacje o osobnej części, który z kolei składa się z pól wartości oddzielonych separatorem (przecinkiem lub średnikiem).

Aby uzyskać plik tekstowy w formacie odpowiednim do importu części, można użyć programu do pracy z arkuszami kalkulacyjnymi. W tym celu należy utworzyć tabelę  z kolumnami w określonej kolejności.

1. [A] Długość części;
2. [B] Szerokość części;
3. [C] Ilość;
4. [D] Indeks obróbki czoła górnego (1 - Usunięcie ostrych skosów; 2 - Szlifowanie; 3 - Polerowanie; 0 lub wartość pusta - brak obróbki);
5. [E] Indeks obróbki czoła dolnego (1 - Usunięcie ostrych skosów; 2 - Szlifowanie; 3 - Polerowanie; 0 lub wartość pusta - brak obróbki);
6. [F] Indeks obróbki czoła lewego (1 - Usunięcie ostrych skosów; 2 - Szlifowanie; 3 - Polerowanie; 0 lub wartość pusta - brak obróbki);
7. [G] Indeks obróbki czoła prawego (1 - Usunięcie ostrych skosów; 2 - Szlifowanie; 3 - Polerowanie; 0 lub wartość pusta - brak obróbki);
8. [H] Nazwa.

_Przykład tabeli:_.

![](/service/doc/img/viyar-form-steklo.png)

Utworzoną tabelę należy zapisać w formacie CSV. Wynikiem powinien być plik odpowiedni do importu.

_Przykładowa zawartość pliku w formacie CSV:_.
```
Długość,Szerokość,Ilość,G,D,L,P,Nazwa
1200,400,3,2,2,2,2,Wypełnienie frontu
```

[Do spisu treści](/service/doc/?cid=steklo)