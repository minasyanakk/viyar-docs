[К оглавлению](/service/doc/?cid=dsp)
## Экспорт/Импорт данных

### Экспорт


После выбора материала, занесения в спецификацию всех деталей, а также добавления дополнительных услуг для деталей, можно сохранить все эти данные в отдельный файл.
Для этого достаточно нажать на кнопку "Сохранить" в верхнем правом углу страницы и выбрать пункт "Файл".
Программа даст возможность сохранить файл проекта на локальное устройство (жесткий диск, флешку).

Сохраняемый файл будет иметь расширение "project" и содержать все введенные Вами данные. В дальнейшем данные можно будет импортировать в программу из этого файла.

<a name="project-saving"/>

#### Сохранение резервной копии проекта

Также доступна возможность сохранения промежуточных состояний проекта в виде резервной копии.
При выборе пункта "Сохранить">"Резервная копия", программа сохранит текущее состояние проекта.

Хранить возможно только одну резервную копию для каждого пользователя. После импорта другого проекта и сохранения его резервной копии, предыдущее сохранение будет утрачено!

Также есть возможность активации автоматического сохранения резервной копии. Подробнее об этом в разделе "[Настройки](/service/doc/?cid=dsp&s=settings)".

### Импорт

Для внесения данных в программу из ранее сохраненного файла нужно загрузить этот файл в секции "Импорт сохраненного файла" в разделе загрузки проекта.

Если Вы ранее сохраняли резервную копию проекта, то Вам также будет представлена возможность загрузить этот проект для дальнейшей обработки.
Для этого нужно нажать кнопку "Загрузить сохраненную резервную копию проекта".


<a name="import-giblab"/>

### Импорт проекта экспортированного из сервиса "GibLab"

Файл проекта полученного из сервиса "GibLab" в формате XML можно преобразовать с помощью 
[онлайн-преобразователя на нашем сайте](/service/?id=dsp&setpage=import) в формат для онлайн-конструктора ViyarPro.

При конвертации проекта в программу ViyarPro, необходимо, ОБЯЗАТЕЛЬНО проверять проект и только потом отправлять заказ.

#### Сращённые детали

Сращённые по толщине детали состоят из двух или трех слоев, соединенных между собой и облицованных впоследствии общей кромкой.
Чтобы внести материал сращённой детали, необходимо создать материал с таким же названием в начале
и с дополнительной приставкой "Сращ.(N)" в конце названия, где N - это кратность сращения.
Толщина такого материала должна быть соответственно больше в 2-3 раза.

Например:

Наименование                                        | Заданная толщина, мм   | Кратность
:---------------------------------------------------|:---------------------:|:------------:
Материал Заказчика 18мм                             |   18                  | 1
Материал Заказчика 18мм Сращ.(2)                    |   36                  | 2
Материал Заказчика 18мм Сращ.(3)                    |   54                  | 3


#### Обработка торцов

Если используемая кромка по своим параметрам (ширина/толщина) не имеет аналога в списке "Кромки заказчика", то в процессе импорта она (кромка) будет проигнорирована системой, то есть  импорт такого материала невозможен.

#### Дополнительные обработки (отверстия, пазы и прочее)

Из дополнительных обработок импортируются отверстия и пазы. Пазы прописанные через операцию "Пазование" (GR), а не через операцию "Обработка" (XNC), импортируются как закрытые кромкой пазы.
Криволинейная обработка НЕ импортируется.


<a name="import-bazis"/>

### Импорт проекта экспортированного из программы "Базис-Мебельщик"

Конвертер Bazis2Viyar предназначен для подготовки и экспорта деталей из проектов, созданных программой Базис-Мебельщик, в формат ViyarPro.<br/>
При конвертации проекта в программу ViyarPro, необходимо, ОБЯЗАТЕЛЬНО проверять проект и только потом отправлять заказ.

Установка скрипта:

