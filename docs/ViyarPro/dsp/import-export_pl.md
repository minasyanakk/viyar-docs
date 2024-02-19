[Do spisu treści](/service/doc/?cid=dsp)
## Eksport/Import danych

### Eksport


Po wybraniu materiału, wprowadzeniu do specyfikacji wszystkich części oraz dodaniu dodatkowych usług dla części, można zapisać wszystkie te dane do osobnego pliku.
Wystarczy kliknąć na przycisk "Zapisz" w prawym górnym rogu strony i wybrać pozycję "Plik".
Program umożliwi zapisanie pliku projektu na urządzeniu lokalnym (dysk twardy, pamięć USB).

Zapisywany plik będzie miał rozszerzenie "projekt" i będzie zawierał wszystkie wprowadzone dane. Dane te można następnie zaimportować do programu z tego pliku.

<a name="project-saving"/>

#### Zapisywanie kopii zapasowej projektu

Dostępna jest również możliwość zapisania pośrednich stanów projektu jako kopii zapasowej.
Przy wybraniu pozycji "Zapisz">"Kopia zapasowa", program zapisze bieżący stan projektu.

Dla każdego użytkownika można zapisać tylko jedną kopię zapasową. Po zaimportowaniu innego projektu i zapisaniu jego kopii zapasowej, poprzednie zapisanie zostanie utracone!

Istnieje również możliwość aktywacji automatycznego zapisywania kopii zapasowej. Więcej informacji można znaleźć w rozdziale "[Ustawienia](/service/doc/?cid=dsp&s=settings)".

### Import

Aby wprowadzić dane do programu z wcześniej zapisanego pliku, należy załadować ten plik w sekcji "Import zapisanego pliku" w rozdziale załadowania projektu.

Jeśli wcześniej zapisano kopię zapasową projektu, to również zostanie przedstawiona możliwość załadowania tego projektu do dalszego przetwarzania.
W tym celu należy kliknąć na przycisk "Załaduj zapisaną kopię zapasową projektu".


<a name="import-giblab"/>

### Import projektu wyeksportowanego z serwisu "GibLab"

Plik projektu uzyskany z serwisu GibLab w formacie XML można przekonwertować za pomocą
[konwertera online na naszej stronie](/service/?id=dsp&setpage=import) do formatu dla projektanta online ViyarPro.

Podczas konwersji projektu do programu ViyarPro, należy OBOWIĄZKOWO sprawdzić projekt i dopiero wtedy wysłać zamówienie.

#### Połączone części

Połączone względem grubości części składają się z dwóch lub trzech warstw połączonych ze sobą, a następnie oblicowanych wspólnym obrzeżem.
Aby wprowadzić materiał połączonej części, należy stworzyć materiał o tej samej nazwie na początku
i z dodatkowym prefiksem "Łącz.(N)" na końcu nazwy, gdzie N jest krotnością łączenia.
Grubość takiego materiału musi być odpowiednio 2-3 razy większa.

Na przykład:

Nazwa                                            | Ustawiona grubość, mm   | Krotność
:------------------------------------------------|:-----------------------:|:------------:
Materiał Klienta 18mm                            |   18                    | 1
Materiał Klienta 18mm Łącz.(2)                   |   36                    | 2
Materiał Klienta 18mm Łącz.(3)                   |   54                    | 3


#### Obróbka czół

Jeśli stosowane obrzeże dla swoich parametrów (szerokość/grubość) nie ma odpowiednika na liście "Obrzeża klienta", podczas importu zostanie ono (obrzeże) zignorowane przez system, tzn. nie będzie możliwe zaimportowanie tego materiału.

#### Dodatkowe obróbki (otwory, rowki i inne)

Z dodatkowych obróbek importowane są otwory i rowki. Rowki utworzone przy pomocy operacji "Rowkowanie" (GR), ale nie przy pomocy operacji "Obróbka" (XNC), są importowane jako rowki zamknięte obrzeżem.
Obróbka krzywoliniowa NIE jest importowana.


<a name="import-bazis"/>

### Import projektu wyeksportowanego z programu "Bazis-Mebelszczik" 

Konwerter Bazis2Viyar przeznaczony jest do przygotowania i eksportu części z projektów stworzonych przez program Bazis-Mebelszczik do formatu ViyarPro.<br/>.
Podczas konwersji projektu do programu ViyarPro należy OBOWIĄZKOWO sprawdzić projekt i dopiero wtedy wysłać zamówienie.

Instalacja skryptu:

