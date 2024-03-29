[К оглавлению](/service/doc/?cid=stol)
## Список деталей

Список деталей является таблицей, в которой каждая новая строка соответствует отдельному типоразмеру детали.
Последовательность записей в списке влияет на формирование нумерации деталей при раскрое материала.

При необходимости можно распечатать таблицу при помощи кнопки
![Распечатать список деталей](/service/doc/img/button-print.png).
Документ для печати будет сформирован в виде обычной таблицы со всеми необходимыми полями.

![Переместить](/service/doc/img/button-move.png) - Перемещать позиции по таблице вверх и вниз.

![Редактировать](/service/doc/img/button-edit.png) - Отредактировать запись.

![Удалить](/service/doc/img/button-delete.png) - Удалить позицию.

![Копировать](/service/doc/img/button-copy.png) - Копировать существующие детали или делать их зеркальные копии вместе с назначенными дополнительными обработками

В каждой колонке таблицы есть несколько переключателей ![](/service/doc/img/button-checkbox-off.png) / ![](/service/doc/img/button-checkbox-on.png) (выкл./вкл.):

- **Выбор детали/деталей для дополнительных действий** - С помощью этого переключателя можно отметить одну, несколько или все позиции для проведения над ними дополнительных действий.
<!--- **Текстура** - Установить/снять направление текстуры. Если флаг установлен - при раскрое деталь будут расположена таким образом, что бы текстура была направлена вдоль длины детали (вдоль ширины для материалов с поперечной текстурой).-->
- **Маркер** - Предназначен для пометок деталей для личных нужд пользователя. Значение маркера сохраняется при переходах по разным разделам, обновлении страницы и сохранении/загрузке проекта.

Над отмеченными в списке деталями можно произвести дополнительные действия, такие как:

- **Сменить кромку** - если выбранная для поиска кромка есть на детали, то она заменяется на другую выбранную кромку.
<!--- **Установить значение текстуры** - на выбранных деталях будет установлен/снят флаг направления текстуры. Если установлен - при раскрое детали будут расположены таким образом, что бы текстура была направлена вдоль длины деталей (вдоль ширины для материалов с поперечной текстурой).-->
- **Увеличить количество деталей** - увеличивается количество выбранных деталей в заданное количество раз.
- **Уменьшить количество деталей** - уменьшается количество выбранных деталей в заданное количество раз.
- **Распечатать выбранные детали** - формируется набор данных об обработках деталей и вместе с чертежами выводиться на печать.
- **Объединить одинаковые** - детали с одинаковыми названиями, размерами и обработками объединяются в одну позицию с суммарным их количеством.
- **Удалить доп. обработки** - удаляются дополнительные обработки с выбранных деталей.
- **Удалить выбранные детали** - удаляются выбранные детали из списка.
- **Выбрать детали с доп.обработками** - выбираются детали, на которых указаны дополнительные обработки, кроме нанесения кромки.
- **Выбрать некорректные детали** - выбираются детали, которые не прошли проверку на корректность, если такие есть в списке.

Переход к дополнительной обработке детали можно осуществить двойным кликом по необходимой записи.

<a name="quick-addition" />

### Таблица быстрого ввода (ТБВ)

Для перехода в режим быстрого ввода нужно активировать переключатель в заголовке таблицы.
После чего появляется таблица быстрого ввода, в которой есть два режима: _режим навигации_ и _режим редактирования_.

Список операций в _режиме навигации_:

- __[&uarr;]__, __[&darr;]__, __[&larr;]__, __[&rarr;]__ - перемещение между ячейками;
- __[+]__ или __[Ctrl]+[Enter]__ - создание новой позиции и переход в режим редактирования;
- __[Enter]__ - переход в режим редактирования текущей ячейки.

Список операций в _режиме редактирования_:

- __[0]-[9]__ - ввод значения для текущей ячейки;
- __[Enter]__ - подтверждение ввода и переход к следующей ячейке;
- __[Esc]__ - переход в режим навигации.

Для указания [обработки торцов](/service/doc/?cid=stol&s=edges) необходимо активировать переключатель "Обработка торцов", 
после чего появятся дополнительные колонки:

<!--
- В - верхний торец;
- Н - нижний торец;
-->

- Л - левый торец;
- П - правый торец.

Для ввода значений обработок можно использовать индексы кромок из списка выбранных кромок.
<!--
Если необходимо указать срез торца под углом, то после ввода значения угла нужно добавить звездочку "&ast;".
Например, для указания среза под углом 45 градусов с лицевой стороны нужно ввести "45&ast;", или "-45&ast;" если требуется срез с тыльной стороны.
-->

#### Фильтрация

Можно отфильтровать отображаемые детали по параметрам "Ширина", "Высота" и "Количество". Для этого нужно навести курсор на название параметра в шапке таблицы, справа от названия появится знак в виде воронки. Кликнув на него появляется окошко, в которое можно ввести значение для фильтрации.
Можно использовать одновременно несколько фильтров, в таком случае их условия объединяются. Что бы определить, какой фильтр используется в текущий момент времени, достаточно посмотреть на шапку. У параметров с активным фильтром "Воронка" не исчезает.
Для того, что бы сбросить фильтр, необходимо кликнуть на "Воронку" и удалить значение из поля ввода в появившемся окошке.

<a name="quick-addition-autosave" />

#### Авто-сохранение вводимых данных

В случае, если при очень быстром вводе данных таблица начинает долго обрабатывать запросы, для повышения производительности можно отключить опцию автоматичского сохранения вводимых в таблицу данных.
При отключении переключателя "Авто-сохранение ТБВ" вносимые в таблицу изменения будут сохранены только после нажатия на кнопку "Сохранить" под таблицей быстрого ввода.

[К оглавлению](/service/doc/?cid=stol)