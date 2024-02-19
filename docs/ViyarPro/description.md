# Описание структуры конструкторов

> Идентификаторы конструкторов (cid):
>
- __dsp__ - [Обработка ДСП/ДВП/МДФ](/service/doc/?cid=dsp) [PHP+Javascript+jQuery],
- __stol__ - [Обработка столешниц](/service/doc/?cid=stol) [PHP+Javascript+jQuery],
- __sliding-systems__ - [Раздвижные системы](/service/doc/?cid=sliding-systems) [Angular+Three.js],
- __steklo__ - [Обработка стекла/зеркала](/service/doc/?cid=steklo) [PHP+Javascript+jQuery],
- __fasad-mdf__ - [Фасады МДФ (пленка)](/service/doc/?cid=fasad-mdf) [Angular+Three.js],
- __constructions__ - Конструктор шкафов [Angular+Three.js] [не активен].

---

> Коды городов:
>
- __dp__ - Днепр,
- __kh__ - Харьков,
- __kiev__ - Киев,
- __minsk__ - Минск.

---

> [История формата хранения данных проекта](/service/doc/?cid=&s=project-version)

---

## Описание директорий


<a name="Cache"/>
### Cache/
_sliding-systems, steklo, fasad-mdf_

Папка временного хранения данных, которые кешируются классом __[system/models/Cache.php](#system-models-Cache.php)__.
В основном здесь хранятся данные полученные из запросов к 1С, необходимые для работы конструкторов.
Например, данные о материалах.


### common/
_sliding-systems, fasad-mdf_

Общие файлы конструкторов на база фреймворка Angular v1.5.0 и библиотеки Three.js.
Содержит сам фреймворк и вспомогательные библиотеки, а также общие скрипты и стили.


<a name="config"/>
### config/
_dsp, stol, sliding-systems, steklo, fasad-mdf_

Файлы конфигурации, которые считываются классом __[system/models/Cfg.php](#system-models-Cfg.php)__.
Есть общие конфигурации, а также распределенные по географическому признаку и по типам конструкторов.

- __config/by/_/__ - общие конфигурации для Белоруссии.
- __config/by/minsk/__ - конфигурации для Минска.
- __config/by/&lt;cid&gt;.php__ - конфигурации конкретных конструкторов для Белоруссии.
- __config/by/local.php__ - настройки локализации (валюта, формат номера телефона) для Белоруссии.
- __config/main/__ - общие для всех конфикурации.
- __<a name="config-main-menu.php"/>config/main/menu.php__ - конфигурация основного меню и под-меню разделов ["Детали"](/service/doc/?cid=dsp&s=details-list) и ["Доп. обработка"](/service/doc/?cid=dsp&s=detail-additives). Определяет список пунктов и их доступность в зависимости от режима приложения и группы пользователя. Обрабатывается классом __[system/models/Menu.php](#system-models-Menu.php)__.
- __<a name="config-main-requests.php"/>config/main/requests.php__ - конфигурация для выполнения AJAX-запросов к сайту интернет-магазина. Обрабатывается классом __[system/models/Requests.php](#system-models-Requests.php)__.
- __config/ua/_/__ - общие конфигурации для Украины.
- __config/ua/dp/__ - конфигурации для Днепра.
- __config/ua/kh/__ - конфигурации для Харькова.
- __config/ua/kiev/__ - конфигурации для Киева.
- __config/ua/&lt;cid&gt;.php__ - конфигурации конкретных конструкторов для Украины.
- __config/ua/local.php__ - настройки локализации (валюта, формат номера телефона) для Украины.
- __config/user/__ - [пользовательские настройки](/service/doc/?cid=dsp&s=settings) по умолчанию.


### constructions/
_constructions_

Файлы конструктора шкафов.


### css/
_dsp, stol, sliding-systems, steklo, fasad-mdf_

Общие таблицы стилей и изображения необходимые для стилизации, в том числе файлы сторонних библиотек (Bootstrap, jQuery-UI).


<a name="doc"/>
### doc/
_dsp, stol, sliding-systems, steklo, fasad-mdf_

Пользовательская документация по конструкторам в формате [Markdown](https://ru.wikipedia.org/wiki/Markdown).
Преобразовывется в HTML с помощью класса __[system/models/Michelf/](#system-models-Michelf)MarkdownExtra.php__.


### fasad-mdf/
_fasad-mdf_

Файлы конструктора фасадов МДФ (пленка, краска).


### fonts/
_dsp, stol, sliding-systems, steklo, fasad-mdf_

Файлы шрифтов.


### img/
_dsp, stol, sliding-systems, steklo, fasad-mdf, constructions_

Файлы изображений.


### js/
_dsp, stol, steklo_

Скрипты описывающие логику приложения на стороне браузера (ввод данных, проверки), в том числе скрипты сторонних библиотек (Bootstrap, jQuery).

- __js/additives/machines/miniatures.js__ - формирование миниатюрных изображений обработок нанесенных на деталь.
- __js/additives/clipping.js__ - обработка ["Подрезание в размер"](/service/doc/?cid=dsp&s=clipping).
- __js/additives/corners.js__ - [обработка углов детали](/service/doc/?cid=dsp&s=corners).
- __js/additives/cut.js__ - обработка ["Распил"](/service/doc/?cid=dsp&s=cut).
- __js/additives/drilling.js__ - [сверление отверстий](/service/doc/?cid=dsp&s=drilling).
- __js/additives/drilling_multi.js__ - сверление отверстий на нескольких деталях.
- __js/additives/edging.js__ - [обработка торцов детали](/service/doc/?cid=dsp&s=edges).
- __js/additives/grooving.js__ - [выборка пазов](/service/doc/?cid=dsp&s=grooving).
- __js/additives/grooving_multi.js__ - выборка пазов на нескольких деталях.
- __js/additives/odk.js__ - Обработка Детали Конструктором (услуга ОДК), здесь Конструктор имеется ввиду человек :), который будет создавать программу для станка по чертежу.
- __js/additives/rabbeting.js__ - [выборка четверти](/service/doc/?cid=dsp&s=rabbeting).
- __js/additives/rabbeting_multi.js__ - выборка четверти на нескольких деталях.
- __js/additives/shapes.js__ - [вырезы произвольной формы](/service/doc/?cid=dsp&s=shapes) (состоящие из последовательности линий и дуг).
- __js/additives/shapesByPattern.js__ - [вырезы по предустановленным шаблонам](/service/doc/?cid=dsp&s=shapes-by-pattern).
- __js/inputTable/__ - логика [таблицы быстрого ввода (ТБВ)](/service/doc/?cid=dsp&s=details-list#quick-addition).
- __js/additives.main.js__ - скрипт раздела ["Доп. обработка"](/service/doc/?cid=dsp&s=detail-additives).
- __js/admin.js__ - скрипт раздела "Установки" (панели настроек, доступной только администраторам, которая предоставляет графический интерфейс для изменения параметров конфигурации).
- __js/cutting.main.js__ - скрипт раздела ["Детали"](/service/doc/?cid=dsp&s=details-list).
- __js/importCsv.js__ - логика универсального [импорта списка деталей в формате CSV](/service/doc/?cid=dsp&s=details-import#viyar).
- __js/main.js__ - общий скрипт для всех разделов.


### min/
_dsp, stol, steklo_

Библиотека минификации скриптов и таблиц стилей.


### sliding/
_sliding-systems_

Файлы конструктора раздвижных систем.


### system/
_dsp, stol, steklo_

Здесь находится основная логика серверной части приложения.

- __system/common/Geometry.php__ - общий класс с методами для геометрических вычислений.

- __system/controllers/__ - контроллеры.
    - __system/controllers/Additives.php__ - обработчик запросов из раздела ["Доп. обработка"](/service/doc/?cid=dsp&s=detail-additives) через AJAX.
    - __system/controllers/Ajax.php__ - обработчик запросов из различных разделов через AJAX.
    - __system/controllers/Cutting.php__ - обработчик запросов из раздела ["Детали"](/service/doc/?cid=dsp&s=details) через AJAX.
    - __system/controllers/Details.php__ - класс для работы со списком деталей (добавление/удаление детали в/из проект(а), [визуализация детали](/service/doc/?cid=dsp&s=detail-additives#axes), проверка корректности проекта). Список состоит из экземпляров класса __[system/models/Detail.php](#system-models-Detail.php)__.
    - __system/controllers/Edges.php__ - класс для работы со списком кромок (получение информации о материалах из базы, добавление/удаление в/из проект(а)). Список состоит из экземпляров класса __[system/models/Edge.php](#system-models-Edge.php)__
    - __system/controllers/Errors.php__ - класс для работы со списком ошибок. Список состоит из экземпляров класса __[system/models/Error.php](#system-models-Error.php)__
    - __system/controllers/JsonController.php__ - контроллер AJAX-запросов, который кодирует ответ в формат JSON.
    - __system/controllers/MainController.php__ - контроллер AJAX-запросов.
    - __system/controllers/Materials.php__ - класс для работы со списком материалов (получение информации о материалах из базы, добавление/удаление в/из проект(а)). Список состоит из экземпляров класса __[system/models/Material.php](#system-models-Material.php)__.
    - __system/controllers/Products.php__ - класс для работы со списком дополнительных товаров. Список состоит из экземпляров класса __[system/models/Product.php](#system-models-Product.php)__.
    - __system/controllers/Router.php__ - маршрутизатор запросов (подключает нужные страницы или выполняет определенные команды в зависимости от запроса).
    - __system/controllers/Warnings.php__ - класс для работы со списком предупреждений. Список состоит из экземпляров класса __[system/models/Warning.php](#system-models-Warning.php)__.

- __system/models/__ - модели.
    - __system/models/Import/__ - классы для [импорта из сторонних программ (Астра, GibLab, Woody)](/service/doc/?cid=dsp&s=import-export).
    - __<a name="system-models-Michelf"/>system/models/Michelf/__ - библиотека [PHP Markdown](https://michelf.ca/projects/php-markdown/) для преобразования из формата Markdown в HTML. Используется для [документации](#doc).
    - __system/models/Operations/__ - классы для описания операций на детали.
    - __system/models/ShapesByPattern/__ - классы описывающие обработку ["Вырезы по шаблону"](/service/doc/?cid=dsp&s=shapes-by-pattern).
    - __system/models/Account.php__ - класс для отправки данных в учетную систему для [расчета стоимости](/service/doc/?cid=dsp&s=cost) или [заявки на заказ](/service/doc/?cid=dsp&s=order).
    - __system/models/Archiver.php__ - класс для создания архивов в формате ZIP.
    - __system/models/Backup.php__ - класс для записи и чтения [резервной копии файла проекта](/service/doc/?cid=dsp&s=import-export#project-saving).
    - __system/models/Box.php__ - класс описывающий предустановленную мебельную конструкцию "Корпус ящика".
    - __<a name="system-models-Cache.php"/>system/models/Cache.php__ - класс для записи и чтения кеша (в директории [Cache/](#Cache)). Используется для хранения результатов запросов к учетной системе.
    - __<a name="system-models-Cfg.php"/>system/models/Cfg.php__ - класс для чтения/записи параметров конфигурации (файлы конфигурации расположены в директории [config/](#config)).
    - __system/models/Construction.php__ - базовый класс описывающий предустановленную мебельную конструкцию, используется классами описывающими более конкретные мебельные конструкции.
    - __system/models/Constructor.php__ - класс управляющий конструктором (установка/получение: идентификатора конструктора, режима приложения, текущей страницы, основного материала и др.).
    - __system/models/Csv.php__ - импорт из определенных форматов CSV сторонних программ ([PRO100](/service/doc/?cid=dsp&s=details-import#pro100), Woody, Базис Мебельщик).
    - __system/models/CurlSoap.php__ - класс для выполнения [SOAP](https://ru.wikipedia.org/wiki/SOAP)-запросов к учетной системе посредством [cURL](http://php.net/manual/ru/book.curl.php).
    - __<a name="system-models-Detail.php"/>system/models/Detail.php__ - класс описывающий деталь и нанесенные на нее обработки. Содержит методы для проверки корректности обработок, добавления/удаления обработок, установки параметров детали.
    - __<a name="system-models-Edge.php"/>system/models/Edge.php__ - класс описывающий кромочный материал.
    - __<a name="system-models-Error.php"/>system/models/Error.php__ - класс содержащий список сообщений об ошибках.
    - __system/models/File.php__ - вспомогательный класс для файловых операций, например, выгрузки файла с сервера в браузер.
    - __system/models/GibLab.php__ - класс для загрузки/сохранения данных в формате project (содержит структуру [формата сервиса GibLab](https://giblab.com/help/format_ru.html) необходимую для формирования программ для станков, а также блок [viyar](/service/doc/?cid=&s=project-version) используемый для описания проекта).
    - __system/models/Local.php__ - класс содежащий методы для установки/получения данных зависящих от локации (код страны, код города, список адрессов доставки, адресс сайта).
    - __system/models/Log.php__ - класс для записи сообщений во временный журнал.
    - __system/models/LowerKitchenSection.php__ - класс описывающий предустановленную мебельную конструкцию "Секция кухонная нижняя".
    - __system/models/Machine.php__ - класс для установки/получения кода станка определяющего вывод информации под определенный тип станка.
    - __<a name="system-models-Material.php"/>system/models/Material.php__ - класс описывающий плитный материал.
    - __<a name="system-models-Menu.php"/>system/models/Menu.php__ - класс формирующий меню на основе параметров из файла конфигурации [config/main/menu.php](#config-main-menu.php).
    - __system/models/NightStand.php__ - класс описывающий предустановленную мебельную конструкцию "Тумба".
    - __system/models/Notify.php__ - класс для отправки оповещений на электронную почту.
    - __system/models/PatternCuttingCalculation.php__ - класс для интерпретации ответа от запроса на формирование раскроя через сервиса GibLab. Полученные данные используются для визуализации раскроя через HTML5 Canvas в приложении.
    - __<a name="system-models-PHPMailer.php"/>system/models/PHPMailer.php__ - библиотека для отправки электронной почты.
    - __<a name="system-models-Product.php"/>system/models/Product.php__ - класс описывающий дополнительный товар (фурнитура, аксессуары).
    - __system/models/Project.php__ - класс для установки/получения параметров проекта (название, расширение файла, необходимость авто-сохранения), методы для экспорта/импорта данных.
    - __<a name="system-models-Requests.php"/>system/models/Requests.php__ - класс для выполнения AJAX-запросов к сайту интернет-магазина для получения информации о материалах и других товарах. Настройки в файле конфигурации [config/main/requests.php](#config-main-requests.php)
    - __system/models/SendMail.php__ - оболочка для класса __[system/models/PHPMailer.php](#system-models-PHPMailer.php)__. Используется для отправки электронной почты после оформления заказа.
    - __system/models/Shapes.php__ - класс описывающий обработку ["Вырезы"](/service/doc/?cid=dsp&s=shapes) (произвольной формы состоящие из последовательности линий и дуг).
    - __system/models/SMTP.php__ - вспомогательный класс для класса __[system/models/PHPMailer.php](#system-models-PHPMailer.php)__.
    - __system/models/SoapRequests.php__ - набор методов выполнящих запросы к учетной системе в основном для получения данных для конструктора по обработке стекла/зеркала.
    - __system/models/UpperKitchenSection.php__ - класс описывающий предустановленную мебельную конструкцию "Секция кухонная верхняя".
    - __system/models/UserNotifications.php__ - класс для вывода оповещений для пользователя.
    - __system/models/User.php__ - класс для работы с данными пользователя.
    - __system/models/VarDumper.php__ - вспомогательный класс для класса __[system/models/Cfg.php](#system-models-Cfg.php)__, используется при записи параметров в конфигурацию.
    - __system/models/ViyarRaskroy.php__ - класс для загрузки/сохранения данных в формате программы "ВиЯр-Раскрой" (предшественник ВиЯр Про).
    - __<a name="system-models-Warning.php"/>system/models/Warning.php__ - класс содержащий список предупреждающих сообщений.
    - __system/models/XML2Array.php__ - библиотека преобразующая XML в массив. Используется для интерпретации данных получаемых через [SOAP](https://ru.wikipedia.org/wiki/SOAP)-запросы.

- __system/views/__ - виды.
    - __system/views/additives/__ - элементы страницы раздела ["Доп. обработка"](/service/doc/?cid=dsp&s=detail-additives).
    - __system/views/admin/__ - элементы страницы раздела "Установки" (админ-панель для изменения некоторых параметров конфигурации).
    - __system/views/cost/__ - элементы страницы раздела "[Стоимость](/service/doc/?cid=dsp&s=cost)/[Раскрой](/service/doc/?cid=dsp&s=cutting-visualization)".
    - __system/views/cutting/__ - элементы страницы раздела ["Детали"](/service/doc/?cid=dsp&s=details-list).
    - __system/views/import/__ - элементы страницы раздела ["Импорт проекта"](/service/doc/?cid=dsp&s=import-export).
    - __system/views/inc/__ - общие элементы подключаемые из разных страниц (главное меню и др.).
    - __system/views/material/__ - элементы страниц [выбора материалов](/service/doc/?cid=dsp&s=material).
    - __system/views/products/__ - элементы страницы раздела "Доп. товары".
    - __system/views/userSetting/__ - элементы страницы раздела ["Настройки"](/service/doc/?cid=dsp&s=settings) (пользовательские настройки).
    - __system/views/main.php__ - главная страница списка конструкторов.
    - __system/views/phone.php__ - форма [отправки заявки](/service/doc/?cid=dsp&s=order).
    - __system/views/sendAnswer.php__ - страница сообщающая о результате [отправки заявки](/service/doc/?cid=dsp&s=order).


### templates/
_dsp, stol, steklo_

Шаблоны общих фрагментов страниц (header, footer и т.д.).

- __templates/preset_items/__ - шаблоны блока выбора параметров для предустановленных мебельных конструкций.


<a name="tmp"/>
### tmp/
_dsp, stol, steklo_

Директория для хранения временных файлов.
Например, создаваемых в процессе преобразования файлов проектов сторонних мебельных программ в формат ВиЯр Про.

---

## Описание файлов


### addcities2store.sh

Shell-скрипт для создания структуры (описаной ниже) папок для городов, в которых есть филиалы компании.


### addcity2store.sh

Shell-скрипт для создания структуры папок для определенного города в директории файлового хранилища (../store), необходимой для хранения файлов проектов.

- __../store/Designers/back/__ - файлы резервных копий создаваемых автоматически.
- __../store/Designers/saves/__ - файлы резервных копий, которые сохраняются пользователем.
- __../store/Orders/&lt;Год&gt;/&lt;Код города&gt;/accepted/__ - файлы проектов подтвержденных заявок.
- __../store/Orders/&lt;Год&gt;/&lt;Код города&gt;/not_accepted/__ - файлы проектов не подтвержденных заявок, когда в учетной системе не удалось создать счет.


### clear-backup.sh

Shell-скрипт для очистки файлов резервных копий недельной давности. Вызывается по cron-заданию.


### clear-tmp.sh

Shell-скрипт для очистки [временных файлов](#tmp) старше одного дня. Вызывается по cron-заданию.


### createTmpDir.sh

Shell-скрипт для создания директорий [Cache/](#Cache) и [tmp/](#tmp) и установки прав на запись в них.


### dcache.sh

Shell-скрипт для загрузки с рабочего сервера кешированных данных для конструктора фасадов МДФ.


### iframe-test.html

Страница для тестирования приложения при подключении через iframe.


### index.php

Точка входа в приложение. Основной файл который обрабатывает запросы.


### init.php

Файл инициализации (настройка автозагрузки классов, установка режима приложения, определение вспомогательных функций, запуск сессии, проверка наличия директорий в которые может производиться запись).


### update.sh

Shell-скрипт для обновления на рабочем сервере.

---