Для работы конвертера Bazis2Viyar необходимо наличие установленного скрипта "Экспорт деталей Bazis2Viyar". Установщик программы Bazis2Viyar выполняет установку скрипта для всех установленных версий 
Базис-Мебельщик в папку скриптов "\Scripts\Импорт-экспорт". Если после установки программы Bazis2Viyar в меню скриптов Базис-Мебельщик отсутствует пункт "Скрипты -> Импорт-экспорт -> Экспорт деталей Bazis2Viyar", 
то установку скрипта необходимо выполнить самостоятельно.

Для этого скопируйте файлы из папки скриптов Bazis2Viyar, по  умолчанию "C:\Program Files\ Bazis2Viyar\Scripts" ("C:\Program Files (x86)\  Bazis2Viyar\Scripts" для 64-битной операционной системы), в папку скриптов
Базис-Мебельщик "\Scripts\Импорт-экспорт". Расположение файлов скриптов  Базис-Мебельщик можно узнать в меню "Настройка -> Параметры -> Пути к  файлам -> Файлы скриптов". Например, для Базис-Мебельщик 8, скрипты по  умолчанию
 находятся в папке "Мои документы\Bazis8\Scripts". В папке скриптов  "\Scripts\Импорт-экспорт" должен присутствовать файл "ObjTree.js", который  необходим для работы скрипта "Экспорт деталей Bazis2Viyar".

После установки скрипта в программе Базис-Мебельщик появится  пункт меню "Скрипты -> Импорт-экспорт -> Экспорт проекта ViyarPro.


