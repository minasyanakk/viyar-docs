## История версий формата хранения данных проекта project

**Версия 24** (2018-05-24)

- К елементу edge добавлен атрибут  __curv__  которой определяет наличие криволинейки на торце



**Версия 23** (2017-12-26)

- Добавлена новая операция __cut__ с атрибутами содержащими параметры для описания распила.

        <operation id="" type="cut" cutType="1|2|3" cutBase="1|2" isLath="0|1" cutWidth="" edgeMaterial="" length=""/>


**Версия 22** (2017-12-12)

- Добавлен новый тип выреза по шаблону __lock__ с атрибутами содержащими параметры для описания выреза по шаблону "Замок".

        <operation id="" type="shapeByPattern" patternId="lock" position="left|right" positionV="bottom|top" lock_type="in|out" fixture_type="65|100|150" fixture_count="2|3" binding="" metrage=""/>

- Добавлен новый тип выреза по шаблону __arc__ с атрибутами содержащими параметры для описания выреза по дуге вдоль выбранной стороны.

        <operation id="" type="shapeByPattern" patternId="arc" shift="" edgeId="2|3|4|5" edgeMaterial="" length="" />


**Версия 21** (2017-11-22)

- Добавлен новый атрибуты __directCut__ в элементе __material__ с типом __sheet__ для указания начального направления резов при раскрое материала.

        <material id="" type="sheet" offcut_l="[1-20]" offcut_t="[1-20]" offcut_r="[1-20]" offcut_b="[1-20]" directCut="[0-4]"  article="" guid="" oldGuid="" uuid="" name="" width="" height="" thickness="">
            <parts/>
        </material>

> 
        0=Любое
        1=По длине
        2=По ширине
        3=По длине предпочтительно
        4=По ширине предпочтительно
        По умолчанию: 0


**Версия 20** (2017-11-01)

- Добавлен новый атрибут __cut__ в дочерных элементах элемента __edges__ указывающий значение, на которое будет уменьшена деталь с соответствующей стороны.

        <edges joint="2|3|4|5">
          <left type="" param="" cut="" drop="0|1" pur="0|1"/>
          <top type="" param="" cut="" drop="0|1" pur="0|1"/>
          <right type="" param="" cut="" drop="0|1" pur="0|1"/>
          <bottom type="" param="" cut="" drop="0|1" pur="0|1"/>
        </edges>
 

**Версия 19** (2017-10-26)

- Добавлен новый атрибут __file__ в элементе __operation__ с типом __odk__ указывающий на то, что операция "Обработка детали конструктором (ОДК)" должна быть выполнена по файлу чертежа.

        <operation id="" type="odk" curvilinear="0|1" file="0|1" />

- Добавлен новый атрибут __joint__ в элементе __edges__ для указания стороны стыка кромки (2 - левая, 3 - верхняя, 4 - правая, 5 - нижняя).

        <edges joint="2|3|4|5">
            <left type="" param="" drop="" pur="0|1" />
            <top type="" param="" drop="" pur="0|1" />
            <right type="" param="" drop="" pur="0|1" />
            <bottom type="" param="" drop="" pur="0|1" />
        </edges>

- Удален устаревший атрибут __oldGuid__ в элементе __material__ с типом __sheet__ указывающий идентификатор товара из предыдущей базы данных интернет-магазина.

        <material id="" type="sheet" offcut_l="[1-20]" offcut_t="[1-20]" offcut_r="[1-20]" offcut_b="[1-20]" article="" guid="" uuid="" name="" width="" height="" thickness="" />

- Добавлен новый атрибут __oneSided__ к элементу __material__ с типом __sheet__ указывающий признак одностороннего материала.

        <material id="" type="sheet" offcut_l="[1-20]" offcut_t="[1-20]" offcut_r="[1-20]" offcut_b="[1-20]" article="" guid="" uuid="" name="" width="" height="" thickness="" oneSided="0|1" />


**Версия 18** (2017-10-05)

- Добавлен новый элемент __products__ в корневом элементе __viyar__ содержащий список дополнительных товаров (крепеж, фурнитура, аксессуары).

        <products>
            <product id="" article="" name="" amount="" uuid="" />
        </products>

