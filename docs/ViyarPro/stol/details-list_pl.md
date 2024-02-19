[Do spisu treści](/service/doc/?cid=stol)
## Lista części

Lista części jest tabelą, w której każdy nowy wiersz odpowiada odrębnemu typorozmiarowi części.
Kolejność wpisów na liście wpływa na tworzenie numeracji części podczas rozkroju materiału.

W razie potrzeby można wydrukować tabelę klikając na przycisk
![Wydrukuj listę części](/service/doc/img/button-print.png).
Dokument wydruku zostanie wygenerowany jako normalna tabela ze wszystkimi wymaganymi polami.

![Przemieszczaj](/service/doc/img/button-move.png) - Przemieszczać pozycję w górę i w dół w tabeli.

![Edytuj](/service/doc/img/button-edit.png) - Edytować wpis.

![Usuń](/service/doc/img/button-delete.png) - Usuwać pozycję.

![Kopiuj](/service/doc/img/button-copy.png) - Kopiować istniejące części lub tworzyć ich kopie lustrzane wraz z przypisanymi dodatkowymi obróbkami.

W każdej kolumnie tabeli jest kilka przełączników ![](/service/doc/img/button-checkbox-off.png) / ![](/service/doc/img/button-checkbox-on.png) (włącz/wyłącz):

- **Wybór części/części dla dodatkowych czynności** - Za pomocą tego przełącznika można wybrać jedną, kilka lub wszystkie pozycje do wykonania na nich dodatkowych czynności.
<!--- **Faktura** - Ustaw/wyłącz orientację faktury. Jeśli zaznaczono - podczas rozkroju część będzie układana tak, aby faktura była zorientowana wzdłuż długości części (wzdłuż szerokości dla materiałów o fakturze poprzecznej).-->
- **Marker** - Przeznaczony do oznaczania części na potrzeby osobiste użytkownika. Wartość markera jest zapisywana przy przechodzeniu przez różne rozdziały, odświeżaniu strony i zapisywaniu/załadowaniu projektu.

Na zaznaczonych na liście częściach można wykonać dodatkowe czynności, takie jak:

- **Zmień obrzeże** - jeśli wybrane do wyszukiwania obrzeże znajduje się na części, zostaje ono zastąpione innym wybranym obrzeżem.
<!-<!--- **Ustaw wartość faktury** - na wybranych częściach zostanie ustawiony/wyłączony znacznik orientacji faktury. Jeśli zostanie ustawiony - podczas rozkroju części będą układane tak, aby faktura była zorientowana wzdłuż długości części (wzdłuż szerokości dla materiałów o fakturze poprzecznej).-->
- **Zwiększ ilość części** - zwiększa ilość wybranych części określoną liczbę raz.
- **Zmniejsz ilość części** - zmniejsza ilość wybranych części określoną liczbę raz.
- **Drukuj wybrane części** - tworzy zestaw danych o obróbkach części i drukuje razem z rysunkami.
- **Połącz jednakowe** - części o tej samej nazwie, rozmiarach i obróbkach zostaną połączone w jedną pozycję o łącznej ilości.
- **Usuń dod. obróbki** - usuwa dodatkowe obróbki z wybranych części.
- **Usuń wybrane części** - usuwa wybrane części z listy.
- **Wybierz części z dod. obróbkami** - wybiera części, dla których są ustawione dodatkowe obróbki oprócz nakładania obrzeża.
- **Wybierz nieprawidłowe części** - wybiera części, które nie przeszły sprawdzenia pod kątem prawidłowości, jeśli znajdują się na liście.

Przejście do dodatkowej obróbki części można zrealizować poprzez podwójne kliknięcie na wymagany wpis.

<a name="quick-addition" />

### Tabela szybkiego wprowadzania (TSzW)

Aby przejść do trybu szybkiego wprowadzania, należy aktywować przełącznik w nagłówku tabeli.
Pojawia się wtedy tabela szybkiego wprowadzania, która zawiera dwa tryby: _tryb nawigacji_ i _tryb edytowania_.

Lista operacji w _trybie nawigacji_:

- __[&uarr;]__, __[&darr;]__, __[&larr;]__, __[&rarr;]__ - przemieszczanie między komórkami;
- __[+]__ lub __[Ctrl]+[Enter]__ - tworzenie nowej pozycji i przejście do trybu edytowania;
- __[Enter]__ - przejście do trybu edytowania bieżącej komórki.

Lista operacji w _trybie edytowania_:

- __[0]-[9]__ - wprowadzenie wartości dla bieżącej komórki;
- __[Enter]__ - potwierdzenie wprowadzenia i przejście do kolejnej komórki;
- __[Esc]__ - przejście do trybu nawigacji.

Do określenia [obróbki czół](/service/doc/?cid=stol&s=edges) należy aktywować przełącznik "Obróbka czół", 
po czym pojawią się dodatkowe kolumny:

<!--
- G - czoło górne;
- D - czoło dolne;
-->

- L - czoło lewe;
- P - czoło prawe.

Do wprowadzenia wartości obróbek można użyć indeksów obrzeży z listy wybranych obrzeży.
<!--
Jeśli ma zostać określone ścięcie czoła pod kątem, to po wprowadzeniu wartości kąta należy dodać gwiazdkę "&ast;".
Aby np. określić ścięcie pod kątem 45 stopni na boku przednim, należy wprowadzić "45&ast;" lub "-45&ast;", jeśli wymagane jest ścięcie na boku tylnym.
-->

#### Filtracja

Możliwe jest filtrowanie wyświetlanych części według parametrów "Szerokość", "Wysokość" i "Ilość". W tym celu należy umieścić kursor na nazwie parametru w nagłówku tabeli; po prawej stronie nazwy pojawi się znak lejka. Po kliknięciu na nim otwiera się okno, w którym można wprowadzić wartość do filtracji.
Można używać kilku filtrów jednocześnie, wtedy ich warunki są łączone. Aby dowiedzieć się, który filtr jest aktualnie używany, wystarczy spojrzeć na nagłówek. W przypadku parametrów z aktywnym filtrem "Lejek" nie znika.
Aby zresetować filtr, należy kliknąć na "Lejek" i usunąć wartość z pola wprowadzenia w wyświetlonym oknie.

<a name="quick-addition-autosave" />

#### Automatyczne zapisywanie wprowadzanych danych

Jeśli podczas bardzo szybkiego wprowadzania danych tabela zaczyna długo przetwarzać zapytania, aby zwiększyć wydajność, można wyłączyć opcję automatycznego zapisywania danych wprowadzonych do tabeli.
Jeśli przełącznik "Automatyczne zapisywanie TSzW" jest wyłączony, zmiany wprowadzone w tabeli zostaną zapisane dopiero po kliknięciu przycisku "Zapisz" pod tabelą szybkiego wprowadzania.

[Do spisu treści](/service/doc/?cid=stol)