# Logrus Email
Этот проект был создан на основе `react-email` Bu Kinoshita ([@bukinoshita](https://twitter.com/bukinoshita)) и Zeno Rocha ([@zenorocha](https://twitter.com/zenorocha))

## Требования
- Node.js версии 20.18.0 и выше
- React версии 18.3.1

## Компоненты
- [Body](#body)
- [Button](#button)
- [Column](#column)
- [Conditional](#conditional)
- [Container](#container)
- [Footer](#footer)
- [Footer_v2](#footer_v2)
- [Head](#head)
- [Hero](#hero)
- [Html](#html)
- [Image](#image)
- [Link](#link)
- [List](#list)
- [Preview](#preview)
- [Provider](#provider)
- [Row](#row)
- [Section](#section)
- [Social](#social)
- [Spacer](#spacer)
- [Table](#table)
- [Text](#text)
- [Webview](#webview)

### Body
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| color | `string` | Цвет фона письма | – |
| darkClass | `string` | Цвет фона письма в темной теме. Этот класс нужно добавить в `styles/dark.css` | – |

### Button
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| href | `string` | Ссылка | # |
| width | `number` | Ширина кнопки (Outlook) | – |
| align | `left \| center \| right` | Выравнивание кнопки | center |
| keepWhite | `boolean` | Хак для кнопки в темной теме (Gmail) | true |
| stretch | `boolean` | Растягивает ширину кнопки до 100% в мобильной версии | true |
| classNames | `Record<'table' \| 'wrapper' \| 'link', string \| undefined>` | Пользовательские имена классов (Tailwind) для элементов кнопки | – |

### Column
Использовать только внутри компонента [Row](#row)
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| width | `number` | Ширина колонки | – |
| parentWidth | `number` | Ширина родительского элемента (указывается только для первой колонки) | – |

### Conditional
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| children | `React.ReactNode` | Содержимое условного комментария в виде строки | – |
| target | `string` | Версия Outlook. Подробнее [https://stackoverflow.design/email/base/mso/](тут) | mso |

### Container
Использовать только внутри компонента [Body](#body). Помимо пользовательских свойств компонент наследует все свойства доступные для тега `<td>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| width | `number` | Ширина письма | 600 |

### Footer
Компонент-модуль, добавляющий подвал письма

### Footer_v2
Компонент-модуль, добавляющий подвал письма

### Head
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| title | `string` | Тема письма | – |

### Hero
Ключевое изображение
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| href | `string` | Ссылка | # |
| src | `string` | Путь к изображению | – |
| width | `number` | Ширина изображения | – |
| height | `number` | Высота изображения | – |
| className | `string` | Пользовательские классы | – |

### Html
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| dir | `ltr \| rtl` | Направление текста в письме | ltr |

### Image
Изображение. Помимо пользовательских свойств компонент наследует все свойства доступные для тега `<img>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| srcset | `string | string[]` | Путь к изображению. Если передается массив строк, то первое значение указывает на изображение для светлой темы, а второе – для темной | – |
| width | `number` | Ширина изображения | – |
| height | `number` | Высота изображения | – |

### Link
Ссылка. Помимо пользовательских свойств компонент наследует все свойства доступные для тега `<a>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| href | `string` | Ссылка | – |
| target | `React.HTMLAttributeAnchorTarget` | Место, где будет открыта ссылка. По умолчанию – в новом окне | _blank |
| className | `string` | Пользовательские имена классов | – |

### List
Список
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| bullet | `React.ReactNode` | Элемент неупорядоченного списка | – |
| items | string[] | – | – |
| classNames | `Record<'bullet' \| 'text', string \| undefined>` | Пользовательские имена классов (Tailwind) для элементов списка | – |

### Preview
Предпросмотровый текст письма. Также автоматически рассчитывает длину хака с пробелами.
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| text | `string` | Текст прехедера | – |

### Provider
Глобальные настройки письма через Context API.
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| options | `{lang: string, colorScheme: string}` | Настройки письма | – |

### Row
Компонент-контейнер для [Column](#column)
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| className | `string` | Пользовательские имена классов | – |

### Section
Модуль письма. Не имеет пользовательских свойств, наследует все свойства доступные для тега `<td>`

### Social
Ссылки на социальные сети. Ширина таблицы рассчитывается на основе заданных пользовательских свойств. Ссылки и иконки подтягиваются из файла `src/data/socials.json` по ключу lang заданному в компоненте [Provider](Provider) 
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| variant | `light \| dark \| both` | Цветовая тема. both – для случая когда colorScheme = "light dark" | – |
| size | `number` | Ширина и высота иконки | – |
| gap | `number` | Промежуток между иконками | – |

### Spacer
Отступ между элементами письма. Помимо пользовательских свойств, наследует все свойства доступные для тега `<td>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| size | `number` | Размер отступа | – |

### Table
Отступ между элементами письма. Помимо пользовательских свойств, наследует все свойства доступные для тега `<table>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| width | `number` | Ширина таблицы | 100% |

### Text
Помимо пользовательских свойств, наследует все свойства доступные для тега `<p>`
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| className | `string` | Пользовательские имена классов | – |

### Webview
Компонент-модуль, добавляет ссылку на веб-версию письма и ссылку на отписку от рассылки (Mindbox)
| Атрибут | Тип данных | Описание | Значение по умолчанию |
| ----------- | ----------- | ----------- | ----------- |
| className | `string` | Пользовательские имена классов | – |