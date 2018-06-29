-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 29 2018 г., 15:45
-- Версия сервера: 5.6.38
-- Версия PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `users`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Articles`
--

CREATE TABLE `Articles` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Articles`
--

INSERT INTO `Articles` (`id`, `title`, `text`) VALUES
(9, 'тест', 'тест добавление новости'),
(4, 'Компьютер для программиста. Дёшево и сердито', 'Организация рабочего места программиста - чаще всего дело рук самого программиста. Выбор компьютера не простая задача. Столько всего вкусного, нового и интересного. А самое главное - полезного оборудования. Ну, вот. Прошло 4 года и пришло время собрать новый компьютер. Старый уже не тянет. Меняться будет только базовый блок. А клавиатура, мышь и монитор остаются прежние. Как обычно всё должно быть дёшево и сердито. Начиная ещё с ПК на 286 процессорах, более менее нормальный персональный компьютер всегда стоил 1 тысячу долларов. Монитор уже есть, поэтому устанавливаем ценовое ограничение на базовый блок 20 тысяч рублей. Для \"сердито\" сумма очень даже скромная, поэтому в первую очередь нужно определиться с основными потребностями, которые программист может предъявлять к своему компьютеру.«Охрана труда» для 1С:Предприятия 8.2 Что мне как программисту сейчас нужно? Да, собственно, немного - решить те проблемы, с которыми имеющееся оборудование уже не справляется. 1. Большие базы данных. Время идет, базы растут. Приходится разбираться с большим количеством больших клиентских баз и в основном это базы УПП. Возможное решение: повысить пропускную способность RAM и HDD. 2. Параллельность работы. Обработка больших объемов информации занимает значительное время. Часто приходится запускать на обработку одновременно несколько баз данных. Результата ждать долго. В это время хотелось бы немного по программировать. Возможное решение: установить многоядерный процессор. 3. Активное использование свопинга. Через некоторое время обнаруживается, что выполнение очередной задачи практически остановилось. Свободная память вся \"съедена\" сравнениями конфигураций, отладчиками и другими программами, создающими атмосферу глубоко погружения сознания в состояние потока. Возможное решение: увеличить объем RAM. Итак, что получилось? Нужен мощный центральный процессор, много оперативной памяти (RAM) и быстрый жесткий диск (HDD). На этих компонентах и сосредоточимся, а остальные могут оставаться на прежнем уровне. Цена. Полёт фантазии резко ограничивает цена. Хочется i7 и SSD, но придется пойти на компромисс, и возможно, не один раз. Как вариант решения - взять всё интегрированное. На нём и остановимся. Полдня в интернете и вот оно - чудо. Сборка за 19,5 тысяч рублей. Состав: материнская плата, процессор, вентилятор, память, жесткие диски, пишущий DVD-ROM и корпус. Ничего лишнего. Всё остальное интегрированное на материнской плате. Как приятное дополнение - это возможность обновления и расширения конфигурации ПК. Можно установить более мощный процессор, есть места для добавления RAM и HDD. Есть поддержка USB 3.0, ESATA и ещё много всяких вкусностей. Заказ. Неделя ожидания. Сборка. Установка обновлений с сайта производителя. Настройка. Тестирование. Смотрим, что получилось. Процессор: четырехъядерный Память RAM: двухканальная 8 Гб DDR-III Дисковая подсистема: 1.1 Тб RAID-0 Самым сложным при сборке оказалось установить вентилятор. Всё остальное ставится легко. Даже на объединение жестких дисков в RAID-0 потребовалось всего лишь несколько секунд. BIOS всё сделал сам. Проводим ряд тестов синтетических и на реальных данных. По синтетическим тестам: картинки внизу. По работе на реальных данных: выгрузка базы данных 14.5 Гб занимает 11 минут, что почти в 3 раза быстрее, чем было раньше. Даже интегрированное видео шевелится довольно шустренько. Ну, и самое приятное - компьютер работает совершенно бесшумно. Лишь под большой нагрузкой иногда вздрагивают жесткие диски.\n\n'),
(5, '10 лучших языков программирования для изучения в 2018 году', 'Оставаться на высоте — это главный фактор в мире IT. При этом выбрать из более 600 уникальных языков программирования лучший язык — нелегкая задача. И чтобы помочь вам с этим решением, мы составили список из 10 языков программирования, которые можно выучить в 2018 году. Чтобы определиться с подходящим языком программирования для вашего проекта, нужно оценить потребности проекта.\n\nЗа последние годы Swift стал более популярен, чем Objective-C. Это язык программирования для разработки нативных приложений для iOS или Mac OS. Также можно сказать, что это язык программирования с наибольшим потенциалом для изменения будущего. Было обнаружено, что нативные приложения превосходят кросс-платформенные гибридные приложения, а движок SpriteKit при этом упрощает создание 2D-игр. На деле Swift опирается на успехи C и Objective-C, но при этом без ограничений совместимости.\nGo – язык 2009 года – эпохи многоядерных процессоров, тогда как языки вроде Python и Java появились в годы однопоточной среды разработки. Именно поэтому язык Go учитывает многозадачность и работает в соответствии с ней. Вместо всем известных потоков (Thread), которые у большинства языков занимают уйму памяти (например, в Java это 1 Мб на каждый поток), в Go предусмотрены горутины, «съедающие» всего 2 Кб памяти. Можно создать хоть тысячу или миллион горутин, и это практически не отразится на работе приложения. Быстрое время запуска, использование памяти, только если это необходимо (сегментированные, но расширяемые стеки горутин), и другие преимущества делают Go чрезвычайно востребованным в решении многопоточных задач. Это без преувеличений серверный язык будущего, и в 2018 он точно не сдаст свои позиции.\nPHP используется повсеместно благодаря WordPress. 80% сайтов с посещаемостью свыше 10 млн. пользователей используют PHP. Примерами таких сайтов могут стать Facebook и Wikipedia. В PHP не существует каких-либо строгих правил в написании кода, а также он гибок в решении различных проблем. PHP — это отличный выбор для веб-разработчиков, поскольку он является серверным скриптовым языком и для Worldpress, и для Facebook.');