- Добавлен новый тип обработки __odk__ в элементе __operation__ для описания операции "Обработка детали конструктором (ОДК)", с атрибутом __curvilinear__ для указания наличия услуги "Нанесение кромки криволинейное".

        <operation id="" type="odk" curvilinear="0|1" />

- Добавлен новый атрибут __subtype__ в элементе __operation__ с типом __drilling__ указывающий на то, какой тип предустановленного отверстия используется (0 - произвольное).

        <operation id="" type="drilling" subtype="0" side="" x="" y="" xo="" yo="" xl="" yl="" d="" depth="" /> 

- Добавлены новые атрибуты __offcut_l__, __offcut_t__, __offcut_r__, __offcut_b__ в элементе __material__ с типом __sheet__ для указания значений обпилов материала.

        <material id="" type="sheet" offcut_l="[1-20]" offcut_t="[1-20]" offcut_r="[1-20]" offcut_b="[1-20]" article="" guid="" oldGuid="" uuid="" name="" width="" height="" thickness="">
            <parts/>
        </material>


**Версия 17** (2017-08-04)

- Добавлен новый элемент __parts__ в элементе __material__ с типом __sheet__ содержащий список дополнительных листов материала произвольных размеров.

        <material id="" type="sheet" guid="" uuid="" name="" width="" height="" thickness="">
            <parts>
                <part width="" height="" quantity=""/>
            </parts>
        </material>


**Версия 16** (2017-07-27)

- Добавлен новый атрибут __mill__ в элементе __operation__ с типом __cornerOperation__ указывающий на то, что для выполнения операции будет (1) или не будет (0) использована фреза.

        <operation id="" type="cornerOperation" corner="" subtype="" x="" y="" r="" mill="0|1" ext="" edgeMaterial="" edgeCovering="" />


**Версия 15** (2017-07-07)

- Добавлен новый атрибут __shift__ для выреза по шаблону __smile__ указывающий смещение выреза.

        <operation id="" type="shapeByPattern" patternId="smile" edgeId="2|3|4|5" shift="" sizeH="30|220" sizeV="220|30"  edgeMaterial="" />


**Версия 14.5** (2017-06-15)

- Добавлен новый тип выреза по шаблону __circle__ с атрибутами содержащими параметры для описания округлого выреза.
- ShiftX = x, ShiftY = y, radius = r - дубликаты для учётной системы.

        <operation id="" type="shapeByPattern" patternId="circle" shiftX="" shiftY="" radius="" x="" y="" r="" edgeMaterial="" />

**Версия 14** (2017-06-07)

- Добавлен новый тип обработки __clipping__ в элементе __operation__ для описания операции подрезания детали в размер.

        <operation id="" type="clipping" cutHSize="" cutHBase="2|4" cutVSize="" cutVBase="3|5" />

- Добавлен новый атрибут __inner__ для типа обработки __cornerOperation__ со значением атрибута __subtype=1__ (радиус) в элементе __operation__ для описания обработки "внутренний радиус".

        <operation id="" type="cornerOperation" corner="1|2|3|4" subtype="1|2|3" x="" y="" r="" inner="0|1" ext="0|1" edgeMaterial="" edgeCovering="0|1|2" />

- Убран из-за ненадобности атрибут __direction__ в элементе __operation_ для типа обработки __shapeByPattern__.

- Добавлен новый тип выреза по шаблону __smile__ с атрибутами содержащими параметры для описания выреза по шаблону "Под руку" ("Улыбка").

        <operation id="" type="shapeByPattern" patternId="smile" edgeId="2|3|4|5" edgeMaterial="" />


**Версия 13** (2017-05-12)

- Добавлен новый тип выреза по шаблону __rectangular__ с атрибутами содержащими параметры для описания прямоугольного выреза.

        <operation id="" type="shapeByPattern" direction="" patternId="rectangular" ext="0|1" shiftX="" shiftY="" sizeH="" sizeV="" edgeMaterial="" />


**Версия 12** (2017-04-20)

- Добавлен новый атрибут __markingColor__ к элементу __material__ с типом __band__ для передачи цвета маркировки кромки, принимающий значения в формате "rgb(255,255,255)".

        <material id="" type="band" guid="" uuid="" name="" height="" thickness="" markingColor="rgb(255,255,255)" />


**Версия 11.5** (2017-03-31)