[Скачать конвертер](https://viyar.ua/downloads/files/SetupBazisViyar5.8.exe)

Для более детальной информации, по конвертеру Базис-Мебельщик, скачайте инструкцию к конвертеру:

[Скачать инструкцию](https://viyar.ua/upload/iblock/745/Rukovodstvo-novoe.pdf)

Минимальные системные требования для конвертера:

- Windows 2000/XP/Vista/7, Linux (с использованием Wine);
- 128MB ОЗУ;
- 20МВ свободного места на HDD;
- видеокарта с 32МВ.

<a name="import-sketchUp"/>
### Импорт проекта экспортированного из программы "SketchUp"

[Просмотр/Скачать инструкцию](/service/doc/files/SketchUp_інструкція.pdf)

Файл для пункта 3  Настройка "ABF" в инструкции:

<a href="/service/doc/files/Viyar_fittings_25.09.2023.json" download>Viyar fittings 25.09.2023.json</a>

Плагин для оптимизации проекта позволяет:

- Кнопка на панели инструментов для быстрого доступа к експортированию;
- Быстрый экспорт;
- Быстрее конвертация;
- Никаких предупреждений аудита.

Детальней смотрите инструкцию

### Ограничения

НЕ поддерживается:
 
- Внешние радиусы на углах и в Г-образном вырезе
- Торцевое фрезерование
- Срез торца под углом

Ограничения ABF (SketchUp):

- Разная кромка с одинаковой толщиной конвертируется в одном декоре 
- Кривые (радиусы) должны быть кривыми, а не набором линий (при построении использовать большое количество сегментов)
- Название материала, слоя обработки (например, отверстие) — не более  26 символов


<a name="import-woody"/>

### Импорт проекта экспортированного из программы "Woody"

Файл проекта полученного из программы проектирования мебели "Woody" в формате XML можно преобразовать с помощью 
[онлайн-преобразователя на нашем сайте](/service/?id=dsp&setpage=import) в формат для онлайн-конструктора ViyarPro.

При конвертации проекта в программу ViyarPro, необходимо, ОБЯЗАТЕЛЬНО проверять проект и только потом отправлять заказ.

#### Сращённые детали

При проектировании в программе "Woody" существует возможность задавать сращённые по толщине детали.
Такие детали состоят из двух или трех слоев, соединенных между собой и облицованных впоследствии общей кромкой.
Чтобы внести материал сращённой детали, необходимо создать материал с таким же названием в начале
и с дополнительной приставкой "Сращ.(N)" в конце названия, где N - это кратность сращения.
Толщина такого материала должна быть соответственно больше в 2-3 раза.

Например:

Наименование                                        | Заданная толщина, мм   | Кратность
:---------------------------------------------------|:---------------------:|:------------:
Материал Заказчика 18мм                             |   18                  | 1
Материал Заказчика 18мм Сращ.(2)                    |   36                  | 2
Материал Заказчика 18мм Сращ.(3)                    |   54                  | 3


#### Обработка торцов

В связи с тем, что формат экспортированный из программы "Woody" не предоставляет полной информации об обработках торцов,
а указывает только габаритный и пильный размеры детали из разницы которых можно предположить, какой кромкой оклеиваются торцы,
то после преобразования данных в формат ViyarPro в некоторых неоднозначных случаях возможно некорректное определение толщин кромок и их расположения.
Например, если деталь оклеена с одной из двух паралельных сторон кромкой толщиной 1 мм, то такая обработка будет определена как оклеивание с двух сторон кромкой толщиной 0.5 мм,
или, если деталь оклеена с двух паралельных сторон кромкой толщиной 1 мм, то такая обработка будет определена как оклеивание кромкой толщиной 2 мм с одной стороны.
Такое определение обусловлено тем, что кромка с толщиной 1 мм используется реже.

Если используемая кромка по своим параметрам (ширина/толщина) не имеет аналога в списке "Кромки заказчика", то в процессе импорта она (кромка) будет проигнорирована системой, то есть  импорт такого материала невозможен.

#### Дополнительные обработки (отверстия, пазы и прочее)

Из дополнительных обработок импортируются отверстия и пазы. Пазы не на всю длину детали некорректно экспортируются из программы Woody, поэтому их длину нужно будет откорректировать после импорта в ViyarPro.
Криволинейная обработка НЕ импортируется.

#### Перед оформлением заказа

Тщательно проверяйте импортированные данные перед [оформлением заказа](/service/doc/?cid=dsp&s=order), а именно:

* наличие кромки на детали и ее толщину и расположение;
* длину пазов, а также признак закрытости паза, если необходимо, чтобы паз был закрыт кромкой.


<a name="import-astra"/>

### Импорт проекта экспортированного из программы "Астра Конструктор Мебели"

Файл проекта полученного из программы проектирования мебели "Астра Конструктор Мебели" в формате XML можно преобразовать с помощью 
[онлайн-преобразователя на нашем сайте](/service/?id=dsp&setpage=import) в формат для онлайн-конструктора ViyarPro.

При конвертации проекта в программу ViyarPro, необходимо, ОБЯЗАТЕЛЬНО проверять проект и только потом отправлять заказ.


<a name="import-raskroy"/>

### Импорт проекта экспортированного из программы "ВиЯр-Раскрой"

Файл проекта полученного из программы "ВиЯр-Раскрой" можно преобразовать с помощью 
[конвертера VZA-файлов](https://viyar.ua/downloads/files/VZA_Convertor.exe) в формат для онлайн-конструктора ViyarPro.

Минимальные системные требования для конвертера:

- Windows 2000/XP/Vista/7, Linux (с использованием Wine);
- 256MB ОЗУ;
- 200МВ свободного места на HDD;
- видеокарта с 32МВ;
- обязательно наличие Microsoft .NET Framework 4 ([скачать с сайта Microsoft](https://www.microsoft.com/ru-ru/download/confirmation.aspx?id=17718)).

### Импорт проекта экспортированного из программы "3D-Constructor 7"

В 3D-Constructor 7, разработчик “Элекран Софт”  реализован экспорт данных в ViyarPro. За постпроцессором обращаться в **Элекран Софт**. 
   
**Сайт компании:** - [«Элекран Софт»](http://www.elecran.com.ua).  

**Почта:** support@elecran.com.ua

**Skype:** elecran  

**Телефон:**  

- (+38 048) 714-09-83
- (+38 048) 728-78-44

### [Импорт деталей](/service/doc/?cid=dsp&s=details-import)

Возможность импорта деталей описана в соответствующем разделе.

[К оглавлению](/service/doc/?cid=dsp)