Aby konwerter Bazis2Viyar działał, musi być zainstalowany skrypt „Eksport części Bazis2Viyar”. Instalator programu Bazis2Viyar instaluje skrypt dla wszystkich zainstalowanych wersji
Bazis-Mebelszczik do folderu skryptów "\Scripts\Import-Export". Jeśli po zainstalowaniu programu Bazis2Viyar w menu skryptu Bazis-Mebelszczik nie ma pozycji „Skrypty -> Import-Eksport -> Eksport części Bazis2Viyar”,
zainstalować skrypt należy samodzielnie.

W tym celu należy skopiować pliki z folderu skryptów Bazis2Viyar, domyślnie "C:\Program Files\ Bazis2Viyar\Scripts" ("C:\Program Files (x86)\ Bazis2Viyar\Scripts" dla 64-bitowego systemu operacyjnego), do folderu skryptów
Bazis-Mebelszczik "\Scripts\Import-Export". Lokalizację plików skryptów Bazis-Mebelszczik można znaleźć w menu „Ustawienia -> Parametry -> Ścieżki plików -> Pliki skryptów”. Na przykład dla Bazis-Mebelszczik 8 skrypty domyślne
 znajdują się w folderze „Moje dokumenty\Bazis8\Scripts”. Folder skryptów "\Scripts\Import-Export" musi zawierać plik "ObjTree.js", który jest niezbędny do działania skryptu "Export części Bazis2Viyar".

Po zainstalowaniu skryptu w programie Bazis-Mebelszczik pojawi się pozycja menu „Skrypty -> Import-eksport -> Eksport projektu ViyarPro”.


