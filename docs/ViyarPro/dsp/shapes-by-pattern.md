[К оглавлению](/service/doc/?cid=dsp) | [Дополнительная обработка деталей](/service/doc/?cid=dsp&s=detail-additives)
## Вырезы по шаблону

Установить вырезы по шаблону на детали можно в разделе **Доп. обработка** в секции **Вырез по шаблону**.
Для этого нужно выбрать необходимый шаблон и последовательно заполнить его параметры, и нажать кнопку **Добавить**.
На текущий момент доступны следующие шаблоны:

- [П-образный вырез](#uShaped);
- [Прямоугольный вырез](#rectangular);
- [Шаблон "Под руку" ("Улыбка")](#smile);
- [Окружность](#circle);
- [Дуга](#arc).

Список допустимых обработок детали в зависимости от типа материала можно посмотреть в разделе ["Список допустимых обработок детали в зависимости от типа материала"](/service/doc/?cid=dsp&s=operations-list).

<a name="uShaped"/>

### П-образный вырез

Ввод П-образного выреза осуществляется с помощью специальной формы, в которой необходимо указать следующие данные:

- __Сторона__ - указывается необходимый торец детали;
- __Смещение__ (мм):
  - по оси X - отступ слева для вырезов на верхнем/нижнем торце,
  - по оси Y - отступ снизу для вырезов на левом/правом торце;
- __Размер__ (мм):
  - по горизонтали - габаритный размер выреза по горизонтали,
  - по вертикали - габаритный размер выреза по вертикали;
- __Радиус__ - указывается необходимый радиус для получения скругления внутри П-образного выреза;
- __Доп. обработка__ - наличие галочки на этом пункте указывает на то, что нужно произвести дополнительную операцию для получения внутреннего угла 90&deg; (см. рис.);
- __Кромка__ - кромка, которой нужно оклеить вырез.

![](/service/doc/img/shapeByPattern-uShaped.png)

![](/service/doc/img/shapeByPattern-uShaped-ext.png)

>__Ограничения:__
>
- Вырез глубиной до 150 мм - минимальные отступы по бокам выреза 20х20 мм, по глубине остаток 80 мм.
- Вырез глубиной от 151 мм - минимальные отступы 80х80х80 мм.
- Максимальный размер П-образного выреза по координате "У" (глубина выреза сверху или снизу детали) - 1250 мм;
- Минимальный размер выреза без дополнительной обработки и без кромки - ширина = 15 мм, глубина = 3 мм (для толщины до 19 мм)
- Минимальный размер выреза без дополнительной обработки и без кромки - ширина = 21 мм, глубина = 11 мм (для любой толщины)
- Минимальный размер выреза с дополнительной обработкой - ширина = 100, глубина = 10 мм.
- Минимальный размер выреза с кромкой толщиной до 0.8 мм (включительно) - ширина = 200, глубина = 10 мм.
- Минимальная размер выреза с кромкой толщиной от 1 мм - ширина = 200 мм, глубина = 50 мм.
- Максимальная глубина выреза с кромкой толщиной от 1 мм, если ширина меньше 450 мм - 450 мм.
- Минимальный радиус скругления внутри выреза - 10 мм.
- Минимальный радиус скругления внутри выреза, если толщина детали не больше 18 мм - 3 мм.
- Максимальная глубина выреза 1250 мм.
>
П-образный вырез - глубина зареза до 400 мм, ширина - не менее 200 мм. Если глубина более 400 мм, то ширина - не меньше 300 мм.
>
При вырезании значительной части детали необходимо чтобы оставалась достаточная площадь для крепления детали на станке.

<a name="rectangular"/>

### Прямоугольный вырез

Ввод прямоугольного выреза осуществляется с помощью специальной формы, в которой необходимо указать следующие данные:

- __Смещение__ (мм):
  - по оси X - отступ слева до начала выреза,
  - по оси Y - отступ снизу до начала выреза;
- __Размер__ (мм):
  - по горизонтали - габаритный размер выреза по горизонтали,
  - по вертикали - габаритный размер выреза по вертикали;
- __Доп. обработка__ - наличие галочки на этом пункте указывает на то, что нужно произвести дополнительную операцию для получения внутреннего угла 90&deg; (см. рис.);
- __Кромка__ - кромка, которой нужно оклеить вырез.

![](/service/doc/img/shapeByPattern-rectangular.png)

![](/service/doc/img/shapeByPattern-rectangular-ext.png)

> Ограничения:
>
- Размер прямоугольного выреза до 500мм - отступы от краев детали 80х80х20х20 мм (отступы по 80 мм должны быть паралельны друг другу);
- Размер прямоугольного выреза от 501мм - отступы от краев детали 80х80х80х80 мм;
- Минимальный размер выреза без дополнительной обработки и без кромки - 20х20 мм (для толщины до 19 мм включ) / 35х35 мм (для любой толщины материала).
- Минимальный размер выреза с дополнительной обработкой - 100х100 мм (доп. обработка возможна на материале с толщиной до 19 мм (включительно)).
- Минимальный размер выреза с кромкой толщиной 0.4 - 0.6 мм - 150х150 мм.
- Минимальный размер выреза с кромкой толщиной 0.8 мм - 200х200 мм.
- Максимальная толщина кромки, для оклеивания выреза - 0.8 мм.
>
При вырезании значительной части детали необходимо чтобы оставалась достаточная площадь для крепления детали на станке.
>
При условии что отступы меньше требуемых, мы можем выполнить вырез не на всю глубину детали, который регламентируется соответствующим чек боксом:
>
![](/store/Items/libs/doc_pictures/scrinu/111.jpg)
>
<b>Прямоугольный вырез(с остатком тела по контуру 3 мм):</b>
>
- Минимальный размер выреза - 100х100 мм
- Минимальный внутренний радиус - 10
- Смещение до начала вырезов и между ними - 6 мм 
- Остаток тела - 3 мм (<b>фреза проходит по контуру самого выреза, а не по всей плоскости</b>)
- При использовании данного выреза оклеивание кромки не доступно
- Для вырезов окон по контуру будет использоваться вход и выход фрезой 20 диаметра.
>
Данный вырез требует последующей доработки (выбрать остаток тела материала равный 3мм), которую клиент осуществляет самостоятельно.
<a name="notch"/>
>
<a name="notch"></a>
![](/store/Items/libs/doc_pictures/scrinu/вырез.png)
>
![](/store/Items/libs/doc_pictures/scrinu/вырез2.png)

<a name="smile"/>

### Шаблон "Под руку" ("Улыбка")

Ввод шаблона "Под руку" осуществляется с помощью специальной формы, в которой необходимо указать следующие данные:

- __Сторона__ - указывается необходимый торец детали;
- __Смещение__ (мм):
  - по оси X - отступ слева для вырезов на верхнем/нижнем торце,
  - по оси Y - отступ снизу для вырезов на левом/правом торце;
- __Увеличить длину выреза на__ (мм) - увеличивает длину выреза между скруглениями;
- __Кромка__ - кромка, которой нужно оклеить вырез.

![](/service/doc/img/shapeByPattern-smile.png)

> Ограничения:
>
- Минимальный отступ до начала выреза - 50 мм.
- Минимальный размер торца, на котором будет выполнятся шаблон "Под руку" - 320 мм.
- Минимальный размер детали для данной обработки - 320x120 мм.

<a name="circle"/>

### Окружность

Ввод округлого выреза осуществляется с помощью специальной формы, в которой необходимо указать следующие данные: 

- __Смещение__ (мм):
  - по оси X - отступ слева до центра окружности,
  - по оси Y - отступ снизу до центра окружности;
- __Радиус__ - указывается необходимый радиус окружности.

![](/service/doc/img/shapeByPattern-circle.png)

> Ограничения:
>
- Окружность R - 10 мм (для толщины до 19 мм включительно)
- Окружность R - 17,5 мм (для любой толщины материала)
- Минимальный размер радиуса с кромкой - 100 мм.
- Максимальная толщина кромки, которой возможно оклеить вырез - 0.8 мм.
>
При вырезании значительной части детали необходимо чтобы оставалась достаточная площадь для крепления детали на станке.

<a name="arc"/>

### Дуга

Ввод выреза "Дуга" осуществляется с помощью специальной формы, в которой необходимо указать следующие данные:

- __Сторона__ - указывается необходимый торец детали;
- __Смещение__ - отступ от базового края детали до начала дуги;
- __Кромка__ - кромка, которой нужно оклеить вырез.

> Ограничения:
>
- Максимальный размер смещения - половина размера базового края.

### Торцевое фрезерование (Только Украина):

![](/store/Items/libs/doc_pictures/scrinu/torfrez.jpg)


[К оглавлению](/service/doc/?cid=dsp) | [Дополнительная обработка деталей](/service/doc/?cid=dsp&s=detail-additives)