-- --------------------------------------------------------

--
-- Структура таблицы `News`
--

CREATE TABLE `News` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `News`
--

INSERT INTO `News` (`id`, `title`, `text`) VALUES
(1, 'Политех рулит!', '26 мая состоится традиционный велопробег «Политех рулит!». Колонну по традиции возглавит и.о.ректора УлГТУ Александр Петрович Пинков. Приглашаем преподавателей, сотрудников и студентов присоединиться к велопробегу - получить заряд позитивной энергии и с пользой для здоровья начать субботний день!'),
(2, 'В Ульяновской области комплексно обсудят вопросы предупреждения коррупции в сфере образования', 'Тематическое заседание специальной общерегиональной коллегии, посвящённой вопросам противодействия коррупции в сфере деятельности образовательных организаций, по поручению Губернатора Сергея Морозова пройдёт 21 мая на площадке Дворца творчества детей и молодёжи (ул. Минаева, д.50). Начало пленарного заседания в 14.30.'),
(4, 'В УлГТУ пройдет встреча с диктором Центрального телевидения Гостелерадио СССР Евгением Кочергиным', '29 мая в 13:00 в киноконцертном зале «Тарелка» УлГТУ в рамках Х Международного кинофестиваля «От всей души» им. Валентины Леонтьевой пройдет творческая встреча с диктором Центрального телевидения Гостелерадио СССР Евгением Александровичем Кочергиным.'),
(5, 'Форум «iВолга’18»: студенты УлГТУ упаковывают проекты', '10 мая в Студенческом Клубе УлГТУ состоялась встреча-консультация по поводу участия студентов в форуме Приволжского федерального округа «iВолга’18». В этом году форум будет проходить с 26 июля по 4 августа.'),
(6, 'На базе Вешкаймской школы №2 откроется лицей при УлГТУ! ', 'С 1 сентября МБОУ Вешкаймская СОШ №2 им. Б. П. Зиновьева получит статус лицея при УлГТУ. Соответствующий документ был подписан между УлГТУ, МО «Вешкаймский район» и МБОУ Вешкаймская СОШ №2 имени Б. П. Зиновьева 16 мая.'),
(7, 'Тест', 'Тест добавления новости'),
(8, 'тест', 'тестовое добавление новости'),
(9, 'zxxdfxdf', 'xdxdfxdfxdf'),
(10, 'Важная инфа', 'Мы ответили на 20 вопросов из 50 по вышмату\n');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id` int(11) UNSIGNED NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id`, `nickname`, `name`, `surname`, `password`, `admin`) VALUES
(30, 'admin2', 'admin2', 'admin2', '202cb962ac59075b964b07152d234b70', 1),
(40, 'admin', 'den', 'klimanov', '21232f297a57a5a743894a0e4a801fc3', 1),
(45, 'rtd21', 'Даниил', 'Климанов', '202cb962ac59075b964b07152d234b70', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Articles`
--
ALTER TABLE `Articles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname` (`nickname`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Articles`
--
ALTER TABLE `Articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `News`
--
ALTER TABLE `News`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;