[Pobierz konwerter](https://viyar.ua/downloads/files/SetupBazisViyar5.8.exe)

Aby uzyskać bardziej szczegółowe informacje na temat konwertera Bazis-Mebelszczik, pobierz instrukcję do konwertera:

[Pobierz instrukcję](https://viyar.ua/upload/iblock/745/Rukovodstvo-novoe.pdf)

Minimalne wymagania systemowe do konwertera:

- Windows 2000/XP/Vista/7, Linux (przy użyciu Wine);
- 128MB pamięci RAM;
- 20MB wolnego miejsca na HDD;
- karta graficzna z 32MB.

<a name="import-sketchUp"/>
### Import projektu wyeksportowanego z programu "SketchUp"

[Podgląd/Pobierz instrukcję](/service/doc/files/SketchUp_instrukcja.pdf)

Plik dla pozycji 3 Ustawienie "ABF" w instrukcji:

<a href="/service/doc/files/ViYar_dodatek_03.02.2023.json" download>ViYar dodatek 03.02.2023</a>

Wtyczka do optymalizacji projektu pozwala na:

- Przycisk na pasku narzędzi do szybkiego dostępu do eksportowania;
- Szybki eksport;
- Szybsza konwersja;
- Brak ostrzeżeń audytowych.

Więcej szczegółów patrz w instrukcji.

### Ograniczenia

NIE są obsługiwane:
 
- Promienie zewnętrzne na rogach i w wycięciu w kształcie litery L
- Frezowanie czołowe
- Cięcie czoła pod kątem

Ograniczenia ABF (SketchUp):

- Różne obrzeże o tej samej grubości konwertowane jest w tym samym dekorze 
- Krzywe (promienie) muszą być krzywymi, a nie zbiorem linii (używaj dużej liczby segmentów podczas składania)
- Nazwa materiału, warstwy obróbki (np. otwór) - nie więcej niż 26 znaków


<a name="import-woody"/>

### Import projektu wyeksportowanego z programu "Woody"

Plik projektu uzyskanego z programu do projektowania mebli "Woody" w formacie XML można przekonwertować za pomocą
[konwertera online na naszej stronie](/service/?id=dsp&setpage=import) do formatu dla projektanta online ViyarPro.

Podczas konwersji projektu do programu ViyarPro, należy OBOWIĄZKOWO sprawdzić projekt i dopiero wtedy wysłać zamówienie.

#### Połączone części

Podczas projektowania w programie "Woody" istnieje możliwość ustawienia połączonych względem grubości części.
Takie części składają się z dwóch lub trzech warstw, które są połączone ze sobą, a następnie oblicowane wspólnym obrzeżem.
Aby wprowadzić materiał połączonej części, należy na początku utworzyć materiał o tej samej nazwie
z dodatkowym prefiksem "Łącz.(N)" na końcu nazwy, gdzie N jest krotnością łączenia.
Grubość takiego materiału musi być odpowiednio 2-3 razy większa.

Na przykład:

Nazwa                                             | Ustawiona grubość, mm   | Krotność
:-------------------------------------------------|:---------------  ------:|:------------:
Materiał Klienta 18mm                             |   18                    | 1
Materiał Klienta 18mm Łącz.(2)                    |   36                    | 2
Materiał Klienta 18mm Łącz.(3)                    |   54                    | 3


#### Obróbka czół

Ponieważ format wyeksportowany z programu "Woody" nie dostarcza pełnych informacji o obróbkach czół,
a podaje jedynie wymiary całkowite i rozmiary piłowania części, których różnica pozwala domyślać się, jakim obrzeżem zostały oklejone czoła,
to po przekonwertowaniu danych do formatu ViyarPro w niektórych niejednoznacznych przypadkach możliwe jest, że  grubość obrzeży i ich położenie nie zostaną prawidłowo określone.
Na przykład, jeśli część jest oklejona z jednego z dwóch równoległych boków obrzeżem o grubości 1 mm, taka obróbka zostanie określona jako oklejanie z obu boków obrzeżem o grubości 0,5 mm,
lub, jeśli część jest oklejona z dwóch równoległych boków obrzeżem o grubości 1 mm, taka obróbka zostanie określona jako oklejanie obrzeżem o grubości 2 mm z jednej strony.
Określenie to wynika z faktu, że obrzeże o grubości 1 mm jest rzadziej stosowane.

Jeżeli zastosowane obrzeże dla swoich parametrów (szerokość/grubość) nie ma odpowiednika na liście "Obrzeża klienta" , zostanie ono (obrzeże) podczas importu zignorowane przez system, tzn. nie będzie możliwe zaimportowanie tego materiału.

#### Dodatkowe obróbki (otwory, rowki i inne)

Z dodatkowych obróbek importowane są otwory i rowki. Rowki nie na pełną długość części są nieprawidłowo eksportowane z programu Woody, więc ich długość będzie musiała być skorygowana po zaimportowaniu do ViyarPro.
Obróbka krzywoliniowa NIE jest importowana.

#### Przed złożeniem zamówienia

Dokładnie sprawdź zaimportowane dane przed [złożeniem zamówienia](/service/doc/?cid=dsp&s=order), a mianowicie:

* obecność obrzeża na części oraz jego grubość i położenie;
* długość rowków oraz wskazanie zamykania rowka, jeśli rowek ma być zamknięty obrzeżem.


<a name="import-astra"/>

### Import projektu wyeksportowanego z programu "Astra Projektant Mebli"

Plik projektu uzyskanego z programu do projektowania mebli "Astra Projektant Mebli" w formacie XML można przekonwertować za pomocą
[konwertera online na naszej stronie](/service/?id=dsp&setpage=import) do formatu dla projektanta online ViyarPro.

Podczas konwersji projektu do programu ViyarPro, należy OBOWIĄZKOWO sprawdzić projekt i dopiero wtedy wysłać zamówienie.


<a name="import-raskroy"/>

### Import projektu wyeksportowanego z programu "ViYar-Rozkrój"

Plik projektu uzyskanego z programu "ViYar-Rozkrój" można przekonwertować za pomocą 
[konwertera plików VZA](https://viyar.ua/downloads/files/VZA_Convertor.exe) do formatu dla projektanta online ViyarPro.

Minimalne wymagania systemowe do konwertera:

- Windows 2000/XP/Vista/7, Linux (przy użyciu Wine);
- 256MB pamięci RAM;
- 200MB wolnego miejsca na HDD;
- 32MB karta graficzna;
- wymagany jest Microsoft .NET Framework 4 ([pobierz ze strony Microsoft](https://www.microsoft.com/ru-ru/download/confirmation.aspx?id=17718)).

### Import projektu wyeksportowanego z programu "3D-Constructor 7"

W 3D-Constructor 7, deweloper “Elekran Soft” zrealizowano eksport danych do ViyarPro. W sprawie postprocesora należy skontaktować się z **Electran Soft**. 
   
**Strona firmy:** - ["Elekran Soft"](http://www.elecran.com.ua).  

**Adres poczty elektronicznej:** support@elecran.com.ua

**Skype:** elecran  

**Telefon:**  

- (+38 048) 714-09-83
- (+38 048) 728-78-44

### [Import części](/service/doc/?cid=dsp&s=details-import)

Możliwość importu części została opisana w odpowiednim rozdziale.

[Do spisu treści](/service/doc/?cid=dsp)