- Добавлен новый тип обработки __shapeByPattern__ в элементе __operation__.
- Добавлен новый атрибут __patternId__ в элементе __operation__ с типом обработки __shapeByPattern__ для указания используемого шаблона выреза.
- Добавлен новый тип выреза по шаблону __uShaped__ с атрибутами содержащими параметры для описания П-образного выреза.

        <operation id="" type="shapeByPattern" direction="" patternId="uShaped" edgeId="2|3|4|5" ext="0|1" shift="" sizeH="" sizeV="" edgeMaterial="" />


**Версия 11** (2017-03-15)

- Доработано формирование программ под станки с учетом оптимального использования инструмента.
- Добавлен атрибут __millD__ в элементе __operation__ с типом __grooving__ указывающий диаметр 
используемой фрезы для выборки паза или принимающий значение 0, если паз выполняется пилой.

        <operation id="" type="grooving" side="" subtype="" x="" y="" xa="" ya="" width="" depth="" length="" closed="" millD="" />


**Версия 10** (2017-02-06)

- Изменение версии формата проекта из-за изменения формата данных длины паза/четверти.
- (2017-02-02) Отмена нулевой длины пазов и четвертей, которая указывала что обработка будет навылет, уже всегда передается полное значение.


**Версия 9.5** (2017-01-11)

- Изменение названия атрибута с __glossSide__ на __decoratedSide__ в элементе __detail__ для обозначения декорированной стороны детали.

        <detail id="" material="" barcode="" amount="" width="" height="" multiplicity="" grain="" description="" marker="" decoratedSide="front|back" machineCode="">


**Версия 9** (2016-06-23)

- Добавлены новые атрибуты __xa__ и __ya__ в элементе __operation__ с типом __grooving__ для обозначения отступа паза без учета толщины кромки.

        <operation id="" type="grooving" side="" subtype="" x="" y="" xa="" ya="" width="" depth="" length="" closed="" />


**Версия 8** (2016-04-13)

- Добавлен новый атрибут __glossSide__ к элементу __detail__ для обозначения глянцевой стороны детали, принимающий значения _front_ или _back_.

        <detail id="" material="" barcode="" amount="" width="" height="" multiplicity="" grain="" description="" marker="" glossSide="front|back" machineCode="">


**Версия 7.5** (2016-04-06)

- Добавлен новый атрибут __marker__ к элементу __detail__ для пометки детали, принимающий значения _1_ или _0_.

        <detail id="" material="" barcode="" amount="" width="" height="" multiplicity="" grain="" description="" marker="1|0" machineCode="">


**Версия 7** (2016-03-31)

- Переход к формату project.

        <?xml version="1.0" encoding="UTF-8"?>
        <project>
            <viyar version="7">
              <materials>
                <material id="" type="sheet" guid="" uuid="" name="" width="" height="" thickness="" />
                <material id="" type="band" guid="" uuid="" name="" height="" thickness="" />
              </materials>
              <details>
                <detail id="" material="" barcode="" amount="" width="" height="" multiplicity="" grain="" description="" machineCode="">
                  <edges>
                    <left type="" param="" drop="" />
                    <top type="" param="" drop="" />
                    <right type="" param="" drop="" />
                    <bottom type="" param="" drop="" />
                  </edges>
                  <operations>
                    <operation id="" type="drilling" side="" x="" y="" xo="" yo="" xl="" yl="" d="" depth="" />
                    <operation id="" type="grooving" side="" subtype="" x="" y="" width="" depth="" length="" closed="" />
                    <operation id="" type="rabbeting" side="" edge="" shift="" width="" depth="" length="" closed="" />
                    <operation id="" type="cornerOperation" corner="" subtype="" x="" y="" r="" ext="" edgeMaterial="" edgeCovering="" />
                    <operation id="" type="shape" direction="">
                      <part id="" type="" x1="" y1="" x2="" y2="" r="" arc_direction="" large_arc="" />
                    </operation>
                  </operations>
                </detail>
              </details>
              <slidingSystem width="" height="" overlap="" profileUuid="" profileTextureUuid="" brushUuid="" isBrushConsider="" detent="" doorCheck="" rollers="">
                  <door id="" width="" height="">
                    <section id="" height="" fillerCode="" />
                  </door>
              </slidingSystem>
            </viyar>
        </project>
