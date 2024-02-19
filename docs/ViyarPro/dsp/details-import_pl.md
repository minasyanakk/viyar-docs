[Do spisu treści](/service/doc/?cid=dsp)
## Import części

>Importować części do projektu można w rozdziale **Części** w sekcji **Import z pliku tekstowego**.
Lista części może być importowana z pliku tekstowego, w którym dane są zapisane w specjalnym formacie.

<a name="viyar"/>

### Format formularza zamówienia usług ViYar 

>Format składa się z wpisów, w których każdy wiersz zawiera informacje o osobnej części, które z kolei składają się z pól wartości oddzielonych separatorem (przecinkiem lub średnikiem).
Aby uzyskać plik tekstowy w formacie odpowiednim do importu części, można użyć programu do pracy z arkuszami kalkulacyjnymi. W tym celu należy utworzyć tabelę  z kolumnami w określonej kolejności.
Jeśli wybrano materiał płyta wiórowa, kolejność kolumn jest następująca (jeśli wybrano materiał płyta pilśniowa, informacje o obrzeżach są ignorowane)
>
1. [A] Długość części (rozmiar piłowania, czyli rozmiar bez uwzględnienia grubości obrzeża);
2. [B] Szerokość części (rozmiar piłowania, czyli rozmiar bez uwzględnienia grubości obrzeża);
3. [C] Ilość;
4. [D] Indeks obrzeża górnego (2 - obrzeże o grubości 2 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
5. [E] Indeks obrzeża dolnego (2 - obrzeże o grubości 2 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
6. [F] Indeks obrzeża lewego (2 - obrzeże o grubości 2 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
7. [G] Indeks obrzeża prawego (2 - 2 - obrzeże o grubości 2 mm (jeśli nie wybrano z listy), 1 - obrzeże o grubości 0,5 mm (jeśli nie wybrano z listy));
8. [H] Uwzględniaj fakturę wzdłuż długości ("-", "0" lub "Brak" - nie uwzględniać, każda inna wartość lub jej brak - uwzględniaj) (wzdłuż szerokości dla materiałów z fakturą poprzeczną);
9. [I] Nazwa (lub notatka);
10. [J] Krotność łączenia (Ilość warstw materiału w części, od 1 do 3 lub łączna grubość części nie przekraczająca 60 mm). **Opcjonalne pole. Jeśli parametr nie jest określony, przyjmuje wartość "1".

>_Przykład tabeli:_.

>![](/service/doc/img/viyar-form-dsp.png)

>[Pobierz szablon do programu Excel](/service/doc/files/viyar_form.xls)
>
>[Pobierz szablon Excela do przeliczania rozmiarów piłowania na wymiary całkowite](/service/doc/files/viyar.xlsm)

>Zapisz utworzoną tabelę w formacie CSV (separatory to przecinki). Wynikiem powinien być plik odpowiedni do importu.

>Przykładowa zawartość pliku w formacie CSV:_.

>Długość,Szerokość,Ilość,G,D,L,P,Faktura,Nazwa,Krotność łączenia

>500,300,1,0,0,0,0,-,Dno szuflady,

>300,148,2,1,1,0,0,+,Poprzeczna,

>535,148,2,1,1,1,0,+,Wzdłużna,

>372,166,1,2,2,2,2,+,Front,


<a name="pro100"/>

### Format programu PRO100

>Dostępna jest możliwość importowania części z plików wyeksportowanych z programu PRO100.
>
![](/service/doc/img/pro100-export-1.png)
![](/service/doc/img/pro100-export-2.png)
![](/service/doc/img/pro100-export-3.png)

>Z pliku są importowane części, których grubość odpowiada grubości wybranego materiału.
Jeśli wybrano materiał płyty wiórowej, importowane są również informacje o obrzeżach, jako materiał obrzeży używany jest "Obrzeże Materiał Klienta" o grubości 0,5 mm lub wybrane z listy obrzeży w sekcji **Import z pliku tekstowego**.

<a name="woody"/>
